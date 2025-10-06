import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { ScrollAnimation } from "./ScrollAnimation";
import { FloatingAnimation } from "./FloatingAnimation";

export function Hero() {
  return (
    <section
      className="bg-contain bg-[url('/hero-bg.webp')] relative overflow-hidden"
      aria-label='Seção principal - ASM Marketing Digital'
    >
      <FloatingAnimation delay={1}>
        <div
          className='absolute w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-50 -left-10 -top-10'
          aria-hidden='true'
        />
      </FloatingAnimation>

      <div className='mx-auto md:flex items-center gap-10'>
        <header className='flex-1 flex justify-center md:justify-end bg-white md:bg-transparent md:bg-gradient-to-r from-85% from-[#ffffff] to-white/0 '>
          <div className='max-w-md space-y-4 px-5 md:px-12 py-16'>
            <ScrollAnimation animation='bounce-in' delay='delay-200'>
              <Image
                src='/logo-asm.webp'
                alt='Logo ASM Marketing Digital - Consultoria em Marketing Digital'
                width={250}
                height={200}
                priority
              />
            </ScrollAnimation>

            <ScrollAnimation animation='fade-in-up' delay='delay-300'>
              <h1 className='text-3xl md:text-4xl font-extrabold mb-4'>
                Você sente que sua presença no digital poderia estar gerando
                mais resultados?
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation='fade-in-up' delay='delay-400'>
              <p className='text-lg leading-relaxed'>
                Se você é uma <strong>empresa</strong> ou{" "}
                <strong>profissional autônomo</strong>, chegou a hora de
                transformar sua presença online com{" "}
                <em>estratégia e propósito</em>.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation='scale-in' delay='delay-500'>
              <CTAButton />
            </ScrollAnimation>

            <ScrollAnimation animation='fade-in-up' delay='delay-600'>
              <p className='mb-6 font-light text-gray-600 leading-relaxed'>
                Na <strong>ASM Marketing Digital</strong>, criamos estratégias
                inteligentes, visuais impactantes e soluções completas para
                impulsionar marcas no Instagram e em todo o digital.
              </p>
            </ScrollAnimation>
          </div>
        </header>

        <aside className='flex-1' aria-label='Sobre Anelita Massucate'>
          <ScrollAnimation animation='fade-in-right' delay='delay-400'>
            <Image
              src='/hero-person.webp'
              alt='Anelita Massucate - Especialista em Marketing Digital Estratégico'
              width={400}
              height={400}
              priority
            />
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-700'>
            <p className='text-sm text-gray-700 mx-2 py-4 pl-14'>
              <strong>Anelita Massucate</strong> - Marketing Digital Estratégico
            </p>
          </ScrollAnimation>
        </aside>
      </div>
    </section>
  );
}
