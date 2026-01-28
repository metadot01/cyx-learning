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
    title: "AI Powered Gamified Engine",
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
    <section id="industries" className="py-16 sm:py-20 lg:py-28 relative scroll-mt-24">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ocean/5 to-background" />
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-ocean rounded-full">
            Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight px-2">
            Workplace Learning That Delivers{" "}
            <span className="text-emerald">Measurable Results</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            95% completion rate vs 15% industry average
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={solution.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border ${solution.borderColor} hover:border-cyan/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full text-center`}>
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${solution.bgColor} flex items-center justify-center mx-auto mb-3 sm:mb-4 border ${solution.borderColor} group-hover:scale-110 transition-transform`}>
                  <solution.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${solution.color}`} />
                </div>
                
                <div className={`text-2xl sm:text-3xl font-extrabold ${solution.color} mb-1`}>
                  {solution.stat}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-2 sm:mb-3">
                  {solution.statLabel}
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={400}>
          <Button 
            size="lg" 
            className="bg-emerald hover:bg-emerald/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group"
            asChild
          >
            <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
              Explore All Solutions
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustryRelevance;
