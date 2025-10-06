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
        "block bg-gradient-to-r from-[#DDCC70] to-[#776E3C]",
        "font-medium px-6 py-5 rounded cursor-pointer w-full max-w-[370px]",
        "hover-scale focus:outline-none focus:ring-2 focus:ring-[#DDCC70] focus:ring-offset-2"
      )}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Agendar consultoria gratuita de marketing digital - Abre em nova aba'
    >
      <span className='flex items-center gap-2 w-full'>
        <Calendar size={30} className='min-w-[30px]' aria-hidden='true' />
        <span className='text-left leading-5'>{text}</span>
      </span>
    </a>
  );
}
