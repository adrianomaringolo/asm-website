"use client";
import { useState } from "react";
import {
  Calculator,
  Stethoscope,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { ROICalculator } from "./ROICalculator";
import { DigitalDiagnostic } from "./DigitalDiagnostic";
import { ResultsShowcase } from "./ResultsShowcase";
import { ScrollAnimation } from "./ScrollAnimation";

type ActiveTool = "roi" | "diagnostic" | "results" | null;

const tools = [
  {
    id: "roi" as const,
    title: "Calculadora de ROI",
    description: "Descubra o potencial de crescimento do seu negócio",
    icon: Calculator,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "diagnostic" as const,
    title: "Diagnóstico Digital",
    description: "Avalie sua presença digital em 2 minutos",
    icon: Stethoscope,
    color: "from-green-500 to-green-600",
  },
  {
    id: "results" as const,
    title: "Casos de Sucesso",
    description: "Veja resultados reais dos nossos clientes",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
  },
];

export function InteractiveSection() {
  const [activeTool, setActiveTool] = useState<ActiveTool>(null);

  const renderActiveTool = () => {
    switch (activeTool) {
      case "roi":
        return <ROICalculator />;
      case "diagnostic":
        return <DigitalDiagnostic />;
      case "results":
        return <ResultsShowcase />;
      default:
        return null;
    }
  };

  return (
    <section
      id='ferramentas'
      className='py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100'
    >
      <div className='max-w-6xl mx-auto'>
        <ScrollAnimation animation='fade-in-up' delay='delay-100'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Ferramentas <span className='text-gradient'>Exclusivas</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Desenvolvemos ferramentas únicas para ajudar você a tomar decisões
              estratégicas baseadas em dados reais
            </p>
          </div>
        </ScrollAnimation>

        {!activeTool ? (
          <div className='grid md:grid-cols-3 gap-8'>
            {tools.map((tool, index) => (
              <ScrollAnimation
                key={tool.id}
                animation='fade-in-up'
                delay={`delay-${200 + index * 100}`}
              >
                <div
                  onClick={() => setActiveTool(tool.id)}
                  className='group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <tool.icon size={32} className='text-white' />
                  </div>

                  <h3 className='text-2xl font-bold mb-3 group-hover:text-[#776E3C] transition-colors'>
                    {tool.title}
                  </h3>

                  <p className='text-gray-600 mb-6'>{tool.description}</p>

                  <div className='flex items-center text-[#DDCC70] font-semibold group-hover:gap-3 transition-all'>
                    <span>Experimentar agora</span>
                    <span className='ml-2 group-hover:ml-0 transition-all'>
                      →
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <div className='space-y-8'>
            <div className='text-center'>
              <button
                onClick={() => setActiveTool(null)}
                className='inline-flex items-center gap-2 text-gray-600 hover:text-[#776E3C] transition-colors'
              >
                ← Voltar às ferramentas
              </button>
            </div>

            <div className='animate-fade-in-up'>{renderActiveTool()}</div>
          </div>
        )}

        {/* Call to Action */}
        <ScrollAnimation animation='fade-in-up' delay='delay-400'>
          <div className='mt-20 text-center'>
            <div className='bg-gradient-to-r from-[#DDCC70] to-[#776E3C] rounded-2xl p-8 text-white'>
              <h3 className='text-3xl font-bold mb-4'>
                Gostou das ferramentas?
              </h3>
              <p className='text-xl mb-6 opacity-90'>
                Imagine o que podemos fazer com uma estratégia completa para seu
                negócio
              </p>
              <button className='bg-white text-[#776E3C] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg'>
                Quero uma Estratégia Personalizada
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
