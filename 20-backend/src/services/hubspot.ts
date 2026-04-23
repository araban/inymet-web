import { Client } from "@hubspot/api-client";
import { logger } from "../lib/logger";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

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

export async function createHubSpotContact(lead: LeadData): Promise<string> {
  try {
    const [firstName, ...lastNameParts] = lead.name.split(" ");
    const lastName = lastNameParts.join(" ");

    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        firstname: firstName,
        lastname: lastName || "",
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        industry: lead.industry,
        // Custom properties (configure in HubSpot)
        equipment_to_calibrate: lead.equipment,
        urgency_level: lead.urgency,
        lead_source: lead.source || "website_form",
        hs_lead_status: "NEW",
      },
    });

    logger.info(`HubSpot contact created: ${response.id}`);
    return response.id;
  } catch (error: unknown) {
    // If contact already exists (409), update it
    if ((error as { code?: number }).code === 409) {
      logger.info(`Contact already exists, searching: ${lead.email}`);
      return await updateExistingContact(lead);
    }
    logger.error("HubSpot create contact error:", error);
    throw error;
  }
}

async function updateExistingContact(lead: LeadData): Promise<string> {
  const searchResult = await hubspotClient.crm.contacts.searchApi.doSearch({
    filterGroups: [
      {
        filters: [
          {
            propertyName: "email",
            operator: "EQ" as const,
            value: lead.email,
          },
        ],
      },
    ],
    properties: ["email", "hs_object_id"],
    limit: 1,
    after: "0",
    sorts: [],
  });

  if (!searchResult.results.length) {
    throw new Error(`Contact not found: ${lead.email}`);
  }

  const contactId = searchResult.results[0].id;
  await hubspotClient.crm.contacts.basicApi.update(contactId, {
    properties: {
      equipment_to_calibrate: lead.equipment,
      urgency_level: lead.urgency,
      hs_lead_status: "NEW",
    },
  });

  return contactId;
}

export async function createHubSpotDeal(
  contactId: string,
  lead: LeadData
): Promise<string> {
  const response = await hubspotClient.crm.deals.basicApi.create({
    properties: {
      dealname: `[${lead.industry.toUpperCase()}] ${lead.company} - Calibración`,
      pipeline: "default",
      dealstage: "appointmentscheduled",
      amount: "",
      closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
  });

  // Associate deal with contact
  await hubspotClient.crm.deals.associationsApi.create(
    response.id,
    "contacts",
    contactId,
    [{ associationCategory: "HUBSPOT_DEFINED" as const, associationTypeId: 3 }]
  );

  logger.info(`HubSpot deal created: ${response.id} for contact ${contactId}`);
  return response.id;
}
