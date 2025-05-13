
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-wm4-background z-50 border-b border-wm4-text/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-wm4-orange to-wm4-red bg-clip-text text-transparent">
              WM4
            </span>
            <span className="ml-2 text-wm4-white font-medium hidden sm:inline-block">WeMind4You</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-wm4-text hover:text-wm4-white transition-colors py-2">
                Funcionalidades ▼
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-wm4-background border border-wm4-text/20 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/erp" className="block px-4 py-2 text-wm4-text hover:text-wm4-white hover:bg-wm4-text/10">
                  ERP Empresarial
                </Link>
                <Link to="/sites" className="block px-4 py-2 text-wm4-text hover:text-wm4-white hover:bg-wm4-text/10">
                  Sites Institucionais
                </Link>
                <Link to="/dashboards" className="block px-4 py-2 text-wm4-text hover:text-wm4-white hover:bg-wm4-text/10">
                  Dashboards Power BI
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-wm4-text hover:text-wm4-white transition-colors py-2">
                Segmentos ▼
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-wm4-background border border-wm4-text/20 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/segmentos/comercio" className="block px-4 py-2 text-wm4-text hover:text-wm4-white hover:bg-wm4-text/10">
                  Comércio
                </Link>
                <Link to="/segmentos/servicos" className="block px-4 py-2 text-wm4-text hover:text-wm4-white hover:bg-wm4-text/10">
                  Serviços
                </Link>
                <Link to="/segmentos/industria" className="block px-4 py-2 text-wm4-text hover:text-wm4-white hover:bg-wm4-text/10">
                  Indústria
                </Link>
              </div>
            </div>

            <Link to="/quem-somos" className="text-wm4-text hover:text-wm4-white transition-colors py-2">
              Sobre a WM4
            </Link>
            <Link to="/seguranca" className="text-wm4-text hover:text-wm4-white transition-colors py-2">
              Segurança
            </Link>
            <Link to="/carreira" className="text-wm4-text hover:text-wm4-white transition-colors py-2">
              Carreira
            </Link>
            <Link to="/contato" className="text-wm4-text hover:text-wm4-white transition-colors py-2">
              Contato
            </Link>
          </nav>

          {/* WhatsApp Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-gradient-orange-red hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              <MessageSquare size={18} />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-wm4-white p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-wm4-background z-40 flex flex-col pt-20 pb-6 px-6 lg:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex-1 mt-4">
          <div className="mb-4">
            <div className="text-wm4-white font-medium mb-2">Funcionalidades</div>
            <Link
              to="/erp"
              className="block px-4 py-2 text-wm4-text hover:text-wm4-white border-l border-wm4-text/20 ml-2"
              onClick={toggleMobileMenu}
            >
              ERP Empresarial
            </Link>
            <Link
              to="/sites"
              className="block px-4 py-2 text-wm4-text hover:text-wm4-white border-l border-wm4-text/20 ml-2"
              onClick={toggleMobileMenu}
            >
              Sites Institucionais
            </Link>
            <Link
              to="/dashboards"
              className="block px-4 py-2 text-wm4-text hover:text-wm4-white border-l border-wm4-text/20 ml-2"
              onClick={toggleMobileMenu}
            >
              Dashboards Power BI
            </Link>
          </div>

          <div className="mb-4">
            <div className="text-wm4-white font-medium mb-2">Segmentos</div>
            <Link
              to="/segmentos/comercio"
              className="block px-4 py-2 text-wm4-text hover:text-wm4-white border-l border-wm4-text/20 ml-2"
              onClick={toggleMobileMenu}
            >
              Comércio
            </Link>
            <Link
              to="/segmentos/servicos"
              className="block px-4 py-2 text-wm4-text hover:text-wm4-white border-l border-wm4-text/20 ml-2"
              onClick={toggleMobileMenu}
            >
              Serviços
            </Link>
            <Link
              to="/segmentos/industria"
              className="block px-4 py-2 text-wm4-text hover:text-wm4-white border-l border-wm4-text/20 ml-2"
              onClick={toggleMobileMenu}
            >
              Indústria
            </Link>
          </div>

          <Link
            to="/quem-somos"
            className="block py-3 text-wm4-white hover:text-wm4-orange border-b border-wm4-text/10"
            onClick={toggleMobileMenu}
          >
            Sobre a WM4
          </Link>
          <Link
            to="/seguranca"
            className="block py-3 text-wm4-white hover:text-wm4-orange border-b border-wm4-text/10"
            onClick={toggleMobileMenu}
          >
            Segurança
          </Link>
          <Link
            to="/carreira"
            className="block py-3 text-wm4-white hover:text-wm4-orange border-b border-wm4-text/10"
            onClick={toggleMobileMenu}
          >
            Carreira
          </Link>
          <Link
            to="/contato"
            className="block py-3 text-wm4-white hover:text-wm4-orange"
            onClick={toggleMobileMenu}
          >
            Contato
          </Link>
        </nav>

        {/* WhatsApp Button (Mobile) */}
        <Button className="bg-gradient-orange-red hover:scale-105 transition-transform duration-300 flex items-center gap-2 justify-center mt-6 w-full">
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
