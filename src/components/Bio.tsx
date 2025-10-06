import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

export function Bio() {
  return (
    <section
      id='bio'
      className='py-16 px-6 md:px-12 bg-white'
      aria-label='Biografia de Anelita Massucate'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10'>
        <ScrollAnimation animation='fade-in-left' delay='delay-100'>
          <div className='flex justify-end items-center h-full'>
            <Image
              src='/photo-bio.webp'
              alt='Foto de rosto da Anelita'
              width={400}
              height={400}
              className='rounded-lg bg-gray-200 hover-scale'
            />
          </div>
        </ScrollAnimation>

        <div>
          <ScrollAnimation animation='fade-in-right' delay='delay-100'>
            <h2 className='text-2xl font-bold mb-4'>Quem sou eu?</h2>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-200'>
            <p className='text-gray-700 mb-4'>
              Sou Anelita Scaliza Massucate, mãe e empreendedora apaixonada por
              transformar marcas e pessoas por meio do digital.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-300'>
            <p className='text-gray-700 mb-4'>
              Graduada em Administração com Gestão em Sistemas de Informação e
              pós-graduada em Gestão de Recursos Humanos, encontrei no design e
              no marketing digital o espaço ideal para unir minha bagagem
              estratégica com criatividade e propósito.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-400'>
            <p className='text-gray-700 mb-4'>
              Atuo como Designer Gráfica e Social Media, com foco em
              performance, posicionamento e identidade visual. Há mais de 5
              anos, me dedico à gestão de mídias sociais, ajudando empresas e
              profissionais autônomos a se destacarem no mercado com conteúdos
              que conectam, geram autoridade e impulsionam resultados.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-500'>
            <p className='text-gray-700 mb-4'>
              Hoje, à frente da ASM Marketing Digital, lidero uma equipe
              qualificada e ofereço soluções completas em conteúdo, tráfego
              pago, automação, design, criação de sites e consultorias
              personalizadas.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-600'>
            <p className='text-gray-700 mb-4'>
              Meu propósito é impulsionar marcas e pessoas por meio da
              comunicação estratégica, do design com identidade e do marketing
              que gera valor real.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-700'>
            <p className='text-gray-700 mb-4'>
              Acredito no poder do digital como ferramenta de transformação — e
              trabalho todos os dias para que empresas e profissionais autônomos
              se posicionem com clareza, autenticidade e resultados
              consistentes.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
