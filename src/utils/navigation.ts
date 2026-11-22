/**
 * Real-URL navigation for the SPA (history routing, no hash routes).
 * Page links use real paths (/services/..., /team, /journal/...).
 * Section anchors (#services, #journal, #connect, ...) are home-page
 * sections: from another page they first go home, then scroll to the
 * section once it is in the DOM.
 */
export function normalizePath(path: string): string {
  const clean = (path || '/').split('#')[0].split('?')[0];
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1);
  return clean || '/';
}

export function navigateTo(path: string) {
  const target = normalizePath(path);
  if (normalizePath(window.location.pathname) === target) {
    window.scrollTo(0, 0);
    return;
  }
  rememberScrollPosition();
  window.history.pushState(null, '', target);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// Scroll memory: where the user was on each URL, so Back can return them
// to the exact section they came from instead of the top of the page.
// The logo is always there for Home — Back means back to the section.
const savedScroll = new Map<string, number>();

export function scrollKey(): string {
  return window.location.pathname + window.location.hash;
}

export function rememberScrollPosition() {
  try { savedScroll.set(scrollKey(), window.scrollY); } catch { /* ignore */ }
}

export function getSavedScrollPosition(key: string): number | undefined {
  return savedScroll.get(key);
}

export function scrollToSectionWithRetry(sectionId: string, behavior: ScrollBehavior = 'auto', fallbackToTop = true, windowMs = 1500) {
  const startedAt = Date.now();
  const tryScroll = () => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior, block: 'start' });
    else if (Date.now() - startedAt < windowMs) window.setTimeout(tryScroll, 100);
    else if (fallbackToTop) window.scrollTo(0, 0);
  };
  window.setTimeout(tryScroll, 80);
}

export function navigateHomeToSection(sectionId: string) {
  if (normalizePath(window.location.pathname) === '/') {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    scrollToSectionWithRetry(sectionId, 'smooth');
    return;
  }
  try {
    window.sessionStorage.setItem('thejimmylab:pendingSection', sectionId);
  } catch {
    /* storage may be blocked */
  }
  navigateTo('/');
}

// ---------------------------------------------------------------------------
// Smooth-scroll helpers for page transitions. The site sets
// `scroll-behavior: smooth` on html, so plain scrolls glide; these helpers
// add the timing that makes the glide invisible: wait for the target to
// exist, let the browser lay it out, glide once, and resolve only when the
// scroll has ended — so the curtain lifts on a settled page, never
// mid-glide. (The old instant scroll + correction check was the flick: it
// fired before layout settled and corrected mid-glide.)
// ---------------------------------------------------------------------------

// Two animation frames: the first lets the browser run layout with the
// newly mounted page, the second confirms the measured positions.
export function afterLayoutSettled(): Promise<void> {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => resolve()));
  });
}

// Instant scroll that ignores the CSS `scroll-behavior: smooth` on html.
// Forward navigations (new page = top) use this so the page is already at
// the top before the curtain lifts — the user never sees the jump.
export function scrollToInstant(y: number) {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, y);
  root.style.scrollBehavior = prev;
}

// One smooth glide to an exact Y. Resolves when the scroll ends
// (scrollend), immediately if already there, or after a timeout. Respects
// reduced-motion (instant, resolves at once).
export function glideToY(y: number): Promise<void> {
  return (async () => {
    await afterLayoutSettled();
    if (Math.abs(window.scrollY - y) < 4) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollToInstant(y);
      return;
    }
    await new Promise<void>((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        window.removeEventListener('scrollend', onEnd);
        resolve();
      };
      const onEnd = () => finish();
      window.addEventListener('scrollend', onEnd);
      window.setTimeout(finish, 1500);
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  })();
}

// Glide to a home-page section once, after it exists and the page has laid
// out. Never drops to the top if the section is missing — the section
// simply is not there yet, so keep waiting (up to 3s) and give up quietly
// rather than landing on the hero.
export async function glideToSection(sectionId: string): Promise<void> {
  const startedAt = Date.now();
  let el: HTMLElement | null = null;
  while (!el) {
    el = document.getElementById(sectionId);
    if (el) break;
    if (Date.now() - startedAt > 3000) return;
    await new Promise((r) => window.setTimeout(r, 100));
  }
  await afterLayoutSettled();
  // 96px = the scroll-margin-top set for [id] elements in the stylesheet.
  const targetY = () => el.getBoundingClientRect().top + window.scrollY - 96;
  await glideToY(targetY());
  // Verify once after the glide — if the layout shifted under us (fonts,
  // images, content-visibility rendering), glide once more to the
  // corrected position. All of this happens under the curtain, so the user
  // never sees the correction.
  const corrected = targetY();
  if (Math.abs(window.scrollY - corrected) > 4) await glideToY(corrected);
}
