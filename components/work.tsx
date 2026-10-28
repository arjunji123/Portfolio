import React from "react";
import { projectsData } from "@/lib/data";
import Reveal from "./reveal";

type Project = (typeof projectsData)[number];

function Row({ p, i }: { p: Project; i: number }) {
  const body = (
    <>
      <div className="grid grid-cols-[2.2rem_1fr] items-baseline gap-x-3 md:grid-cols-[4.5rem_1fr_17rem]">
        <span className="label opacity-50">{String(i + 1).padStart(2, "0")}</span>
        <h3 className="display text-[clamp(2.4rem,7.4vw,7rem)]">
          {p.title}
          {p.href && <span className="ml-3 align-top text-[0.4em]">↗</span>}
        </h3>
        <span className="label col-start-2 mt-3 opacity-60 md:col-start-3 md:mt-0 md:text-right">{p.kind}</span>
      </div>

      {/* expands on hover for desktop, always open on touch / small screens */}
      <div className="grid transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="grid gap-5 pt-5 md:grid-cols-[4.5rem_1fr_17rem] md:pb-1 md:pt-7">
            <p className="max-w-2xl text-base leading-relaxed opacity-80 md:col-start-2 md:text-lg">{p.description}</p>
            <div className="flex flex-wrap content-start gap-1.5 md:col-start-3 md:justify-end">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const cls =
    "group block border-t border-white/20 px-5 py-7 transition-colors duration-500 hover:bg-white hover:text-ink sm:px-8 sm:py-9";

  return p.href ? (
    <a href={p.href} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-ink py-24 text-white sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="px-5 pb-14 sm:px-8 sm:pb-20">
          <p className="label mb-8 opacity-60 sm:mb-12">(02) Selected work · hover to explore</p>
          <h2 className="display text-[clamp(3rem,11vw,11rem)]">
            Things I&apos;ve
            <br />
            built.
          </h2>
        </Reveal>

        <div className="border-b border-white/20">
          {projectsData.map((p, i) => (
            <Row key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
