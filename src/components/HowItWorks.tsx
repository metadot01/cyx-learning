import { Search, BookOpen, Trophy, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse & Choose",
    description: "Filter by industry, standard, or technology",
    color: "text-ocean",
    bgColor: "bg-ocean/10",
    borderColor: "border-ocean/20",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn & Practice",
    description: "Interactive modules + hands-on labs",
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    borderColor: "border-cyan/20",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Compete & Complete",
    description: "Team challenges & assessments",
    color: "text-gold",
    bgColor: "bg-gold/10",
    borderColor: "border-gold/20",
  },
  {
    number: "04",
    icon: Award,
    title: "Earn & Verify",
    description: "Blockchain certificate & audit docs",
    color: "text-emerald",
    bgColor: "bg-emerald/10",
    borderColor: "border-emerald/20",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-soft relative overflow-hidden">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            How{" "}
            <span className="text-foreground">CYXOR</span>{" "}
            <span className="text-emerald">LEARNING</span>{" "}
            Works
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From enrollment to blockchain-verified certification
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.title}
              delay={index * 150}
              animation="scale"
            >
              <div className="relative text-center group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-border/50" />
                )}
                
                {/* Step number */}
                <div className={`w-24 h-24 mx-auto rounded-2xl ${step.bgColor} border-2 ${step.borderColor} flex flex-col items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <span className={`text-xs font-bold ${step.color} opacity-60`}>{step.number}</span>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <p className="text-muted-foreground mb-6">Ready to get started?</p>
          <a href="https://cyxorlearning.com/technologyskills" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="group">
              View Courses
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorks;
