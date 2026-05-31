"use client";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  options?: string[];
}

interface LeadData {
  name?: string;
  business?: string;
  challenge?: string;
  budget?: string;
  timeline?: string;
  contact?: string;
}

export function IntelligentChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [leadData, setLeadData] = useState<LeadData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatFlow = [
    {
      message:
        "Olá! 👋 Sou a assistente virtual da ASM. Vou te ajudar a descobrir como podemos impulsionar seu negócio no digital. Qual é o seu nome?",
      field: "name",
      type: "text",
    },
    {
      message:
        "Prazer em conhecê-lo(a), {name}! Qual é o seu negócio ou área de atuação?",
      field: "business",
      type: "text",
    },
    {
      message:
        "Entendi, seu negócio é {business}! Qual é o seu maior desafio no marketing digital atualmente?",
      field: "challenge",
      type: "options",
      options: [
        "Baixo engajamento nas redes sociais",
        "Dificuldade para gerar leads",
        "Não sei por onde começar",
        "Falta de tempo para criar conteúdo",
        "Não vejo retorno do investimento",
      ],
    },
    {
      message:
        "Perfeito! Para resolver '{challenge}', temos soluções específicas. Qual é o seu orçamento mensal para marketing digital?",
      field: "budget",
      type: "options",
      options: [
        "Até R$ 2.000",
        "R$ 2.000 - R$ 5.000",
        "R$ 5.000 - R$ 10.000",
        "Acima de R$ 10.000",
        "Preciso de orientação",
      ],
    },
    {
      message: "Ótimo! Quando você gostaria de começar a ver resultados?",
      field: "timeline",
      type: "options",
      options: [
        "Imediatamente",
        "Em 1 mês",
        "Em 3 meses",
        "Em 6 meses",
        "Ainda estou pesquisando",
      ],
    },
    {
      message:
        "Excelente, {name}! Baseado no que você me contou, tenho a solução perfeita para seu negócio em {business}. Para enviar uma proposta personalizada, qual o melhor contato?",
      field: "contact",
      type: "text",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (
    text: string,
    options?: string[],
    customLeadData?: LeadData
  ) => {
    setIsTyping(true);

    setTimeout(() => {
      const dataToUse = customLeadData || leadData;
      const processedText = text.replace(/{(\w+)}/g, (match, key) => {
        return dataToUse[key as keyof LeadData] || match;
      });

      const newMessage: Message = {
        id: Date.now().toString(),
        text: processedText,
        sender: "bot",
        timestamp: new Date(),
        options,
      };

      setMessages((prev) => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = (message?: string) => {
    const textToSend = message || currentInput.trim();
    if (!textToSend) return;

    addUserMessage(textToSend);
    setCurrentInput("");

    // Update lead data
    const currentStepData = chatFlow[currentStep];
    let updatedLeadData = leadData;

    if (currentStepData) {
      updatedLeadData = {
        ...leadData,
        [currentStepData.field]: textToSend,
      };

      setLeadData(updatedLeadData);
    }

    // Move to next step
    const nextStep = currentStep + 1;
    if (nextStep < chatFlow.length) {
      setCurrentStep(nextStep);
      setTimeout(() => {
        addBotMessage(
          chatFlow[nextStep].message,
          chatFlow[nextStep].options,
          updatedLeadData
        );
      }, 1500);
    } else {
      // End of flow
      setTimeout(() => {
        addBotMessage(
          `Perfeito, ${updatedLeadData.name}! 🎉\n\nRecebi todas as informações. Nossa equipe vai analisar seu caso e enviar uma proposta personalizada em até 24h.\n\nEnquanto isso, que tal fazer nosso diagnóstico digital gratuito? Vai te dar insights valiosos sobre seu negócio!\n\n Veja nossas ferramentas exclusivas`,
          undefined,
          updatedLeadData
        );
      }, 1500);
    }
  };

  // useEffects
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(chatFlow[0].message);
    }
  }, [isOpen, messages.length]); // Removendo dependências problemáticas

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#C97B45] to-[#5D4032] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className='fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden'>
          {/* Header */}
          <div className='bg-gradient-to-r from-[#C97B45] to-[#5D4032] text-white p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
                <Bot size={16} />
              </div>
              <div>
                <h4 className='font-semibold'>Assistente ASM</h4>
                <p className='text-xs opacity-90'>Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='hover:bg-white/20 p-1 rounded'
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-[#C97B45] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className='flex items-start gap-2'>
                    {message.sender === "bot" && (
                      <Bot size={16} className='mt-1 text-[#5D4032]' />
                    )}
                    {message.sender === "user" && (
                      <User size={16} className='mt-1' />
                    )}
                    <div className='flex-1'>
                      <p className='text-sm whitespace-pre-line'>
                        {message.text}
                      </p>

                      {message.options && (
                        <div className='mt-3 space-y-2'>
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleSendMessage(option)}
                              className='block w-full text-left p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-xs'
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className='flex justify-start'>
                <div className='bg-gray-100 p-3 rounded-2xl'>
                  <div className='flex items-center gap-2'>
                    <Bot size={16} className='text-[#5D4032]' />
                    <div className='flex gap-1'>
                      <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className='p-4 border-t'>
            <div className='flex gap-2'>
              <input
                type='text'
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder='Digite sua mensagem...'
                className='flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C97B45]'
              />
              <button
                onClick={() => handleSendMessage()}
                className='bg-[#C97B45] text-white p-2 rounded-lg hover:bg-[#5D4032] transition-colors'
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
