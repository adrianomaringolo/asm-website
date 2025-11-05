"use client";
import { useState } from "react";
import {
  Hash,
  Copy,
  Shuffle,
  TrendingUp,
  ArrowRightCircle,
} from "lucide-react";

interface HashtagSet {
  category: string;
  tags: string[];
}

export function HashtagGenerator() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("geral");
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const hashtagDatabase: Record<string, HashtagSet[]> = {
    geral: [
      {
        category: "Negócios",
        tags: [
          "#empreendedorismo",
          "#negocios",
          "#sucesso",
          "#inovacao",
          "#lideranca",
          "#gestao",
          "#vendas",
          "#marketing",
          "#estrategia",
          "#crescimento",
        ],
      },
      {
        category: "Marketing Digital",
        tags: [
          "#marketingdigital",
          "#socialmedia",
          "#conteudo",
          "#branding",
          "#seo",
          "#ads",
          "#influencer",
          "#engagement",
          "#viral",
          "#trends",
        ],
      },
    ],
    restaurante: [
      {
        category: "Comida",
        tags: [
          "#gastronomia",
          "#delicia",
          "#sabor",
          "#chef",
          "#culinaria",
          "#receita",
          "#gourmet",
          "#foodie",
          "#instafood",
          "#yummy",
        ],
      },
      {
        category: "Restaurante",
        tags: [
          "#restaurante",
          "#cardapio",
          "#almoco",
          "#jantar",
          "#delivery",
          "#takeaway",
          "#reserva",
          "#ambiente",
          "#atendimento",
          "#qualidade",
        ],
      },
    ],
    moda: [
      {
        category: "Fashion",
        tags: [
          "#moda",
          "#style",
          "#fashion",
          "#look",
          "#outfit",
          "#tendencia",
          "#estilo",
          "#roupas",
          "#acessorios",
          "#beleza",
        ],
      },
      {
        category: "Loja",
        tags: [
          "#loja",
          "#colecao",
          "#novidade",
          "#promocao",
          "#desconto",
          "#lancamento",
          "#exclusivo",
          "#qualidade",
          "#design",
          "#marca",
        ],
      },
    ],
    saude: [
      {
        category: "Bem-estar",
        tags: [
          "#saude",
          "#bemestar",
          "#qualidadedevida",
          "#autocuidado",
          "#mindfulness",
          "#equilibrio",
          "#wellness",
          "#healthy",
          "#lifestyle",
          "#motivacao",
        ],
      },
      {
        category: "Fitness",
        tags: [
          "#fitness",
          "#treino",
          "#academia",
          "#exercicio",
          "#musculacao",
          "#cardio",
          "#forca",
          "#resistencia",
          "#performance",
          "#resultados",
        ],
      },
    ],
  };

  const trendingTags = [
    "#viral",
    "#trending",
    "#fyp",
    "#explorepage",
    "#instagood",
    "#photooftheday",
    "#picoftheday",
    "#instadaily",
    "#follow",
    "#like4like",
    "#reels",
    "#stories",
  ];

  const generateHashtags = () => {
    const categoryData =
      hashtagDatabase[selectedCategory] || hashtagDatabase.geral;
    let allTags: string[] = [];

    // Adiciona tags das categorias
    categoryData.forEach((set) => {
      allTags = [...allTags, ...set.tags];
    });

    // Adiciona algumas trending tags
    const randomTrending = trendingTags
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    allTags = [...allTags, ...randomTrending];

    // Se há uma palavra-chave, adiciona variações
    if (keyword.trim()) {
      const keywordVariations = [
        `#${keyword.toLowerCase().replace(/\s+/g, "")}`,
        `#${keyword.toLowerCase().replace(/\s+/g, "_")}`,
        `#${keyword.toLowerCase()}brasil`,
        `#${keyword.toLowerCase()}sp`,
      ];
      allTags = [...keywordVariations, ...allTags];
    }

    // Embaralha e pega 30 tags únicas
    const shuffled = allTags.sort(() => 0.5 - Math.random());
    const unique = [...new Set(shuffled)].slice(0, 30);

    setGeneratedTags(unique);
  };

  const copyToClipboard = () => {
    const text = generatedTags.join(" ");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    { value: "geral", label: "Geral/Negócios" },
    { value: "restaurante", label: "Restaurante/Food" },
    { value: "moda", label: "Moda/Fashion" },
    { value: "saude", label: "Saúde/Fitness" },
  ];

  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center'>
          <Hash className='text-white' size={24} />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-gray-800'>
            Gerador de Hashtags
          </h3>
          <p className='text-gray-600'>
            Crie hashtags relevantes para suas redes sociais
          </p>
        </div>
      </div>

      <div className='space-y-6'>
        {/* Inputs */}
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Palavra-chave (opcional)
            </label>
            <input
              type='text'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Ex: pizza, academia, vestido...'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Categoria
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateHashtags}
          className='w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold'
        >
          <Shuffle size={20} />
          Gerar Hashtags
        </button>

        {/* Results */}
        {generatedTags.length > 0 && (
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h4 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                <TrendingUp size={20} className='text-purple-600' />
                Hashtags Geradas ({generatedTags.length})
              </h4>
              <button
                onClick={copyToClipboard}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  copied
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Copy size={16} />
                {copied ? "Copiado!" : "Copiar Todas"}
              </button>
            </div>

            <div className='bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto'>
              <div className='flex flex-wrap gap-2'>
                {generatedTags.map((tag, index) => (
                  <span
                    key={index}
                    className='bg-white px-3 py-1 rounded-full text-sm text-purple-700 border border-purple-200 hover:bg-purple-50 cursor-pointer transition-colors'
                    onClick={() => {
                      navigator.clipboard.writeText(tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
              <h5 className='font-semibold text-blue-800 mb-2'>
                💡 Dicas de Uso:
              </h5>
              <ul className='text-sm text-blue-700 space-y-1'>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Use até 30 hashtags no Instagram e 5-10 no LinkedIn
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Misture hashtags populares com nichos específicos
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Evite usar sempre as mesmas hashtags
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Pesquise hashtags da sua região (#sp, #rj, #brasil)
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
