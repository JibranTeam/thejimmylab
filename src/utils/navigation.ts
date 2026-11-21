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
