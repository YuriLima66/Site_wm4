import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  Database,
  BarChart3,
  PackageOpen,
  Warehouse,
  TrendingUp,
} from "lucide-react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";

const Logistica: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      title: "Gestão de Estoques Complexos",
      description:
        "Controle preciso de múltiplos produtos em diferentes armazéns, com rastreabilidade de lotes e validades.",
    },
    {
      title: "Sincronização da Cadeia de Suprimentos",
      description:
        "Integração entre fornecedores, transporte, armazenagem e distribuição em um único fluxo.",
    },
    {
      title: "Visibilidade de Processos",
      description:
        "Monitoramento em tempo real de todos os elos da cadeia logística, do pedido à entrega final.",
    },
    {
      title: "Custo Logístico Elevado",
      description:
        "Necessidade de otimizar operações para reduzir custos mantendo ou melhorando níveis de serviço.",
    },
  ];

  const solutions = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "ERP Logístico Integrado",
      description:
        "Sistema completo para gestão da cadeia logística, com módulos de estoque, armazenagem, expedição e distribuição.",
      link: "/erp",
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "WMS - Sistema de Gestão de Armazém",
      description:
        "Controle eficiente de estoques, separação de pedidos e organização de layout de armazenagem.",
      link: "/web-development",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Dashboards Analíticos",
      description:
        "Visualização de KPIs logísticos, níveis de estoque, prazos de entrega e eficiência operacional em tempo real.",
      link: "/dashboards",
    },
  ];
  const clients = [
    {
      name: "JB",
      logo: "/lovable-uploads/98342ab0-ecd9-46ff-9a1a-c8bc3361ce31.png",
    },
    {
      name: "Cooper",
      logo: "/lovable-uploads/5b33450f-8e33-4447-ba3b-50e9095397f9.png",
    },
    {
      name: "Dr.Hato",
      logo: "/lovable-uploads/595010d2-c46c-40a6-bc89-774ac52700b3.png",
    },
    {
      name: "Medicall Farma",
      logo: "/lovable-uploads/29e246d6-adac-43f8-9998-de57761ca50c.png",
    },
    {
      name: "Cosmac",
      logo: "/lovable-uploads/11a772e0-dbe4-45ac-bd32-e9e9d8ce6408.png",
    },
  ];

  const benefits = [
    {
      title: "Otimização de Estoques",
      description:
        "Redução de até 30% em custos de armazenagem com melhor controle de níveis de estoque.",
    },
    {
      title: "Rastreabilidade Completa",
      description:
        "Acompanhamento de produtos desde o recebimento até a entrega ao cliente final.",
    },
    {
      title: "Agilidade nas Operações",
      description:
        "Redução de tempo em processos de separação, conferência e expedição de mercadorias.",
    },
    {
      title: "Tomada de Decisão Baseada em Dados",
      description:
        "Insights em tempo real sobre a operação logística para decisões estratégicas.",
    },
  ];

  return (
    <SegmentTemplate
      segmentName="Logística"
      subtitle="Soluções tecnológicas para gestão de armazéns, controle de estoque, distribuição e toda a cadeia logística, aumentando a eficiência e reduzindo custos operacionais."
      backgroundImage="/lovable-uploads/laptop-mesa.jpg"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Logistica;
