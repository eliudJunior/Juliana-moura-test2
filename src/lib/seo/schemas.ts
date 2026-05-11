import { SALON_INFO, SERVICES } from "../constants/services";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": SALON_INFO.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua das Flores, 123",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01234-567",
      "addressCountry": "BR"
    },
    "telephone": SALON_INFO.phone,
    "url": "https://julianamoura.com.br",
    "openingHours": "Tu-Sa 09:00-19:00",
    "image": "https://julianamoura.com.br/assets/imagens-ia/hero-salao.jpg",
    "priceRange": "$$",
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SALON_INFO.owner,
    "jobTitle": "Hair Stylist & Owner",
    "worksFor": {
      "@type": "Organization",
      "name": SALON_INFO.name
    },
    "image": "https://julianamoura.com.br/assets/imagens-ia/juliana-moura.jpg",
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "BeautySalon",
          "name": SALON_INFO.name
        }
      }
    }))
  };
}
