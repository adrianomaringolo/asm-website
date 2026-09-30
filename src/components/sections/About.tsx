import { ScrollAnimation } from "../ScrollAnimation";

export const About = () => {
  return (
    <section
      id='sobre'
      className='py-20 md:py-28 px-6 md:px-12 bg-cafe text-white'
      aria-label='Sobre a ASM Marketing Digital'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16'>
        <div className='md:col-span-5'>
          <ScrollAnimation animation='fade-in-up' delay='delay-100'>
            <h2 className='text-4xl md:text-5xl leading-[1.1]'>Somos a ASM</h2>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-200'>
            <div className='mt-6 space-y-4 text-lg leading-relaxed text-white/85'>
              <p>
                Com mais de 7 anos de experiência no mercado, ajudamos empresas
                e profissionais a construírem autoridade, gerarem engajamento e
                converterem seguidores em clientes.
              </p>
              <p>
                Contamos com uma equipe especializada em cada etapa do marketing
                digital, com foco total em resultado e posicionamento.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation
          animation='fade-in-up'
          delay='delay-300'
          className='md:col-span-7'
        >
          <figure className='md:pl-16 md:border-l border-dourado/30'>
            <blockquote>
              <p className='font-serif italic text-3xl md:text-4xl leading-[1.25] text-areia text-pretty'>
                &ldquo;Acredito no poder do digital como ferramenta de
                transformação — e trabalho todos os dias para que empresas e
                profissionais autônomos se posicionem com clareza,
                autenticidade e resultados consistentes.&rdquo;
              </p>
            </blockquote>
            <figcaption className='mt-8 flex items-center gap-4'>
              <span className='w-10 h-px bg-dourado' aria-hidden='true' />
              <span>
                <cite className='block not-italic font-semibold text-dourado'>
                  Anelita Massucate
                </cite>
                <span className='block text-sm text-white/70'>
                  Fundadora da ASM Marketing Digital
                </span>
              </span>
            </figcaption>
          </figure>
        </ScrollAnimation>
      </div>
    </section>
  );
};
