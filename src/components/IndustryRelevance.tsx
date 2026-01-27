import { Building2, Palette, Trophy, ShieldCheck, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Corporate Upskilling",
    stat: "500+",
    statLabel: "Courses",
    description: "AI & digital skills training with blockchain-verified certificates",
    color: "text-ocean",
    bgColor: "bg-ocean/10",
    borderColor: "border-ocean/20",
  },
  {
    icon: Palette,
    title: "Custom eLearning",
    stat: "100%",
    statLabel: "Tailored",
    description: "Bespoke content with gamification and LMS integration",
    color: "text-emerald",
    bgColor: "bg-emerald/10",
    borderColor: "border-emerald/20",
  },
  {
    icon: Trophy,
    title: "Gamified Platform",
    stat: "40%",
    statLabel: "More Engagement",
    description: "Badges, leaderboards & challenges that drive completion",
    color: "text-gold",
    bgColor: "bg-gold/10",
    borderColor: "border-gold/20",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Verification",
    stat: "1-Click",
    statLabel: "Verification",
    description: "Tamper-proof blockchain credentials with audit trails",
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    borderColor: "border-cyan/20",
  },
];

const IndustryRelevance = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 relative scroll-mt-24 bg-soft">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            Workplace Learning That Delivers{" "}
            <span className="text-emerald">Measurable Results</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            95% completion rate vs 15% industry average
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={solution.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className={`group relative p-6 rounded-2xl bg-card border ${solution.borderColor} hover:border-cyan/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full text-center`}>
                <div className={`w-14 h-14 rounded-xl ${solution.bgColor} flex items-center justify-center mx-auto mb-4 border ${solution.borderColor} group-hover:scale-110 transition-transform`}>
                  <solution.icon className={`w-7 h-7 ${solution.color}`} />
                </div>
                
                <div className={`text-3xl font-extrabold ${solution.color} mb-1`}>
                  {solution.stat}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                  {solution.statLabel}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={400}>
          <Button 
            size="lg" 
            className="bg-emerald hover:bg-emerald/90 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group"
            asChild
          >
            <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
              Explore All Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustryRelevance;
