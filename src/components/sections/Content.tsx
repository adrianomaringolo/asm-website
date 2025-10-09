import { CTAEbookButton } from "../CTAEbookButton";
import { ScrollAnimation } from "../ScrollAnimation";
import { FloatingAnimation } from "../FloatingAnimation";

export function Content() {
  return (
    <section
      id='conteudos'
      className='py-16 px-6 md:px-12 relative bg-gray-200'
      aria-label='Conteúdos e recursos gratuitos'
    >
      <FloatingAnimation delay={0.5}>
        <div className='absolute w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-50 -left-20 -top-10' />
      </FloatingAnimation>

      <div className='max-w-6xl mx-auto'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-left'>
            <span className='font-bold'>Conheça nossos conteúdos</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation='scale-in' delay='delay-200'>
          <CTAEbookButton />
        </ScrollAnimation>
      </div>
    </section>
  );
}
