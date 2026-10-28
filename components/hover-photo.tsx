"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import photo from "../public/arjun.jpg";
import child from "../public/arjun-child.png";

const SIZE = 180; // blob diameter in px
const spring = { stiffness: 170, damping: 22, mass: 0.6 };

/**
 * Grown-up photo with a hidden surprise: hovering reveals my childhood photo
 * inside a wobbly, irregular blob that follows the cursor. The rest of the
 * photo never changes.
 */
export default function HoverPhoto() {
  const box = useRef<HTMLDivElement>(null);
  const [area, setArea] = useState({ w: 0, h: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const grow = useSpring(0, { stiffness: 220, damping: 20 });

  // the blob follows the cursor; the child photo inside is counter-shifted so it stays in register with the box
  const bx = useTransform(sx, (v) => v - SIZE / 2);
  const by = useTransform(sy, (v) => v - SIZE / 2);
  const ix = useTransform(bx, (v) => -v);
  const iy = useTransform(by, (v) => -v);

  const move = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <div>
      <div
        ref={box}
        className="relative aspect-[4/5] w-full max-w-md cursor-none overflow-hidden bg-ink/5"
        onPointerEnter={(e) => {
          const r = box.current!.getBoundingClientRect();
          setArea({ w: r.width, h: r.height });
          x.jump(e.clientX - r.left);
          y.jump(e.clientY - r.top);
          grow.set(1);
        }}
        onPointerMove={move}
        onPointerLeave={() => grow.set(0)}
      >
        <Image src={photo} alt="Arjun Singh Naruka" className="h-full w-full object-cover grayscale" />

        <motion.div
          aria-hidden
          className="blob pointer-events-none absolute left-0 top-0 overflow-hidden"
          style={{ x: bx, y: by, scale: grow, width: SIZE, height: SIZE }}
        >
          <motion.div className="absolute left-0 top-0" style={{ x: ix, y: iy, width: area.w, height: area.h }}>
            <Image src={child} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
      <p className="label mt-3 text-ink/50">Hover on me — that&apos;s me as a kid</p>
    </div>
  );
}
