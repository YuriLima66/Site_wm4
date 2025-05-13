
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wm4-background border-t border-wm4-text/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-wm4-orange to-wm4-red bg-clip-text text-transparent">
                WM4
              </span>
              <span className="ml-2 text-wm4-white font-medium">WeMind4You</span>
            </Link>
            <p className="text-wm4-text mb-4">
              Descomplicamos dados para você. Soluções em tecnologia para empresas que querem crescer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wm4-text hover:text-wm4-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wm4-text hover:text-wm4-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wm4-text hover:text-wm4-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contato@wm4.com.br"
                className="text-wm4-text hover:text-wm4-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-wm4-white font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/erp" className="text-wm4-text hover:text-wm4-white transition-colors">
                  ERP Empresarial
                </Link>
              </li>
              <li>
                <Link to="/sites" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Sites Institucionais
                </Link>
              </li>
              <li>
                <Link to="/dashboards" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Dashboards Power BI
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-wm4-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/desenvolvimento" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Desenvolvimento de Software
                </Link>
              </li>
              <li>
                <Link to="/servicos/business-analytics" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link to="/servicos/dashboards" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Criação de Dashboards Personalizados
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-wm4-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Sobre a WM4
                </Link>
              </li>
              <li>
                <Link to="/seguranca" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Segurança
                </Link>
              </li>
              <li>
                <Link to="/carreira" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Carreira
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-wm4-text hover:text-wm4-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-wm4-text/10 text-center text-sm text-wm4-text">
          <p>
            &copy; {new Date().getFullYear()} WM4 - WeMind4You. Todos os direitos reservados.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/termos" className="hover:text-wm4-white transition-colors">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="hover:text-wm4-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
