
import ScrollReveal from './ScrollReveal';

const ClientLogos = () => {
  // Placeholder for client logos
  const clients = [
    { name: 'Cliente 1', logo: 'https://via.placeholder.com/150x50?text=Logo+1' },
    { name: 'Cliente 2', logo: 'https://via.placeholder.com/150x50?text=Logo+2' },
    { name: 'Cliente 3', logo: 'https://via.placeholder.com/150x50?text=Logo+3' },
    { name: 'Cliente 4', logo: 'https://via.placeholder.com/150x50?text=Logo+4' },
    { name: 'Cliente 5', logo: 'https://via.placeholder.com/150x50?text=Logo+5' },
  ];

  return (
    <section className="py-16 bg-wm4-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Empresas que confiam em nossa tecnologia
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={client.logo} alt={client.name} className="h-12 md:h-16" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientLogos;
