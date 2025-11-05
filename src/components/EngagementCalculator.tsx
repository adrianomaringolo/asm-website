"use client";
import { useState } from "react";
import {
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share,
  BarChart3,
  ArrowDownFromLine,
  ArrowRightCircle,
} from "lucide-react";

interface EngagementData {
  followers: number;
  likes: number;
  comments: number;
  shares: number;
  saves?: number;
}

interface EngagementResult {
  rate: number;
  quality: string;
  color: string;
  recommendations: string[];
}

export function EngagementCalculator() {
  const [platform, setPlatform] = useState("instagram");
  const [followers, setFollowers] = useState("");
  const [likes, setLikes] = useState("");
  const [comments, setComments] = useState("");
  const [shares, setShares] = useState("");
  const [saves, setSaves] = useState("");
  const [result, setResult] = useState<EngagementResult | null>(null);

  const calculateEngagement = () => {
    const followersNum = parseInt(followers) || 0;
    const likesNum = parseInt(likes) || 0;
    const commentsNum = parseInt(comments) || 0;
    const sharesNum = parseInt(shares) || 0;
    const savesNum = parseInt(saves) || 0;

    if (followersNum === 0) return;

    let totalEngagement = likesNum + commentsNum;

    // Diferentes pesos por plataforma
    if (platform === "instagram") {
      totalEngagement += commentsNum * 2 + sharesNum * 3 + savesNum * 4;
    } else if (platform === "linkedin") {
      totalEngagement += commentsNum * 3 + sharesNum * 5;
    } else if (platform === "facebook") {
      totalEngagement += commentsNum * 2 + sharesNum * 4;
    } else if (platform === "tiktok") {
      totalEngagement += commentsNum * 1.5 + sharesNum * 6;
    }

    const engagementRate = (totalEngagement / followersNum) * 100;

    let quality = "";
    let color = "";
    let recommendations: string[] = [];

    // Benchmarks por plataforma
    const benchmarks = {
      instagram: { excellent: 6, good: 3, average: 1 },
      linkedin: { excellent: 5, good: 2, average: 0.5 },
      facebook: { excellent: 3, good: 1, average: 0.3 },
      tiktok: { excellent: 15, good: 8, average: 3 },
    };

    const bench = benchmarks[platform as keyof typeof benchmarks];

    if (engagementRate >= bench.excellent) {
      quality = "Excelente";
      color = "text-green-600";
      recommendations = [
        "Parabéns! Seu engajamento está acima da média",
        "Continue produzindo conteúdo de qualidade",
        "Considere aumentar a frequência de posts",
        "Explore parcerias e colaborações",
      ];
    } else if (engagementRate >= bench.good) {
      quality = "Bom";
      color = "text-blue-600";
      recommendations = [
        "Bom engajamento! Há espaço para crescer",
        "Teste diferentes tipos de conteúdo",
        "Interaja mais com seus seguidores",
        "Use stories e recursos interativos",
      ];
    } else if (engagementRate >= bench.average) {
      quality = "Médio";
      color = "text-yellow-600";
      recommendations = [
        "Engajamento na média, vamos melhorar!",
        "Revise sua estratégia de conteúdo",
        "Poste nos melhores horários",
        "Use hashtags mais relevantes",
      ];
    } else {
      quality = "Baixo";
      color = "text-red-600";
      recommendations = [
        "Engajamento abaixo da média",
        "Analise seu público-alvo",
        "Melhore a qualidade visual do conteúdo",
        "Seja mais consistente nas postagens",
        "Considere investir em ads para alcance",
      ];
    }

    setResult({
      rate: engagementRate,
      quality,
      color,
      recommendations,
    });
  };

  const platforms = [
    { value: "instagram", label: "Instagram", icon: "📸" },
    { value: "linkedin", label: "LinkedIn", icon: "💼" },
    { value: "facebook", label: "Facebook", icon: "👥" },
    { value: "tiktok", label: "TikTok", icon: "🎵" },
  ];

  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
          <BarChart3 className='text-white' size={24} />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-gray-800'>
            Calculadora de Engajamento
          </h3>
          <p className='text-gray-600'>
            Analise a performance das suas redes sociais
          </p>
        </div>
      </div>

      <div className='space-y-6'>
        {/* Platform Selection */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            Plataforma
          </label>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {platforms.map((p) => (
              <button
                key={p.value}
                onClick={() => setPlatform(p.value)}
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  platform === p.value
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className='text-2xl mb-1'>{p.icon}</div>
                <div className='text-sm font-medium'>{p.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Input */}
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
              <Users size={16} />
              Número de Seguidores
            </label>
            <input
              type='number'
              value={followers}
              onChange={(e) => setFollowers(e.target.value)}
              placeholder='Ex: 10000'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
              <Heart size={16} />
              Curtidas (média por post)
            </label>
            <input
              type='number'
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
              placeholder='Ex: 500'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
              <MessageCircle size={16} />
              Comentários (média por post)
            </label>
            <input
              type='number'
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder='Ex: 25'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
              <Share size={16} />
              Compartilhamentos (média por post)
            </label>
            <input
              type='number'
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              placeholder='Ex: 10'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          {platform === "instagram" && (
            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                📌 Salvamentos (média por post) - Opcional
              </label>
              <input
                type='number'
                value={saves}
                onChange={(e) => setSaves(e.target.value)}
                placeholder='Ex: 15'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateEngagement}
          className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold'
        >
          <TrendingUp size={20} />
          Calcular Engajamento
        </button>

        {/* Results */}
        {result && (
          <div className='space-y-4'>
            <div className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-gray-800 mb-2'>
                  {result.rate.toFixed(2)}%
                </div>
                <div className={`text-xl font-semibold ${result.color} mb-2`}>
                  {result.quality}
                </div>
                <div className='text-gray-600'>Taxa de Engajamento</div>
              </div>
            </div>

            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
              <h5 className='font-semibold text-yellow-800 mb-3 flex items-center gap-2'>
                <TrendingUp size={16} />
                Recomendações para Melhorar:
              </h5>
              <ul className='space-y-2'>
                {result.recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className='text-sm text-yellow-700 flex items-center gap-2 list-disc'
                  >
                    <ArrowRightCircle className='w-5 h-5' />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
              <h5 className='font-semibold text-blue-800 mb-2'>
                📊 Benchmarks de Mercado:
              </h5>
              <div className='text-sm text-blue-700 grid md:grid-cols-2 gap-2'>
                <div>Instagram: 1-3% (bom), 6%+ (excelente)</div>
                <div>LinkedIn: 0.5-2% (bom), 5%+ (excelente)</div>
                <div>Facebook: 0.3-1% (bom), 3%+ (excelente)</div>
                <div>TikTok: 3-8% (bom), 15%+ (excelente)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
