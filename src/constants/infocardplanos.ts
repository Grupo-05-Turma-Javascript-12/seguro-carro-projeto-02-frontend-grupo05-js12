interface Planos {
  name: string;
  description: string;
  price: string;
  includes: string[];
  badge?: string;
  highlight?: boolean;
  buttonText?: string;
}

export const planos: Planos[] = [
  {
    name: "Essencial",
    description: "Proteção fundamental para quem busca seguranca com equilibrio de custo",
    price: "R$ 900/ano",
    includes: ["Cobertura contra roubo e furto", "Opcao de danos e terceiros", "Assistencia 24h opcional", "Cobertura para carros antigos"]
  },

  {
    name: "Completo",
    description: "Equilibrio entre protecao ampliada e custo-beneficio",
    price: "R$ 2200/ano",
    includes: ["Roubo e furto", "Colisao", "Danos a terceiros","Carro reserva"]
  },

  {
    name: "Premium",
    description: "Protecao total para quem busca tranquilidade e cobertura abrangente",
    price: "R$ 3200/ano",
    includes: ["Cobertura compreensiva total", "Assistencia 24h ampliada", "Cobertura internacional Mercosul", "Atendimento prioritario",],
    badge: "Popular",
    highlight: true,
    buttonText: "Quero protecao total"
  },

  {
    name: "Flex",
    description: "Comece com o plano base e adicione apenas o que faz sentido para você",
    price: "R$ 700/ano",
    includes: ["Colisao", "Terceiros", "Assistencia", "Carro reserva e cobertura internacional"],
    buttonText: "Fale conosco"
  }
]