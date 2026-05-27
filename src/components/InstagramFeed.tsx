"use client";
import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import Image from "next/image";

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

  if (hasError) {
    return (
      <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
        <div className='text-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <Image src='/instagram-logo.png' alt='Instagram' width={32} height={32} />
          </div>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>
            Siga-nos no Instagram
          </h3>
          <p className='text-gray-600 mb-6'>
            Não foi possível carregar o feed. Visite nosso perfil diretamente:
          </p>
          <a
            href='https://instagram.com/anelitasmassucate'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold'
          >
            <Image src='/instagram-logo.png' alt='Instagram' width={20} height={20} />
            Seguir no Instagram
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center'>
          <Image src='/instagram-logo.png' alt='Instagram' width={24} height={24} />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-gray-800'>Nosso Instagram</h3>
          <p className='text-gray-600'>
            Acompanhe nossos últimos posts e cases de sucesso
          </p>
        </div>
      </div>

      {!isLoaded && (
        <div className='flex items-center justify-center py-12'>
          <Loader2 className='animate-spin text-gray-400' size={32} />
          <span className='ml-3 text-gray-600'>
            Carregando feed do Instagram...
          </span>
        </div>
      )}

      {/* Widget do Elfsight */}
      <div
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className='elfsight-app-98dd8bf7-186a-4895-8828-06b3dd05a2aa'
          data-elfsight-app-lazy
        />
      </div>

      {/* Link para o perfil */}
      <div className='mt-6 text-center'>
        <a
          href='https://instagram.com/anelitasmassucate'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors font-medium'
        >
          <Image src='/instagram-logo.png' alt='Instagram' width={18} height={18} />
          Ver mais no Instagram
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
