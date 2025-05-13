
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-wm4-orange to-wm4-red opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua gestão de dados?
            </h2>
            <p className="text-lg md:text-xl text-wm4-text mb-8">
              Agende uma demonstração gratuita e descubra como podemos ajudar sua empresa a crescer com tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-orange-red hover:scale-105 transition-transform duration-300 text-lg py-6 px-8">
                Solicitar Demonstração
              </Button>
              <Button variant="outline" className="border-wm4-white hover:scale-105 transition-transform duration-300 text-lg py-6 px-8">
                Fale com um Consultor
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
