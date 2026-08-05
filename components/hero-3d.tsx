"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  Component,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReduced3D } from "@/hooks/use-reduced-3d";
import { ENABLE_GLB, IMAGE_PATHS, MODEL_PATH } from "@/lib/site";

const HeroCanvas = dynamic(
  () =>
    import("@/components/hero-canvas/hero-canvas").then(
      (mod) => mod.HeroCanvas,
    ),
  { ssr: false },
);

/**
 * Slot visual del hero (poster 1:1 estable).
 * El canvas WebGL solo entra si ENABLE_GLB y existe el modelo —
 * así no hay salto de tamaño entre imagen y plano 3D.
 */
export function Hero3D() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { ready, allow3d } = useReduced3D();
  const [loadCanvas, setLoadCanvas] = useState(false);
  const [inView, setInView] = useState(true);
  const [useGlb, setUseGlb] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${springX}deg) rotateY(${springY}deg)`;

  useEffect(() => {
    if (!ready || !allow3d || !ENABLE_GLB) return;

    const timeoutId = window.setTimeout(() => setLoadCanvas(true), 120);
    return () => window.clearTimeout(timeoutId);
  }, [ready, allow3d]);

  useEffect(() => {
    if (!loadCanvas || !ENABLE_GLB) return;

    let cancelled = false;
    void fetch(MODEL_PATH, { method: "HEAD" })
      .then((response) => {
        if (!cancelled && response.ok) setUseGlb(true);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [loadCanvas]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!allow3d) return;

    const onMove = (event: PointerEvent) => {
      const y = (event.clientX / window.innerWidth - 0.5) * 10;
      const x = (0.5 - event.clientY / window.innerHeight) * 8;
      rotateX.set(x);
      rotateY.set(y);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [allow3d, rotateX, rotateY]);

  const showCanvas = Boolean(
    loadCanvas && allow3d && useGlb && !failed && ENABLE_GLB,
  );

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] items-center justify-center lg:flex"
      aria-hidden
    >
      <motion.div
        className="relative aspect-square w-[min(100%,28rem)] shrink-0"
        style={allow3d ? { transform } : undefined}
      >
        <Image
          src={IMAGE_PATHS.heroFallback3d}
          alt=""
          width={1024}
          height={1024}
          sizes="(min-width: 1024px) 28rem, 0px"
          className="h-full w-full object-contain"
          priority
        />

        {showCanvas ? (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              canvasReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <HeroCanvasErrorBoundary onError={() => setFailed(true)}>
              <HeroCanvas
                useGlb
                inView={inView}
                onReady={() => setCanvasReady(true)}
              />
            </HeroCanvasErrorBoundary>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

type BoundaryProps = {
  children: ReactNode;
  onError: () => void;
};

type BoundaryState = { hasError: boolean };

class HeroCanvasErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
