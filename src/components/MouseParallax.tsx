"use client";
import { ReactNode, useEffect, useRef, useCallback } from "react";

interface MouseParallaxProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function MouseParallax({
  children,
  className = "",
  intensity = 0.02,
}: MouseParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = elementRef.current;
      if (!element) return;

      // Cancelar frame anterior se existir
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calcular a posição relativa do mouse (de -1 a 1)
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;

        // Aplicar transformação sutil
        const translateX = xPos * intensity * 100;
        const translateY = yPos * intensity * 100;

        element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;

        // Debug - remover depois
        console.log("Mouse parallax:", { translateX, translateY, intensity });
      });
    },
    [intensity]
  );

  useEffect(() => {
    console.log("MouseParallax mounted");

    // Verificar condições
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const hasReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    console.log("Conditions:", { hasHover, hasReducedMotion, isMobile });

    if (hasHover && !hasReducedMotion && !isMobile) {
      console.log("Adding mousemove listener");
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      console.log("Removing mousemove listener");
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
