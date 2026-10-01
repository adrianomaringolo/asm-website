import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import { ScrollAnimation } from "../ScrollAnimation";

export function Faq() {
  return (
    <section
      id='perguntas-frequentes'
      className='py-20 md:py-28 px-6 md:px-12 bg-white'
      aria-labelledby='faq-titulo'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100' className='md:col-span-4'>
          <h2 id='faq-titulo' className='text-4xl md:text-5xl leading-[1.1] text-cafe-deep'>
            Perguntas frequentes
          </h2>
          <p className='mt-4 text-cafe-muted leading-relaxed'>
            O essencial sobre a ASM, os serviços e como começar.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation='fade-in-up' delay='delay-200' className='md:col-span-8'>
          <div className='border-t border-cafe/15'>
            {faq.map((item) => (
              <details key={item.question} className='group border-b border-cafe/15'>
                <summary className='flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden'>
                  <h3 className='text-lg font-semibold text-cafe-deep'>
                    {item.question}
                  </h3>
                  <Plus
                    size={20}
                    strokeWidth={1.75}
                    className='shrink-0 text-terracota transition-transform duration-300 ease-out group-open:rotate-45'
                    aria-hidden='true'
                  />
                </summary>
                <p className='pb-6 -mt-2 text-cafe leading-relaxed max-w-[65ch]'>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
