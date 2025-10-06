"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Verificar se é desktop
    const isDesktop = window.matchMedia(
      "(min-width: 769px) and (hover: hover)"
    ).matches;
    if (!isDesktop) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    };

    const animateCursor = () => {
      const speed = 0.15;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.backgroundColor = "rgba(221, 204, 112, 0.3)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "scale(1)";
      cursor.style.backgroundColor = "rgba(221, 204, 112, 0.1)";
    };

    // Event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Adicionar efeitos em elementos interativos
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    animateCursor();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        ref={cursorRef}
        className='fixed w-8 h-8 bg-[#DDCC70]/10 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200'
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Ponto do cursor */}
      <div
        ref={cursorDotRef}
        className='fixed w-1 h-1 bg-[#DDCC70] rounded-full pointer-events-none z-50'
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
