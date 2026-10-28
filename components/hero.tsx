"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import { LOADER_MS } from "./preloader";
import Character from "./character";
import SSingh from "./s-singh";

const D = LOADER_MS / 1000 - 0.5;
const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.04em] pt-[0.04em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 1, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ src }: { src: string }) {
  // only if every character image is missing: the photo is shown and the name goes in front of it
  const [photoFallback, setPhotoFallback] = useState(false);

  // the character drifts a few px towards the cursor
  const mx = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const move = (e: MouseEvent) => mx.set(e.clientX / window.innerWidth - 0.5);
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx]);

  return (
    <section id="home" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-paper">
      {/* soft grape glow behind the character */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-25%] left-1/2 h-[95%] w-[80vw] -translate-x-1/2 md:left-[54%] md:w-[58vw]"
        style={{ background: "radial-gradient(closest-side, rgba(74,43,138,0.16), rgba(74,43,138,0) 100%)" }}
      />

      {/* name sits behind the character */}
      <h1
        className={`display group cursor-default absolute bottom-3 left-5 text-[clamp(3.4rem,10.5vw,12rem)] sm:bottom-5 sm:left-8 ${
          photoFallback ? "z-20 text-white mix-blend-difference" : "z-0 hover:z-20 hover:text-white hover:mix-blend-difference"
        }`}
      >
        <Line delay={D + 0.1}>
          Arjun <SSingh />
        </Line>
        <Line delay={D + 0.22}>Naruka</Line>
      </h1>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center md:pl-[8vw]"
        style={{ x }}
        initial={{ opacity: 0, y: 80, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: D, duration: 1.1, ease }}
      >
        <div className="relative">
        <Character
          srcs={[src]}
          alt="Arjun Singh Naruka waving with a coffee"
          onFallback={() => setPhotoFallback(true)}
          className="h-[54svh] w-auto max-w-none object-contain md:h-[86svh]"
          fallbackClassName="h-[62svh] w-[46svh] rounded-t-[999px] object-cover object-top grayscale md:h-[74svh] md:w-[56svh]"
        />
        {/* greeting next to the waving hand */}
        <motion.span
          className="absolute left-[2%] top-[14%] origin-bottom-right rotate-[-6deg] whitespace-nowrap rounded-2xl rounded-br-sm bg-grape px-3 py-2 font-display text-sm font-extrabold tracking-[-0.02em] text-white shadow-lg md:left-[-14%] md:top-[18%] md:px-5 md:py-3 md:text-2xl"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: D + 1.3, type: "spring", stiffness: 260, damping: 14 }}
        >
          Hey, I&apos;m Arjun!
        </motion.span>
        </div>
      </motion.div>

      <motion.span
        className="label absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 sm:left-8 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 0.8 }}
      >
        Full Stack
        <br />
        Developer
      </motion.span>
      <motion.a
        href="#work"
        className="label group absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 text-right sm:right-8 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 0.8 }}
      >
        See my work
        <br />
        <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
      </motion.a>

      <motion.div
        className="absolute left-5 right-5 top-24 z-20 max-w-xs md:bottom-8 md:left-auto md:right-8 md:top-auto md:max-w-[15rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: D + 0.6, duration: 0.8 }}
      >
        <p className="text-sm leading-snug md:text-base">
          I build full-stack products — AI tools, web apps and mobile apps — and take them from first idea to production. Currently at LookoutAI,
          working remotely from {profile.location.split(",")[0]}.
        </p>
        <p className="label mt-3 flex flex-wrap gap-x-4 gap-y-1">
          <a href={profile.resume} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:opacity-60">
            Resume ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:opacity-60">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:opacity-60">
            GitHub ↗
          </a>
        </p>
      </motion.div>
    </section>
  );
}
