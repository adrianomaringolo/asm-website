export function Breadcrumbs() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://asmmktdigital.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre",
        item: "https://asmmktdigital.com.br#sobre",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Serviços",
        item: "https://asmmktdigital.com.br#servicos",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Bio",
        item: "https://asmmktdigital.com.br#bio",
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}
