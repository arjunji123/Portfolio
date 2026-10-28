import React from "react";
import { platforms } from "@/lib/data";
import Reveal from "./reveal";

export default function Services() {
  return (
    <section id="services" className="section">
      <Reveal className="mb-14 sm:mb-20">
        <p className="label mb-8 sm:mb-12">(03) What I do</p>
        <h2 className="display text-[clamp(3rem,11vw,11rem)]">
          One developer.
          <br />
          Every layer.
        </h2>
      </Reveal>

      <div className="grid border-l border-t border-ink/15 md:grid-cols-2 xl:grid-cols-4">
        {platforms.map((p, i) => (
          <article
            key={p.id}
            className="group flex flex-col justify-between gap-12 border-b border-r border-ink/15 p-6 transition-colors duration-500 hover:bg-ink hover:text-white sm:p-8"
          >
            <div>
              <div className="flex items-baseline justify-between">
                <span className="label opacity-50">{String(i + 1).padStart(2, "0")}</span>
                <span className="label">{p.label}</span>
              </div>
              <h3 className="mt-14 font-display text-3xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-5 leading-relaxed opacity-70">{p.text}</p>
              <ul className="mt-6 space-y-2 text-sm opacity-80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span aria-hidden>→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
