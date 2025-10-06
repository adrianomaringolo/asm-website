import { ScrollAnimation } from "./ScrollAnimation";
import { FloatingAnimation } from "./FloatingAnimation";

export const About = () => {
  return (
    <section
      id='sobre'
      className='py-16 px-6 md:px-12 bg-[#2c2c2c] text-white relative overflow-hidden'
      aria-label='Sobre a ASM Marketing Digital'
    >
      <FloatingAnimation delay={0.5}>
        <div
          className='absolute w-60 h-60 bg-white rounded-full blur-3xl opacity-50 -right-50 -top-30'
          aria-hidden='true'
        />
      </FloatingAnimation>

      <FloatingAnimation delay={1}>
        <div
          className='absolute w-60 h-60 bg-white rounded-full blur-3xl opacity-50 -left-50 -bottom-30'
          aria-hidden='true'
        />
      </FloatingAnimation>

      <div className='max-w-6xl mx-auto'>
        <ScrollAnimation animation='fade-in-left' delay='delay-100'>
          <h2 className='text-2xl font-bold mb-4'>Somos a ASM</h2>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <p className=' mb-4'>
            Com mais de 5 anos de experiência no mercado, ajudamos empresas e
            profissionais a construírem autoridade, gerarem engajamento e
            converterem seguidores em clientes.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-300'>
          <p className=' mb-4'>
            Contamos com uma equipe especializada em cada etapa do marketing
            digital, com foco total em resultado e posicionamento.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};
