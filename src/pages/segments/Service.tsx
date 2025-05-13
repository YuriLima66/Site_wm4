
import React from "react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";
import { Calendar, Clock, LineChart, Users, FileText, PieChart } from "lucide-react";

const Service: React.FC = () => {
  const challenges = [
    {
      title: "Gestão de Equipes",
      description: "Coordenar profissionais, alocar recursos adequadamente e monitorar o desempenho em projetos e atendimentos aos clientes."
    },
    {
      title: "Controle Financeiro",
      description: "Gerenciar custos, precificação de serviços e garantir margens de lucro adequadas em um ambiente de negócios dinâmico."
    },
    {
      title: "Satisfação do Cliente",
      description: "Manter alta qualidade nos atendimentos, com tempos de resposta adequados e relacionamento duradouro com os clientes."
    },
    {
      title: "Escalabilidade",
      description: "Crescer de forma sustentável, mantendo a qualidade dos serviços e processos padronizados mesmo com o aumento da demanda."
    }
  ];

  const solutions = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Gestão de Projetos e Serviços",
      description: "Sistema completo para planejamento, execução e monitoramento de projetos e serviços, com controle de prazos e recursos.",
      link: "/erp"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Automação de Processos",
      description: "Workflow automatizado para aprovações, solicitações e fluxo de trabalho, aumentando a eficiência e eliminando gargalos."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Dashboards Analíticos",
      description: "Painéis gerenciais com indicadores de desempenho, rentabilidade de serviços e monitoramento de SLAs.",
      link: "/dashboards"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "CRM para Serviços",
      description: "Gestão de relacionamento com clientes, histórico de atendimentos e oportunidades de upsell para serviços complementares."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Portal do Cliente",
      description: "Plataforma web para clientes acompanharem projetos, solicitarem serviços e acessarem documentos e relatórios.",
      link: "/web-development"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Gestão Financeira",
      description: "Controle financeiro específico para empresas de serviços, com análise de rentabilidade por cliente, projeto ou departamento."
    }
  ];

  const benefits = [
    {
      title: "Aumento na Eficiência Operacional",
      description: "Incremento médio de 30% na produtividade com processos otimizados e automação de tarefas administrativas."
    },
    {
      title: "Melhoria na Satisfação do Cliente",
      description: "Elevação significativa no NPS (Net Promoter Score) e redução de 45% no tempo de resposta a solicitações."
    },
    {
      title: "Visibilidade dos Indicadores",
      description: "Monitoramento em tempo real da performance, rentabilidade e outros KPIs essenciais para decisões estratégicas."
    },
    {
      title: "Melhor Alocação de Recursos",
      description: "Otimização do uso de profissionais e ativos, evitando ociosidade e sobrecarga de trabalho."
    },
    {
      title: "Crescimento Sustentável",
      description: "Capacidade de escalar operações mantendo qualidade, processos padronizados e custos controlados."
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
      segmentName="Serviços"
      subtitle="Soluções tecnológicas que otimizam operações, aumentam a produtividade das equipes e elevam a qualidade no atendimento ao cliente."
      backgroundImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Service;
