import { ArrowRight, Play, Shield, Sparkles, Users } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const TransformCTA = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden gradient-section">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-emerald">Workforce?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of organizations building verified skills with{" "}
            <span className="text-ocean font-semibold">CYXOR</span>{" "}
            <span className="text-emerald font-semibold">Learning</span>. Start with a free trial or schedule a personalized demo to see how blockchain-verified, AI-powered learning can deliver measurable ROI for your team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA - Free Trial */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group mb-3"
                asChild
              >
                <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
                  Start Your Free 30-Day Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-ocean" />
                No credit card required • Full access • Blockchain included
              </p>
            </div>

            <span className="text-muted-foreground font-medium hidden sm:block">or</span>

            {/* Secondary CTA - Demo */}
            <div className="text-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-ocean text-ocean hover:bg-ocean hover:text-white px-8 py-6 text-base font-semibold rounded-full transition-all group mb-3"
                asChild
              >
                <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 w-5 h-5" />
                  Schedule a Demo
                </a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                Speak with a consultant • Custom pricing
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransformCTA;