"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** tried in order, first one that exists wins */
  srcs: string[];
  alt: string;
  /** classes for the character artwork */
  className?: string;
  /** classes used if every source is missing — falls back to the real photo */
  fallbackClassName?: string;
  /** called once when every source is missing and the photo is shown instead */
  onFallback?: () => void;
};

/**
 * Shows the character from /public. Drop a transparent hero.png / loader.png in
 * there and it takes over from the bundled SVG illustration automatically.
 */
export default function Character({ srcs, alt, className = "", fallbackClassName = "", onFallback }: Props) {
  const [idx, setIdx] = useState(0);
  const failed = idx >= srcs.length;
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (failed) onFallback?.();
  }, [failed, onFallback]);

  // a 404 can land before hydration, in which case onError never fires
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setIdx((i) => i + 1);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={failed ? "/arjun.jpg" : srcs[idx]}
      alt={alt}
      draggable={false}
      onError={() => setIdx((i) => i + 1)}
      className={failed ? fallbackClassName : className}
    />
  );
}
