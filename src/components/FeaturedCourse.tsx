import { useState } from "react";
import { Sparkles, Image, FileText, Music, Video, Layers, Scale, ArrowRight, CheckCircle, Share2, Link, Check, Award, Clock, BookOpen } from "lucide-react";
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

const CopyLinkButton = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("https://cyxorlearning.com/complianceskills");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-cyan hover:bg-cyan/10 hover:border-cyan/30 transition-all duration-300 border border-border shadow-sm"
      aria-label="Copy link"
    >
      {copied ? <Check className="w-4 h-4 text-emerald" /> : <Link className="w-4 h-4" />}
    </button>
  );
};

const SocialButton = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-cyan hover:bg-cyan/10 hover:border-cyan/30 transition-all duration-300 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
    aria-label={label}
  >
    {children}
  </a>
);

const FeaturedCourse = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/8 via-background to-emerald/8" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan/5 via-transparent to-transparent" />
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      {/* Enhanced floating orbs */}
      <div className="absolute top-10 left-[10%] w-80 h-80 bg-gradient-to-br from-cyan/15 to-emerald/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-gradient-to-br from-emerald/15 to-ocean/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan/5 to-emerald/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald/10 to-cyan/10 border border-emerald/20 rounded-full text-sm font-semibold text-emerald mb-6">
            <Award className="w-4 h-4" />
            Signature Program for Creative Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Featured <span className="gradient-text">Course</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A top-rated AI program for creative talent
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Content - Course Card */}
          <AnimatedSection animation="slide-left" className="lg:col-span-5">
            <div className="relative h-full bg-gradient-to-br from-ocean via-ocean/95 to-space-navy rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald/20 to-transparent rounded-full blur-2xl translate-y-1/4 -translate-x-1/4" />
              <div className="absolute inset-0 blockchain-grid opacity-20" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 flex-wrap mb-6">
                  <span className="inline-flex items-center gap-1.5 text-ocean font-bold text-xs tracking-wider uppercase px-3 py-1.5 bg-white rounded-full shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald font-bold text-xs tracking-wider uppercase px-3 py-1.5 bg-emerald/20 border border-emerald/30 rounded-full">
                    <Clock className="w-3 h-3" />
                    30 Hours
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                  AI for Creative
                  <span className="block text-cyan">Professionals</span>
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-8 flex-grow">
                  Empower your creative team with cutting-edge AI skills for image generation, content creation, audio production, and video editing.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">Modules</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan">1</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">Capstone</div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-emerald to-cyan hover:from-emerald/90 hover:to-cyan/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                  asChild
                >
                  <a href="https://cyxorlearning.com/complianceskills" target="_blank" rel="noopener noreferrer">
                    Explore Course
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Share Section */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/60">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Share</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SocialButton 
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://cyxorlearning.com/complianceskills"
                      label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </SocialButton>
                    <SocialButton 
                      href="https://twitter.com/intent/tweet?url=https://cyxorlearning.com/complianceskills&text=Check out this AI for Creative Professionals course!"
                      label="Share on X"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </SocialButton>
                    <SocialButton 
                      href="https://wa.me/?text=Check out this AI for Creative Professionals course: https://cyxorlearning.com/complianceskills"
                      label="Share on WhatsApp"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </SocialButton>
                    <CopyLinkButton />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - What You'll Learn */}
          <AnimatedSection animation="slide-right" delay={200} className="lg:col-span-7">
            <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-border/50 p-8 lg:p-10 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/20 to-emerald/10 border border-cyan/20 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-7 h-7 text-cyan" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">What You'll Learn</h3>
                  <p className="text-sm text-muted-foreground">Master the complete AI creative toolkit</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {learningPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-muted/50 to-transparent border border-border/50 hover:border-emerald/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald/10 to-cyan/10 border border-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <point.icon className="w-5 h-5 text-emerald" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-relaxed pt-2">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 rounded-xl text-sm text-muted-foreground font-medium border border-border/50">
                    <CheckCircle className="w-4 h-4 text-emerald" />
                    Hands-on projects
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 rounded-xl text-sm text-muted-foreground font-medium border border-border/50">
                    <CheckCircle className="w-4 h-4 text-emerald" />
                    Lifetime access
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan/10 to-emerald/10 rounded-xl text-sm text-cyan font-semibold border border-cyan/20">
                    <Award className="w-4 h-4" />
                    Blockchain verified certificate
                  </span>
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
