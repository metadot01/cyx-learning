import { Sparkles, Shield, Trophy, Smartphone, BarChart3, Plug, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Personalization",
    description: "Our AI engine adapts content difficulty, pacing, and format to each learner's style for optimal engagement and retention.",
    items: ["Adaptive learning paths", "95% accuracy in style identification", "75% training time savings", "Personalized recommendations"],
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    borderColor: "border-cyan/20",
  },
  {
    icon: Shield,
    title: "Blockchain Certificates",
    description: "Every achievement recorded on an immutable blockchain ledger, providing tamper-proof credentials that build trust.",
    items: ["Tamper-proof verification", "One-click QR validation", "Lifetime credential access", "Eliminates credential fraud"],
    color: "text-ocean",
    bgColor: "bg-ocean/10",
    borderColor: "border-ocean/20",
  },
  {
    icon: Trophy,
    title: "Gamification Engine",
    highlight: "40% Higher Engagement",
    description: "Transform training with badges, leaderboards, challenges, and rewards that motivate learners to complete courses.",
    items: ["Progressive achievements", "Team leaderboards", "Daily challenges", "Streak rewards"],
    color: "text-gold",
    bgColor: "bg-gold/10",
    borderColor: "border-gold/20",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Learn anywhere, anytime. Our responsive platform delivers seamless experiences on phones, tablets, and desktops.",
    items: ["5-15 minute microlearning", "Offline access available", "Cross-device sync", "Learn during downtime"],
    color: "text-emerald",
    bgColor: "bg-emerald/10",
    borderColor: "border-emerald/20",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track progress, identify skill gaps, measure ROI, and generate compliance reports with comprehensive analytics.",
    items: ["Real-time dashboards", "ROI calculators", "Skill gap analysis", "Compliance reporting"],
    color: "text-lavender",
    bgColor: "bg-lavender/10",
    borderColor: "border-lavender/20",
  },
  {
    icon: Plug,
    title: "LMS Integration",
    description: "Seamlessly integrate with your existing LMS via SCORM 2004, xAPI, or direct API connections.",
    items: ["SCORM 2004 compatible", "xAPI support", "Direct API access", "White-label options"],
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    borderColor: "border-cyan/20",
  },
];

const WhyChooseCyxor = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/5 via-background to-cyan/5" />
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-emerald/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            Why Choose{" "}
            <span className="text-ocean">CYXOR</span>{" "}
            <span className="text-emerald">Learning</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six powerful capabilities that transform how your team learns, verifies, and grows.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className={`group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border ${feature.borderColor} hover:border-cyan/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 border ${feature.borderColor} group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                {feature.highlight && (
                  <p className={`text-xs font-bold ${feature.color} mb-2`}>
                    {feature.highlight}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Items */}
                <div className="space-y-2">
                  {feature.items.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCyxor;
