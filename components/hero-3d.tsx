"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Component,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReduced3D } from "@/hooks/use-reduced-3d";
import { IMAGE_PATHS, MODEL_PATH } from "@/lib/site";

const HeroCanvas = dynamic(
  () =>
    import("@/components/hero-canvas/hero-canvas").then(
      (mod) => mod.HeroCanvas,
    ),
  { ssr: false },
);

/**
 * Slot 3D del hero.
 * - CTAs del hero viven fuera y nunca esperan este módulo.
 * - Canvas se carga con next/dynamic después de montar el resto del hero.
 * - Fallback a imagen si reduced-motion, saveData, error o mientras carga.
 */
export function Hero3D() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { ready, allow3d } = useReduced3D();
  const [loadCanvas, setLoadCanvas] = useState(false);
  const [inView, setInView] = useState(true);
  const [useGlb, setUseGlb] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!ready || !allow3d) return;

    let cancelled = false;

    const enable = () => {
      if (!cancelled) setLoadCanvas(true);
    };

    const timeoutId = window.setTimeout(enable, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [ready, allow3d]);

  useEffect(() => {
    if (!loadCanvas) return;

    let cancelled = false;
    void fetch(MODEL_PATH, { method: "HEAD" })
      .then((response) => {
        if (!cancelled && response.ok) {
          setUseGlb(true);
        }
      })
      .catch(() => {
        /* sin GLB: poster texturizado en el canvas */
      });

    return () => {
      cancelled = true;
    };
  }, [loadCanvas]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: "10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const showFallbackImage = !allow3d || !canvasReady || failed || !loadCanvas;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-y-12 right-0 hidden w-[46%] lg:block"
      aria-hidden
    >
      <div className="relative mx-auto h-full max-w-lg">
        {showFallbackImage ? (
          <Image
            src={IMAGE_PATHS.heroFallback3d}
            alt=""
            fill
            sizes="40vw"
            className="object-contain object-center opacity-90"
            priority
          />
        ) : null}

        {loadCanvas && allow3d && !failed ? (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              canvasReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <HeroCanvasErrorBoundary onError={() => setFailed(true)}>
              <HeroCanvas
                useGlb={useGlb}
                inView={inView}
                onReady={() => setCanvasReady(true)}
              />
            </HeroCanvasErrorBoundary>
          </div>
        ) : null}
      </div>
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
