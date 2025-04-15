import clsx from "clsx";
import { Book } from "lucide-react";
import { ReactNode } from "react";

export function CTAEbookButton({
  text = (
    <>
      <span className="font-light">Baixe GRATUITAMENTE o nosso e-book</span>
      <br />
      <strong className="font-bold text-xl">
        5 Prompts de IA para Criar Conteúdo Rápido, Criativo e Estratégico
      </strong>
    </>
  ),
}: {
  text?: ReactNode;
}) {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSf99m1mq3QJiDoZ4uSAoNC1G8ui92BXoPkd3wTQ3k7TrAA3lw/viewform?usp=dialog"
      className={clsx(
        "block bg-gradient-to-r from-[#DDCC70] to-[#776E3C]",
        "font-medium px-1 py-1 rounded-[15px] hover:opacity-90 transition-all",
        "hover:shadow-2xl hover:shadow-[#776E3C]",
        "cursor-pointer w-full"
      )}
    >
      <span className="bg-white flex items-center gap-4 w-full rounded-[12px] px-6 py-5 hover:bg-white/80 transition-colors">
        <Book size={50} className="min-w-[50px]" />
        <span className="text-left leading-5">{text}</span>
      </span>
    </a>
  );
}
