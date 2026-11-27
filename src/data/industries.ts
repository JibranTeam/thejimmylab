import { Building2, ShoppingBag, UtensilsCrossed } from "lucide-react";
import type { Topic } from "./topics";

/**
 * Industry pages. Each one is built only from project types the site
 * already shows in its portfolio (SaaS dashboard, e-commerce platform,
 * restaurant website). No client names and no invented results are used.
 */
export const industries: Topic[] = [
  {
    slug: "saas",
    kind: "industry",
    icon: Building2,
    title: "Website Redesign for SaaS Companies",
    color: "#6366f1",
    tagline: "A SaaS website that explains the product faster, and converts more trials.",
    description:
      "Website redesign for SaaS companies, React and Next.js marketing sites, pricing and onboarding pages rebuilt around trial conversion, with rankings protected.",
    overview: [
      "A SaaS website has one job above all others: turn a visitor into a trial. We redesign SaaS marketing sites, pricing pages and onboarding flows so the product is understood in seconds, what it does, who it is for, and what happens next.",
      "Redesigns keep what the old site earned: URLs are mapped, redirects are checked, and the new site launches with rankings intact. The result is a site your sales team can send people to without apologising for it.",
    ],
    features: [
      { title: "Trial-Focused Structure", desc: "Homepage, pricing and feature pages organised around one action: start a trial." },
      { title: "Onboarding That Converts", desc: "Signup and first-run flows redesigned so new users reach value faster." },
      { title: "Design System Included", desc: "Reusable components so every new page matches the new design without drift." },
      { title: "Rankings Protected", desc: "Redirect mapping and SEO checks built into every relaunch." },
    ],
    deliverables: [
      "Redesigned SaaS marketing site",
      "Pricing & onboarding page redesign",
      "Design system & components",
      "301 redirect map",
      "Post-launch verification report",
    ],
    stats: [
      { value: "0", label: "Pages lost in redesign" },
      { value: "100%", label: "Redirects mapped" },
      { value: "1 hr", label: "Avg. response time" },
    ],
    faq: [
      { q: "Will a redesign hurt our trial signups?", a: "A redesign done properly improves them, clearer messaging, faster pages and a shorter path to signup. We measure before and after so the effect is visible, not assumed." },
      { q: "Do you redesign the product itself, or just the marketing site?", a: "Both. Marketing site first is the usual order, then in-product UX once the site is live, or both together if the timeline allows." },
      { q: "How long does a SaaS redesign take?", a: "Most take 3–6 weeks depending on page count. We give a firm timeline after a short review of your current site." },
    ],
    relatedServices: ["react-website-redesign", "web-development", "seo-website-optimization"],
  },
  {
    slug: "ecommerce-fashion",
    kind: "industry",
    icon: ShoppingBag,
    title: "E-commerce Websites for Fashion Brands",
    color: "#ec4899",
    tagline: "A fashion storefront that looks like the brand, and sells like it means it.",
    description:
      "E-commerce websites for fashion brands, headless Next.js storefronts and Shopify builds with fast pages, persuasive product pages and a checkout that does not leak buyers.",
    overview: [
      "Fashion buyers decide with their eyes, then buy with their thumbs. We build e-commerce storefronts for fashion brands where the photography leads, the pages load fast on phones, and the path from product to checkout has as little friction as possible.",
      "Storefronts run on Shopify or headless Next.js, with payments, upsells and analytics wired in from the start, so the store is ready to sell on launch day, not a month later.",
    ],
    features: [
      { title: "Photography-Led Design", desc: "Layouts built around your imagery, with product pages that persuade instead of cluttering." },
      { title: "Headless or Shopify", desc: "Shopify for speed to market, headless Next.js for maximum flexibility and performance." },
      { title: "Checkout That Converts", desc: "Quick checkout, trust signals and payment options your buyers actually use." },
      { title: "Mobile-First by Default", desc: "Most fashion traffic arrives on a phone, pages are designed and tested there first." },
    ],
    deliverables: [
      "Custom fashion storefront",
      "Payment & subscription setup",
      "Product & collection setup",
      "Email & upsell flows",
      "Analytics dashboard",
    ],
    stats: [
      { value: "1s", label: "Target load time" },
      { value: "24/7", label: "Store always open" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Shopify or a headless build?", a: "Shopify is fastest to market and easiest to run day to day. A headless Next.js storefront gives more design freedom and speed. We recommend based on your catalogue size and growth plans, not on what earns us more." },
      { q: "Can you migrate our existing store?", a: "Yes, products, customers and orders move with zero downtime, and your search rankings are preserved with redirect mapping." },
      { q: "Do you handle product photography?", a: "We design around your photography and can art-direct shoots; the store is built to make your images the hero." },
    ],
    relatedServices: ["e-commerce", "nextjs-development", "web-animation"],
  },
  {
    slug: "restaurants",
    kind: "industry",
    icon: UtensilsCrossed,
    title: "Restaurant Website Design & Development",
    color: "#f59e0b",
    tagline: "A restaurant website that fills tables, menu, bookings and directions in one tap.",
    description:
      "Websites for restaurants, fast, mobile-first sites with menus, online ordering, table bookings and directions, built to turn searches into seated guests.",
    overview: [
      "Most restaurant visitors arrive on a phone, hungry, and deciding right now. We build restaurant websites around that moment: the menu in one tap, the phone number and directions in another, and bookings or ordering without a maze of clicks.",
      "Sites are fast, easy to update when the menu changes, and set up so the restaurant shows up when nearby diners search, with photos that do the persuading.",
    ],
    features: [
      { title: "Menu-First Design", desc: "Menus that are easy to read on a phone and easy for you to update." },
      { title: "Bookings & Ordering", desc: "Table reservations and online ordering wired in, without third-party clutter." },
      { title: "Local Search Ready", desc: "Structure and local signals so nearby diners find you first." },
      { title: "Fast on a Phone", desc: "Pages built for the device your guests actually use, with images that load quickly." },
    ],
    deliverables: [
      "Restaurant website (mobile-first)",
      "Online menu, easy to update",
      "Booking & ordering integration",
      "Local SEO setup",
      "Photo & menu refresh support",
    ],
    stats: [
      { value: "1 tap", label: "To menu, call or directions" },
      { value: "1 hr", label: "Avg. response time" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "Can we update the menu ourselves?", a: "Yes, the menu is editable without touching code, and we show you how in a short handover call." },
      { q: "Do you set up online ordering?", a: "Yes, ordering and table bookings integrate with the tools you already use, or we recommend one that fits." },
      { q: "How long does a restaurant website take?", a: "Most take 2–4 weeks from content handover to launch, depending on pages and photography." },
    ],
    relatedServices: ["web-development", "ui-ux-design", "seo-website-optimization"],
  },
];

export function getIndustryBySlug(slug: string): Topic | undefined {
  return industries.find((i) => i.slug === slug);
}
