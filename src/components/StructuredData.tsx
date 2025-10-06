export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ASM Marketing Digital",
    alternateName: "ASM",
    url: "https://asmmktdigital.com.br",
    logo: "https://asmmktdigital.com.br/logo-asm.webp",
    description:
      "Consultoria e serviços de marketing digital para pequenos negócios e profissionais autônomos",
    founder: {
      "@type": "Person",
      name: "Anelita Scaliza Massucate",
      jobTitle: "Marketing Digital Estratégico",
      description:
        "Designer Gráfica e Social Media com mais de 5 anos de experiência",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: ["https://www.instagram.com/anelitamassucate/"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "Brasil",
    },
    areaServed: "BR",
    serviceType: [
      "Marketing Digital",
      "Gestão de Redes Sociais",
      "Tráfego Pago",
      "Automação",
      "Criação de Sites",
      "Consultoria Digital",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anelita Scaliza Massucate",
    alternateName: "Anelita Massucate",
    jobTitle: "Marketing Digital Estratégico",
    description:
      "Designer Gráfica e Social Media com foco em performance, posicionamento e identidade visual. Mais de 5 anos de experiência em gestão de mídias sociais.",
    image: "https://asmmktdigital.com.br/photo-bio.webp",
    url: "https://asmmktdigital.com.br",
    sameAs: ["https://www.instagram.com/anelitamassucate/"],
    worksFor: {
      "@type": "Organization",
      name: "ASM Marketing Digital",
    },
    knowsAbout: [
      "Marketing Digital",
      "Social Media",
      "Design Gráfico",
      "Tráfego Pago",
      "Instagram Marketing",
      "Automação",
      "WhatsApp Business",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Administração com Gestão em Sistemas de Informação",
      },
      {
        "@type": "EducationalOrganization",
        name: "Pós-graduação em Gestão de Recursos Humanos",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoria em Marketing Digital",
    description:
      "Serviços completos de marketing digital incluindo gestão de redes sociais, tráfego pago, automação e criação de sites",
    provider: {
      "@type": "Organization",
      name: "ASM Marketing Digital",
    },
    areaServed: "BR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Marketing Digital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Estratégico",
            description:
              "Gestão completa do Instagram com planejamento de conteúdo, design, legendas profissionais e análise de desempenho",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Identidade Visual e Design Profissional",
            description:
              "Criação de presença visual única e coerente com os valores e objetivos do negócio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tráfego Pago com Foco em Conversão",
            description:
              "Campanhas no Instagram, Facebook e Google para atrair o público certo e aumentar vendas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automação e WhatsApp Business",
            description:
              "Fluxos de atendimento automatizados que otimizam tempo e melhoram experiência do cliente",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mentorias e Consultorias",
            description:
              "Direcionamento estratégico para crescer com consistência e segurança",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criação de Sites Profissionais",
            description: "Sites modernos, responsivos e otimizados para Google",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ASM Marketing Digital",
    alternateName: "ASM",
    url: "https://asmmktdigital.com.br",
    description:
      "Consultoria e serviços de marketing digital para transformar sua presença online",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "ASM Marketing Digital",
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
