"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { profile } from "@/lib/data";
import { useClock } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import Reveal from "./reveal";
import SSingh from "./s-singh";

const topics = ["A role", "A project", "Collaboration", "Just saying hi"];

const pill = (on: boolean) =>
  `rounded-full border px-4 py-2 text-sm transition ${
    on ? "border-white bg-white text-ink" : "border-white/30 hover:border-white"
  }`;

const field =
  "w-full border border-white/30 bg-transparent outline-none transition placeholder:text-white/35 focus:border-white";

export default function Contact() {
  const time = useClock();
  const [topic, setTopic] = useState<string>("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const compose = () =>
    [
      "New message from the portfolio",
      "",
      `Name: ${name.trim() || "(not given)"}`,
      `About: ${topic || "(not specified)"}`,
      "",
      message.trim(),
    ].join("\n");

  const pills: { label: string; href: string; external?: boolean; primary?: boolean }[] = [
    { label: profile.email, href: `mailto:${profile.email}`, primary: true },
    { label: "LinkedIn", href: profile.linkedin, external: true },
    { label: "GitHub", href: profile.github, external: true },
    { label: "Resume", href: profile.resume, external: true },
  ];

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-24 sm:px-8 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="label mb-8 opacity-60 sm:mb-12">(06) Contact</p>
            <h2 className="display text-[clamp(3rem,12vw,12rem)]">
              Let&apos;s
              <br />
              talk.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              A role, a project, a question or just a hello — send a note and I&apos;ll reply as soon as I can.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {pills.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                  className={`group inline-flex items-center gap-2 rounded-full border px-5 py-3 font-display text-base font-medium tracking-tight transition sm:text-lg ${
                    l.primary
                      ? "break-all border-white bg-white text-ink hover:bg-white/85"
                      : "border-white/35 hover:border-white hover:bg-white hover:text-ink"
                  }`}
                >
                  {l.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              ))}
            </div>
            <p className="label mt-6 opacity-50">
              {profile.location}
              {time && ` · ${time} IST`}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto flex aspect-[5/4] w-full max-w-xl items-end justify-center overflow-hidden rounded-[2rem] bg-white">
              <span className="absolute left-5 top-5 rounded-full bg-ink px-4 py-2 font-display text-base font-extrabold tracking-[-0.02em] text-white sm:left-7 sm:top-7 sm:text-xl">
                Say hi! 👋
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/loader.png" alt="" draggable={false} className="h-[88%] w-auto max-w-none object-contain" />
            </div>
          </Reveal>
        </div>

        <form
          className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-20"
          action={async (formData) => {
            if (!message.trim()) {
              toast.error("Write a short message first.");
              return;
            }
            formData.set("message", compose());
            const res = await sendEmail(formData);

            // mail service not configured: open the visitor's mail app with the message filled in
            if ("noKey" in res && res.noKey) {
              const subject = encodeURIComponent("Hello from your portfolio");
              const body = encodeURIComponent(`${compose()}\n\nReply to: ${formData.get("senderEmail")}`);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              toast("Opening your mail app — just hit send.");
              return;
            }

            if (res.error) {
              toast.error(res.error);
              return;
            }

            toast.success("Message sent — thank you! I'll get back to you soon.");
            setMessage("");
            setTopic("");
            setName("");
          }}
        >
          <div className="space-y-6">
            <div>
              <p className="label mb-3 opacity-60">What&apos;s it about?</p>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button type="button" key={t} onClick={() => setTopic(topic === t ? "" : t)} className={pill(topic === t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={120}
              placeholder="Your name"
              autoComplete="name"
              className={`${field} h-14 rounded-full px-6`}
            />
            <input
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              autoComplete="email"
              className={`${field} h-14 rounded-full px-6`}
            />
          </div>

          <div className="flex flex-col gap-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={3000}
              placeholder="Tell me a little about what you have in mind…"
              className={`${field} min-h-[12rem] flex-1 resize-none rounded-2xl p-5`}
            />
            <SubmitBtn />
          </div>
        </form>

        <footer className="mt-24 flex flex-col gap-6 border-t border-white/20 pt-6 sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
          <p className="label group opacity-60">
            Arjun <SSingh /> Naruka · Jaipur{time && ` · ${time} IST`}
          </p>
          <a
            href="#home"
            className="font-display text-base font-medium uppercase tracking-tight transition hover:opacity-60 sm:text-lg"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
