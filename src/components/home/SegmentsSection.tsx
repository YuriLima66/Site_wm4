
import React from "react";
import { Link } from "react-router-dom";

interface SegmentCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

const SegmentCard: React.FC<SegmentCardProps> = ({ title, icon, description, link }) => {
  return (
    <Link to={link} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-wm4-orange">
      <div className="text-wm4-orange mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
};

const SegmentsSection: React.FC = () => {
  const segments = [
    {
      title: "Varejo",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      ),
      description: "Soluções para lojistas, e-commerces e redes varejistas que buscam automação e análise de dados.",
      link: "/segment/retail",
    },
    {
      title: "Indústria",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
      description: "Sistemas de gestão industrial, controle de produção e monitoramento em tempo real para fábricas.",
      link: "/segment/industry",
    },
    {
      title: "Serviços",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
        </svg>
      ),
      description: "Ferramentas tecnológicas para empresas de serviços, escritórios e profissionais liberais.",
      link: "/segment/service",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Atuação</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Soluções especializadas para diferentes segmentos do mercado,
            desenvolvidas com foco nas necessidades específicas de cada setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <SegmentCard
              key={index}
              title={segment.title}
              icon={segment.icon}
              description={segment.description}
              link={segment.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
