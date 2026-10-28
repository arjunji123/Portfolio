"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { profile } from "@/lib/data";
import { useClock } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import Reveal from "./reveal";
import SSingh from "./s-singh";

const needs = [
  "Website / web app",
  "Mobile app",
  "Backend & API",
  "Database",
  "Deployment / DevOps",
  "AI features",
  "Bot (Telegram / Slack)",
  "Payments",
];
const sizes = ["Prototype", "MVP", "Full product"];
const times = ["Flexible", "1–2 months", "ASAP"];

const pill = (on: boolean) =>
  `rounded-full border px-4 py-2 text-sm transition ${
    on ? "border-white bg-white text-ink" : "border-white/30 hover:border-white"
  }`;

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-3 opacity-60">{title}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function Contact() {
  const time = useClock();
  const [sel, setSel] = useState<string[]>([]);
  const [size, setSize] = useState(sizes[1]);
  const [when, setWhen] = useState(times[0]);
  const [idea, setIdea] = useState("");

  const toggle = (n: string) => setSel((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

  const compose = () =>
    [
      "New project brief from the portfolio",
      "",
      `Needs: ${sel.length ? sel.join(", ") : "(not specified)"}`,
      `Size: ${size}`,
      `Timeline: ${when}`,
      "",
      "Idea:",
      idea.trim() || "(no description)",
    ].join("\n");

  const socials = [
    { name: "LinkedIn", href: profile.linkedin },
    { name: "GitHub", href: profile.github },
    { name: "Resume", href: profile.resume },
  ];

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-24 sm:px-8 sm:pt-36">
        <Reveal>
          <p className="label mb-8 opacity-60 sm:mb-12">(06) Get in touch</p>
          <h2 className="display text-[clamp(3rem,12vw,12rem)]">
            Got an idea?
            <br />
            Let&apos;s build it.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block break-all border-b border-white/40 pb-1 font-display text-xl font-medium tracking-[-0.03em] transition hover:border-white sm:text-3xl"
          >
            {profile.email}
          </a>
        </Reveal>

        <form
          className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20"
          action={async (formData) => {
            if (sel.length === 0 && !idea.trim()) {
              toast.error("Pick at least one thing, or describe your idea.");
              return;
            }
            formData.set("message", compose());
            const res = await sendEmail(formData);

            // mail service not configured: open the visitor's mail app with the brief filled in
            if ("noKey" in res && res.noKey) {
              const subject = encodeURIComponent("Project brief from your portfolio");
              const body = encodeURIComponent(`${compose()}\n\nReply to: ${formData.get("senderEmail")}`);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              toast("Opening your mail app — just hit send.");
              return;
            }

            if (res.error) {
              toast.error(res.error);
              return;
            }

            toast.success("Brief sent — I'll get back to you soon!");
          }}
        >
          <div className="space-y-8">
            <Group title="01 — What do you need?">
              {needs.map((n) => (
                <button type="button" key={n} onClick={() => toggle(n)} className={pill(sel.includes(n))}>
                  {n}
                </button>
              ))}
            </Group>
            <Group title="02 — How big?">
              {sizes.map((s) => (
                <button type="button" key={s} onClick={() => setSize(s)} className={pill(size === s)}>
                  {s}
                </button>
              ))}
            </Group>
            <Group title="03 — How soon?">
              {times.map((t) => (
                <button type="button" key={t} onClick={() => setWhen(t)} className={pill(when === t)}>
                  {t}
                </button>
              ))}
            </Group>
          </div>

          <div className="space-y-4">
            <p className="label opacity-60">04 — Tell me about your idea</p>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              maxLength={3000}
              placeholder="e.g. An app where delivery partners accept orders and customers track them live…"
              className="h-44 w-full resize-none rounded-2xl border border-white/30 bg-transparent p-5 outline-none transition placeholder:text-white/35 focus:border-white"
            />
            <input
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email — so I can reply"
              className="h-14 w-full rounded-full border border-white/30 bg-transparent px-6 outline-none transition placeholder:text-white/35 focus:border-white"
            />
            <SubmitBtn />
          </div>
        </form>

        <footer className="mt-24 flex flex-col gap-6 border-t border-white/20 pt-6 sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
          <p className="label group opacity-60">
            Arjun <SSingh /> Naruka · Jaipur{time && ` · ${time} IST`}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 whitespace-nowrap font-display text-base font-medium uppercase tracking-tight sm:text-lg">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="transition hover:opacity-60">
                {s.name} ↗
              </a>
            ))}
            <a href="#home" className="transition hover:opacity-60">
              Top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
