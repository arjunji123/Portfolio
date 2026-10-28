"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import { useClock } from "@/lib/hooks";
import { LOADER_MS } from "./preloader";
import SSingh from "./s-singh";

/**
 * White text + difference blending = the bar reads dark on white sections
 * and white on black sections, with no per-section logic.
 */
export default function Header() {
  const time = useClock();
  const [open, setOpen] = useState(false);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-[55] flex flex-col justify-center gap-2 bg-ink px-5 text-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.hash}
                href={l.hash}
                onClick={() => setOpen(false)}
                className="display text-[clamp(2.6rem,13vw,4.5rem)]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.header
        className="fixed inset-x-0 top-0 z-[60] text-white mix-blend-difference"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: LOADER_MS / 1000 - 0.3 }}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 py-4 sm:px-8 sm:py-5 md:grid-cols-[0.9fr_0.9fr_2fr_auto]">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group font-display text-xl font-extrabold tracking-[-0.05em] sm:text-2xl"
          >
            Arjun <SSingh /> Naruka
          </a>

          <span className="hidden font-display text-lg font-medium tabular-nums tracking-tight md:block">
            {time && `${time} IST`}
          </span>

          <nav className="hidden items-center gap-2.5 font-display text-base font-medium uppercase tracking-tight md:flex">
            {links.map((l, i) => (
              <React.Fragment key={l.hash}>
                {i > 0 && <span className="opacity-60">/</span>}
                <a href={l.hash} className="transition-opacity hover:opacity-60">
                  {l.name}
                </a>
              </React.Fragment>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Menu"
              className="rounded-full border border-white/60 px-4 py-2.5 font-display text-sm font-medium uppercase tracking-tight sm:py-3.5 md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-medium uppercase tracking-tight text-black sm:px-6 sm:py-3.5 sm:text-base"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
