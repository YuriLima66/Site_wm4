import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Arthur Alvarenga",
      position: "CFO & Co-Founder",
      image: "/lovable-uploads/Equipe/Arthur-medio.jpeg",
      linkedin: "https://www.linkedin.com/in/arthur-alvarenga-578a5949/",
    },
    {
      name: "Lucas Second",
      position: "CTO & DevOps Engineer",
      image: "/lovable-uploads/Equipe/lucas-medio.jpeg",
      linkedin: "https://www.linkedin.com/in/lucas-second-047813257/",
    },
    {
      name: "Raniery Vinhal",
      position: "Lead Developer",
      image: "/lovable-uploads/Equipe/Raniery-medio.jpeg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Vinicius Cavedon",
      position: "CIO & Co-Founder ",
      image: "/lovable-uploads/Equipe/Vinicius-medio.jpeg",
      linkedin: "https://www.linkedin.com/in/vinicius-cavedon/",
    },
  ];

  const timelineEvents = [
    {
      year: "1",
      title: "Fundação da WM4",
      description:
        "Início das operações com foco em soluções de software customizadas.",
    },
    {
      year: "2",
      title: "Expansão para Análise de Dados",
      description:
        "Incorporação de serviços de Business Intelligence e dashboards.",
    },
    {
      year: "3",
      title: "Reconhecimento do Mercado",
      description:
        "Crescimento significativo da base de clientes e reconhecimento como referência em tecnologia.",
    },
    {
      year: "4",
      title: "Lançamento do ERP",
      description:
        "Desenvolvimento da primeira versão do nosso sistema ERP empresarial.",
    },
    {
      year: "5",
      title: "Inovação Contínua",
      description:
        "Adoção de tecnologias emergentes e expansão da equipe técnica.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                WM4: Inovação e Parceria para o Seu Sucesso
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Somos especialistas em transformação digital, desenvolvendo
                soluções que conectam dados, pessoas e processos para
                impulsionar a excelência operacional do seu negócio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Missão, Visão e Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-t-4 border-t-wm4-orange shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-wm4-orange/10 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-wm4-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Missão</h3>
                <p className="text-gray-700 text-center">
                  Transformar negócios através da tecnologia, oferecendo
                  soluções inovadoras que aumentam a eficiência e impulsionam o
                  crescimento de nossos clientes.
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-wm4-orange shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-wm4-orange/10 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-wm4-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Visão</h3>
                <p className="text-gray-700 text-center">
                  Ser referência nacional em soluções tecnológicas empresariais,
                  reconhecida pela excelência, inovação contínua e impacto
                  positivo nos resultados de nossos clientes.
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-wm4-orange shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-wm4-orange/10 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-wm4-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="bg-wm4-orange rounded-full h-1.5 w-1.5 mr-2"></span>
                    <span>Excelência técnica</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="bg-wm4-orange rounded-full h-1.5 w-1.5 mr-2"></span>
                    <span>Inovação constante</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="bg-wm4-orange rounded-full h-1.5 w-1.5 mr-2"></span>
                    <span>Compromisso com resultados</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="bg-wm4-orange rounded-full h-1.5 w-1.5 mr-2"></span>
                    <span>Relacionamento de parceria</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Nossa História
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 text-center">
              A trajetória da WM4 é marcada por inovação e crescimento
              constante. Conheça os principais marcos de nossa jornada para nos
              tornarmos referência em soluções tecnológicas empresariais.
            </p>

            <div className="max-w-4xl mx-auto">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex mb-8 md:mb-12"
                >
                  <div className="flex flex-col items-center mr-4 md:mr-8">
                    <div className="bg-wm4-orange text-white font-bold rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                      {event.year}
                    </div>
                    <div className="w-1 bg-wm4-orange/30 flex-grow mt-2"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-5 md:p-6 flex-grow border-l-4 border-wm4-orange mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Conheça Nossos Especialistas
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 text-center">
              Nossa equipe é formada por profissionais talentosos e
              comprometidos em criar soluções que realmente fazem a diferença
              para nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.position}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-wm4-orange hover:text-wm4-orange/80 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
