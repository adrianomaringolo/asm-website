"use client";
import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="bg-contain bg-[url('/hero-bg.png')]">
      <div className="absolute w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-50 -left-10 -top-10" />

      <div className="mx-auto md:flex items-center gap-10">
        <div className="flex-1 flex justify-center md:justify-end bg-white md:bg-transparent md:bg-gradient-to-r from-85% from-[#ffffff] to-white/0 ">
          <div className="max-w-md space-y-4 px-5 md:px-12 py-16">
            <Image
              src="/logo-asm.png"
              alt="Logo ASM Marketing Digital"
              width={300}
              height={200}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Transforme sua presença digital com estratégias personalizadas de
              marketing
            </h1>
            <p className="mb-6 font-light text-gray-600">
              Para pequenos negócios e autônomos
            </p>
            <CTAButton />
            <p className="mb-6 font-light text-gray-500 leading-4">
              Agende agora uma consultoria gratuita e descubra como transformar
              sua comunicação em resultados concretos.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/hero-person.png"
            alt="Anelita Massucate"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
