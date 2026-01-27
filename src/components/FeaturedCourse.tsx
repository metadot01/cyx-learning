import { Sparkles, Image, FileText, Music, Video, Layers, Scale, ArrowRight, CheckCircle, Share2 } from "lucide-react";
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
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-block text-white font-bold text-xs tracking-wider uppercase px-3 py-1.5 bg-ocean rounded-full">
                  Featured Course
                </span>
                <span className="inline-block text-emerald font-bold text-xs tracking-wider uppercase px-3 py-1.5 bg-emerald/10 border border-emerald/20 rounded-full">
                  30-Hour Certificate
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                AI for{" "}
                <span className="text-emerald">Creative Professionals</span>
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

              {/* Share Section */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share:</span>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://cyxorlearning.com/complianceskills" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-cyan hover:bg-cyan/10 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/sharer/sharer.php?u=https://cyxorlearning.com/complianceskills" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-cyan hover:bg-cyan/10 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/intent/tweet?url=https://cyxorlearning.com/complianceskills&text=Check out this AI for Creative Professionals course!" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-cyan hover:bg-cyan/10 transition-colors"
                    aria-label="Share on X"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:?subject=Check out this course&body=I found this great AI course for Creative Professionals: https://cyxorlearning.com/complianceskills" 
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-cyan hover:bg-cyan/10 transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
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