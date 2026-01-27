import { Shield, Trophy, FlaskConical, Clock, GraduationCap, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Audit-Ready Documentation",
    description: "Pre-built evidence and reporting aligned to ISO 27001 Annex A, SOC 2, and UK GDPR. Blockchain-verified certificates auditors can verify instantly.",
    items: ["Blockchain-verified certificates", "Automated audit reports", "Regulator-accepted evidence", "Instant verification for auditors"],
    color: "text-ocean",
    bgColor: "bg-ocean/10",
  },
  {
    icon: Trophy,
    title: "Gamified Engagement",
    highlight: "95% Completion vs 15% Industry Average",
    description: "Turn GDPR and ISO training into team competitions. Leaderboards, challenges, and achievements that drive 300% higher engagement than traditional eLearning.",
    items: ["Team leaderboards", "Individual achievements", "Timed challenges", "Weekly competitions"],
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: FlaskConical,
    title: "Real-World Simulations",
    description: "Not just videos—actual practice. Build RAG systems, deploy Kubernetes clusters, conduct GDPR audits in safe, hands-on environments.",
    items: ["Interactive labs", "Real-world scenarios", "Immediate feedback", "Production-ready skills"],
    color: "text-emerald",
    bgColor: "bg-emerald/10",
  },
  {
    icon: Clock,
    title: "Fits Into Working Schedules",
    description: "15-20 minute modules you can complete between meetings. Complete full certifications in weeks, not months. Better retention through spaced repetition.",
    items: ["Average module: 15-20 minutes", "Mobile-optimized learning", "Learn at your own pace", "Complete certifications in 6-8 weeks"],
    color: "text-cyan",
    bgColor: "bg-cyan/10",
  },
  {
    icon: GraduationCap,
    title: "Taught by Industry Practitioners",
    description: "Instructors with 15+ years at Dell, EMC, and enterprise fintech. Real-world experience, not just theory. Current practitioners who understand what actually works.",
    items: ["15+ years average experience", "Active in regulated industries", "Certified professionals", "Practical, not theoretical"],
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
];

const WhyChooseCyxor = () => {
  return (
    <section className="py-20 lg:py-28 gradient-section relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Why CYXOR LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            Maximize Compliance and{" "}
            <span className="text-emerald">ROI</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert-led, hands-on courses that your team completes - and your auditors trust.
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
