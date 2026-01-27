import { useState } from "react";
import { Building2, Heart, Landmark, Server, ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const categories = [
  { id: "all", label: "All Industries" },
  { id: "finance", label: "Finance" },
  { id: "healthcare", label: "Healthcare" },
  { id: "government", label: "Government" },
  { id: "infrastructure", label: "Infrastructure" },
];

const industries = [
  {
    icon: Building2,
    title: "Financial Services & Banking",
    category: "finance",
    items: ["FCA SM&CR Compliance", "ISO 27001 for FSI", "GDPR for Banking", "AI Risk Management"],
    href: "https://cyxorlearning.com/complianceskills",
    color: "from-ocean/10 to-ocean/5",
    iconColor: "text-ocean",
    iconBg: "bg-ocean/10 border-ocean/20",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    category: "healthcare",
    items: ["GDPR for Healthcare", "NIS2 for Health Systems", "Care Quality Commission", "Medical Device Regulation"],
    href: "https://cyxorlearning.com/complianceskills",
    color: "from-emerald/10 to-emerald/5",
    iconColor: "text-emerald",
    iconBg: "bg-emerald/10 border-emerald/20",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    category: "government",
    items: ["Cyber Essentials Plus", "ISO 27001:2022", "UK GDPR Article 30", "NIS2 Directive"],
    href: "https://cyxorlearning.com/complianceskills",
    color: "from-slate/10 to-slate/5",
    iconColor: "text-slate",
    iconBg: "bg-slate/10 border-slate/20",
  },
  {
    icon: Server,
    title: "Critical Infrastructure",
    category: "infrastructure",
    items: ["NIS2 for Operators", "OT Security Training", "ISO 27001 for CNI", "Incident Response"],
    href: "https://cyxorlearning.com/complianceskills",
    color: "from-gold/10 to-gold/5",
    iconColor: "text-gold",
    iconBg: "bg-gold/10 border-gold/20",
  },
];

const IndustryRelevance = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredIndustries = activeCategory === "all" 
    ? industries 
    : industries.filter(ind => ind.category === activeCategory);

  return (
    <section id="industries" className="py-20 lg:py-28 relative scroll-mt-24 bg-soft">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            Courses Designed for{" "}
            <span className="text-emerald">Highly Regulated Industries</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Customizable training solutions that actually get completed
          </p>
        </AnimatedSection>

        {/* Category Filter Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10" delay={100}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-emerald text-white shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:border-emerald/30 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIndustries.map((industry, index) => (
            <AnimatedSection
              key={industry.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${industry.iconBg} group-hover:scale-105 transition-transform`}>
                    <industry.icon className={`w-6 h-6 ${industry.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {industry.title}
                  </h3>
                  
                  <ul className="space-y-2 mb-5">
                    {industry.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className={`w-4 h-4 ${industry.iconColor} flex-shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={industry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm ${industry.iconColor} font-semibold group/link`}
                  >
                    <span className="link-underline">Browse Courses</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryRelevance;
