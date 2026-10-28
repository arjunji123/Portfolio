"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { education, profile, stats } from "@/lib/data";
import Reveal from "./reveal";
import HoverPhoto from "./hover-photo";

const statement =
  "Full stack developer from Jaipur. I take products from first idea to production — interfaces, APIs, databases, mobile apps and the deployment that keeps them running. Two years of freelancing through college, now building AI hiring tools at LookoutAI.";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.22em] inline-block">
      {children}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = statement.split(" ");

  return (
    <section id="about" className="section">
      <p className="label mb-8 sm:mb-12">(01) About me</p>

      <p
        ref={ref}
        className="font-display text-[clamp(1.9rem,5.2vw,5rem)] font-medium leading-[1.04] tracking-[-0.04em]"
      >
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {w}
          </Word>
        ))}
      </p>

      <div className="mt-20 grid gap-12 sm:mt-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <HoverPhoto />
        </Reveal>

        <div className="flex flex-col justify-between gap-12">
          <Reveal className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-6xl font-light tracking-[-0.06em] sm:text-7xl">
                  {s.value}
                  <span className="text-3xl">{s.suffix}</span>
                </p>
                <p className="label mt-2 max-w-[10rem] text-ink/50">{s.label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="border-t border-ink/15 pt-6">
            <p className="label text-ink/50">Education</p>
            <p className="mt-2 font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{education.degree}</p>
            <p className="mt-1 text-ink/60">
              {education.school} · {education.date} · {education.score}
            </p>
            <a
              href={profile.resume}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-display text-base font-medium uppercase tracking-tight text-white transition hover:bg-ink/80"
            >
              Download resume ↓
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
