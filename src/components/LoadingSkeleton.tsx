"use client";
import { useEffect, useState } from "react";

export function LoadingSkeleton() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-50 bg-white flex items-center justify-center'>
      <div className='text-center'>
        {/* Logo animado */}
        <div className='w-32 h-32 mx-auto mb-8 relative'>
          <div className='absolute inset-0 rounded-full border-4 border-[#DDCC70]/20'></div>
          <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-[#DDCC70] animate-spin'></div>
          <div
            className='absolute inset-2 rounded-full border-2 border-transparent border-t-[#776E3C] animate-spin'
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>

        {/* Texto */}
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold text-gradient'>
            ASM Marketing Digital
          </h2>
          <div className='flex justify-center space-x-1'>
            <div className='w-2 h-2 bg-[#DDCC70] rounded-full animate-bounce'></div>
            <div
              className='w-2 h-2 bg-[#776E3C] rounded-full animate-bounce'
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className='w-2 h-2 bg-[#B8A55C] rounded-full animate-bounce'
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
