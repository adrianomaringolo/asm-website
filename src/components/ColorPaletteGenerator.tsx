"use client";
import { useState } from "react";
import {
  Palette,
  Copy,
  Shuffle,
  Eye,
  Download,
  ArrowRightCircle,
} from "lucide-react";

interface Color {
  hex: string;
  name: string;
  usage: string;
}

interface ColorPalette {
  name: string;
  colors: Color[];
  mood: string;
  industry: string[];
}

export function ColorPaletteGenerator() {
  const [selectedMood, setSelectedMood] = useState("profissional");
  const [selectedIndustry, setSelectedIndustry] = useState("tecnologia");
  const [currentPalette, setCurrentPalette] = useState<ColorPalette | null>(
    null
  );
  const [copiedColor, setCopiedColor] = useState("");

  const colorPalettes: Record<string, ColorPalette[]> = {
    profissional: [
      {
        name: "Corporate Blue",
        colors: [
          { hex: "#1E3A8A", name: "Navy Blue", usage: "Primária - Confiança" },
          { hex: "#3B82F6", name: "Blue", usage: "Secundária - Ação" },
          { hex: "#93C5FD", name: "Light Blue", usage: "Accent - Suave" },
          { hex: "#F8FAFC", name: "Off White", usage: "Background" },
          { hex: "#1F2937", name: "Dark Gray", usage: "Texto principal" },
        ],
        mood: "Confiável, Profissional, Estável",
        industry: ["Tecnologia", "Finanças", "Consultoria", "Saúde"],
      },
      {
        name: "Elegant Gray",
        colors: [
          {
            hex: "#111827",
            name: "Charcoal",
            usage: "Primária - Sofisticação",
          },
          { hex: "#6B7280", name: "Gray", usage: "Secundária - Neutro" },
          { hex: "#D1D5DB", name: "Light Gray", usage: "Borders" },
          { hex: "#F9FAFB", name: "Almost White", usage: "Background" },
          { hex: "#DC2626", name: "Red Accent", usage: "CTA - Urgência" },
        ],
        mood: "Sofisticado, Minimalista, Elegante",
        industry: ["Arquitetura", "Design", "Advocacia", "Luxo"],
      },
    ],
    criativo: [
      {
        name: "Vibrant Sunset",
        colors: [
          { hex: "#F59E0B", name: "Amber", usage: "Primária - Energia" },
          { hex: "#EF4444", name: "Red", usage: "Secundária - Paixão" },
          { hex: "#8B5CF6", name: "Purple", usage: "Accent - Criatividade" },
          { hex: "#FEF3C7", name: "Light Yellow", usage: "Background" },
          { hex: "#374151", name: "Dark Gray", usage: "Texto" },
        ],
        mood: "Energético, Criativo, Inspirador",
        industry: ["Design", "Arte", "Entretenimento", "Educação"],
      },
      {
        name: "Ocean Breeze",
        colors: [
          { hex: "#0891B2", name: "Cyan", usage: "Primária - Frescor" },
          { hex: "#06B6D4", name: "Light Cyan", usage: "Secundária - Calma" },
          { hex: "#A7F3D0", name: "Mint", usage: "Accent - Natureza" },
          { hex: "#F0FDFA", name: "Mint White", usage: "Background" },
          { hex: "#1F2937", name: "Dark Blue", usage: "Texto" },
        ],
        mood: "Refrescante, Calmo, Natural",
        industry: ["Spa", "Turismo", "Sustentabilidade", "Wellness"],
      },
    ],
    moderno: [
      {
        name: "Neon Tech",
        colors: [
          { hex: "#8B5CF6", name: "Purple", usage: "Primária - Inovação" },
          { hex: "#06FFA5", name: "Neon Green", usage: "Secundária - Tech" },
          { hex: "#FF6B6B", name: "Coral", usage: "Accent - Energia" },
          { hex: "#0F0F23", name: "Dark Purple", usage: "Background" },
          { hex: "#FFFFFF", name: "White", usage: "Texto/Contraste" },
        ],
        mood: "Futurista, Inovador, Dinâmico",
        industry: ["Tecnologia", "Gaming", "Startups", "AI"],
      },
      {
        name: "Gradient Flow",
        colors: [
          { hex: "#667EEA", name: "Soft Purple", usage: "Primária - Suave" },
          {
            hex: "#764BA2",
            name: "Deep Purple",
            usage: "Secundária - Profundo",
          },
          { hex: "#F093FB", name: "Pink", usage: "Accent - Feminino" },
          { hex: "#FFECD2", name: "Cream", usage: "Background" },
          { hex: "#2D3748", name: "Slate", usage: "Texto" },
        ],
        mood: "Suave, Moderno, Inclusivo",
        industry: ["SaaS", "Apps", "E-commerce", "Lifestyle"],
      },
    ],
  };

  const generatePalette = () => {
    const moodPalettes = colorPalettes[selectedMood] || [];
    const industryFiltered = moodPalettes.filter((palette) =>
      palette.industry.some((ind) =>
        ind.toLowerCase().includes(selectedIndustry.toLowerCase())
      )
    );

    const availablePalettes =
      industryFiltered.length > 0 ? industryFiltered : moodPalettes;

    if (availablePalettes.length > 0) {
      const randomPalette =
        availablePalettes[Math.floor(Math.random() * availablePalettes.length)];
      setCurrentPalette(randomPalette);
    }
  };

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(""), 2000);
  };

  const copyAllColors = () => {
    if (!currentPalette) return;
    const allColors = currentPalette.colors.map((c) => c.hex).join(", ");
    navigator.clipboard.writeText(allColors);
    setCopiedColor("all");
    setTimeout(() => setCopiedColor(""), 2000);
  };

  const moods = [
    { value: "profissional", label: "Profissional", emoji: "💼" },
    { value: "criativo", label: "Criativo", emoji: "🎨" },
    { value: "moderno", label: "Moderno", emoji: "🚀" },
  ];

  const industries = [
    { value: "tecnologia", label: "Tecnologia" },
    { value: "saude", label: "Saúde" },
    { value: "educacao", label: "Educação" },
    { value: "financas", label: "Finanças" },
    { value: "design", label: "Design" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "consultoria", label: "Consultoria" },
    { value: "alimentacao", label: "Alimentação" },
  ];

  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center'>
          <Palette className='text-white' size={24} />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-gray-800'>
            Gerador de Paleta de Cores
          </h3>
          <p className='text-gray-600'>
            Crie paletas harmoniosas para sua marca
          </p>
        </div>
      </div>

      <div className='space-y-6'>
        {/* Mood Selection */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            Estilo da Marca
          </label>
          <div className='grid grid-cols-3 gap-3'>
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedMood === mood.value
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className='text-2xl mb-2'>{mood.emoji}</div>
                <div className='text-sm font-medium'>{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Industry Selection */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Segmento de Atuação
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePalette}
          className='w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold'
        >
          <Shuffle size={20} />
          Gerar Paleta
        </button>

        {/* Results */}
        {currentPalette && (
          <div className='space-y-6'>
            <div className='text-center'>
              <h4 className='text-xl font-bold text-gray-800 mb-2'>
                {currentPalette.name}
              </h4>
              <p className='text-gray-600 mb-1'>{currentPalette.mood}</p>
              <p className='text-sm text-gray-500'>
                Ideal para: {currentPalette.industry.join(", ")}
              </p>
            </div>

            {/* Color Palette Display */}
            <div className='grid grid-cols-5 gap-2 mb-4'>
              {currentPalette.colors.map((color, index) => (
                <div key={index} className='text-center'>
                  <div
                    className='w-full h-20 rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-md'
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyColor(color.hex)}
                  />
                  <div className='mt-2'>
                    <div className='text-xs font-mono text-gray-600'>
                      {color.hex}
                    </div>
                    <div className='text-xs text-gray-500 mt-1'>
                      {color.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Usage Guide */}
            <div className='bg-gray-50 rounded-lg p-4'>
              <h5 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                <Eye size={16} />
                Guia de Uso das Cores:
              </h5>
              <div className='space-y-2'>
                {currentPalette.colors.map((color, index) => (
                  <div key={index} className='flex items-center gap-3 text-sm'>
                    <div
                      className='w-4 h-4 rounded-full border border-gray-300'
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className='font-medium'>{color.name}:</span>
                    <span className='text-gray-600'>{color.usage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3'>
              <button
                onClick={copyAllColors}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 ${
                  copiedColor === "all"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Copy size={16} />
                {copiedColor === "all" ? "Copiado!" : "Copiar Códigos"}
              </button>

              <button
                onClick={generatePalette}
                className='flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all duration-300'
              >
                <Shuffle size={16} />
                Nova Paleta
              </button>
            </div>

            {/* Tips */}
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
              <h5 className='font-semibold text-blue-800 mb-2'>
                💡 Dicas de Aplicação:
              </h5>
              <ul className='text-sm text-blue-700 space-y-1'>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Use a cor primária para elementos principais (logo, botões)
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />A secundária para
                  destaques e links
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Cores de accent com moderação para chamar atenção
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Mantenha contraste adequado para acessibilidade
                </li>
                <li className='flex gap-2 items-center'>
                  <ArrowRightCircle className='w-5 h-5' />
                  Teste as cores em diferentes dispositivos
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
