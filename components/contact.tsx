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

  const links = [
    { name: "LinkedIn", href: profile.linkedin },
    { name: "GitHub", href: profile.github },
    { name: "Resume", href: profile.resume },
  ];

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-24 sm:px-8 sm:pt-36">
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
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block break-all border-b border-white/40 pb-1 font-display text-xl font-medium tracking-[-0.03em] transition hover:border-white sm:text-3xl"
          >
            {profile.email}
          </a>
        </Reveal>

        <form
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-20"
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
          <div className="space-y-8">
            <div>
              <p className="label mb-3 opacity-60">01 — What&apos;s it about?</p>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button type="button" key={t} onClick={() => setTopic(topic === t ? "" : t)} className={pill(topic === t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-white/20 pt-8">
              <p className="label opacity-60">Elsewhere</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 font-display text-xl font-medium uppercase tracking-tight">
                {links.map((l) => (
                  <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="transition hover:opacity-60">
                    {l.name} ↗
                  </a>
                ))}
              </div>
              <p className="text-white/60">{profile.location}</p>
            </div>
          </div>

          <div className="space-y-4">
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
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={3000}
              placeholder="Tell me a little about what you have in mind…"
              className={`${field} h-40 resize-none rounded-2xl p-5`}
            />
            <SubmitBtn />
          </div>
        </form>

        <footer className="mt-24 flex flex-col gap-6 border-t border-white/20 pt-6 sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
          <p className="label group opacity-60">
            Arjun <SSingh /> Naruka · Jaipur{time && ` · ${time} IST`}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 whitespace-nowrap font-display text-base font-medium uppercase tracking-tight sm:text-lg">
            <a href="#home" className="transition hover:opacity-60">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
