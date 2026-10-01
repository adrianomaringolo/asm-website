import Image from "next/image";
import { ArrowRight, ClipboardList } from "lucide-react";
import { ScrollAnimation } from "../ScrollAnimation";

export function Hero() {
  return (
    <section
      className='relative overflow-hidden min-h-screen flex flex-col justify-center bg-off-white'
      aria-label='Seção principal - ASM Marketing Digital'
    >
      <div className='w-full max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 items-center gap-12 md:gap-16'>
        <header className='max-w-xl'>
          <ScrollAnimation immediate animation='fade-in' delay='delay-100'>
            <Image
              src='/logo-asm.webp'
              alt='Logo ASM Marketing Digital - Consultoria em Marketing Digital'
              width={869}
              height={176}
              sizes='(min-width: 468px) 420px, calc(100vw - 48px)'
              className='block w-full max-w-[420px] h-auto mb-12'
              priority
            />
          </ScrollAnimation>

          {/* Título e retrato são os candidatos a LCP: aparecem sem animação de opacidade */}
          <h1 className='text-[2.5rem] md:text-[3.5rem] leading-[1.05] text-cafe-deep text-balance'>
            Você sente que sua{" "}
            <span className='text-terracota'>presença no digital</span>{" "}
            poderia estar gerando mais resultados?
          </h1>

          <ScrollAnimation immediate animation='fade-in-up' delay='delay-300'>
            <p className='mt-6 text-lg leading-relaxed text-cafe'>
              Se você é uma <strong>empresa</strong> ou{" "}
              <strong>profissional autônomo</strong>, chegou a hora de
              transformar sua presença online com{" "}
              <em>estratégia e propósito</em>.
            </p>
          </ScrollAnimation>

          <ScrollAnimation immediate animation='fade-in-up' delay='delay-400'>
            <div className='mt-8 flex flex-col items-start gap-4'>
              <a
                href='/diagnostico-gratuito'
                className='flex items-center gap-3 w-full max-w-[370px] px-6 py-5 rounded-xl bg-cafe text-white font-semibold transition-colors duration-200 ease-out hover:bg-cafe-deep'
              >
                <ClipboardList size={26} strokeWidth={1.75} className='shrink-0' aria-hidden='true' />
                <span className='text-left leading-5'>
                  Faça o diagnóstico digital gratuito
                </span>
              </a>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSdKF-9LGmGABUpvRV8oT_DwGlO7A4ea4XKZ53Wr-rO-9KY9Ng/viewform?usp=sf_link'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-sm font-semibold text-cafe underline underline-offset-4 decoration-terracota/60 hover:text-cafe-deep hover:decoration-terracota transition-colors duration-200'
              >
                Ou agende sua consultoria gratuita{" "}
                <ArrowRight size={14} aria-hidden='true' />
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation immediate animation='fade-in-up' delay='delay-500'>
            <p className='mt-10 pt-6 border-t border-cafe/15 text-cafe-muted leading-relaxed'>
              Na <strong className='text-cafe'>ASM Marketing Digital</strong>,
              criamos estratégias inteligentes, visuais impactantes e soluções
              completas para impulsionar marcas no Instagram e em todo o
              digital.
            </p>
          </ScrollAnimation>
        </header>

        <aside
          className='w-full max-w-[520px] mx-auto md:mx-0 md:justify-self-end'
          aria-label='Sobre Anelita Massucate'
        >
          <div className='relative pt-10'>
            <div
              className='absolute inset-x-0 bottom-0 top-[22%] rounded-2xl bg-cafe overflow-hidden'
              aria-hidden='true'
            >
              <div className="absolute inset-0 bg-[url('/brand/pattern-monograma.webp')] bg-cover bg-center opacity-45" />
            </div>
            <Image
              src='/hero-person.webp'
              alt='Anelita Massucate - Especialista em Marketing Digital Estratégico'
              width={768}
              height={1006}
              sizes='(min-width: 768px) 520px, 90vw'
              className='relative w-full h-auto rounded-b-2xl'
              priority
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
