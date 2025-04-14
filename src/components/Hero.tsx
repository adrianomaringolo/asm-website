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
              Você sente que sua presença digital poderia estar gerando mais
              resultados?
            </h1>
            <p>
              Se você é uma empresa ou profissional autônomo, chegou a hora de
              transformar sua presença online com estratégia e propósito.
            </p>

            <CTAButton />
            <p className="mb-6 font-light text-gray-600">
              Na ASM Marketing Digital, criamos estratégias inteligentes,
              visuais impactantes e soluções completas para impulsionar marcas
              no Instagram e em todo o digital.
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
          <p className="text-sm text-gray-700 mx-2 py-4">
            Anelita Massucate - Marketing Digital Estratégico
          </p>
        </div>
      </div>
    </section>
  );
}
