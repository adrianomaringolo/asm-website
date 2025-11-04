import { CTAEbookButton } from "../CTAEbookButton";
import { ScrollAnimation } from "../ScrollAnimation";
import { FloatingAnimation } from "../FloatingAnimation";

export function Content() {
  return (
    <section
      id='conteudos'
      className='py-16 px-6 md:px-12 relative bg-gradient-to-br from-gray-50 to-gray-100'
      aria-label='Conteúdos e recursos gratuitos'
    >
      <FloatingAnimation delay={0.5}>
        <div className='absolute w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-50 -left-20 -top-10' />
      </FloatingAnimation>

      <div className='max-w-6xl mx-auto'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Conteúdos <span className='text-gradient'>Gratuitos</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Aprenda a criar conteúdo rápido, criativo e estratégico com nossos
              recursos gratuitos. Baixe o nosso e-book e descubra como podemos
              ajudá-lo a alcançar seus objetivos.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation='scale-in' delay='delay-200'>
          <CTAEbookButton />
        </ScrollAnimation>
      </div>
    </section>
  );
}
