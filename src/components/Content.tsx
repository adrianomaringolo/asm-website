import { CTAEbookButton } from "./CTAEbookButton";

export function Content() {
  return (
    <section className="py-16 px-6 md:px-12 relative">
      <div className="absolute w-60 h-60 bg-[#DDCC70] rounded-full blur-3xl opacity-50 -left-20 -top-10" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">
          <span className="font-bold">Conheça nossos conteúdos</span>
        </h2>
        <CTAEbookButton />
      </div>
    </section>
  );
}
