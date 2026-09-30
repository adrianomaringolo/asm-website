import Image from "next/image";
import { Palette, Smartphone, Target, Zap, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "../ScrollAnimation";

export function Bio() {
  const highlights = [
    { number: "7+", label: "Anos de experiência" },
    { number: "100+", label: "Projetos realizados" },
    { number: "30+", label: "Clientes satisfeitos" },
  ];

  const expertise = [
    {
      icon: Palette,
      title: "Design Gráfico",
      description: "Identidade visual e materiais criativos",
    },
    {
      icon: Smartphone,
      title: "Social Media",
      description: "Gestão estratégica de redes sociais",
    },
    {
      icon: Target,
      title: "Gestão de Tráfego",
      description: "Campanhas pagas otimizadas",
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Processos inteligentes e eficientes",
    },
    {
      icon: Lightbulb,
      title: "Consultoria",
      description: "Estratégias personalizadas",
    },
  ];

  return (
    <section
      id='bio'
      className='py-20 md:py-28 px-6 md:px-12 bg-off-white relative overflow-hidden'
      aria-label='Biografia de Anelita Massucate'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-12 gap-12 md:gap-16 items-start'>
          {/* Retrato */}
          <ScrollAnimation
            animation='fade-in-left'
            delay='delay-200'
            className='md:col-span-5 md:sticky md:top-24'
          >
            <figure className='relative max-w-[260px] sm:max-w-xs mx-auto md:max-w-none'>
              <div
                className='absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-terracota/40'
                aria-hidden='true'
              />
              <Image
                src='/photo-bio.webp'
                alt='Anelita Scaliza Massucate, fundadora da ASM Marketing Digital'
                width={500}
                height={816}
                sizes='(min-width: 768px) 40vw, 384px'
                className='relative w-full h-auto rounded-2xl shadow-[0_20px_40px_-20px_rgba(82,56,42,0.45)]'
              />
            </figure>
          </ScrollAnimation>

          {/* História */}
          <div className='md:col-span-7'>
            <ScrollAnimation animation='fade-in-up' delay='delay-100'>
              <h2 className='text-4xl md:text-5xl leading-[1.1] text-cafe-deep text-balance'>
                Quem sou eu?
              </h2>
              <p className='mt-6 font-serif text-2xl md:text-3xl leading-snug text-cafe text-pretty'>
                Sou{" "}
                <span className='font-semibold text-cafe-deep'>
                  Anelita Scaliza Massucate
                </span>
                , mãe e empreendedora apaixonada por transformar marcas e
                pessoas por meio do digital.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation='fade-in-up' delay='delay-200'>
              <dl className='mt-10 grid grid-cols-3 border-y border-cafe/15 divide-x divide-cafe/15'>
                {highlights.map((item) => (
                  <div key={item.label} className='flex flex-col py-5 px-3 first:pl-0 md:px-6'>
                    <dt className='text-sm text-cafe-muted leading-snug order-2'>
                      {item.label}
                    </dt>
                    <dd className='font-serif text-4xl md:text-5xl text-cafe lining-nums tabular-nums order-1 mb-1'>
                      {item.number}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollAnimation>

            <div className='mt-12 space-y-10 max-w-[65ch]'>
              <ScrollAnimation animation='fade-in-up' delay='delay-300'>
                <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-cafe-muted'>
                  Formação Acadêmica
                </h3>
                <p className='mt-3 text-lg text-cafe leading-relaxed'>
                  Graduada em{" "}
                  <strong className='text-cafe-deep'>
                    Administração com Gestão em Sistemas de Informação
                  </strong>{" "}
                  e pós-graduada em{" "}
                  <strong className='text-cafe-deep'>
                    Gestão de Recursos Humanos
                  </strong>
                  , encontrei no design e no marketing digital o espaço ideal
                  para unir minha bagagem estratégica com criatividade e
                  propósito.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation='fade-in-up' delay='delay-300'>
                <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-cafe-muted'>
                  Experiência Profissional
                </h3>
                <p className='mt-3 text-lg text-cafe leading-relaxed'>
                  Atuo como{" "}
                  <strong className='text-cafe-deep'>
                    Designer Gráfica e Social Media
                  </strong>
                  , com foco em performance, posicionamento e identidade
                  visual. Há mais de 5 anos, me dedico à gestão de mídias
                  sociais, ajudando empresas e profissionais autônomos a se
                  destacarem no mercado.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation='fade-in-up' delay='delay-300'>
                <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-cafe-muted'>
                  ASM Marketing Digital
                </h3>
                <p className='mt-3 text-lg text-cafe leading-relaxed'>
                  Hoje, à frente da ASM Marketing Digital, lidero uma equipe
                  qualificada e ofereço soluções completas em conteúdo, tráfego
                  pago, automação, design, criação de sites e consultorias
                  personalizadas.
                </p>
              </ScrollAnimation>
            </div>

            {/* Especialidades */}
            <ScrollAnimation animation='fade-in-up' delay='delay-300'>
              <ul className='mt-12 grid sm:grid-cols-2 gap-x-8 border-t border-cafe/15'>
                {expertise.map((skill) => (
                  <li
                    key={skill.title}
                    className='flex items-start gap-4 py-5 border-b border-cafe/15'
                  >
                    <span className='shrink-0 grid place-items-center w-11 h-11 rounded-full bg-terracota/12 text-terracota'>
                      <skill.icon size={20} strokeWidth={1.75} aria-hidden='true' />
                    </span>
                    <div>
                      <p className='font-semibold text-cafe-deep'>
                        {skill.title}
                      </p>
                      <p className='text-sm text-cafe-muted leading-relaxed'>
                        {skill.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>

        {/* Propósito */}
        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <blockquote className='mt-20 md:mt-28 max-w-4xl mx-auto text-center'>
            <p className='font-serif italic text-3xl md:text-[2.75rem] leading-[1.2] text-cafe text-balance'>
              &ldquo;Meu propósito é impulsionar marcas e pessoas por meio da
              comunicação estratégica, do design com identidade e do marketing
              que gera valor real.&rdquo;
            </p>
            <footer className='mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-cafe-muted'>
              Anelita Massucate
            </footer>
          </blockquote>
        </ScrollAnimation>
      </div>
    </section>
  );
}
