import clsx from "clsx";
import { Calendar } from "lucide-react";

export function CTAButton() {
  return (
    <button
      className={clsx(
        "bg-gradient-to-r from-[#DDCC70] to-[#776E3C]",
        "font-medium px-6 py-3 rounded hover:opacity-90 transition-all",
        "hover:shadow-2xl hover:shadow-[#776E3C]",
        "cursor-pointer w-full max-w-[360px]"
      )}
    >
      <span className="flex items-center gap-2 w-full">
        <Calendar size={30} />
        <span className="text-left leading-4">
          Agende sua <br />
          consultoria GRATUITA
        </span>
      </span>
    </button>
  );
}
