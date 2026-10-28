import React from "react";
import { journeyData } from "@/lib/data";
import Reveal from "./reveal";

export default function Journey() {
  // newest first
  const items = [...journeyData].reverse();

  return (
    <section id="journey" className="bg-ink py-24 text-white sm:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal className="mb-14 sm:mb-20">
          <p className="label mb-8 opacity-60 sm:mb-12">(04) Experience</p>
          <h2 className="display text-[clamp(3rem,11vw,11rem)]">
            The road
            <br />
            so far.
          </h2>
        </Reveal>

        <div>
          {items.map((j) => (
            <Reveal key={j.level}>
              <article className="grid gap-5 border-t border-white/20 py-9 md:grid-cols-[15rem_1fr_1fr] md:gap-10">
                <div>
                  <p className="label opacity-60">{j.when}</p>
                  {"current" in j && j.current && (
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mono text-[11px] uppercase text-ink">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" /> Now
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-3xl font-extrabold leading-none tracking-[-0.045em] sm:text-5xl">
                    {j.title}
                  </h3>
                  <p className="mt-3 opacity-60">{j.org}</p>
                  {j.href && (
                    <a
                      href={j.href.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block border-b border-white/50 pb-0.5 text-sm transition hover:border-white"
                    >
                      {j.href.label} ↗
                    </a>
                  )}
                </div>
                <div>
                  {j.story.map((s) => (
                    <p key={s} className="mb-3 max-w-xl leading-relaxed opacity-75">
                      {s}
                    </p>
                  ))}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {j.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </div>
    </section>
  );
}
