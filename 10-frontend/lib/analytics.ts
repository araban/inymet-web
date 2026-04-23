declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}

// Events predefinidos según blueprint
export const events = {
  ctaClick: (location: string) =>
    trackEvent("cta_click", { button_location: location }),

  formSubmit: (formName: string, industry?: string) =>
    trackEvent("form_submit", { form_name: formName, ...(industry && { industry }) }),

  scrollDepth: (depth: number) =>
    trackEvent("scroll", { percent_scrolled: depth }),

  pageView: (path: string) =>
    trackEvent("page_view", { page_path: path }),
};
