
import { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const Feature = ({ title, description, icon, delay = 0 }: FeatureProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="p-6 border border-wm4-text/20 rounded-xl bg-wm4-background/50 card-hover">
        <div className="text-wm4-orange mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-wm4-text">{description}</p>
      </div>
    </ScrollReveal>
  );
};

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    description: string;
    icon: ReactNode;
  }>;
  dark?: boolean;
}

const FeatureSection = ({ title, subtitle, features, dark = false }: FeatureSectionProps) => {
  return (
    <section className={`py-20 ${dark ? 'bg-black' : 'bg-wm4-background'}`}>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-wm4-text text-lg max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
