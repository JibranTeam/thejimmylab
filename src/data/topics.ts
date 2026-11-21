import type { LucideIcon } from "lucide-react";

/**
 * Shared shape for location pages (/locations/:slug) and industry pages
 * (/industries/:slug). Both are rendered by src/pages/TopicPage.tsx.
 * Copy rules: no fake local address, no invented clients or results.
 * Location pages say "serving [market] remotely" and
 * state only verifiable facts (timezone offset, process, response time).
 */
export interface Topic {
  slug: string;
  kind: "location" | "industry";
  icon: LucideIcon;
  title: string;
  color: string;
  tagline: string;
  /** Meta description (also used as the page's intro line). */
  description: string;
  overview: string[];
  features: { title: string; desc: string }[];
  deliverables: string[];
  stats: { value: string; label: string }[];
  faq: { q: string; a: string }[];
  /** Slugs of services to link from the page (must exist in services.ts). */
  relatedServices: string[];
}
