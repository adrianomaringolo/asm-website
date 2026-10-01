import { faq } from "@/content/faq";

const siteUrl = "https://asmmktdigital.com.br";
const orgId = `${siteUrl}/#organizacao`;
const personId = `${siteUrl}/#anelita`;
const websiteId = `${siteUrl}/#website`;
const pageId = `${siteUrl}/#pagina`;

// Os serviços espelham a seção "Como posso te ajudar?" da página
const services = [
  {
    name: "Social Media Estratégico",
    description:
      "Gestão completa do Instagram com planejamento de conteúdo, design, legendas profissionais e análise de desempenho.",
  },
  {
    name: "Identidade Visual e Design Profissional",
    description:
      "Criação de uma presença visual única e coerente com os valores e objetivos do negócio.",
  },
  {
    name: "Tráfego Pago com Foco em Conversão",
    description:
      "Campanhas no Instagram, Facebook e Google para atrair o público certo e aumentar as vendas.",
  },
  {
    name: "Ensaio Imagem e Essência",
    description:
      "Fotos realistas criadas por Inteligência Artificial, inspiradas na autenticidade de cada pessoa.",
  },
  {
    name: "Mentorias e Consultorias",
    description:
      "Clareza e direcionamento estratégico para crescer com consistência e segurança.",
  },
  {
    name: "Criação de Sites Profissionais",
    description:
      "Sites modernos, responsivos e otimizados para o Google, com estrutura personalizada para o negócio.",
  },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: "ASM Marketing Digital",
      alternateName: "ASM",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-asm.webp`,
        width: 869,
        height: 176,
      },
      image: `${siteUrl}/opengraph-image.png`,
      description:
        "Marca estratégica especializada em posicionamento, comunicação e presença digital para empresas e profissionais autônomos que desejam fortalecer sua imagem e atrair os clientes certos. Atendimento 100% online para todo o Brasil.",
      slogan: "Transformando comunicação em percepção de valor",
      founder: { "@id": personId },
      areaServed: { "@type": "Country", name: "Brasil" },
      availableLanguage: "pt-BR",
      sameAs: ["https://www.instagram.com/anelitasmassucate/"],
      knowsAbout: [
        "Marketing digital",
        "Gestão de redes sociais",
        "Instagram para negócios",
        "Tráfego pago",
        "Identidade visual",
        "Design gráfico",
        "Criação de sites",
        "Posicionamento de marca",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Marketing Digital",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            provider: { "@id": orgId },
            areaServed: { "@type": "Country", name: "Brasil" },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Anelita Scaliza Massucate",
      alternateName: "Anelita Massucate",
      jobTitle: "Designer Gráfica e Social Media, fundadora da ASM Marketing Digital",
      description:
        "Designer Gráfica e Social Media com foco em performance, posicionamento e identidade visual. Graduada em Administração com Gestão em Sistemas de Informação e pós-graduada em Gestão de Recursos Humanos.",
      image: `${siteUrl}/photo-bio.webp`,
      url: `${siteUrl}/#bio`,
      worksFor: { "@id": orgId },
      sameAs: ["https://www.instagram.com/anelitasmassucate/"],
      knowsAbout: [
        "Design gráfico",
        "Social media",
        "Gestão de tráfego",
        "Automação",
        "Consultoria de marketing digital",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Graduação em Administração com Gestão em Sistemas de Informação",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "postgraduate",
          name: "Pós-graduação em Gestão de Recursos Humanos",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "ASM Marketing Digital",
      inLanguage: "pt-BR",
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url: siteUrl,
      name: "ASM Marketing Digital | Consultoria e Gestão de Redes Sociais",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      mainEntity: { "@id": orgId },
      primaryImageOfPage: `${siteUrl}/opengraph-image.png`,
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#perguntas-frequentes`,
      isPartOf: { "@id": pageId },
      inLanguage: "pt-BR",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
