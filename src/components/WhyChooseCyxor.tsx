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
  },
  {
    icon: Shield,
    title: "Blockchain Certificates",
    description: "Every achievement recorded on an immutable blockchain ledger, providing tamper-proof credentials that build trust.",
    items: ["Tamper-proof verification", "One-click QR validation", "Lifetime credential access", "Eliminates credential fraud"],
    color: "text-ocean",
    bgColor: "bg-ocean/10",
  },
  {
    icon: Trophy,
    title: "Gamification Engine",
    highlight: "40% Higher Engagement",
    description: "Transform training with badges, leaderboards, challenges, and rewards that motivate learners to complete courses.",
    items: ["Progressive achievements", "Team leaderboards", "Daily challenges", "Streak rewards"],
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Learn anywhere, anytime. Our responsive platform delivers seamless experiences on phones, tablets, and desktops.",
    items: ["5-15 minute microlearning", "Offline access available", "Cross-device sync", "Learn during downtime"],
    color: "text-emerald",
    bgColor: "bg-emerald/10",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track progress, identify skill gaps, measure ROI, and generate compliance reports with comprehensive analytics.",
    items: ["Real-time dashboards", "ROI calculators", "Skill gap analysis", "Compliance reporting"],
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
  {
    icon: Plug,
    title: "LMS Integration",
    description: "Seamlessly integrate with your existing LMS via SCORM 2004, xAPI, or direct API connections.",
    items: ["SCORM 2004 compatible", "xAPI support", "Direct API access", "White-label options"],
    color: "text-slate",
    bgColor: "bg-slate/10",
  },
];

const WhyChooseCyxor = () => {
  return (
    <section className="py-20 lg:py-28 gradient-section relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            Why Leading Organizations Choose{" "}
            <span className="text-emerald">CYXOR Learning</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six powerful capabilities that transform how your team learns, verifies, and grows.
          </p>
        </AnimatedSection>

        <div className="space-y-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              delay={index * 100}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
            >
              <div className={`group relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card-hover ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-6`}>
                {/* Icon Section */}
                <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center border border-${feature.color.replace('text-', '')}/20 group-hover:scale-105 transition-transform`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  {feature.highlight && (
                    <p className={`text-sm font-bold ${feature.color} mb-2`}>
                      {feature.highlight}
                    </p>
                  )}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {feature.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                        {item}
                      </div>
                    ))}
                  </div>
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
