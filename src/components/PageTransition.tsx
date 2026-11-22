import type { ReactNode } from "react";
import { motion } from "framer-motion";

// One continuous page transition: the new page slides in from the right
// while the old page slides out to the left, both fading, overlapping, over
// a single 0.45s ease. No curtain, no black gap, no dead time.
//
// The old design (mode="wait" + a full-screen curtain that swept up on
// every click + a 10px jitter) read as a series of blinks ("tap tap"):
// curtain in, old page out, black, new page in, curtain out. The curtain
// is gone from navigations entirely, and AnimatePresence mode="popLayout"
// lets the two pages overlap (the exiting page is taken out of flow, so
// the entering page takes its place at once) instead of waiting for the
// old page to fully exit first. The scroll is set at the start of the
// transition, while the new page is still fading in, so the jump is hidden
// by the crossfade.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -48 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
