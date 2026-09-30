import { CTAEbookButton } from "../CTAEbookButton";
import { ScrollAnimation } from "../ScrollAnimation";

export function Content() {
  return (
    <section
      id='conteudos'
      className='py-20 md:py-28 px-6 md:px-12 relative overflow-hidden bg-cafe text-white'
      aria-label='Conteúdos e recursos gratuitos'
    >
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 md:w-[26rem] aspect-[554/662] bg-dourado opacity-15 pointer-events-none [mask-image:url('/logo-asm-small.webp')] [mask-size:contain] [mask-repeat:no-repeat]"
        aria-hidden='true'
      />

      <div className='max-w-6xl mx-auto relative'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl leading-[1.1]'>
              Conteúdos <span className='text-dourado'>Gratuitos</span>
            </h2>
            <p className='mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Aprenda a criar conteúdo rápido, criativo e estratégico com nossos
              recursos gratuitos. Baixe o nosso e-book e descubra como podemos
              ajudá-lo a alcançar seus objetivos.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <CTAEbookButton />
        </ScrollAnimation>
      </div>
    </section>
  );
}
