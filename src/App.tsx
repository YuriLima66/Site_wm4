
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";
import Retail from "./pages/segments/Retail";
import Industry from "./pages/segments/Industry";
import Service from "./pages/segments/Service";
import Transporte from "./pages/segments/Transporte";
import Logistica from "./pages/segments/Logistica";
import WebDevelopment from "./pages/services/WebDevelopment";
import ERP from "./pages/services/ERP";
import Dashboards from "./pages/services/Dashboards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security" element={<Security />} />
          <Route path="/erp" element={<ERP />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/segment/retail" element={<Retail />} />
          <Route path="/segment/industry" element={<Industry />} />
          <Route path="/segment/service" element={<Service />} />
          <Route path="/segmentos/transporte" element={<Transporte />} />
          <Route path="/segmentos/logistica" element={<Logistica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
