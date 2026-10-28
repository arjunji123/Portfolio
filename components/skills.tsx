import React from "react";
import { skillGroups } from "@/lib/data";
import Reveal from "./reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="mb-14 sm:mb-20">
        <p className="label mb-8 sm:mb-12">(05) Skills</p>
        <h2 className="display text-[clamp(3rem,11vw,11rem)]">
          Tools I
          <br />
          build with.
        </h2>
      </Reveal>

      <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <Reveal key={g.title}>
            <p className="label border-b border-ink pb-3">{g.title}</p>
            <ul>
              {g.items.map((it) => (
                <li
                  key={it}
                  className="border-b border-ink/15 py-3 font-display text-xl font-medium tracking-[-0.03em] transition-[padding] duration-300 hover:pl-3 sm:text-2xl"
                >
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
