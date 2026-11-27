import { useState } from 'react';
import { unsplashSrcSet } from '../utils/images';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Code2, Link2, MessageCircle } from 'lucide-react';
import { JOURNAL_POSTS, type JournalPost } from '../data/journal';
import { getServiceBySlug } from '../data/services';
import { goToConnect } from '../utils/goToConnect';

export default function JournalPostPage({ post }: { post: JournalPost }) {
  // Newest first, so previous/next follow the calendar, not the file order.
  const sorted = [...JOURNAL_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentIndex = sorted.findIndex((p) => p.id === post.id);
  const newerPost = currentIndex > 0 ? sorted[currentIndex - 1] : undefined;
  const olderPost = currentIndex >= 0 && currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : undefined;
  // Same category first, then the rest - never the post itself.
  const others = [
    ...JOURNAL_POSTS.filter((p) => p.id !== post.id && p.category === post.category),
    ...JOURNAL_POSTS.filter((p) => p.id !== post.id && p.category !== post.category),
  ].slice(0, 3);
  const year = new Date().getFullYear();
  const relatedService = post.relatedService ? getServiceBySlug(post.relatedService) : undefined;
  const postUrl = 'https://thejimmylab.vercel.app/journal/' + post.id;
  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(postUrl);
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(postUrl); } catch { /* clipboard may be blocked */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative">
      <div className="liquid-bg" aria-hidden="true" />
      <div className="rule-grid" aria-hidden="true" />
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
          <a
            href="#journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#ff6b35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </a>
        </div>
      </header>
      <main>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="#journal" className="hover:text-white transition-colors">Journal</a>
            <span>/</span>
            <span className="font-semibold text-[#ff6b35]">{post.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2.5 mb-5 text-[11px] font-mono">
              <span className="text-[9px] uppercase tracking-wider text-[#ff6b35] border border-[#ff6b35]/25 bg-[#ff6b35]/10 px-2 py-0.5 rounded-md">{post.category}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60">{post.date}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60">{post.read}</span>
            </div>
            <h1 className="font-['Syne'] text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-5">{post.title}</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">{post.excerpt}</p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#ff6b35] rounded-lg flex items-center justify-center shrink-0"><Code2 className="w-5 h-5 text-white" /></div>
              <div className="text-sm"><span className="text-white/50">By </span><span className="font-semibold text-white">THE JIMMY LAB</span></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/40 mr-1">Share</span>
              <a href={'https://twitter.com/intent/tweet?text=' + shareText + '&url=' + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on X" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[13px] font-bold text-white/70 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors">X</a>
              <a href={'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[13px] font-bold text-white/70 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors">f</a>
              <a href={'https://www.linkedin.com/sharing/share-offsite/?url=' + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[12px] font-bold text-white/70 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors">in</a>
              <a href={'https://wa.me/?text=' + shareText + '%20' + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <button type="button" onClick={copyLink} aria-label="Copy post link" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors cursor-pointer">{copied ? <Check className="w-4 h-4 text-[#ff6b35]" /> : <Link2 className="w-4 h-4" />}</button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-12 bg-[#3A373E] border border-white/[0.06]"
          >
            <img src={post.image} srcSet={unsplashSrcSet(post.image)} sizes="(max-width: 768px) 100vw, 896px" fetchPriority="high" alt={post.title} className="object-cover w-full h-full" />
          </motion.div>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-['Syne'] text-2xl font-bold text-white mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-[15px] text-white/65 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            ))}
            <div className="rounded-2xl bg-[#070f1a] border border-[#ff6b35]/25 p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff6b35] mb-3">Takeaway</p>
              <p className="text-[15px] text-white/80 leading-relaxed">{post.takeaway}</p>
            </div>
            {relatedService && (
              <a
                href={'/services/' + relatedService.slug}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#3A373E] p-6 transition-all hover:border-white/25 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${relatedService.color}1f` }}>
                  <relatedService.icon className="w-6 h-6" style={{ color: relatedService.color }} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Related service</p>
                  <p className="font-['Syne'] text-lg font-bold text-white group-hover:text-[#ff6b35] transition-colors">{relatedService.title}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{relatedService.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-[#ff6b35]" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-12">
            <a href="#journal" className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/15 rounded-lg text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </a>
            <a href="#connect" onClick={(e) => { e.preventDefault(); goToConnect(); }} className="btn-primary">
              Start a project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {(newerPost || olderPost) && (
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {newerPost ? (
                <a href={'/journal/' + newerPost.id} className="group rounded-2xl border border-white/10 bg-[#070f1a] p-5 hover:border-[#ff6b35]/30 transition-all">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">← Newer post</p>
                  <p className="font-['Syne'] font-bold text-white group-hover:text-[#ff6b35] transition-colors leading-snug">{newerPost.title}</p>
                </a>
              ) : <div />}
              {olderPost ? (
                <a href={'/journal/' + olderPost.id} className="group rounded-2xl border border-white/10 bg-[#070f1a] p-5 sm:text-right hover:border-[#ff6b35]/30 transition-all">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Older post →</p>
                  <p className="font-['Syne'] font-bold text-white group-hover:text-[#ff6b35] transition-colors leading-snug">{olderPost.title}</p>
                </a>
              ) : <div />}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-16 md:py-20 border-t border-white/5 bg-[#3A373E]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Syne'] text-2xl md:text-3xl font-bold text-white mb-8">More from the Journal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((other) => (
              <article key={other.id} className="group flex flex-col justify-between bg-[#070f1a] rounded-2xl p-5 border border-white/10 hover:border-[#ff6b35]/30 transition-all duration-500">
                <div>
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 bg-[#3A373E] border border-white/[0.06]">
                    <img src={other.image} srcSet={unsplashSrcSet(other.image)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" alt={other.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-mono">
                    <span className="text-[9px] uppercase tracking-wider text-[#ff6b35] border border-[#ff6b35]/25 bg-[#ff6b35]/10 px-2 py-0.5 rounded-md">{other.category}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-white/60">{other.date}</span>
                  </div>
                  <h3 className="font-['Syne'] text-[18px] font-bold mb-3 leading-snug text-white group-hover:text-[#ff6b35] transition-colors">
                    <a href={'/journal/' + other.id}>{other.title}</a>
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-6">{other.excerpt}</p>
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <a href={'/journal/' + other.id} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff6b35] group-hover:gap-3 transition-all">
                    Read Post <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#ff6b35] rounded-md flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-['Syne'] font-black text-sm text-white">
              THE JIMMY LAB<span className="text-[#ff3c2f]">.</span>
            </span>
          </div>
          <p className="text-white/60 text-sm">© {year} THE JIMMY LAB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
