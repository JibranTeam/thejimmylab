import { ArrowLeft, Code2 } from "lucide-react";

/**
 * Terms of Service - short and plain, matching how the studio actually
 * works: project-based, custom quotes, ownership on final payment.
 */
export default function TermsPage() {
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
            <h1 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-6">Terms of Service</h1>
            <p className="text-white/70 text-base leading-relaxed">The plain-English terms for working with THE JIMMY LAB and for using this website.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-10">
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Services and quotes</h2>
              <p className="text-white/70 leading-relaxed">We provide custom web development, design, animation, SEO and related services. Every project is priced individually with a custom quote, based on scope, timeline and requirements. A quote is valid for the period stated in it; timelines are estimates and depend on timely feedback and content from you.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Payment</h2>
              <p className="text-white/70 leading-relaxed">Payment terms, including any deposit and milestone schedule, are agreed per project before work starts. Work begins once the agreed deposit is received.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Ownership</h2>
              <p className="text-white/70 leading-relaxed">On final payment, full commercial rights to the work delivered for your project transfer to you, including source files. We may show the finished work in our portfolio unless you ask us not to in writing before launch.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Your responsibilities</h2>
              <p className="text-white/70 leading-relaxed">You are responsible for the content you supply, text, images, logos and data, and confirm you have the right to use it. You are also responsible for keeping your own accounts, domains and third-party services in good standing.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Liability</h2>
              <p className="text-white/70 leading-relaxed">We build and test carefully, but the website is provided as-is and we are not liable for indirect or consequential losses, including lost revenue or data, arising from its use. Our total liability for any project is limited to the fees paid for that project.</p>
            </div>
            <div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white mb-3">Changes</h2>
              <p className="text-white/70 leading-relaxed">These terms may change; the updated version will be posted here with a new date. For an ongoing project, the terms agreed in your project quote apply.</p>
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
