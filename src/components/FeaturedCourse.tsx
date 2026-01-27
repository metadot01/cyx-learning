import { Sparkles, Image, FileText, Music, Video, Layers, Scale, ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const learningPoints = [
  { icon: Image, text: "AI-powered image generation and advanced prompting" },
  { icon: FileText, text: "Text generation for creative and business content" },
  { icon: Music, text: "Audio and music creation with AI tools" },
  { icon: Video, text: "Video generation and AI-enhanced editing" },
  { icon: Layers, text: "Advanced techniques: GANs, style transfer, fine-tuning" },
  { icon: Scale, text: "Ethics, copyright, and business strategy for AI" },
];

const FeaturedCourse = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/5 via-background to-emerald/5 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-block text-white font-bold text-xs tracking-wider uppercase px-3 py-1.5 bg-ocean rounded-full">
                  Featured Course
                </span>
                <span className="inline-block text-gold font-bold text-xs tracking-wider uppercase px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-full">
                  30-Hour Certificate
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Creative AI for{" "}
                <span className="text-emerald">Professionals</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empower your creative team with AI skills for image generation, content creation, audio production, and video editing. Hands-on projects, blockchain verification, and lifetime access included.
              </p>

              <Button 
                size="lg" 
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
                  Explore Course
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Content - What You'll Learn */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-card glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-xl font-bold text-foreground">What You'll Learn</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-muted rounded-full">8 modules</span>
                  <span className="px-3 py-1 bg-muted rounded-full">50+ lessons</span>
                  <span className="px-3 py-1 bg-muted rounded-full">Capstone project</span>
                  <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full font-medium border border-cyan/20">Blockchain certificate</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;