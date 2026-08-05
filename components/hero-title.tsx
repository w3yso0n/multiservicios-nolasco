"use client";

import { useRef } from "react";
import { SITE } from "@/lib/site";
import { gsap, registerGsap, SplitText, useGSAP } from "@/lib/gsap";

/**
 * Titular del hero — GSAP + SplitText dueño de opacity/transform de los chars.
 * Motion no toca este nodo.
 */
export function HeroTitle() {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = rootRef.current;
      if (!el) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) return;

      let cancelled = false;
      let split: SplitText | null = null;
      let tween: gsap.core.Tween | null = null;

      void document.fonts.ready.then(() => {
        if (cancelled || !rootRef.current) return;

        split = SplitText.create(rootRef.current, {
          type: "chars,words",
          charsClass: "hero-char",
          wordsClass: "hero-word",
          aria: "auto",
        });

        tween = gsap.from(split.chars, {
          opacity: 0,
          yPercent: 35,
          rotateX: -40,
          transformOrigin: "50% 100%",
          stagger: 0.028,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.15,
        });
      });

      return () => {
        cancelled = true;
        tween?.kill();
        split?.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <h1
      ref={rootRef}
      className="font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight text-hueso sm:text-7xl md:text-8xl"
      style={{ perspective: 600 }}
    >
      {SITE.brand}
    </h1>
  );
}
