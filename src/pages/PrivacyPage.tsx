import { ArrowLeft, Code2 } from "lucide-react";

/**
 * Privacy Policy - short, honest, and specific to what this site actually
 * collects: the contact form (via Formspree) and anonymous analytics
 * (Vercel Analytics). No accounts, no tracking cookies, no data sold.
 */
export default function PrivacyPage() {
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
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Last updated - November 22, 2026</p>
            <h1 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-6">Privacy Policy</h1>
            <p className="text-white/70 text-base leading-relaxed">This policy explains what information this website collects and what we do with it. We collect as little as possible.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-10">
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Information you send us</h2>
              <p className="text-white/70 leading-relaxed">When you send a project inquiry through the contact form, you share your name, email address and project details. That message is delivered to us through Formspree and used only to reply to your inquiry and discuss your project. We do not sell, rent or share your details with anyone else.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Analytics</h2>
              <p className="text-white/70 leading-relaxed">We use Vercel Analytics to see anonymous, aggregated usage, which pages are visited and how often. It does not use cookies and does not identify individual visitors. No Google Analytics tracking is active on this site at present.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Third parties</h2>
              <p className="text-white/70 leading-relaxed">The site is hosted by Vercel and the contact form is delivered by Formspree. Both process the information described above in order to run the site; neither is given your details for any other purpose. Some pages embed images from Unsplash, which may receive your IP address and browser information when those images load.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Your choices</h2>
              <p className="text-white/70 leading-relaxed">You can ask us to delete the inquiry you sent, or to confirm what we hold about you, at any time, write to us through the contact form on this site and we will action it.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Changes</h2>
              <p className="text-white/70 leading-relaxed">If this policy changes, the updated version will be posted here with a new date. Continued use of the site after a change means you accept the updated policy.</p>
            </div>
            <div className="pt-4">
              <a href="/" className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/15 rounded-lg text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all">
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
