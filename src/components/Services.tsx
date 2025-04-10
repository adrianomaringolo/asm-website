import { Instagram, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Instagram size={40} />,
    title: "Gestão de Instagram",
    description: "Conteúdo, agendamento, análise e crescimento",
  },
  {
    icon: <Instagram size={40} />,
    title: "Gestão de Instagram",
    description: "Conteúdo, agendamento, análise e crescimento",
  },
  {
    icon: <Instagram size={40} />,
    title: "Gestão de Instagram",
    description: "Conteúdo, agendamento, análise e crescimento",
  },
  {
    icon: <Instagram size={40} />,
    title: "Gestão de Instagram",
    description: "Conteúdo, agendamento, análise e crescimento",
  },
  {
    icon: <Instagram size={40} />,
    title: "Gestão de Instagram",
    description: "Conteúdo, agendamento, análise e crescimento",
  },
  {
    icon: <Instagram size={40} />,
    title: "Gestão de Instagram",
    description: "Conteúdo, agendamento, análise e crescimento",
  },
];

export function Services() {
  return (
    <section className="relative bg-dark text-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-between itens-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">
            <span className="font-light text-base">Como posso te ajudar? </span>
            <br />
            <span className="font-bold">Conheça meus serviços</span>
          </h2>
          <span>
            <a
              href="https://www.instagram.com/asmmktdigital/"
              target="_blank"
              className="flex items-center gap-2 bg-white px-4 text-sm py-3 text-gray-600 rounded hover:bg-white/80 transition-all"
            >
              <Image
                src="/instagram-logo.png"
                alt="Logo Instagram"
                width={30}
                height={30}
              />
              Meu instagram
              <SquareArrowOutUpRight size={20} />
            </a>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-white/20 p-6 rounded-lg text-center flex flex-col items-center"
            >
              <div className="p-2 rounded-full text-center text-2xl">
                {service.icon}
              </div>
              <p className="text-lg font-medium mb-2">{service.title}</p>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-lg">
          <p className="mb-4">+20 clientes atendidos</p>
          <p>+1000 posts em redes sociais</p>
        </div>
      </div>
      <div className="absolute w-60 h-80 bg-[#DDCC70] rounded-full blur-[100px] opacity-50 -right-20 -bottom-20" />
    </section>
  );
}
