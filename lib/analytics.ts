/**
 * Minimal, privacy-conscious event tracking hook.
 *
 * No analytics provider is wired in by default — nothing is sent anywhere,
 * and no personal data is collected. To connect a privacy-friendly provider
 * (e.g. Plausible, Umami, Fathom), see README.md, then implement the send
 * inside this function. Keep it to anonymous, aggregate event names only.
 */
export type AnalyticsEvent =
  | "cv_download"
  | "project_view"
  | "contact_click"
  | "linkedin_click"
  | "email_click"
  | "contact_form_submit";

export function track(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;

  const w = window as typeof window & {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  };

  if (typeof w.plausible === "function") {
    w.plausible(event, payload ? { props: payload } : undefined);
    return;
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, payload ?? {});
  }
}
