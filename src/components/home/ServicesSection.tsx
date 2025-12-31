import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Sparkles, Baby } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Sparkles,
    title: "Ginástica Acrobática",
    description: "Formação completa em acrobacia com elementos de força, flexibilidade e trabalho em equipa.",
    color: "from-primary to-accent",
    href: "/servicos",
  },
  {
    icon: Baby,
    title: "Iniciação (4-6 anos)",
    description: "Desenvolvimento motor e primeiros contactos com a ginástica de forma lúdica e divertida.",
    color: "from-accent to-primary",
    href: "/servicos",
  },
  {
    icon: Users,
    title: "Competição",
    description: "Treino avançado para atletas que pretendem competir a nível regional e nacional.",
    color: "from-primary to-accent",
    href: "/servicos",
  },
  {
    icon: Target,
    title: "Formação de Base",
    description: "Aprendizagem técnica fundamental para jovens ginastas dos 7 aos 12 anos.",
    color: "from-accent to-primary",
    href: "/servicos",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            As Nossas Modalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Ginástica Para{" "}
            <span className="text-primary">Todas as Idades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Programas de ginástica acrobática para crianças e jovens, desde a iniciação 
            até ao nível de competição nacional.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Link
                to={service.href}
                className="group block h-full"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-sm border border-border/50 card-hover">
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110",
                    `bg-gradient-to-br ${service.color}`
                  )}>
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center text-primary font-medium text-sm">
                    Saber mais
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}