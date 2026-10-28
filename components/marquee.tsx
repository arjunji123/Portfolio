import { marquee } from "@/lib/data";

export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden bg-ink py-6 text-white sm:py-8" aria-hidden>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="flex items-center font-display text-3xl font-extrabold uppercase tracking-[-0.04em] sm:text-5xl">
                <span className="px-5 sm:px-8">{t}</span>
                <span className="text-white/30">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
