import clsx from "clsx";
import { Calendar } from "lucide-react";
import { ReactNode } from "react";

export function CTAButton({
  text = (
    <>
      Agende sua <br />
      consultoria GRATUITA
    </>
  ),
}: {
  text?: ReactNode;
}) {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdKF-9LGmGABUpvRV8oT_DwGlO7A4ea4XKZ53Wr-rO-9KY9Ng/viewform?usp=sf_link"
      className={clsx(
        "block bg-gradient-to-r from-[#DDCC70] to-[#776E3C]",
        "font-medium px-6 py-5 rounded hover:opacity-90 transition-all",
        "hover:shadow-2xl hover:shadow-[#776E3C]",
        "cursor-pointer w-full max-w-[370px]"
      )}
    >
      <span className="flex items-center gap-2 w-full">
        <Calendar size={30} className="min-w-[30px]" />
        <span className="text-left leading-4">{text}</span>
      </span>
    </a>
  );
}
