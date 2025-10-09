import { ScrollAnimation } from "../ScrollAnimation";
import { FloatingAnimation } from "../FloatingAnimation";

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
          <p className=' mb-8'>
            Contamos com uma equipe especializada em cada etapa do marketing
            digital, com foco total em resultado e posicionamento.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-400'>
          <div className='relative'>
            {/* Linha decorativa superior */}
            <div className='w-20 h-1 bg-gradient-to-r from-[#DDCC70] to-white mx-auto mb-6 rounded-full'></div>

            {/* Frase destacada */}
            <blockquote className='text-center relative'>
              <div className='absolute -top-4 -left-4 text-6xl text-[#DDCC70] opacity-30 font-serif'>
                "
              </div>
              <p className='text-lg md:text-xl font-medium leading-relaxed italic text-white/95 max-w-4xl mx-auto px-8'>
                Acredito no poder do digital como ferramenta de transformação —
                e trabalho todos os dias para que empresas e profissionais
                autônomos se posicionem com clareza, autenticidade e resultados
                consistentes.
              </p>
              <div className='absolute -bottom-4 -right-4 text-6xl text-[#DDCC70] opacity-30 font-serif rotate-180'>
                "
              </div>
            </blockquote>

            {/* Assinatura */}
            <div className='text-center mt-6'>
              <div className='w-16 h-px bg-[#DDCC70] mx-auto mb-3'></div>
              <cite className='text-[#DDCC70] font-semibold not-italic'>
                Anelita Massucate
              </cite>
              <p className='text-white/70 text-sm mt-1'>
                Fundadora da ASM Marketing Digital
              </p>
            </div>

            {/* Linha decorativa inferior */}
            <div className='w-20 h-1 bg-gradient-to-r from-white to-[#DDCC70] mx-auto mt-6 rounded-full'></div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
