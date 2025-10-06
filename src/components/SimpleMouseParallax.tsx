"use client";
import { ReactNode, useEffect, useRef } from "react";

interface SimpleMouseParallaxProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function SimpleMouseParallax({
  children,
  className = "",
  intensity = 0.02,
}: SimpleMouseParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    console.log("SimpleMouseParallax: Element found, setting up listener");

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calcular posição do mouse normalizada (-1 a 1)
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      // Calcular movimento
      const moveX = xPos * intensity * 100;
      const moveY = yPos * intensity * 100;

      // Aplicar transformação
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;

      // Debug
      console.log("Mouse move:", { moveX, moveY });
    };

    // Adicionar listener
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [intensity]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
