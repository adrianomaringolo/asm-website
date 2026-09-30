import {
  BanknoteArrowUp,
  Brush,
  Camera,
  Globe,
  MessageCircleHeart,
  Presentation,
  SquareArrowOutUpRight,
} from "lucide-react";
import { CTAButton } from "../CTAButton";
import { InstagramIcon } from "../InstagramIcon";
import { ScrollAnimation } from "../ScrollAnimation";

const services = [
  {
    icon: MessageCircleHeart,
    title: "Social Media Estratégico",
    description:
      "Gestão completa do seu Instagram com planejamento de conteúdo, design, legendas profissionais e análise de desempenho.",
  },
  {
    icon: Brush,
    title: "Identidade Visual e Design Profissional",
    description:
      "Criamos uma presença visual única e coerente com os valores e objetivos do seu negócio.",
  },
  {
    icon: BanknoteArrowUp,
    title: "Tráfego Pago com Foco em Conversão",
    description:
      "Campanhas no Instagram, Facebook e Google para atrair o público certo e aumentar suas vendas.",
  },
  {
    icon: Camera,
    title: "Ensaio Imagem e Essência",
    description:
      "Fotos realistas criadas pela Inteligência Artificial, inspiradas na sua autenticidade. Uma experiência criativa e exclusiva para revelar com arte e tecnologia quem você é em essência.",
  },
  {
    icon: Presentation,
    title: "Mentorias e Consultorias",
    description:
      "Para quem precisa de clareza e direcionamento estratégico para crescer com consistência e segurança.",
  },
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description:
      "Tenha um site moderno, responsivo e otimizado para o Google. Transmita confiança, conquiste clientes e fortaleça sua presença digital com uma estrutura personalizada e estratégica para o seu negócio.",
  },
];

const numbers = [
  { value: "+30", label: "clientes atendidos" },
  { value: "+1000", label: "designs criados" },
];

export function Services() {
  return (
    <section
      id='servicos'
      className='bg-cafe-deep text-white py-20 md:py-28 px-6 md:px-12'
      aria-label='Nossos serviços de marketing digital'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
          <ScrollAnimation animation='fade-in-up' delay='delay-100'>
            <h2 className='text-4xl md:text-5xl leading-[1.1]'>
              Como posso te ajudar?
            </h2>
            <p className='mt-3 text-lg text-white/80'>Conheça nossos serviços</p>
          </ScrollAnimation>

          <ScrollAnimation animation='fade-in-up' delay='delay-200'>
            <a
              href='https://www.instagram.com/anelitasmassucate/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2.5 text-sm font-semibold text-areia border border-areia/40 rounded-full px-5 py-2.5 hover:bg-areia hover:text-cafe-deep transition-colors duration-200'
            >
              <InstagramIcon size={18} />
              Meu instagram
              <SquareArrowOutUpRight size={14} strokeWidth={1.75} aria-hidden='true' />
            </a>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation='fade-in-up' delay='delay-300'>
          <ul className='mt-14 grid md:grid-cols-2 gap-x-16 border-t border-dourado/25'>
            {services.map((service) => (
              <li
                key={service.title}
                className='flex gap-5 py-8 border-b border-dourado/25'
              >
                <service.icon
                  size={28}
                  strokeWidth={1.25}
                  className='shrink-0 mt-1 text-dourado'
                  aria-hidden='true'
                />
                <div>
                  <h3 className='font-serif text-2xl leading-tight text-white'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-white/75 leading-relaxed max-w-[52ch]'>
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <dl className='mt-16 grid grid-cols-2 divide-x divide-dourado/25'>
            {numbers.map((n) => (
              <div key={n.label} className='flex flex-col items-center text-center px-4'>
                <dt className='order-2 mt-1 text-sm md:text-base text-white/75'>
                  {n.label}
                </dt>
                <dd className='order-1 font-serif text-5xl md:text-6xl text-dourado lining-nums'>
                  {n.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200'>
          <div className='mt-20 rounded-2xl border border-dourado/25 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <p className='font-serif text-3xl md:text-4xl leading-[1.15] text-white text-balance'>
                Está pronto para evoluir sua presença digital com quem entende
                do assunto?
              </p>
              <p className='mt-4 text-white/75 leading-relaxed'>
                Agende agora sua consultoria gratuita e receba um plano de ação
                exclusivo com estratégias reais para o seu negócio.
              </p>
            </div>
            <div className='md:justify-self-end w-full max-w-[370px]'>
              <CTAButton tone='light' />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
