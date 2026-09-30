import Image from "next/image";

export function Footer() {
  return (
    <footer className='bg-cafe-deep text-areia'>
      <div
        className="h-16 md:h-20 bg-[url('/brand/pattern-logotipo.webp')] bg-[length:540px] bg-repeat-x bg-center"
        aria-hidden='true'
      />
      <div className='max-w-6xl mx-auto px-6 md:px-12 py-14 flex flex-col items-center gap-6 text-center'>
        <Image
          src='/brand/logo-asm-dourado.webp'
          alt='ASM Marketing Digital'
          width={869}
          height={176}
          className='w-56 h-auto'
        />
        <div className='text-sm text-areia/80 space-y-1'>
          <p>
            © {new Date().getFullYear()} ASM Marketing Digital · Todos os
            direitos reservados
          </p>
          <p className='text-xs text-areia/70'>
            Desenvolvido por{" "}
            <a
              href='https://adrianomaringolo.dev'
              className='underline underline-offset-4 hover:text-white transition-colors'
            >
              adrianomaringolo.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
