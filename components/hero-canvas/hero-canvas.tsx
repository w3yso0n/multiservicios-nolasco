"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { HeroScene, preloadHeroGlb } from "@/components/hero-canvas/hero-scene";

type HeroCanvasProps = {
  useGlb: boolean;
  inView: boolean;
  onReady?: () => void;
};

/**
 * Único canvas WebGL de la página.
 * Ownership: Three.js transforma el group 3D; Motion/GSAP no tocan este canvas.
 */
export function HeroCanvas({ useGlb, inView, onReady }: HeroCanvasProps) {
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    if (useGlb) {
      preloadHeroGlb();
    }
  }, [useGlb]);

  if (contextLost) {
    return null;
  }

  return (
    <Canvas
      className="h-full w-full touch-none"
      dpr={[1, 2]}
      frameloop={inView ? "always" : "never"}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      }}
      camera={{ position: [0, 0, 3.15], fov: 40, near: 0.1, far: 40 }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const canvas = gl.domElement;
        const onLost = (event: Event) => {
          event.preventDefault();
          setContextLost(true);
        };
        canvas.addEventListener("webglcontextlost", onLost, false);
        onReady?.();
      }}
    >
      <Suspense fallback={null}>
        <HeroScene useGlb={useGlb} />
      </Suspense>
    </Canvas>
  );
}
