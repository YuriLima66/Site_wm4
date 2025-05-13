import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Função auxiliar para renderizar os links com estilo ativo
  const NavItem = ({ to, children, className = "" }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          navigationMenuTriggerStyle(),
          "text-white hover:text-wm4-orange bg-transparent hover:bg-black/20",
          isActive && "text-red-500",
          className
        )
      }
    >
      {children}
    </NavLink>
  );

  // Função para item de lista com suporte a links ativos
  const NavListItem = ({ to, title, children }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive && "text-red-500"
          )
        }
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavLink>
    </li>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/wm4-logo.png"
              alt="WM4 Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-wm4-orange bg-black hover:bg-black/50">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavLink
                          to="/web-development"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-wm4-orange/50 to-wm4-orange p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Soluções WM4
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Desenvolvimento personalizado para o seu negócio
                          </p>
                        </NavLink>
                      </li>
                      <NavListItem
                        to="/web-development"
                        title="Desenvolvimento Web"
                      >
                        Sites e aplicações web para sua empresa
                      </NavListItem>
                      <NavListItem to="/erp" title="ERP Empresarial">
                        Sistema completo de gestão empresarial
                      </NavListItem>
                      <NavListItem to="/dashboards" title="Dashboards Power BI">
                        Visualização de dados inteligentes
                      </NavListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-wm4-orange bg-transparent hover:bg-black/20">
                    Segmentos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <NavListItem to="/segment/industry" title="Indústria">
                        Automação e controle para manufatura
                      </NavListItem>
                      <NavListItem to="/segment/service" title="Serviços">
                        Ferramentas para empresas de serviço
                      </NavListItem>
                      <NavListItem
                        to="/segmentos/transporte"
                        title="Transporte"
                      >
                        Otimização e segurança no transporte
                      </NavListItem>
                      <NavListItem to="/segmentos/logistica" title="Logística">
                        Soluções para gestão logística integrada
                      </NavListItem>
                      <NavListItem to="/segment/retail" title="Varejo">
                        Soluções específicas para o comércio
                      </NavListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavItem to="/security">Segurança</NavItem>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavItem to="/about">Sobre</NavItem>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavItem to="/career">Carreira</NavItem>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavItem to="/contact">Contato</NavItem>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavLink to="/contact">
                    <button className="bg-wm4-orange hover:bg-wm4-orange/90 text-white px-5 py-2 rounded-md transition-all duration-300 ease-in-out ml-2">
                      Fale Conosco
                    </button>
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-black/95 rounded-md border border-gray-800 animate-fade-in">
            <NavLink
              to="/web-development"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Desenvolvimento Web
            </NavLink>
            <NavLink
              to="/erp"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              ERP Empresarial
            </NavLink>
            <NavLink
              to="/dashboards"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Dashboards Power BI
            </NavLink>
            <NavLink
              to="/segment/retail"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Varejo
            </NavLink>
            <NavLink
              to="/segment/industry"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Indústria
            </NavLink>
            <NavLink
              to="/segment/service"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Serviços
            </NavLink>
            <NavLink
              to="/segmentos/transporte"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Transporte
            </NavLink>
            <NavLink
              to="/segmentos/logistica"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Logística
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Sobre a WM4
            </NavLink>
            <NavLink
              to="/security"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Segurança
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Carreira
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 text-white hover:text-wm4-orange transition-all duration-300",
                  isActive && "text-red-500"
                )
              }
              onClick={toggleMobileMenu}
            >
              Contato
            </NavLink>
            <NavLink
              to="/contact"
              className="block mx-4 mt-2 py-2 text-center bg-wm4-orange hover:bg-wm4-orange/90 text-white rounded-md transition-all duration-300 ease-in-out"
              onClick={toggleMobileMenu}
            >
              Fale Conosco
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
