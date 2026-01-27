import { Calendar, CheckCircle, Building2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const TransformCTA = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/10 via-background to-emerald/10" />
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Get Started
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Ready to Upskill or Reskill{" "}
            <span className="text-emerald">Your Team?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            See how{" "}
            <span className="text-ocean font-semibold">CYXOR</span>{" "}
            <span className="text-emerald font-semibold">Learning</span>{" "}
            can transform your workforce training with blockchain-verified certificates, AI-powered personalization, and gamified engagement.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-emerald" />
              <span>Built for your needs</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-emerald" />
              <span>Guided by an expert</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-5 h-5 text-ocean" />
              <span>Enterprise-ready</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-emerald hover:bg-emerald/90 text-white px-10 py-7 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group glow-emerald"
            asChild
          >
            <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Demo
            </a>
          </Button>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Speak with a learning consultant • Custom pricing available
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransformCTA;