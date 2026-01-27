import { ArrowRight, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const DualCTA = () => {
  return (
    <section className="py-20 lg:py-28 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Organizations */}
          <AnimatedSection animation="fade-up">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-ocean to-navy text-white border border-ocean/50 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Organizations & Teams</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Upskill Your Entire Team
                </h3>
                <p className="text-white/70 mb-6">
                  Team licenses, custom learning paths, dedicated support, and advanced analytics. Built for regulated enterprises.
                </p>

                <p className="text-lg font-bold text-white mb-6">
                  Custom pricing for <span className="text-emerald">5+ users</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link to="/solutions" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full bg-white text-ocean hover:bg-white/90 border-white group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" />
                    Dedicated account manager
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" />
                    Custom reporting
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;