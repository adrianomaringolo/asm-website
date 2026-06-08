import Image from "next/image";
import { ArrowRight, ClipboardList } from "lucide-react";
import { CTAButton } from "../CTAButton";
import { ScrollAnimation } from "../ScrollAnimation";
import { FloatingAnimation } from "../FloatingAnimation";

export function Hero() {
  return (
    <section
      className='relative overflow-hidden min-h-screen bg-gradient-to-br '
      aria-label='Seção principal - ASM Marketing Digital'
    >
      {/* Background estático */}
      <div className="hero-bg-container parallax-bg opacity-30">
        <div
          className="w-full h-full bg-contain bg-[url('/hero-bg.webp')] bg-center bg-no-repeat"
          aria-hidden='true'
        />
      </div>

<FloatingAnimation delay={1}>
        <div
          className='absolute w-60 h-60 bg-[#C97B45] rounded-full blur-3xl opacity-50 -left-10 -top-10 z-10'
          aria-hidden='true'
        />
      </FloatingAnimation>

      <div className='mx-auto md:flex items-center gap-10 relative z-10'>
        <header className='flex-1 flex justify-center md:justify-end bg-white md:bg-transparent md:bg-gradient-to-r from-85% from-white/80 to-white/0 '>
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
                Você sente que sua{" "}
                <span className='text-gradient'>presença no digital</span>{" "}
                poderia estar gerando mais resultados?
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
              <a
                href='/diagnostico-gratuito'
                className='block gradient-mesh text-white font-medium px-6 py-5 rounded-xl cursor-pointer w-full max-w-[370px] hover-scale focus:outline-none focus:ring-2 focus:ring-[#C97B45] focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
                <span className='flex items-center gap-2 w-full relative z-10'>
                  <ClipboardList size={30} className='min-w-[30px]' aria-hidden='true' />
                  <span className='text-left leading-5 font-semibold'>Faça o diagnóstico digital gratuito</span>
                </span>
              </a>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSdKF-9LGmGABUpvRV8oT_DwGlO7A4ea4XKZ53Wr-rO-9KY9Ng/viewform?usp=sf_link'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 flex items-center justify-center gap-1 text-sm font-medium text-[#5D4032] underline underline-offset-4 hover:text-[#C97B45] transition-colors duration-200'
              >
                Ou agende sua consultoria gratuita <ArrowRight size={14} />
              </a>
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
              width={600}
              height={600}
              priority
            />
          </ScrollAnimation>


        </aside>
      </div>
    </section>
  );
}
