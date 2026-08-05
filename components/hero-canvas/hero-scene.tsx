"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import {
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import {
  Group,
  SRGBColorSpace,
  type Mesh,
} from "three";
import { IMAGE_PATHS, MODEL_PATH } from "@/lib/site";

type PointerTarget = {
  x: number;
  y: number;
  scroll: number;
};

function usePointerTarget(): RefObject<PointerTarget> {
  const target = useRef<PointerTarget>({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      target.current.x = (event.clientX / window.innerWidth - 0.5) * 0.55;
      target.current.y = (event.clientY / window.innerHeight - 0.5) * 0.3;
    };

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      target.current.scroll = (window.scrollY / max) * 0.35;
    };

    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return target;
}

function PointerRig({ children }: { children: ReactNode }) {
  const groupRef = useRef<Group>(null);
  const target = usePointerTarget();

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const lerp = 1 - Math.exp(-delta * 4);
    const aimY = target.current.x;
    const aimX = target.current.y + target.current.scroll;
    group.rotation.y += (aimY - group.rotation.y) * lerp;
    group.rotation.x += (aimX - group.rotation.x) * lerp;
  });

  return <group ref={groupRef}>{children}</group>;
}

function PosterPlane() {
  const texture = useTexture(IMAGE_PATHS.heroFallback3d, (loaded) => {
    loaded.colorSpace = SRGBColorSpace;
    loaded.needsUpdate = true;
  });

  return (
    <mesh>
      <planeGeometry args={[2.35, 2.35]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  );
}

function PiezaGlb() {
  const { scene } = useGLTF(MODEL_PATH, true);
  const clone = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clone.traverse((obj) => {
      const mesh = obj as Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        const material = mesh.material;
        if (material && !Array.isArray(material)) {
          material.toneMapped = true;
        }
      }
    });
  }, [clone]);

  return <primitive object={clone} scale={1.15} position={[0, -0.15, 0]} />;
}

type HeroSceneProps = {
  useGlb: boolean;
};

export function HeroScene({ useGlb }: HeroSceneProps) {
  return (
    <PointerRig>
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[3.5, 2.5, 4]}
        intensity={1.35}
        color="#F5F1E6"
      />
      <directionalLight
        position={[-3, -1, 2]}
        intensity={0.45}
        color="#FF5C1A"
      />
      {useGlb ? <PiezaGlb /> : <PosterPlane />}
    </PointerRig>
  );
}

export function preloadHeroGlb() {
  useGLTF.preload(MODEL_PATH, true);
}
