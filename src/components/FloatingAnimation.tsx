"use client";
import { ReactNode, useEffect, useRef } from "react";

interface FloatingAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingAnimation({
  children,
  className = "",
  delay = 0,
}: FloatingAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const timer = setTimeout(() => {
      element.classList.add("animate-float");
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
