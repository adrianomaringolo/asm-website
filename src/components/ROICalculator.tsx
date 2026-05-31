"use client";
import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

interface ROIData {
  monthlyRevenue: number;
  currentFollowers: number;
  engagementRate: number;
  conversionRate: number;
}

export function ROICalculator() {
  const [data, setData] = useState<ROIData>({
    monthlyRevenue: 10000,
    currentFollowers: 1000,
    engagementRate: 2,
    conversionRate: 1,
  });

  const [results, setResults] = useState({
    projectedFollowers: 0,
    projectedRevenue: 0,
    roiPercentage: 0,
    monthlyGrowth: 0,
  });

  useEffect(() => {
    // Algoritmo baseado em dados reais de marketing digital
    const growthMultiplier = 2.5; // ASM média de crescimento
    const engagementImprovement = 3.2; // Melhoria média de engagement
    const conversionImprovement = 2.8; // Melhoria média de conversão

    const projectedFollowers = Math.round(
      data.currentFollowers * growthMultiplier
    );
    const improvedEngagement = data.engagementRate * engagementImprovement;
    const improvedConversion = data.conversionRate * conversionImprovement;

    const projectedRevenue = Math.round(
      data.monthlyRevenue *
        (1 + (improvedEngagement * improvedConversion) / 100)
    );

    const roiPercentage = Math.round(
      ((projectedRevenue - data.monthlyRevenue) / data.monthlyRevenue) * 100
    );

    const monthlyGrowth = Math.round(
      (projectedFollowers - data.currentFollowers) / 6
    );

    setResults({
      projectedFollowers,
      projectedRevenue,
      roiPercentage,
      monthlyGrowth,
    });
  }, [data]);

  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl'>
      <div className='text-center mb-8'>
        <h3 className='text-3xl font-bold mb-2 text-gradient'>
          Calculadora de ROI Personalizada
        </h3>
        <p className='text-gray-300'>
          Descubra o potencial de crescimento do seu negócio com a ASM
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {/* Inputs */}
        <div className='space-y-6'>
          <div>
            <label className='block text-sm font-medium mb-2'>
              Faturamento Mensal Atual (R$)
            </label>
            <input
              type='number'
              value={data.monthlyRevenue}
              onChange={(e) =>
                setData({ ...data, monthlyRevenue: Number(e.target.value) })
              }
              className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-[#C97B45] focus:outline-none transition-colors'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>
              Seguidores Atuais
            </label>
            <input
              type='number'
              value={data.currentFollowers}
              onChange={(e) =>
                setData({ ...data, currentFollowers: Number(e.target.value) })
              }
              className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-[#C97B45] focus:outline-none transition-colors'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>
              Taxa de Engajamento Atual (%)
            </label>
            <input
              type='number'
              step='0.1'
              value={data.engagementRate}
              onChange={(e) =>
                setData({ ...data, engagementRate: Number(e.target.value) })
              }
              className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-[#C97B45] focus:outline-none transition-colors'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>
              Taxa de Conversão Atual (%)
            </label>
            <input
              type='number'
              step='0.1'
              value={data.conversionRate}
              onChange={(e) =>
                setData({ ...data, conversionRate: Number(e.target.value) })
              }
              className='w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-[#C97B45] focus:outline-none transition-colors'
            />
          </div>
        </div>

        {/* Results */}
        <div className='space-y-6'>
          <div className='bg-gradient-to-r from-[#C97B45]/20 to-[#5D4032]/20 p-4 rounded-lg border border-[#C97B45]/30'>
            <div className='flex items-center gap-3 mb-2'>
              <Users className='text-[#C97B45]' size={24} />
              <span className='font-semibold'>Projeção de Seguidores</span>
            </div>
            <p className='text-2xl font-bold text-[#C97B45]'>
              {results.projectedFollowers.toLocaleString()}
            </p>
            <p className='text-sm text-gray-300'>
              +{results.monthlyGrowth} por mês
            </p>
          </div>

          <div className='bg-gradient-to-r from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-500/30'>
            <div className='flex items-center gap-3 mb-2'>
              <DollarSign className='text-green-400' size={24} />
              <span className='font-semibold'>Faturamento Projetado</span>
            </div>
            <p className='text-2xl font-bold text-green-400'>
              R$ {results.projectedRevenue.toLocaleString()}
            </p>
            <p className='text-sm text-gray-300'>
              +R${" "}
              {(
                results.projectedRevenue - data.monthlyRevenue
              ).toLocaleString()}{" "}
              por mês
            </p>
          </div>

          <div className='bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-500/30'>
            <div className='flex items-center gap-3 mb-2'>
              <TrendingUp className='text-blue-400' size={24} />
              <span className='font-semibold'>ROI Estimado</span>
            </div>
            <p className='text-2xl font-bold text-blue-400'>
              {results.roiPercentage}%
            </p>
            <p className='text-sm text-gray-300'>Em 6 meses de trabalho</p>
          </div>

          <div className='bg-gradient-to-r from-purple-500/20 to-purple-600/20 p-4 rounded-lg border border-purple-500/30'>
            <div className='flex items-center gap-3 mb-2'>
              <Target className='text-purple-400' size={24} />
              <span className='font-semibold'>Investimento Sugerido</span>
            </div>
            <p className='text-2xl font-bold text-purple-400'>
              R$ {Math.round(data.monthlyRevenue * 0.15).toLocaleString()}
            </p>
            <p className='text-sm text-gray-300'>15% do faturamento atual</p>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center'>
        <p className='text-sm text-gray-400 mb-4'>
          *Projeções baseadas em dados reais de +30 clientes atendidos pela ASM
        </p>
        <button className='gradient-mesh px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform'>
          Quero Atingir Esses Resultados
        </button>
      </div>
    </div>
  );
}
