import { ClipboardCheck } from "lucide-react";
import { ScrollAnimation } from "../ScrollAnimation";

export function Diagnostico() {
  return (
    <section
      id='diagnostico'
      className='relative py-20 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#DDCC70]/20 via-white to-[#DDCC70]/10'
      aria-label='Diagnóstico gratuito de presença digital'
    >
      <div className='max-w-4xl mx-auto text-center'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#DDCC70]/20 border-2 border-[#DDCC70] mb-6'>
            <ClipboardCheck size={40} className='text-[#DDCC70]' strokeWidth={1.5} />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <p className='text-sm font-semibold uppercase tracking-widest text-[#b0a050] mb-3'>
            Exclusivo e gratuito
          </p>
          <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>
            Descubra como está sua{" "}
            <span className='relative inline-block'>
              <span className='relative z-10'>presença digital</span>
              <span className='absolute bottom-1 left-0 w-full h-3 bg-[#DDCC70]/40 -z-0 rounded' />
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-300'>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed'>
            Responda algumas perguntas rápidas e receba uma análise personalizada
            do seu negócio no digital. Identifique pontos de melhoria e descubra
            onde focar seus esforços para crescer com estratégia.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation='scale-in' delay='delay-400'>
          <a
            href='/diagnostico'
            className='inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-[#DDCC70] font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            <ClipboardCheck size={22} />
            Fazer meu diagnóstico grátis
          </a>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-500'>
          <p className='mt-6 text-sm text-gray-400'>
            Leva menos de 5 minutos · 100% gratuito · Sem compromisso
          </p>
        </ScrollAnimation>
      </div>

      {/* Decoração de fundo */}
      <div
        className='absolute -top-10 -left-10 w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-20 pointer-events-none'
        aria-hidden='true'
      />
      <div
        className='absolute -bottom-10 -right-10 w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-20 pointer-events-none'
        aria-hidden='true'
      />
    </section>
  );
}
