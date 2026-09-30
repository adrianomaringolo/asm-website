"use client";
import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

export function InstagramFeed() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Verificar se o script já foi carregado
    if (
      document.querySelector(
        'script[src="https://elfsightcdn.com/platform.js"]'
      )
    ) {
      setIsLoaded(true);
      return;
    }

    // Criar e carregar o script do Elfsight
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setHasError(true);
      console.error("Erro ao carregar o widget do Instagram");
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://elfsightcdn.com/platform.js"]'
      );
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const profileLink = (
    <a
      href='https://instagram.com/anelitasmassucate'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center gap-2 text-sm font-semibold text-cafe underline underline-offset-4 decoration-terracota/60 hover:text-cafe-deep hover:decoration-terracota transition-colors duration-200'
    >
      <InstagramIcon size={18} />
      {hasError ? "Seguir no Instagram" : "Ver mais no Instagram"}
      <ExternalLink size={14} strokeWidth={1.75} aria-hidden='true' />
    </a>
  );

  return (
    <div>
      <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-cafe/15'>
        <div className='flex items-center gap-4'>
          <span className='grid place-items-center w-12 h-12 rounded-full bg-terracota/12 text-terracota shrink-0'>
            <InstagramIcon size={22} />
          </span>
          <div>
            <h2 className='text-4xl md:text-5xl leading-[1.1] text-cafe-deep'>
              {hasError ? "Siga-nos no Instagram" : "Nosso Instagram"}
            </h2>
            <p className='mt-2 text-cafe-muted'>
              {hasError
                ? "Não foi possível carregar o feed. Visite nosso perfil diretamente:"
                : "Acompanhe nossos últimos posts e cases de sucesso"}
            </p>
          </div>
        </div>
        {profileLink}
      </div>

      {!hasError && !isLoaded && (
        <div className='flex items-center justify-center py-16 text-cafe-muted'>
          <Loader2 className='animate-spin' size={28} strokeWidth={1.75} aria-hidden='true' />
          <span className='ml-3'>Carregando feed do Instagram...</span>
        </div>
      )}

      {!hasError && (
        <div
          className={`mt-8 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className='elfsight-app-98dd8bf7-186a-4895-8828-06b3dd05a2aa'
            data-elfsight-app-lazy
          />
        </div>
      )}
    </div>
  );
}
