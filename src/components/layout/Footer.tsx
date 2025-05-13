import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/WM4_vermelho_branco.png"
                alt="WM4 Logo"
                className="h-7 mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Desenvolvimento de software e análise de dados para empresas que
              buscam excelência e inovação em suas soluções tecnológicas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wm4-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wm4-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wm4-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wm4-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/web-development"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link
                  to="/erp"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  ERP Empresarial
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboards"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Dashboards Power BI
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Segurança de Dados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Segmentos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/segment/retail"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Varejo
                </Link>
              </li>
              <li>
                <Link
                  to="/segment/industry"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Indústria
                </Link>
              </li>
              <li>
                <Link
                  to="/segment/service"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Serviços
                </Link>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-6">Institucional</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-400 hover:text-wm4-orange transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-wm4-orange mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Adolfo Bastos, 598
                  <br />
                  Santo André - SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-wm4-orange mr-3 flex-shrink-0" />
                <span className="text-gray-300">(11) 4040-5072</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-wm4-orange mr-3 flex-shrink-0" />
                <span className="text-gray-300">contato@wm4.com.br</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-wm4-orange hover:bg-wm4-orange/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                <span>Fale Conosco</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center cursor-pointer text-gray-700 transition-colors duration-300 hover:text-gray-400">
          <p>© {currentYear} WM4. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
