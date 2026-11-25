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

// The home section an element belongs to, from its closest section
// ancestor. A click on a Services card belongs to Services even when the
// user has scrolled so far that the viewport centre is in Portfolio.
export function sectionOfElement(el: HTMLElement | null): string | null {
  const sec = el?.closest?.('section[id], footer [id], div[id]') as HTMLElement | null;
  if (!sec) return null;
  const id = sec.id;
  if (['home', 'about', 'services', 'portfolio', 'process', 'journal', 'connect', 'top', 'locations'].includes(id)) return id;
  return null;
}

export function navigateTo(path: string, fromSection?: string | null) {
  const target = normalizePath(path);
  if (normalizePath(window.location.pathname) === target) {
    window.scrollTo(0, 0);
    return;
  }
  // Leaving the home page: remember which section the user was in. Prefer
  // the section the clicked element belongs to (a Services card belongs
  // to Services even when the viewport centre has scrolled into
  // Portfolio); fall back to the section at the viewport centre. Write
  // it where Back can find it too: sessionStorage is the one mechanism
  // every return to home uses, exactly like an in-page "Back to ..."
  // link, so browser Back and the page buttons land the same way. Card
  // onClick handlers call navigateTo directly (with preventDefault), so
  // the document click handler never sees them.
  if (normalizePath(window.location.pathname) === '/') {
    lastHomeSection = fromSection ?? currentHomeSection();
    if (lastHomeSection) {
      try { window.sessionStorage.setItem('thejimmylab:pendingSection', lastHomeSection); } catch { /* storage may be blocked */ }
      // Stamp the section onto the home history entry itself, so a real
      // Back reads it from the entry it is returning to. This survives
      // reloads and does not depend on the module variable or on storage
      // the layout effect may already have consumed.
      try { window.history.replaceState({ returnSection: lastHomeSection }, ''); } catch { /* history may be restricted */ }
    }
  }
  rememberScrollPosition();
  window.history.pushState(null, '', target);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// Which home section the user was in when they last left home (see
// navigateTo). Browser Back trusts the saved scroll pixel only while it
// still falls inside this section; a stale pixel (captured mid-glide)
// would land a whole section off, so then Back lands on the section itself.
let lastHomeSection: string | null = null;
export function getLastHomeSection(): string | null {
  return lastHomeSection;
}

const HOME_SECTIONS = ['home', 'about', 'services', 'portfolio', 'process', 'journal', 'connect', 'top', 'locations'];
// Which home section the viewport centre sits in when the page is scrolled
// to y. The saved scroll pixel is the precise record of where the user was
// when they left home, so browser Back derives its section from it instead
// of trusting a recorded section that can be stale or missing.
export function sectionAtScrollY(y: number): string | null {
  // The section at the centre of the viewport, not the top. When a
  // section is centred (the restore's landing), the top of the viewport
  // is still in the previous section, so a top-based pick records the
  // wrong section (a card click from centred Services recorded 'about').
  // The centre is the section actually on screen and the one the
  // restore centres.
  const point = y + window.innerHeight / 2;
  let found: string | null = null;
  for (const el of Array.from(document.querySelectorAll('section[id], footer [id]'))) {
    const id = (el as HTMLElement).id;
    if (!HOME_SECTIONS.includes(id)) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= point) found = id;
    else break;
  }
  return found;
}
function currentHomeSection(): string | null {
  return sectionAtScrollY(window.scrollY);
}

// Document top of an element from its layout position (offsetTop chain),
// ignoring CSS transforms. GSAP ScrollTrigger entrances put a y transform
// on section titles (Services title starts at y:50), so getBoundingClientRect
// measures the animated position and the centred landing comes out ~50px
// off. offsetTop is layout-based, so it gives the settled position even
// while the entrance is still running.
export function docTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

// Scroll Y that puts a section's heading at the vertical centre of the
// viewport. Falls back to the section itself (the footer block has no
// heading tag). Clamped to the page, so a section at the very end can only
// go as far as the bottom allows.
// Centre target from the heading's visual position, not from docTop.
// docTop (offsetTop chain) overstates the position by ~1000px for the
// Services heading, so the restore computed a target equal to the current
// deep-scroll pixel and concluded it was already centred. The bounding
// rect plus the current scroll is the true document position regardless
// of offsetParent transforms.
export function centerYForSectionRect(sectionId: string): number | null {
  if (sectionId === 'top') return 0;
  const el = document.getElementById(sectionId);
  if (!el) return null;
  const heading = (el.querySelector('h1, h2') ?? el.querySelector('h3') ?? el) as HTMLElement;
  const rect = heading.getBoundingClientRect();
  const centre = rect.top + window.scrollY + rect.height / 2;
  const y = centre - window.innerHeight / 2;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(0, Math.min(y, Math.max(0, max)));
}

// Centre a section's CONTENT as a group, not just its heading. The
// user's screenshot showed the heading at the viewport centre while the
// first row of service cards sat near the bottom, cut off, so the
// section read as "downward". The target is the midpoint between the
// heading's centre and the first content card's centre; sections without
// cards fall back to the heading. Returns the scroll Y that puts that
// midpoint at the viewport centre, clamped to the page.
// First content card that is actually visible. Some sections render a
// post twice (a mobile article and a desktop article); on desktop the
// mobile one is display:none, and its bounding rect is all zeros, which
// would drag the content midpoint thousands of pixels too high.
function firstVisibleCard(el: HTMLElement): HTMLElement | null {
  const cards = el.querySelectorAll('.service-card, .portfolio-card, .about-card, article');
  for (const c of Array.from(cards)) {
    const r = (c as HTMLElement).getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return c as HTMLElement;
  }
  return null;
}

export function sectionContentTargetY(sectionId: string): number | null {
  if (sectionId === 'top') return 0;
  const el = document.getElementById(sectionId);
  if (!el) return null;
  const heading = (el.querySelector('h1, h2') ?? el.querySelector('h3') ?? el) as HTMLElement;
  const hRect = heading.getBoundingClientRect();
  const headingCentreY = hRect.top + window.scrollY + hRect.height / 2;
  const card = firstVisibleCard(el);
  let targetDocY = headingCentreY;
  if (card) {
    const cRect = card.getBoundingClientRect();
    const cardCentreY = cRect.top + window.scrollY + cRect.height / 2;
    targetDocY = (headingCentreY + cardCentreY) / 2;
  }
  const vpH = window.innerHeight;
  let y = targetDocY - vpH / 2;
  // Keep the viewport inside this section, so no part of the section
  // above or below is ever seen. The content midpoint can sit above the
  // section top (Services: ~120px), which lets the marquee from above
  // peek in. For a section taller than the viewport, clamp the scroll
  // between the section top and the section bottom minus the viewport
  // height. For a short section there is nothing to clamp.
  const rect = el.getBoundingClientRect();
  const sectionTop = rect.top + window.scrollY;
  const sectionBottom = rect.bottom + window.scrollY;
  if (sectionBottom - sectionTop >= vpH) {
    y = Math.max(sectionTop, Math.min(y, sectionBottom - vpH));
  }
  const max = document.documentElement.scrollHeight - vpH;
  return Math.max(0, Math.min(y, Math.max(0, max)));
}

// Scroll instantly so a section's content midpoint lands at the viewport
// centre. Returns false when the section is not in the DOM yet.
export function scrollSectionContentToCenter(sectionId: string): boolean {
  const y = sectionContentTargetY(sectionId);
  if (y === null) return false;
  scrollToInstant(y);
  return true;
}

// How far a section's content midpoint is from the viewport centre right
// now, in px (positive = content is below centre). Ground truth of
// whether the section actually looks centred.
export function sectionContentVisualOffset(sectionId: string): number | null {
  if (sectionId === 'top') return -window.scrollY;
  const el = document.getElementById(sectionId);
  if (!el) return null;
  const heading = (el.querySelector('h1, h2') ?? el.querySelector('h3') ?? el) as HTMLElement;
  const hRect = heading.getBoundingClientRect();
  const headingCentre = hRect.top + hRect.height / 2;
  const card = firstVisibleCard(el);
  let targetCentre = headingCentre;
  if (card) {
    const cRect = card.getBoundingClientRect();
    const cardCentre = cRect.top + cRect.height / 2;
    targetCentre = (headingCentre + cardCentre) / 2;
  }
  return targetCentre - window.innerHeight / 2;
}

export function centerYForSection(sectionId: string): number | null {
  // 'top' is the logo's target; no element has id="top" (the hero is
  // id="home"), so it means the very top of the page.
  if (sectionId === 'top') return 0;
  const el = document.getElementById(sectionId);
  if (!el) return null;
  const heading = el.querySelector('h1, h2, h3') as HTMLElement | null;
  const target = (heading ?? el) as HTMLElement;
  const centerY = docTop(target) + target.offsetHeight / 2;
  const vpH = window.innerHeight;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - vpH);
  return Math.min(Math.max(0, centerY - vpH / 2), maxScroll);
}

// How far a section heading's centre is from the viewport centre right
// now, in px (positive = heading is below centre). Used to check whether a
// landing actually centred, from a fresh measurement.
export function headingCenterOffset(sectionId: string): number | null {
  const el = document.getElementById(sectionId);
  if (!el) return null;
  const heading = el.querySelector('h1, h2, h3') as HTMLElement | null;
  const target = (heading ?? el) as HTMLElement;
  const centerY = docTop(target) + target.offsetHeight / 2;
  return centerY - (window.scrollY + window.innerHeight / 2);
}

// Scroll to a home section so its heading lands at the viewport centre,
// instead of the top (scrollIntoView block:'start' is what left every
// section heading in the upper third). Returns false when the section is
// not in the DOM yet. Uses the browser's native centring on the heading
// itself: the hand-rolled Y math overshot Journal by ~800px while centring
// Services, so the native call (which centres the element's actual border
// box) is the reliable one for link clicks. The heading has no id, so the
// [id] scroll-margin does not apply to it.
// Centre a section with the browser's native scrollIntoView, instantly.
// This is the mechanism the nav clicks and in-page Back links use, and it
// centres every time. The computed-Y restore (centerYForSectionRect +
// scrollToInstant) never moved on deep-scroll Back: the app's own
// measurement was not right at the moment of the call. scrollIntoView
// measures the layout itself, so it is correct regardless of when it runs.
export function scrollSectionToCenterNative(sectionId: string): boolean {
  if (sectionId === 'top') {
    scrollToInstant(0);
    return true;
  }
  const el = document.getElementById(sectionId);
  if (!el) return false;
  const heading = (el.querySelector('h1, h2') ?? el.querySelector('h3') ?? el) as HTMLElement;
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  try {
    heading.scrollIntoView({ behavior: 'auto', block: 'center' });
  } finally {
    root.style.scrollBehavior = prev;
  }
  return true;
}

export function scrollToSectionCentered(sectionId: string, behavior: ScrollBehavior = 'auto'): boolean {
  const y = sectionContentTargetY(sectionId);
  if (y === null) return false;
  if (behavior === 'smooth') {
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else {
    scrollToInstant(y);
  }
  if (behavior === 'smooth') {
    // Re-check once the smooth scroll and the layout have settled. A long
    // scroll from a fresh load can overshoot by ~800px while sections
    // above it (content-visibility estimates) are still settling, and the
    // same click from a settled page centres. Measure with the docTop
    // helper (ignores transforms and estimates) and correct instantly so
    // the CSS smooth scroll-behavior does not turn the correction into
    // another glide.
    // Re-check until the heading is centred. A single check can run
    // while the layout above is still settling, so retry a few times.
    const recheck = (attempt: number) => {
      const y = sectionContentTargetY(sectionId);
      if (y !== null && Math.abs(window.scrollY - y) > 4) {
        scrollToInstant(y);
      }
      if (attempt < 3) {
        window.setTimeout(() => recheck(attempt + 1), 800);
      }
    };
    window.setTimeout(() => recheck(1), 800);
  }
  return true;
}

// Scroll memory: where the user was on each URL, so Back can return them
// to the exact section they came from instead of the top of the page.
// The logo is always there for Home - Back means back to the section.
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
    if (scrollToSectionCentered(sectionId, behavior)) return;
    if (Date.now() - startedAt < windowMs) window.setTimeout(tryScroll, 100);
    else if (fallbackToTop) window.scrollTo(0, 0);
  };
  window.setTimeout(tryScroll, 80);
}

export function navigateHomeToSection(sectionId: string) {
  if (sectionId === 'top') {
    // Clear any stored return section first, or the layout effect reads
    // the stale section and centres it instead of the top.
    try { window.sessionStorage.removeItem('thejimmylab:pendingSection'); } catch { /* storage may be blocked */ }
    if (normalizePath(window.location.pathname) === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigateTo('/');
    }
    return;
  }
  if (normalizePath(window.location.pathname) === '/') {
    if (scrollToSectionCentered(sectionId, 'smooth')) return;
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
// scroll has ended - so the curtain lifts on a settled page, never
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
// the top before the curtain lifts - the user never sees the jump.
export function scrollToInstant(y: number) {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, y);
  root.style.scrollBehavior = prev;
}

// Restore scrolling (used under the transition curtain, so the scroll is
// invisible): settle, then ONE instant set to the target, verified once.
// Instant is right here because the curtain hides the movement - a smooth
// glide only made the curtain stay up longer (several seconds for a long
// trip to the footer), with no visible benefit. The visible transition is
// the curtain fade, which stays smooth.
export async function restoreToY(y: number): Promise<void> {
  // Wait until the new page has mounted and is tall enough to reach y.
  // The restore runs on route change, while the old page is still exiting
  // (AnimatePresence mode="wait") - scrolling now would clamp to the old
  // page's height and land a section too high. That was the browser-Back
  // bug: Back from a service page landed on About instead of Services.
  const startedAt = Date.now();
  while (document.documentElement.scrollHeight - window.innerHeight < y) {
    if (Date.now() - startedAt > 3000) break;
    await new Promise((r) => window.setTimeout(r, 100));
  }
  await afterLayoutSettled();
  scrollToInstant(y);
  // Verify once: if the layout shifted under us, the set may have landed
  // short. One instant correction, still under the curtain.
  if (Math.abs(window.scrollY - y) > 4) scrollToInstant(y);
}

// Land on a home-page section once, after it exists and the page has laid
// out. Never drops to the top if the section is missing - the section
// simply is not there yet, so keep waiting (up to 3s) and give up quietly
// rather than landing on the hero.
export async function restoreToSection(sectionId: string): Promise<void> {
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
  await restoreToY(targetY());
  const corrected = targetY();
  if (Math.abs(window.scrollY - corrected) > 4) await restoreToY(corrected);
}

// Back to a saved scroll position on the home page. The saved pixel can be
// stale - captured mid-glide while a nav scroll was still running - and
// restoring a stale pixel lands a whole section off. So the pixel is only
// trusted when it still falls inside the section the user came from;
// otherwise land on the section itself. The section is the one the clicked
// link sat in, recorded when the user left home.
export async function restoreToSavedY(y: number, sectionId?: string | null): Promise<void> {
  if (!sectionId) {
    await restoreToY(y);
    return;
  }
  const startedAt = Date.now();
  let el: HTMLElement | null = null;
  while (!el) {
    el = document.getElementById(sectionId);
    if (el) break;
    if (Date.now() - startedAt > 3000) {
      await restoreToY(y);
      return;
    }
    await new Promise((r) => window.setTimeout(r, 100));
  }
  await afterLayoutSettled();
  const top = el.getBoundingClientRect().top + window.scrollY;
  const bottom = top + el.offsetHeight;
  if (y >= top - 96 && y < bottom) {
    await restoreToY(y);
  } else {
    await restoreToSection(sectionId);
  }
}
