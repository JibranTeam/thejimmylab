import { ArrowLeft, ArrowRight, Code2 } from "lucide-react";

/**
 * Integrations - the tools we connect to your website and apps: CRMs,
 * payments, marketing, communication, e-commerce, productivity and AI.
 * Each entry names a real tool and what the integration does. For anything
 * not listed, the contact form is the way to ask.
 */
const groups: { name: string; desc: string; tools: { name: string; what: string }[] }[] = [
  {
    name: "CRM and sales",
    desc: "Your pipeline, in sync with your website.",
    tools: [
      { name: "HubSpot", what: "Forms, contacts and deals flow straight into your CRM, no manual entry." },
      { name: "Salesforce", what: "Leads, accounts and opportunities synced from your site and apps." },
      { name: "Zoho CRM", what: "Enquiries and follow-ups captured and routed to the right person." },
      { name: "Pipedrive", what: "Deal tracking from first contact to closed, fed by your website." },
    ],
  },
  {
    name: "Payments",
    desc: "Take money safely, in the way your customers expect.",
    tools: [
      { name: "Stripe", what: "Cards, subscriptions and one-off payments, with receipts and refunds." },
      { name: "PayPal", what: "PayPal checkout alongside cards, for buyers who prefer it." },
      { name: "Apple Pay and Google Pay", what: "One-tap checkout on mobile, so fewer carts are abandoned." },
    ],
  },
  {
    name: "Marketing",
    desc: "Every visit and signup measured, and followed up on.",
    tools: [
      { name: "Google Analytics", what: "Traffic, conversions and behaviour, wired in from day one." },
      { name: "Meta Pixel", what: "Ad tracking for Facebook and Instagram campaigns." },
      { name: "Mailchimp", what: "Newsletter and email lists built from your site, automatically." },
      { name: "Google Search Console", what: "Your pages indexed and monitored for search visibility." },
    ],
  },
  {
    name: "Communication",
    desc: "Your team hears about every enquiry the moment it arrives.",
    tools: [
      { name: "Slack", what: "New enquiries, orders and alerts posted to the channel you choose." },
      { name: "Twilio", what: "SMS and WhatsApp messages for bookings, reminders and updates." },
      { name: "SendGrid", what: "Reliable transactional email: confirmations, invoices and resets." },
    ],
  },
  {
    name: "E-commerce",
    desc: "Storefronts that stay in step with stock, orders and customers.",
    tools: [
      { name: "Shopify", what: "Headless storefronts on Next.js, or a full Shopify build." },
      { name: "WooCommerce", what: "WordPress shops with payments, shipping and tax handled." },
      { name: "Sanity", what: "Content that powers your store, site and app from one place." },
    ],
  },
  {
    name: "Productivity",
    desc: "The tools your team already uses, connected to your product.",
    tools: [
      { name: "Google Workspace", what: "Calendar, Drive and Gmail wired into bookings and workflows." },
      { name: "Notion", what: "Docs, wikis and project pages synced with your site content." },
      { name: "Airtable", what: "Your data as a backend: listings, catalogues and directories." },
    ],
  },
  {
    name: "AI",
    desc: "Models and agents working inside your product, not bolted on.",
    tools: [
      { name: "OpenAI", what: "Chat, summarising and search, grounded in your own data." },
      { name: "Anthropic", what: "Claude-powered assistants for support and internal tools." },
      { name: "LangChain", what: "Retrieval and agents that chain your tools together." },
      { name: "n8n and Zapier", what: "Automations that move data between your apps without code." },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <div className="rule-grid" aria-hidden="true" />
      {/* ---------- header ---------- */}
      <header className="sticky top-0 z-50 bg-[#05070a]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#ff6b35] rounded-lg shadow-layer-3 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-['Syne'] font-black text-lg tracking-tight text-white">
              THE JIMMY LAB<span className="text-[#ff3c2f]">.</span>
            </span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#ff6b35] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </header>
      <main>
        <section className="relative py-20 md:py-24 overflow-hidden border-b-2 border-[#ff6b35]/30">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Integrations</p>
            <h1 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-6">Connected to the tools you already use.</h1>
            <p className="text-white/70 text-base leading-relaxed">We connect your website and apps to the CRMs, payments, marketing, communication and AI tools your business already runs on, so data moves by itself and nothing is typed twice.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-14">
            {groups.map((group) => (
              <div key={group.name}>
                <h2 className="font-['Syne'] text-2xl font-bold text-white mb-2">{group.name}</h2>
                <p className="text-white/60 leading-relaxed mb-5">{group.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.tools.map((tool) => (
                    <div key={tool.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="font-semibold text-white mb-1.5">{tool.name}</div>
                      <p className="text-sm text-white/60 leading-relaxed">{tool.what}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-3xl glass p-8 sm:p-10 text-center">
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Need an integration we did not list?</h2>
              <p className="text-white/60 leading-relaxed mb-6 max-w-xl mx-auto">If it has an API, we can usually connect it. Tell us the tool and what you need it to do, and we will tell you honestly whether it fits.</p>
              <a href="/#connect" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
                Ask about an integration <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
