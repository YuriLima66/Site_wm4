import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  Database,
  BarChart3,
  Truck,
  PackageOpen,
  Building,
  Store,
} from "lucide-react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";

const Transporte: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      title: "Gestão de Frotas Complexas",
      description:
        "Controle de múltiplos veículos, manutenção preventiva e gestão de documentação em diferentes jurisdições.",
    },
    {
      title: "Rastreabilidade em Tempo Real",
      description:
        "Monitoramento do status de entregas, localização de veículos e previsão de chegada com precisão.",
    },
    {
      title: "Otimização de Rotas",
      description:
        "Planejamento eficiente de trajetos considerando múltiplas variáveis como tráfego, consumo de combustível e prazos.",
    },
    {
      title: "Conformidade com Regulamentações",
      description:
        "Adequação às normas de transporte, documentação fiscal e controles de jornada de motoristas.",
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

  const solutions = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "ERP para Transportadoras",
      description:
        "Sistema completo para gestão de frotas, motoristas, manutenção e documentação, integrado com módulos financeiro e fiscal.",
      link: "/erp",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Dashboard de Performance",
      description:
        "Visualização em tempo real de indicadores de desempenho, custos operacionais e eficiência de rotas.",
      link: "/dashboards",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Sistema de Roteirização",
      description:
        "Algoritmos avançados para otimização de rotas, considerando múltiplas variáveis como tráfego e pontos de parada.",
      link: "/web-development",
    },
  ];

  const benefits = [
    {
      title: "Redução de Custos Operacionais",
      description:
        "Economia de até 20% em combustível e manutenção com rotas otimizadas e manutenção preventiva.",
    },
    {
      title: "Maior Visibilidade da Operação",
      description:
        "Acompanhamento em tempo real de todas as etapas do transporte, do carregamento à entrega.",
    },
    {
      title: "Aumento da Produtividade",
      description:
        "Automação de processos manuais, reduzindo tempo e erros na documentação e planejamento.",
    },
    {
      title: "Conformidade Legal Garantida",
      description:
        "Sistemas atualizados com as mais recentes exigências regulatórias do setor.",
    },
  ];

  return (
    <SegmentTemplate
      segmentName="Transporte"
      subtitle="Soluções tecnológicas especializadas para empresas de transporte de cargas, logística e entregas, otimizando rotas e aumentando a eficiência operacional."
      backgroundImage="/lovable-uploads/laptop-mesa.jpg"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Transporte;
