import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { TrendingUp, Star, Users, Building2 } from "lucide-react";

const stats = [
  { 
    value: "95%", 
    label: "Completion Rate", 
    sublabel: "vs 15% industry avg",
    color: "text-emerald",
    bgColor: "bg-emerald/10",
    borderColor: "border-emerald/20",
    icon: TrendingUp,
  },
  { 
    value: "4.9/5", 
    label: "Average Rating", 
    sublabel: "2,300+ reviews",
    color: "text-gold",
    bgColor: "bg-gold/10",
    borderColor: "border-gold/20",
    icon: Star,
  },
  { 
    value: "10,000+", 
    label: "Professionals", 
    sublabel: "Trained & certified",
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    borderColor: "border-cyan/20",
    icon: Users,
  },
  { 
    value: "150+", 
    label: "Enterprise Clients", 
    sublabel: "Across UK & beyond",
    color: "text-ocean",
    bgColor: "bg-ocean/10",
    borderColor: "border-ocean/20",
    icon: Building2,
  },
];

const StatsBar = () => {
  return (
    <section className="py-10 lg:py-14 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-r from-ocean/5 via-transparent to-emerald/5" />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              delay={index * 80}
              animation="fade-up"
            >
              <div className={`text-center p-4 lg:p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} hover:shadow-md transition-all`}>
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-foreground font-semibold mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
