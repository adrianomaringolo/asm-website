"use client";
import { useState } from "react";
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  question: string;
  weight: number;
  category: "strategy" | "content" | "engagement" | "conversion";
}

const questions: Question[] = [
  {
    id: "posting_frequency",
    question: "Você posta conteúdo no Instagram pelo menos 3x por semana?",
    weight: 15,
    category: "content",
  },
  {
    id: "content_strategy",
    question: "Você tem uma estratégia de conteúdo definida e documentada?",
    weight: 20,
    category: "strategy",
  },
  {
    id: "engagement_rate",
    question: "Sua taxa de engajamento está acima de 3%?",
    weight: 25,
    category: "engagement",
  },
  {
    id: "stories_usage",
    question: "Você usa Stories diariamente com CTAs claros?",
    weight: 15,
    category: "engagement",
  },
  {
    id: "lead_generation",
    question: "Você gera leads qualificados através das redes sociais?",
    weight: 30,
    category: "conversion",
  },
  {
    id: "competitor_analysis",
    question: "Você monitora e analisa seus concorrentes regularmente?",
    weight: 10,
    category: "strategy",
  },
  {
    id: "metrics_tracking",
    question: "Você acompanha métricas de performance semanalmente?",
    weight: 20,
    category: "strategy",
  },
  {
    id: "visual_identity",
    question: "Seu feed tem identidade visual consistente?",
    weight: 15,
    category: "content",
  },
];

export function DigitalDiagnostic() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const questionId = questions[currentQuestion].id;
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach((question) => {
      maxScore += question.weight;
      if (answers[question.id]) {
        totalScore += question.weight;
      }
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80)
      return <CheckCircle className='text-green-400' size={32} />;
    if (score >= 60)
      return <AlertCircle className='text-yellow-400' size={32} />;
    return <XCircle className='text-red-400' size={32} />;
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return {
        title: "Excelente! Você está no caminho certo",
        description:
          "Seu marketing digital está bem estruturado. Vamos otimizar para resultados ainda melhores!",
        actions: [
          "Automação avançada",
          "Tráfego pago estratégico",
          "Análise de conversão",
        ],
      };
    }
    if (score >= 60) {
      return {
        title: "Bom trabalho! Há espaço para melhorias",
        description:
          "Você tem uma base sólida, mas pode multiplicar seus resultados com algumas otimizações.",
        actions: [
          "Estratégia de conteúdo",
          "Melhoria de engajamento",
          "Geração de leads",
        ],
      };
    }
    return {
      title: "Oportunidade de crescimento identificada!",
      description:
        "Há muito potencial inexplorado. Vamos transformar sua presença digital!",
      actions: [
        "Estratégia completa",
        "Identidade visual",
        "Planejamento de conteúdo",
        "Automação básica",
      ],
    };
  };

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations(score);

    return (
      <div className='bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <div className='flex justify-center mb-4'>{getScoreIcon(score)}</div>
          <h3 className='text-3xl font-bold mb-2'>Seu Diagnóstico Digital</h3>
          <div className={`text-6xl font-bold ${getScoreColor(score)} mb-2`}>
            {score}%
          </div>
          <p className='text-gray-300'>Pontuação geral</p>
        </div>

        <div className='bg-gray-800/50 p-6 rounded-xl mb-6'>
          <h4 className='text-xl font-semibold mb-3 text-[#C97B45]'>
            {recommendations.title}
          </h4>
          <p className='text-gray-300 mb-4'>{recommendations.description}</p>

          <div className='space-y-2'>
            <p className='font-semibold text-white'>
              Próximos passos recomendados:
            </p>
            {recommendations.actions.map((action, index) => (
              <div key={index} className='flex items-center gap-2'>
                <ArrowRight size={16} className='text-[#C97B45]' />
                <span className='text-gray-300'>{action}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <button
            className='gradient-mesh px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform'
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}
          >
            Fazer Novo Diagnóstico
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto'>
      <div className='mb-8'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-2xl font-bold'>Diagnóstico Digital Gratuito</h3>
          <span className='text-sm text-gray-400'>
            {currentQuestion + 1} de {questions.length}
          </span>
        </div>

        <div className='w-full bg-gray-700 rounded-full h-2 mb-6'>
          <div
            className='bg-gradient-to-r from-[#C97B45] to-[#5D4032] h-2 rounded-full transition-all duration-300'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className='mb-8'>
        <h4 className='text-xl font-semibold mb-6 leading-relaxed'>
          {questions[currentQuestion].question}
        </h4>

        <div className='grid grid-cols-2 gap-4'>
          <button
            onClick={() => handleAnswer(true)}
            className='bg-green-600/20 hover:bg-green-600/30 border border-green-600/50 p-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2'
          >
            <CheckCircle size={20} />
            Sim
          </button>

          <button
            onClick={() => handleAnswer(false)}
            className='bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 p-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2'
          >
            <XCircle size={20} />
            Não
          </button>
        </div>
      </div>

      <div className='text-center text-sm text-gray-400'>
        Diagnóstico baseado em metodologia própria da ASM
      </div>
    </div>
  );
}
