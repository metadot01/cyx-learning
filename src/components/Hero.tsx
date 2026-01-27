import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import TrustedPartners from "./TrustedPartners";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden gradient-hero">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan/20 to-transparent rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald/15 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-[80px]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge - Overline */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 font-medium">
              <Shield className="w-4 h-4 text-emerald" />
              Blockchain-verified certificates
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 font-medium">
              <Sparkles className="w-4 h-4 text-cyan" />
              AI-Powered personalization
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight text-center">
              <span className="relative inline-block text-emerald drop-shadow-[0_0_30px_rgba(0,200,150,0.5)]">
                Interactive AI Learning
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 8 Q25 2 50 8 T100 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {" "}You Can Trust
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Upskill and reskill your workforce in AI, Digital, and Compliance skills, boosting engagement, improving course completion rates, and maximizing ROI.
            </p>
          </div>


          {/* CTAs */}
          <div className="flex items-center justify-center mt-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <a href="https://cyxorlearning.com/technologyskills" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-8 h-12 shadow-[0_0_40px_rgba(0,200,150,0.3)] hover:shadow-[0_0_60px_rgba(0,200,150,0.5)] transition-all duration-300 group">
                Upskill/Reskill Your Team
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trusted Partners */}
          <TrustedPartners />
        </div>
      </div>
    </section>
  );
};

export default Hero;
