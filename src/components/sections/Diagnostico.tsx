import { ArrowRight, ClipboardCheck } from "lucide-react";
import { ScrollAnimation } from "../ScrollAnimation";

export function Diagnostico() {
  return (
    <section
      id='diagnostico'
      className='py-20 md:py-28 px-6 md:px-12 bg-areia text-cafe'
      aria-label='Diagnóstico gratuito de presença digital'
    >
      <div className='max-w-3xl mx-auto text-center'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <ClipboardCheck
            size={44}
            strokeWidth={1.25}
            className='mx-auto text-cafe'
            aria-hidden='true'
          />
          <h2 className='mt-6 text-4xl md:text-5xl leading-[1.1] text-cafe-deep text-balance'>
            Descubra como está sua{" "}
            <span className='underline decoration-terracota decoration-2 underline-offset-[10px]'>
              presença digital
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <p className='mt-6 text-lg text-cafe max-w-2xl mx-auto leading-relaxed'>
            Responda algumas perguntas rápidas e receba uma análise
            personalizada do seu negócio no digital. Identifique pontos de
            melhoria e descubra onde focar seus esforços para crescer com
            estratégia.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-300'>
          <a
            href='/diagnostico-gratuito'
            className='group mt-10 inline-flex items-center gap-3 bg-cafe hover:bg-cafe-deep text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200 ease-out'
          >
            Fazer meu diagnóstico grátis
            <ArrowRight
              size={20}
              strokeWidth={1.75}
              className='transition-transform duration-300 ease-out group-hover:translate-x-1'
              aria-hidden='true'
            />
          </a>
          <p className='mt-5 text-sm text-cafe-muted'>
            Exclusivo e gratuito · Leva menos de 5 minutos · Sem compromisso
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
