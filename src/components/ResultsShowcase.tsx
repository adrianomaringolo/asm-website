"use client";
import { useState } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  timeframe: string;
  before: {
    followers: number;
    engagement: number;
    revenue: number;
    leads: number;
  };
  after: {
    followers: number;
    engagement: number;
    revenue: number;
    leads: number;
  };
  testimonial: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    clientName: "Clínica Estética Bella",
    industry: "Saúde e Beleza",
    challenge:
      "Baixo engajamento e dificuldade para converter seguidores em clientes",
    solution: "Estratégia de conteúdo educativo + automação + tráfego pago",
    timeframe: "6 meses",
    before: { followers: 1200, engagement: 1.8, revenue: 15000, leads: 12 },
    after: { followers: 8500, engagement: 6.2, revenue: 45000, leads: 85 },
    testimonial:
      "A ASM transformou completamente nossa presença digital. Triplicamos o faturamento!",
    image: "/case-study-1.jpg",
  },
  {
    id: "2",
    clientName: "Advocacia Silva & Associados",
    industry: "Jurídico",
    challenge:
      "Dificuldade para gerar leads qualificados e construir autoridade",
    solution: "Conteúdo de autoridade + LinkedIn + automação de leads",
    timeframe: "4 meses",
    before: { followers: 800, engagement: 0.9, revenue: 25000, leads: 8 },
    after: { followers: 3200, engagement: 4.1, revenue: 52000, leads: 45 },
    testimonial:
      "Agora somos referência em nossa área. Os clientes nos procuram!",
    image: "/case-study-2.jpg",
  },
  {
    id: "3",
    clientName: "E-commerce ModaFit",
    industry: "Moda e Lifestyle",
    challenge: "Alto custo de aquisição e baixa retenção de clientes",
    solution: "Estratégia omnichannel + influenciadores + remarketing",
    timeframe: "8 meses",
    before: { followers: 5000, engagement: 2.1, revenue: 35000, leads: 150 },
    after: { followers: 25000, engagement: 5.8, revenue: 120000, leads: 680 },
    testimonial:
      "Crescimento sustentável e previsível. Melhor investimento que fizemos!",
    image: "/case-study-3.jpg",
  },
];

export function ResultsShowcase() {
  const [currentCase, setCurrentCase] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const case_study = caseStudies[currentCase];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const calculateGrowth = (before: number, after: number) => {
    return Math.round(((after - before) / before) * 100);
  };

  const currentData = showBefore ? case_study.before : case_study.after;

  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl'>
      <div className='text-center mb-8'>
        <h3 className='text-3xl font-bold mb-2 text-gradient'>
          Resultados Reais dos Nossos Clientes
        </h3>
        <p className='text-gray-300'>Casos de sucesso com dados verificáveis</p>
      </div>

      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Case Study Info */}
        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-2xl font-bold text-[#C97B45]'>
                {case_study.clientName}
              </h4>
              <p className='text-gray-400'>{case_study.industry}</p>
            </div>

            <div className='flex gap-2'>
              <button
                onClick={prevCase}
                className='p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors'
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextCase}
                className='p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors'
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className='bg-gray-800/50 p-4 rounded-xl'>
            <h5 className='font-semibold mb-2 text-red-400'>Desafio:</h5>
            <p className='text-gray-300 text-sm'>{case_study.challenge}</p>
          </div>

          <div className='bg-gray-800/50 p-4 rounded-xl'>
            <h5 className='font-semibold mb-2 text-green-400'>Solução:</h5>
            <p className='text-gray-300 text-sm'>{case_study.solution}</p>
          </div>

          <div className='bg-gradient-to-r from-[#C97B45]/20 to-[#5D4032]/20 p-4 rounded-xl border border-[#C97B45]/30'>
            <p className='text-sm italic'>
              &ldquo;{case_study.testimonial}&rdquo;
            </p>
            <p className='text-xs text-gray-400 mt-2'>
              - {case_study.clientName}
            </p>
          </div>
        </div>

        {/* Metrics Visualization */}
        <div className='space-y-6'>
          {/* Before/After Toggle */}
          <div className='flex bg-gray-800 rounded-xl p-1'>
            <button
              onClick={() => setShowBefore(true)}
              className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                showBefore
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Antes
            </button>
            <button
              onClick={() => setShowBefore(false)}
              className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                !showBefore
                  ? "bg-green-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Depois ({case_study.timeframe})
            </button>
          </div>

          {/* Metrics Cards */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-gray-800/50 p-4 rounded-xl text-center'>
              <Users className='mx-auto mb-2 text-blue-400' size={24} />
              <p className='text-2xl font-bold'>
                {currentData.followers.toLocaleString()}
              </p>
              <p className='text-xs text-gray-400'>Seguidores</p>
              {!showBefore && (
                <p className='text-xs text-green-400 mt-1'>
                  +
                  {calculateGrowth(
                    case_study.before.followers,
                    case_study.after.followers
                  )}
                  %
                </p>
              )}
            </div>

            <div className='bg-gray-800/50 p-4 rounded-xl text-center'>
              <Heart className='mx-auto mb-2 text-pink-400' size={24} />
              <p className='text-2xl font-bold'>{currentData.engagement}%</p>
              <p className='text-xs text-gray-400'>Engajamento</p>
              {!showBefore && (
                <p className='text-xs text-green-400 mt-1'>
                  +
                  {calculateGrowth(
                    case_study.before.engagement,
                    case_study.after.engagement
                  )}
                  %
                </p>
              )}
            </div>

            <div className='bg-gray-800/50 p-4 rounded-xl text-center'>
              <DollarSign className='mx-auto mb-2 text-green-400' size={24} />
              <p className='text-2xl font-bold'>
                R$ {currentData.revenue.toLocaleString()}
              </p>
              <p className='text-xs text-gray-400'>Faturamento/mês</p>
              {!showBefore && (
                <p className='text-xs text-green-400 mt-1'>
                  +
                  {calculateGrowth(
                    case_study.before.revenue,
                    case_study.after.revenue
                  )}
                  %
                </p>
              )}
            </div>

            <div className='bg-gray-800/50 p-4 rounded-xl text-center'>
              <TrendingUp className='mx-auto mb-2 text-yellow-400' size={24} />
              <p className='text-2xl font-bold'>{currentData.leads}</p>
              <p className='text-xs text-gray-400'>Leads/mês</p>
              {!showBefore && (
                <p className='text-xs text-green-400 mt-1'>
                  +
                  {calculateGrowth(
                    case_study.before.leads,
                    case_study.after.leads
                  )}
                  %
                </p>
              )}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className='flex justify-center gap-2'>
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCase
                    ? "bg-[#C97B45]"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-8 text-center'>
        <button className='gradient-mesh px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform'>
          Quero Resultados Como Estes
        </button>
      </div>
    </div>
  );
}
