import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Building, Palette, Plug, Shield, Gamepad2, Headphones, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Team & Department Licenses",
    description: "Volume pricing for organizations of all sizes",
    features: [
      "10-49 learners: 20% off",
      "50-199 learners: 30% off",
      "200+ learners: Custom pricing",
      "Admin dashboard & leaderboards",
      "Progress tracking & reporting",
      "Blockchain certificates for all learners",
      "Dedicated success manager",
    ],
    cta: "Request Team Pricing",
  },
  {
    icon: Building,
    title: "Enterprise Unlimited Subscriptions",
    description: "Full platform access for unlimited learners",
    features: [
      "Unlimited learner seats",
      "Full course catalog access",
      "Custom learning paths",
      "White-label branding options",
      "SSO & API integration",
      "Multi-tenant architecture",
      "Advanced analytics dashboard",
      "Priority support & quarterly reviews",
    ],
    cta: "Request Enterprise Demo",
  },
  {
    icon: Palette,
    title: "Custom eLearning Solutions",
    description: "Bespoke training content developed for your organization",
    features: [
      "Company-specific training modules",
      "Proprietary systems & processes",
      "Internal compliance requirements",
      "Onboarding & product training",
      "Multiple formats: microlearning, labs, scenarios",
      "Platform delivery or LMS export",
      "6-12 week development timeline",
    ],
    cta: "Schedule Consultation",
  },
  {
    icon: Plug,
    title: "Learning Management Integration",
    description: "Connect CYXOR LEARNING with your existing learning infrastructure",
    features: [
      "SCORM, xAPI, and LTI support",
      "HR system integration (Workday, SAP, BambooHR)",
      "SSO via SAML, OAuth, Azure AD",
      "REST APIs for custom integrations",
      "Webhooks for real-time events",
      "Credential syncing & verification",
    ],
    cta: "View Documentation",
  },
  {
    icon: Shield,
    title: "Compliance Management Solutions",
    description: "Automated compliance tracking and verification",
    features: [
      "Automated training assignment",
      "Renewal alerts & reminders",
      "Role-based training paths",
      "Blockchain verification portal",
      "Gap analysis reporting",
      "Real-time compliance dashboard",
      "Supports: ISO 27001, GDPR, NIS2, Cyber Essentials, SOC 2, FCA, NHS",
    ],
    cta: "Explore Compliance Solutions",
  },
  {
    icon: Gamepad2,
    title: "Gamification & Engagement Services",
    description: "Transform compliance into competitive advantage",
    features: [
      "eSports-style tournaments",
      "Achievement badges & systems",
      "Team & individual leaderboards",
      "Timed challenges & drills",
      "Reward programs",
      "3-5x completion rates",
      "65%+ knowledge retention",
    ],
    cta: "Design Your Strategy",
  },
  {
    icon: Headphones,
    title: "Managed Training Services",
    description: "End-to-end training program management",
    features: [
      "Training needs assessment",
      "Learning pathway design",
      "Learner assignments & enrollment",
      "Progress monitoring & nudges",
      "Compliance tracking & reporting",
      "Quarterly business reviews",
      "Dedicated account manager",
    ],
    cta: "Learn About Managed Services",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 blockchain-grid opacity-30" />
          <div className="section-container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Enterprise <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible licensing, custom development, and managed services to fit your organization's needs
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-12">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className={`p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{solution.title}</h2>
                      <p className="text-sm text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="hero">
                    {solution.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Not Sure Which Solution Fits?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our enterprise team will help you find the right combination of products and services.
            </p>
            <Button variant="hero" size="lg">
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
