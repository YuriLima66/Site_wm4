
import React from "react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";
import { ShoppingBag, BarChart, Users, Search, Clock, LineChart } from "lucide-react";

const Retail: React.FC = () => {
  const challenges = [
    {
      title: "Gestão de Estoque",
      description: "Equilibrar níveis de estoque, evitando tanto a falta quanto o excesso de produtos, especialmente em operações multicanais."
    },
    {
      title: "Experiência do Cliente",
      description: "Criar experiências personalizadas e consistentes em todos os canais de vendas, fidelizando clientes em um mercado altamente competitivo."
    },
    {
      title: "Análise de Dados",
      description: "Coletar e analisar grandes volumes de dados para tomar decisões estratégicas sobre sortimento, preços e promoções."
    },
    {
      title: "Operação Multicanal",
      description: "Integrar lojas físicas e e-commerce, garantindo consistência de preços, disponibilidade e experiência de compra."
    }
  ];

  const solutions = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "ERP para Varejo",
      description: "Sistema integrado para gestão completa de lojas, estoques, vendas, compras e financeiro, com recursos específicos para o setor varejista.",
      link: "/erp"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Dashboards Analíticos",
      description: "Painéis de controle com indicadores de desempenho, análises de vendas por categorias, produtos e filiais, com dados em tempo real.",
      link: "/dashboards"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "CRM Integrado",
      description: "Gestão de relacionamento com clientes, programas de fidelidade e campanhas personalizadas baseadas no comportamento de compra."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Inteligência de Mercado",
      description: "Análises preditivas para identificar tendências, otimizar precificação e planejar campanhas promocionais de alto impacto."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Automação de Processos",
      description: "Fluxos automatizados para reposição de estoque, pedidos, conciliações financeiras e outras operações repetitivas do varejo."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Site e E-commerce",
      description: "Plataformas digitais integradas ao seu ERP, proporcionando uma experiência omnichannel completa para seus clientes.",
      link: "/web-development"
    }
  ];

  const benefits = [
    {
      title: "Aumento nas Vendas",
      description: "Crescimento médio de 15-20% no faturamento com estratégias baseadas em dados e experiência otimizada de compra."
    },
    {
      title: "Redução de Custos Operacionais",
      description: "Diminuição de 30% em custos operacionais através da automação de processos e eficiência logística."
    },
    {
      title: "Maior Fidelização de Clientes",
      description: "Aumento significativo na taxa de retenção e no valor médio de compra através de estratégias personalizadas."
    },
    {
      title: "Gestão Eficiente de Estoques",
      description: "Redução de 40% em produtos parados e 25% em ruptura de estoque com previsão de demanda assertiva."
    },
    {
      title: "Tomada de Decisão Mais Rápida",
      description: "Acesso instantâneo a dados consolidados permite decisões ágeis e baseadas em informações concretas."
    }
  ];

  const clients = [
    { 
      name: "JB", 
      logo: "/lovable-uploads/98342ab0-ecd9-46ff-9a1a-c8bc3361ce31.png" 
    },
    { 
      name: "Cooper", 
      logo: "/lovable-uploads/5b33450f-8e33-4447-ba3b-50e9095397f9.png" 
    },
    { 
      name: "Dr.Hato", 
      logo: "/lovable-uploads/595010d2-c46c-40a6-bc89-774ac52700b3.png" 
    },
    { 
      name: "Medicall Farma", 
      logo: "/lovable-uploads/29e246d6-adac-43f8-9998-de57761ca50c.png" 
    },
    { 
      name: "Cosmac", 
      logo: "/lovable-uploads/11a772e0-dbe4-45ac-bd32-e9e9d8ce6408.png" 
    }
  ];

  return (
    <SegmentTemplate 
      segmentName="Varejo"
      subtitle="Soluções tecnológicas que transformam a operação varejista, integrando canais de vendas e potencializando a experiência do cliente."
      backgroundImage="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1895&q=80"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Retail;
