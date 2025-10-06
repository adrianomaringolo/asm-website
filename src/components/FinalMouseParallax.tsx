"use client";
import { ReactNode, useEffect, useRef } from "react";

interface FinalMouseParallaxProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function FinalMouseParallax({
  children,
  className = "",
  intensity = 0.02,
}: FinalMouseParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Verificar se é desktop
    const isDesktop = window.matchMedia(
      "(min-width: 769px) and (hover: hover)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalizar posição do mouse (-1 a 1)
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Calcular movimento
      const moveX = xPercent * intensity * 100;
      const moveY = yPercent * intensity * 100;

      // Aplicar transformação
      element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    // Adicionar listener
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [intensity]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
