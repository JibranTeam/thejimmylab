import { MapPin } from "lucide-react";
import type { Topic } from "./topics";

/**
 * Location pages. Every page is framed as a global remote team serving
 * clients in these markets.
 * No local office is claimed anywhere - only timezone overlap, process
 * and response time, which are verifiable.
 */
export const locations: Topic[] = [
  {
    slug: "usa",
    kind: "location",
    icon: MapPin,
    title: "Web Development Agency for USA Businesses",
    color: "#3b82f6",
    tagline: "A global remote team, working on US hours.",
    description:
      "Remote web development for businesses in the USA, Next.js, React and design from a global remote team, with daily overlap and a one-hour average response time.",
    overview: [
      "We are a global remote team building websites and web applications for businesses across the USA, remotely, with a working overlap every day. Your morning is our evening: brief us in the morning, review the work the next day.",
      "The work itself is the same as if we were down the street: weekly demos, a staging link from day one, and a reply within an hour on average during our working overlap. Pricing is project-based with a custom quote, no hidden rates, no surprise invoices.",
    ],
    features: [
      { title: "US-Hours Overlap", desc: "Your morning standup is our evening, real-time calls every working day, not just email." },
      { title: "Overnight Progress", desc: "Work moves while you sleep: review fresh progress each morning instead of waiting days." },
      { title: "English-First Communication", desc: "Clear, written updates in plain English, with a staging link so you see the work, not just hear about it." },
      { title: "Business-Friendly Process", desc: "Lean scopes, weekly demos and honest timelines, built for US businesses of every size." },
    ],
    deliverables: [
      "Next.js & React websites and web apps",
      "Website redesigns with rankings protected",
      "E-commerce storefronts",
      "AI chatbot integration",
      "Weekly demos + staging link",
    ],
    stats: [
      { value: "Daily", label: "Overlap with US mornings" },
      { value: "1 hr", label: "Avg. response time" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Do you have an office in the USA?", a: "No, we are a global remote team and work with US clients remotely. Our process is built around it: daily overlap, weekly demos and a staging link from day one." },
      { q: "What hours do you work with US clients?", a: "Our working day overlaps with US mornings and midday. Your morning is our evening, so calls happen in your morning and progress lands in your inbox overnight." },
      { q: "How much does a website cost for a US business?", a: "It depends on scope, pages, design, integrations and content. We price per project with a custom quote, so you pay for what you actually need. Tell us the scope and we will quote it plainly." },
    ],
    relatedServices: ["nextjs-development", "web-development", "website-redesign-migration"],
  },
  {
    slug: "uk",
    kind: "location",
    icon: MapPin,
    title: "Bespoke Web Development for UK Businesses",
    color: "#a855f7",
    tagline: "A global remote team, working UK hours.",
    description:
      "Remote web development for businesses in the UK, Next.js, React and design from a global remote team, with afternoon overlap every working day.",
    overview: [
      "We are a global remote team building websites and web applications for businesses across the UK, remotely, with a comfortable overlap every working day. Your afternoon is our evening: calls, demos and reviews fit naturally into the day.",
      "UK clients tend to care about process and proof, so that is what we show: a clear method, weekly demos, a staging link from day one, and a reply within an hour on average. Pricing is project-based with a custom quote.",
    ],
    features: [
      { title: "Afternoon Overlap, Daily", desc: "4–5 hours apart means your afternoon is our evening, calls and reviews every working day." },
      { title: "Process You Can Follow", desc: "Architecture, build, then launch, with weekly demos and a staging link throughout." },
      { title: "Bespoke, Not Templates", desc: "Custom-built sites on modern stacks, designed around your brand and your customers." },
      { title: "Rankings Protected", desc: "Redesigns and migrations keep your Google positions with full redirect mapping." },
    ],
    deliverables: [
      "Bespoke Next.js & React websites",
      "Website redesigns with SEO preserved",
      "E-commerce storefronts",
      "SEO & website optimization",
      "Weekly demos + staging link",
    ],
    stats: [
      { value: "Daily", label: "Overlap with UK afternoons" },
      { value: "1 hr", label: "Avg. response time" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Do you have an office in the UK?", a: "No, we are a global remote team and work with UK clients remotely. Our process is built for it: daily overlap, weekly demos and a staging link from day one." },
      { q: "What hours do you work with UK clients?", a: "Your afternoon is our evening. Calls, demos and reviews happen in your working afternoon, every working day." },
      { q: "Do you build bespoke websites or use templates?", a: "Bespoke. Every site is designed and built for the client, no bought templates, no page-builder shortcuts." },
    ],
    relatedServices: ["nextjs-development", "react-website-redesign", "seo-website-optimization"],
  },
  {
    slug: "uae",
    kind: "location",
    icon: MapPin,
    title: "Web Development Agency for UAE & Dubai Businesses",
    color: "#f59e0b",
    tagline: "A global remote team, working Gulf hours.",
    description:
      "Remote web development for businesses in the UAE, Next.js, React, e-commerce and design from a global remote team, working your hours.",
    overview: [
      "We are a global remote team building websites and web applications for businesses across the UAE, remotely, on effectively the same working day, so calls, reviews and decisions happen in real time, all day.",
      "Our UAE work covers corporate sites, e-commerce storefronts and web applications, built on modern stacks with weekly demos and a staging link from day one. Pricing is project-based with a custom quote.",
    ],
    features: [
      { title: "Same Working Day", desc: "One hour apart means your working hours are our working hours, no waiting overnight for answers." },
      { title: "Corporate & E-Commerce", desc: "Company sites, storefronts and web apps, designed for Gulf audiences and built to convert." },
      { title: "Modern Stacks", desc: "Next.js, React and headless commerce, fast pages that hold up on mobile, where most Gulf traffic arrives." },
      { title: "Weekly Demos", desc: "See the work every week on a staging link, and steer it while it is still cheap to change." },
    ],
    deliverables: [
      "Corporate websites & web apps",
      "E-commerce storefronts",
      "Mobile apps (iOS & Android)",
      "SEO & website optimization",
      "Weekly demos + staging link",
    ],
    stats: [
      { value: "Same day", label: "Working hours as the UAE" },
      { value: "1 hr", label: "Avg. response time" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Do you have an office in Dubai or the UAE?", a: "No, we are a global remote team and work with UAE clients remotely. We do not claim a local office; the working relationship feels local anyway." },
      { q: "What kind of UAE projects do you take on?", a: "Corporate websites, e-commerce storefronts, mobile apps and web applications, mostly for SMEs and growing businesses across the Emirates." },
      { q: "How do we work together across the week?", a: "Same working day, same hours. Kick-off call, weekly demos on a staging link, and a reply within an hour on average." },
    ],
    relatedServices: ["web-development", "e-commerce", "mobile-development"],
  },
  {
    slug: "australia",
    kind: "location",
    icon: MapPin,
    title: "Web Development Agency for Australian Businesses",
    color: "#00d4aa",
    tagline: "A global remote team, handing over work every day.",
    description:
      "Remote web development for businesses in Australia, Next.js, React and design from a global remote team, with a daily handover between your afternoons and our mornings.",
    overview: [
      "We are a global remote team building websites and web applications for businesses across Australia, remotely, with a daily handover built into the time difference. Your afternoon is our morning: you brief us at the end of your day, and progress is waiting when your next day starts.",
      "The process is async-friendly by design: written updates, a staging link from day one, weekly demos, and a reply within an hour on average during overlap. Pricing is project-based with a custom quote.",
    ],
    features: [
      { title: "Daily Handover Rhythm", desc: "Your afternoon is our morning, brief at the end of your day, review progress at the start of the next." },
      { title: "Async-First, Not Async-Only", desc: "Written updates and staging links carry the day-to-day; live calls happen whenever they help." },
      { title: "Fast, Mobile-First Builds", desc: "Next.js pages that load fast on phones, where most Australian visitors arrive." },
      { title: "SEO Built In", desc: "Technical SEO, structure and speed handled as part of the build, not bolted on after." },
    ],
    deliverables: [
      "Next.js & React websites and web apps",
      "E-commerce storefronts",
      "SEO & website optimization",
      "Website redesigns with rankings protected",
      "Weekly demos + staging link",
    ],
    stats: [
      { value: "Daily", label: "Handover every working day" },
      { value: "1 hr", label: "Avg. response time" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Do you have an office in Australia?", a: "No, we are a global remote team and work with Australian clients remotely. The time difference is the advantage: your afternoon is our morning, so work moves every day." },
      { q: "How do we communicate across the time difference?", a: "Mostly async, written updates and a staging link you can check any time, with live calls in the overlap whenever a decision needs one." },
      { q: "Can you work with our existing site?", a: "Yes, redesigns, optimizations and migrations on existing sites are a large part of our work, with rankings protected." },
    ],
    relatedServices: ["web-development", "seo-website-optimization", "e-commerce"],
  },
  {
    slug: "canada",
    kind: "location",
    icon: MapPin,
    title: "Web Development Agency for Canadian Businesses",
    color: "#ef4444",
    tagline: "A global remote team, working on Canadian hours.",
    description:
      "Remote web development for businesses in Canada, Next.js, React and design from a global remote team, with daily overlap and a one-hour average response time.",
    overview: [
      "We are a global remote team building websites and web applications for businesses across Canada, remotely, with a working overlap every day. Your morning is our evening: brief us in the morning, review the work the next day.",
      "Canadian clients get the same process as everyone else: weekly demos, a staging link from day one, and a reply within an hour on average during overlap. Pricing is project-based with a custom quote.",
    ],
    features: [
      { title: "Canadian-Hours Overlap", desc: "Your morning is our evening, real-time calls every working day, not just email." },
      { title: "Overnight Progress", desc: "Work moves while you sleep: review fresh progress each morning instead of waiting days." },
      { title: "English-First Communication", desc: "Clear, written updates in plain English, with a staging link so you see the work, not just hear about it." },
      { title: "Friendly for Every Level", desc: "Lean scopes and honest timelines, built for Canadian businesses of every size, startups, SMEs and established companies." },
    ],
    deliverables: [
      "Next.js & React websites and web apps",
      "Website redesigns with rankings protected",
      "AI chatbot integration",
      "SEO & website optimization",
      "Weekly demos + staging link",
    ],
    stats: [
      { value: "Daily", label: "Overlap with Canadian mornings" },
      { value: "1 hr", label: "Avg. response time" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Do you have an office in Canada?", a: "No, we are a global remote team and work with Canadian clients remotely. Our process is built around it: daily overlap, weekly demos and a staging link from day one." },
      { q: "What hours do you work with Canadian clients?", a: "Our working day overlaps with Canadian mornings and midday. Your morning is our evening, so calls happen in your morning and progress lands in your inbox overnight." },
      { q: "Do you work with small businesses?", a: "Yes, we work with businesses at every level, from startups to established companies. Scopes are lean, pricing is project-based, and quotes are plain." },
    ],
    relatedServices: ["nextjs-development", "react-website-redesign", "ai-solutions"],
  },
];

export function getLocationBySlug(slug: string): Topic | undefined {
  return locations.find((l) => l.slug === slug);
}
