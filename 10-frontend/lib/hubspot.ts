export interface LeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  equipment: string;
  urgency: string;
  message?: string;
  source?: string;
}

const BASE = "https://api.hubapi.com";
const token = () => process.env.HUBSPOT_ACCESS_TOKEN ?? "";

async function hs<T>(path: string, method: string, body?: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token()}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const e = new Error(`HubSpot ${method} ${path} → ${res.status}`) as Error & { code?: number };
    e.code = res.status;
    throw e;
  }
  return res.json();
}

export async function createHubSpotContact(lead: LeadData): Promise<string> {
  const [firstName, ...rest] = lead.name.split(" ");
  try {
    const data = await hs<{ id: string }>("/crm/v3/objects/contacts", "POST", {
      properties: {
        firstname: firstName,
        lastname: rest.join(" "),
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        industry: lead.industry,
        equipment_to_calibrate: lead.equipment,
        urgency_level: lead.urgency,
        lead_source: lead.source ?? "website_form",
        hs_lead_status: "NEW",
      },
    });
    return data.id;
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 409) {
      return updateExistingContact(lead);
    }
    throw err;
  }
}

async function updateExistingContact(lead: LeadData): Promise<string> {
  const search = await hs<{ results: { id: string }[] }>(
    "/crm/v3/objects/contacts/search",
    "POST",
    {
      filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: lead.email }] }],
      properties: ["email", "hs_object_id"],
      limit: 1,
      after: "0",
      sorts: [],
    }
  );

  if (!search.results.length) throw new Error(`Contact not found: ${lead.email}`);
  const contactId = search.results[0].id;

  await hs(`/crm/v3/objects/contacts/${contactId}`, "PATCH", {
    properties: {
      equipment_to_calibrate: lead.equipment,
      urgency_level: lead.urgency,
      hs_lead_status: "NEW",
    },
  });

  return contactId;
}

export async function createHubSpotDeal(contactId: string, lead: LeadData): Promise<string> {
  const deal = await hs<{ id: string }>("/crm/v3/objects/deals", "POST", {
    properties: {
      dealname: `[${lead.industry.toUpperCase()}] ${lead.company} - Calibración`,
      pipeline: "default",
      dealstage: "appointmentscheduled",
      closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
  });

  await hs(`/crm/v4/objects/deals/${deal.id}/associations/contacts/${contactId}/3`, "PUT", [
    { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 },
  ]);

  return deal.id;
}
