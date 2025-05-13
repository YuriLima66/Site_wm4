
import React from "react";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-wm4-orange text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar seu negócio com tecnologia?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Fale com nossos especialistas e descubra como a WM4 pode ajudar sua empresa a crescer.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-wm4-orange font-semibold rounded-md hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            Fale Conosco
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            Conheça a WM4
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
