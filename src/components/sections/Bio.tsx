import Image from "next/image";
import { ScrollAnimation } from "../ScrollAnimation";
import { FloatingAnimation } from "../FloatingAnimation";
import { ParticleField } from "../ParticleField";

export function Bio() {
  const highlights = [
    { number: "5+", label: "Anos de experiência" },
    { number: "100+", label: "Projetos realizados" },
    { number: "30+", label: "Clientes satisfeitos" },
  ];

  const expertise = [
    {
      icon: "🎨",
      title: "Design Gráfico",
      description: "Identidade visual e materiais criativos",
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Gestão estratégica de redes sociais",
    },
    {
      icon: "🎯",
      title: "Gestão de Tráfego",
      description: "Campanhas pagas otimizadas",
    },
    {
      icon: "⚡",
      title: "Automação",
      description: "Processos inteligentes e eficientes",
    },
    {
      icon: "💡",
      title: "Consultoria",
      description: "Estratégias personalizadas",
    },
  ];

  return (
    <section
      id='bio'
      className='py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'
      aria-label='Biografia de Anelita Massucate'
    >
      <ParticleField />
      {/* Elementos decorativos flutuantes */}
      <FloatingAnimation delay={0.5}>
        <div className='absolute w-40 h-40 bg-[#DDCC70] rounded-full blur-3xl opacity-20 -left-10 top-20' />
      </FloatingAnimation>
      <FloatingAnimation delay={1}>
        <div className='absolute w-32 h-32 bg-[#776E3C] rounded-full blur-2xl opacity-15 -right-10 bottom-20' />
      </FloatingAnimation>

      <div className='max-w-6xl mx-auto'>
        {/* Título principal com destaque */}
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#776E3C] to-[#DDCC70] bg-clip-text text-transparent'>
              Quem sou eu?
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-[#DDCC70] to-[#776E3C] mx-auto rounded-full'></div>
          </div>
        </ScrollAnimation>

        <div className='grid md:grid-cols-2 items-start gap-12'>
          {/* Coluna da imagem com elementos interativos */}
          <ScrollAnimation animation='fade-in-left' delay='delay-200'>
            <div className='relative'>
              {/* Foto principal - reduzida */}
              <div className='relative group mb-8 flex justify-center'>
                <div className='relative'>
                  <div className='absolute -inset-2 bg-gradient-to-r from-[#DDCC70] to-[#776E3C] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
                  <Image
                    src='/photo-bio.webp'
                    alt='Foto de rosto da Anelita'
                    width={280}
                    height={280}
                    className='relative rounded-2xl bg-gray-200 hover:scale-105 transition-transform duration-500'
                  />
                </div>
              </div>

              {/* Cards de expertise com ícones e descrições */}
              <div className='space-y-4'>
                {expertise.map((skill, index) => (
                  <ScrollAnimation
                    key={skill.title}
                    animation='fade-in-left'
                    delay={`delay-${400 + index * 100}`}
                  >
                    <div className='bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group'>
                      <div className='flex items-start space-x-3'>
                        <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                          {skill.icon}
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-gray-800 mb-1'>
                            {skill.title}
                          </h4>
                          <p className='text-sm text-gray-600 leading-relaxed'>
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Coluna do conteúdo */}
          <div className='space-y-6'>
            {/* Introdução destacada */}
            <ScrollAnimation animation='fade-in-right' delay='delay-200'>
              <div className='bg-gradient-to-r from-[#DDCC70]/10 to-[#776E3C]/10 rounded-xl p-6 border-l-4 border-[#DDCC70]'>
                <p className='text-lg font-medium text-gray-800 leading-relaxed'>
                  Sou{" "}
                  <span className='font-bold text-[#776E3C]'>
                    Anelita Scaliza Massucate
                  </span>
                  , mãe e empreendedora apaixonada por transformar marcas e
                  pessoas por meio do digital.
                </p>
              </div>
            </ScrollAnimation>

            {/* Números de destaque */}
            <ScrollAnimation animation='fade-in-up' delay='delay-300'>
              <div className='grid grid-cols-3 gap-4 my-8'>
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className='text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100'
                  >
                    <div className='text-2xl font-bold text-[#776E3C] mb-1'>
                      {item.number}
                    </div>
                    <div className='text-sm text-gray-600'>{item.label}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Formação acadêmica */}
            <ScrollAnimation animation='fade-in-up' delay='delay-400'>
              <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
                <h3 className='font-semibold text-[#776E3C] mb-3 flex items-center'>
                  <span className='w-2 h-2 bg-[#DDCC70] rounded-full mr-3'></span>
                  Formação Acadêmica
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Graduada em{" "}
                  <strong>
                    Administração com Gestão em Sistemas de Informação
                  </strong>{" "}
                  e pós-graduada em <strong>Gestão de Recursos Humanos</strong>,
                  encontrei no design e no marketing digital o espaço ideal para
                  unir minha bagagem estratégica com criatividade e propósito.
                </p>
              </div>
            </ScrollAnimation>

            {/* Experiência profissional */}
            <ScrollAnimation animation='fade-in-up' delay='delay-500'>
              <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
                <h3 className='font-semibold text-[#776E3C] mb-3 flex items-center'>
                  <span className='w-2 h-2 bg-[#DDCC70] rounded-full mr-3'></span>
                  Experiência Profissional
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Atuo como <strong>Designer Gráfica e Social Media</strong>,
                  com foco em performance, posicionamento e identidade visual.
                  Há mais de 5 anos, me dedico à gestão de mídias sociais,
                  ajudando empresas e profissionais autônomos a se destacarem no
                  mercado.
                </p>
              </div>
            </ScrollAnimation>

            {/* ASM Marketing Digital */}
            <ScrollAnimation animation='fade-in-up' delay='delay-600'>
              <div className='bg-gradient-to-r from-[#776E3C] to-[#DDCC70] rounded-xl p-6 text-white'>
                <h3 className='font-semibold mb-3 flex items-center'>
                  <span className='w-2 h-2 bg-white rounded-full mr-3'></span>
                  ASM Marketing Digital
                </h3>
                <p className='leading-relaxed opacity-95'>
                  Hoje, à frente da ASM Marketing Digital, lidero uma equipe
                  qualificada e ofereço soluções completas em conteúdo, tráfego
                  pago, automação, design, criação de sites e consultorias
                  personalizadas.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        {/* Propósito */}
        <ScrollAnimation animation='fade-in-up' delay='delay-700'>
          <div className='text-center p-6 bg-gray-50 rounded-xl border-2 border-dashed border-[#DDCC70] mt-10'>
            <p className='text-gray-700 leading-relaxed italic'>
              &quot;Meu propósito é impulsionar marcas e pessoas por meio da
              comunicação estratégica, do design com identidade e do marketing
              que gera valor real.&quot;
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
