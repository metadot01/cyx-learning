import { Calendar, CheckCircle, Building2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const TransformCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/10 via-background to-emerald/10" />
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Floating orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-72 h-72 bg-cyan/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-96 h-96 bg-emerald/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Transform workforce training with{" "}
            <span className="text-ocean">CYXOR</span>{" "}
            <span className="text-emerald">Learning</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            AI-powered personalization, blockchain-verified credentials, and gamified engagement—built for enterprise scale.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-emerald hover:bg-emerald/90 text-white px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group glow-emerald"
            asChild
          >
            <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Schedule a demo
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransformCTA;