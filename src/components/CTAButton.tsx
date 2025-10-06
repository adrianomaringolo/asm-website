import clsx from "clsx";
import { Calendar } from "lucide-react";
import { ReactNode } from "react";

export function CTAButton({
  text = <>Agende sua consultoria gratuita e ganhe o plano de ação</>,
}: {
  text?: ReactNode;
}) {
  return (
    <a
      href='https://docs.google.com/forms/d/e/1FAIpQLSdKF-9LGmGABUpvRV8oT_DwGlO7A4ea4XKZ53Wr-rO-9KY9Ng/viewform?usp=sf_link'
      className={clsx(
        "block gradient-mesh font-medium px-6 py-5 rounded-xl cursor-pointer w-full max-w-[370px]",
        "hover-scale focus:outline-none focus:ring-2 focus:ring-[#DDCC70] focus:ring-offset-2",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "relative overflow-hidden group"
      )}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Agendar consultoria gratuita de marketing digital - Abre em nova aba'
    >
      {/* Efeito de brilho no hover */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>

      <span className='flex items-center gap-2 w-full relative z-10'>
        <Calendar size={30} className='min-w-[30px]' aria-hidden='true' />
        <span className='text-left leading-5 font-semibold'>{text}</span>
      </span>
    </a>
  );
}
