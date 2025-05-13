
import { Button } from "@/components/ui/button";

const HeroCarousel = () => {
  return (
    <div className="overflow-hidden relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-wm4-background z-10"></div>
      
      <div className="flex animate-slide">
        {/* First Slide */}
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Descomplicamos dados pra você
              </h1>
              <p className="text-xl md:text-2xl text-wm4-text mb-8 animate-fade-in max-w-2xl mx-auto">
                Desenvolvemos soluções em tecnologia que transformam dados em resultados.
              </p>
              <Button className="bg-gradient-orange-red hover:scale-105 transition-transform duration-300 text-lg py-6 px-8">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                ERP completo para sua empresa
              </h1>
              <p className="text-xl md:text-2xl text-wm4-text mb-8 animate-fade-in max-w-2xl mx-auto">
                12 funcionalidades integradas para otimizar sua gestão empresarial.
              </p>
              <Button className="bg-gradient-orange-red hover:scale-105 transition-transform duration-300 text-lg py-6 px-8">
                Conhecer ERP
              </Button>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Dashboards inteligentes
              </h1>
              <p className="text-xl md:text-2xl text-wm4-text mb-8 animate-fade-in max-w-2xl mx-auto">
                Visualize seus dados de forma eficiente com nossas soluções em Power BI.
              </p>
              <Button className="bg-gradient-orange-red hover:scale-105 transition-transform duration-300 text-lg py-6 px-8">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
