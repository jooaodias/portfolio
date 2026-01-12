export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "João Vitor Aleixo",
    "alternateName": "João Aleixo",
    "description": "Desenvolvedor Frontend especializado em React.js e Next.js com 4+ anos de experiência",
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "image": `${process.env.NEXT_PUBLIC_BASE_URL}/images/its-me.jpeg`,
    "jobTitle": "Frontend Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "V4 Company"
    },
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "Node.js",
      "Git",
      "GitHub Actions",
      "TurboRepo"
    ],
    "sameAs": [
      "https://github.com/jooaodias",
      "https://www.linkedin.com/in/joao-aleixo-dias/"
    ],
    "email": "joaovitordias92040@gmail.com",
    "nationality": {
      "@type": "Country",
      "name": "Brazil"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
