"use client";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?:
    | "fade-in-up"
    | "fade-in-left"
    | "fade-in-right"
    | "fade-in"
    | "scale-in"
    | "slide-in-up"
    | "bounce-in";
  delay?: string;
  className?: string;
}

export function ScrollAnimation({
  children,
  animation = "fade-in-up",
  delay = "",
  className = "",
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const applyAnimation = () => {
      element.classList.add(`animate-${animation}`);
      if (delay) element.classList.add(delay);
    };

    // Aplica imediatamente se o elemento já passou pelo viewport (scroll restaurado ao voltar)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      applyAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animation, delay]);

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}
