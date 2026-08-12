import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          href="/#contact"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          className="group glass fixed right-6 bottom-6 z-40 hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-medium lg:inline-flex"
        >
          Start a Project
          <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
