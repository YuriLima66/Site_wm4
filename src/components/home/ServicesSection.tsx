
import React from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="service-card group">
      <div className="h-48 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end">
          <span className="text-wm4-orange font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center">
            Saiba mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Desenvolvimento de Software",
      description: "Desenvolvimento de sistemas web personalizados, aplicativos móveis e integrações para aumentar a eficiência do seu negócio.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      link: "/web-development",
    },
    {
      title: "ERP Empresarial",
      description: "Sistema de gestão completo para indústrias e transportes, integrando todos os setores da sua empresa em uma única plataforma.",
      image: "/lovable-uploads/laptop-mesa.jpg",
      link: "/erp",
    },
    {
      title: "Dashboards Power BI",
      description: "Visualização de dados inteligente com dashboards personalizados para monitorar o desempenho da sua empresa em tempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
      link: "/dashboards",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar o 
            crescimento da sua empresa com inovação e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
