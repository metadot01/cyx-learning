import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Target, 
  Rocket, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  BarChart3,
  Clock,
  FlaskConical,
  Trophy,
  Link2,
  Briefcase,
  Heart,
  CheckCircle,
  Lightbulb
} from "lucide-react";

const valueProps = [
  {
    icon: BookOpen,
    title: "Interactive Learning for Results",
    description: "Our courses are designed for high engagement, driving improved completion rates and effective knowledge transfer.",
  },
  {
    icon: TrendingUp,
    title: "High-ROI Skills",
    description: "We focus on skills that directly impact organizational performance, ensuring measurable value for your business.",
  },
  {
    icon: Shield,
    title: "Compliance-Ready Training",
    description: "All courses and progress tracking are audit-ready, enabling organizations to meet regulatory requirements and industry standards with confidence.",
  },
  {
    icon: BarChart3,
    title: "Integrated Tracking & Metrics",
    description: "Real-time tracking, completion metrics, and analytics provide actionable insights to optimize workforce development and learning outcomes.",
  },
];

const approaches = [
  {
    icon: Clock,
    title: "Microlearning",
    description: "Short, focused modules of 5–15 minutes designed for efficient skill acquisition and retention.",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Labs",
    description: "Interactive practice in live environments reinforces learning and promotes real-world skill transfer.",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Leaderboards, challenges, and rewards enhance motivation, engagement, and sustained participation.",
  },
  {
    icon: Link2,
    title: "Blockchain Credentials",
    description: "Immutable, verifiable certifications provide trust, compliance, and proof of achievement.",
  },
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description: "Tailored content for regulated sectors, focusing on skills that deliver tangible organizational impact.",
  },
];

const whyItWorks = [
  {
    icon: Heart,
    title: "Engagement Drives Completion",
    description: "Our interactive design keeps learners motivated and ensures higher course completion rates.",
  },
  {
    icon: TrendingUp,
    title: "Skills Drive Performance",
    description: "Training focuses on skills that matter most to your organization, maximizing ROI.",
  },
  {
    icon: Shield,
    title: "Compliance Drives Trust",
    description: "Audit-ready credentials reduce regulatory risk and simplify reporting.",
  },
  {
    icon: Lightbulb,
    title: "Metrics Drive Insight",
    description: "Integrated tracking ensures learning translates into measurable business outcomes.",
  },
];

const LearningThatWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 blockchain-grid opacity-30" />
          <div className="section-container relative z-10 text-center">
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                Learning That <span className="text-primary">Works</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                A Workforce Learning Platform
              </p>
              <p className="text-sm text-muted-foreground">
                Unit of Xantum Computing Private Limited, India
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <AnimatedSection animation="slide-left">
                <div className="p-8 rounded-2xl border border-border bg-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    CYXOR Learning aims to transform corporate learning through interactive, outcome-driven courses that equip employees with high-impact skills and deliver measurable business results.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <div className="p-8 rounded-2xl border border-border bg-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-cyan" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide engaging, high-ROI learning experiences that enhance skill adoption, ensure regulatory compliance, and generate verified, audit-ready outcomes.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Unique Value Proposition */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Unique <span className="text-primary">Value Proposition</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach to Learning */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="section-container">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Approach to <span className="text-cyan">Learning</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {approaches.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="p-6 rounded-2xl border border-border bg-card hover:border-cyan/50 transition-all duration-300 h-full group">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-cyan" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why CYXOR Learning Works */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why CYXOR Learning <span className="text-primary">Works</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyItWorks.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearningThatWorks;
