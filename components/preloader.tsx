"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SSingh from "./s-singh";

/** Hero animations delay themselves by this long so they play as the curtain lifts. */
export const LOADER_MS = 3200;
const COUNT_MS = LOADER_MS - 700;

/** push the video's off-white to true white and feather its edges so no box is visible */
const videoBlend: React.CSSProperties = {
  filter: "brightness(1.05) contrast(1.06)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 22%, #000 78%, transparent), linear-gradient(to bottom, transparent, #000 4%, #000 97%, transparent)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(to right, transparent, #000 22%, #000 78%, transparent), linear-gradient(to bottom, transparent, #000 4%, #000 97%, transparent)",
  maskComposite: "intersect",
};

const captions = ["brewing a fresh cup", "compiling pixels", "almost there"];
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      setCount(Math.round(easeInOut(t) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const end = setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = "";
    }, COUNT_MS + 150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(end);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const caption = captions[Math.min(captions.length - 1, Math.floor(count / 34))];

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="ink"
            className="fixed inset-0 z-[199] bg-ink"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
          <motion.div
            key="paper"
            className="fixed inset-0 z-[200] overflow-hidden bg-paper"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-start justify-between p-5 sm:p-8">
              <p className="label group">
                Arjun <SSingh /> Naruka — Portfolio
              </p>
              <p className="label hidden sm:block">Loading</p>
            </div>

            {/* the character video plays as-is, in place, for as long as the counter runs.
                multiply drops the video's white so it melts into the page */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <video
                src="/loader.mp4"
                poster="/loader-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
                className="h-[40vh] w-auto max-w-none mix-blend-multiply sm:h-[56vh]"
                style={videoBlend}
              />
              <p className="label text-ink/50">{caption}…</p>
            </div>

            <p className="absolute bottom-0 right-4 font-display text-[clamp(7rem,26vw,24rem)] font-light leading-[0.78] tracking-[-0.06em] tabular-nums sm:right-8">
              {count}
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
