export const SALON_INFO = {
  name: "Salão Juliana Moura",
  owner: "Juliana Moura",
  phone: "(11) 99999-9999",
  email: "contato@julianamoura.com.br",
  address: "Rua das Flores, 123, São Paulo - SP",
  openingHours: "Terça a Sábado, das 09:00 às 19:00",
};

export const SERVICES = [
  {
    id: "cabelo-escova",
    title: "Cabelo e Escova",
    description: "Tratamentos capilares completos, de cortes modernos a escovas impecáveis.",
    path: "/servicos/cabelo-escova",
    items: [
      { name: "Corte Feminino", price: "R$ 80,00", duration: "60 min" },
      { name: "Escova Modeladora", price: "R$ 60,00", duration: "45 min" },
      { name: "Coloração Global", price: "R$ 150,00", duration: "120 min" },
      { name: "Hidratação Profunda", price: "R$ 90,00", duration: "60 min" },
    ],
  },
  {
    id: "manicure-pedicure",
    title: "Manicure e Pedicure",
    description: "Cuidado delicado para suas mãos e pés com os melhores produtos do mercado.",
    path: "/servicos/manicure-pedicure",
    items: [
      { name: "Manicure", price: "R$ 40,00", duration: "45 min" },
      { name: "Pedicure", price: "R$ 50,00", duration: "45 min" },
      { name: "Combo Mão e Pé", price: "R$ 80,00", duration: "90 min" },
      { name: "Alongamento em Gel", price: "R$ 180,00", duration: "150 min" },
    ],
  },
];
