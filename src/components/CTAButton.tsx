import clsx from "clsx";
import { Calendar } from "lucide-react";
import { ReactNode } from "react";

export function CTAButton({
  text = <>Agende sua consultoria gratuita e ganhe o plano de ação</>,
  tone = "dark",
}: {
  text?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <a
      href='https://docs.google.com/forms/d/e/1FAIpQLSdKF-9LGmGABUpvRV8oT_DwGlO7A4ea4XKZ53Wr-rO-9KY9Ng/viewform?usp=sf_link'
      className={clsx(
        "flex items-center gap-3 w-full max-w-[370px] px-6 py-5 rounded-xl font-semibold",
        "transition-colors duration-200 ease-out",
        tone === "dark"
          ? "bg-cafe text-white hover:bg-cafe-deep"
          : "bg-areia text-cafe-deep hover:bg-white"
      )}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Agendar consultoria gratuita de marketing digital - Abre em nova aba'
    >
      <Calendar size={26} strokeWidth={1.75} className='shrink-0' aria-hidden='true' />
      <span className='text-left leading-5'>{text}</span>
    </a>
  );
}
