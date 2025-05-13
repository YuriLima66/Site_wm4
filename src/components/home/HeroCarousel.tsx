import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Descomplicamos dados para você",
    subtitle: "Soluções de análise de dados que transformam sua empresa",
    image: "/lovable-uploads/banner.png",
    buttonText: "Conheça nossas soluções",
    buttonLink: "/dashboards",
  },
  {
    id: 2,
    title: "Impulsione seu negócio com tecnologia",
    subtitle: "Desenvolvimento de software personalizado para sua empresa",
    image: "/lovable-uploads/banner.jpg",
    buttonText: "Saiba mais",
    buttonLink: "/web-development",
  },
  {
    id: 3,
    title: "ERP completo para sua empresa",
    subtitle: "Gerencie todos os processos do seu negócio em um único lugar",
    image: "/lovable-uploads/banner-dev.jpg",
    buttonText: "Conheça nosso ERP",
    buttonLink: "/erp",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden mt-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"}`}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="relative flex items-center justify-center h-full z-10">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block px-8 py-3 bg-wm4-orange text-white font-semibold rounded-md hover:bg-wm4-orange/90 transition-all duration-300 ease-in-out animate-slide-in"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out
              ${
                index === currentSlide
                  ? "bg-wm4-orange w-8"
                  : "bg-white/60 hover:bg-white"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
