
import React from "react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";
import {
  Settings,
  LineChart,
  Truck,
  Bot,
  BarChart,
  Shield,
} from "lucide-react";

const Industry: React.FC = () => {
  const challenges = [
    {
      title: "Controle de Produção",
      description:
        "Monitorar e otimizar processos produtivos complexos, mantendo qualidade e reduzindo desperdícios.",
    },
    {
      title: "Gestão da Cadeia de Suprimentos",
      description:
        "Coordenar fornecedores, produção e logística em um fluxo contínuo e eficiente, minimizando interrupções.",
    },
    {
      title: "Compliance e Regulamentação",
      description:
        "Atender a requisitos regulatórios e certificações específicas do setor industrial, mantendo documentação atualizada.",
    },
    {
      title: "Manutenção e Disponibilidade",
      description:
        "Garantir o funcionamento contínuo de equipamentos, prevenindo falhas e tempos de inatividade não programados.",
    },
  ];

  const solutions = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "ERP Industrial",
      description:
        "Sistema integrado com módulos específicos para controle de produção, gestão de chão de fábrica e planejamento industrial.",
      link: "/erp",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Business Intelligence",
      description:
        "Dashboards e relatórios analíticos para monitoramento de KPIs industriais, eficiência operacional e controle de custos.",
      link: "/dashboards",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Gestão Logística",
      description:
        "Solução completa para controle de armazéns, expedição, frotas e toda a cadeia de suprimentos, integrada ao ERP.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Automação Industrial",
      description:
        "Integração de sistemas de controle industrial com a camada de gestão, permitindo monitoramento e intervenção remota.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Controle de Qualidade",
      description:
        "Ferramentas para gestão de padrões de qualidade, inspeções, não-conformidades e planos de ação corretiva.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Conformidade e Documentação",
      description:
        "Gestão documental e workflow para atendimento de normas como ISO, IATF, regulamentações específicas e certificações.",
      link: "/security",
    },
  ];

  const benefits = [
    {
      title: "Aumento de Produtividade",
      description:
        "Incremento médio de 25% na eficiência operacional através da otimização de processos e redução de gargalos.",
    },
    {
      title: "Redução de Custos",
      description:
        "Economia de até 35% em custos produtivos com melhor aproveitamento de recursos e diminuição de desperdícios.",
    },
    {
      title: "Gestão Eficiente de Ativos",
      description:
        "Aumento da vida útil de equipamentos e redução de 40% em paradas não programadas com manutenção preditiva.",
    },
    {
      title: "Rastreabilidade Completa",
      description:
        "Controle total do fluxo de materiais e produtos, desde matérias-primas até produto final, garantindo conformidade.",
    },
    {
      title: "Decisões Baseadas em Dados",
      description:
        "Informações em tempo real para ajustes rápidos de produção, realocação de recursos e resposta a imprevistos.",
    },
    {
      title: "Qualidade Superior",
      description:
        "Redução de não conformidades e defeitos, com melhor consistência nos padrões de qualidade dos produtos.",
    },
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
      segmentName="Indústria"
      subtitle="Soluções tecnológicas que modernizam processos industriais, garantindo eficiência produtiva, controle de qualidade e competitividade."
      backgroundImage="/lovable-uploads/imageTeamOfExperts.png"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Industry;
