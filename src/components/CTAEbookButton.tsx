import { ArrowRight, BookOpen } from "lucide-react";

export function CTAEbookButton() {
  return (
    <a
      href='https://docs.google.com/forms/d/e/1FAIpQLSf99m1mq3QJiDoZ4uSAoNC1G8ui92BXoPkd3wTQ3k7TrAA3lw/viewform?usp=dialog'
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center gap-5 md:gap-8 w-full max-w-3xl mx-auto rounded-2xl bg-areia text-cafe-deep px-6 py-6 md:px-10 md:py-8 transition-colors duration-200 ease-out hover:bg-white'
    >
      <BookOpen size={44} strokeWidth={1.25} className='shrink-0 text-terracota' aria-hidden='true' />
      <span className='flex-1 text-left'>
        <span className='block text-sm'>Baixe GRATUITAMENTE o nosso e-book</span>
        <strong className='block mt-1 font-serif text-2xl md:text-3xl font-semibold leading-tight'>
          5 Prompts de IA para Criar Conteúdo Rápido, Criativo e Estratégico
        </strong>
      </span>
      <ArrowRight
        size={24}
        strokeWidth={1.75}
        className='shrink-0 hidden sm:block transition-transform duration-300 ease-out group-hover:translate-x-1'
        aria-hidden='true'
      />
    </a>
  );
}
