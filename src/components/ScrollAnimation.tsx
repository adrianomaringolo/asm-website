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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`animate-${animation}`);
            if (delay) {
              entry.target.classList.add(delay);
            }
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
