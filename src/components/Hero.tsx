"use client";
import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#f9f8f4] to-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto md:flex items-center gap-10">
        <div className="flex-1 flex justify-end">
          <div className="max-w-md space-y-4">
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
