import clsx from "clsx";
import {
  BanknoteArrowUp,
  Bot,
  Brush,
  MessageCircleHeart,
  Presentation,
  SquareArrowOutUpRight,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";

const services = [
  {
    icon: <MessageCircleHeart size={40} />,
    title: "Social Media Estratégico",
    description:
      "Gestão completa do seu Instagram com planejamento de conteúdo, design, legendas profissionais e análise de desempenho.",
  },
  {
    icon: <Brush size={40} />,
    title: "Identidade Visual e Design Profissional",
    description:
      "Criamos uma presença visual única e coerente com os valores e objetivos do seu negócio.",
  },
  {
    icon: <BanknoteArrowUp size={40} />,
    title: "Tráfego Pago com Foco em Conversão",
    description:
      "Campanhas no Instagram, Facebook e Google para atrair o público certo e aumentar suas vendas.",
  },
  {
    icon: <Bot size={40} />,
    title: "Automação e WhatsApp Business",
    description:
      "Fluxos de atendimento automatizados que otimizam seu tempo e melhoram a experiência do seu cliente.",
  },
  {
    icon: <Presentation size={40} />,
    title: "Mentorias e Consultorias",
    description:
      "Para quem precisa de clareza e direcionamento estratégico para crescer com consistência e segurança.",
  },
];

export function Services() {
  return (
    <section className="relative bg-gray-950 text-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="md:flex justify-between itens-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">
            <span className="font-light text-base">Como posso te ajudar? </span>
            <br />
            <span className="font-bold">Conheça meus serviços</span>
          </h2>
          <span>
            <a
              href="https://www.instagram.com/asmmktdigital/"
              target="_blank"
              className="my-2 flex items-center gap-2 bg-white px-4 text-sm py-3 text-gray-600 rounded hover:bg-white/80 transition-all"
            >
              <Image
                src="/instagram-logo.png"
                alt="Logo Instagram"
                width={30}
                height={30}
              />
              Meu instagram
              <SquareArrowOutUpRight size={20} className="ml-auto" />
            </a>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={clsx(
                "border border-white/20 p-6 rounded-lg text-center flex flex-col items-center",
                "hover:shadow-2xl hover:shadow-[#DDCC70]/50 transition-all hover:scale-102"
              )}
            >
              <div className="p-2 rounded-full text-center text-2xl">
                {service.icon}
              </div>
              <p className="text-lg font-medium mb-2 leading-5">
                {service.title}
              </p>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-lg md:flex items-center gap-4">
          <p className="flex-1 mb-4 flex gap-4 items-center text-xl justify-center">
            <Users size={55} className="text-gray-500" />
            <span>+30 clientes atendidos</span>
          </p>
          <p className="flex-1 mb-4 flex gap-4 items-center text-xl justify-center">
            <TrendingUp size={55} className="text-gray-500" />
            <span>+1000 designs criados</span>
          </p>
          {/* <p className="flex-1 mb-4 flex gap-4 items-center text-xl justify-center">
            <Medal size={55} className="text-gray-500" />
            <span>+20 clientes atendidos</span>
          </p> */}
        </div>

        <div className="mt-20 text-lg md:flex items-center gap-10">
          <p className="flex-1 mb-4 flex gap-4 items-center text-xl justify-end font-semibold text-right">
            Está pronto para evoluir sua presença digital com quem entende do
            assunto?
          </p>
          <p className="flex-1 mb-4 flex flex-col gap-4 items-left justify-baseline">
            <CTAButton />
            <span className="text-sm text-gray-300 text-left">
              Agende agora sua consultoria gratuita e receba um plano de ação
              exclusivo com estratégias reais para o seu negócio.
            </span>
          </p>
        </div>
      </div>

      <div className="absolute w-80 h-160 bg-[#DDCC70] rounded-full blur-[100px] opacity-40 -right-20 -bottom-30" />
    </section>
  );
}
