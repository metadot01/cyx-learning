import { AnimatedSection } from "@/hooks/useScrollAnimation";

const stats = [
  { 
    value: "95%", 
    label: "Completion Rate", 
    sublabel: "Industry avg: 15%",
    color: "text-emerald" 
  },
  { 
    value: "4.9/5", 
    label: "Average Rating", 
    sublabel: "From 2,300 reviews",
    color: "text-gold" 
  },
  { 
    value: "10,000+", 
    label: "Learners", 
    sublabel: "Trained",
    color: "text-cyan" 
  },
  { 
    value: "50+", 
    label: "Enterprises", 
    sublabel: "Trust Us",
    color: "text-ocean" 
  },
];

const StatsBar = () => {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              delay={index * 100}
              animation="scale"
              className="text-center"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-foreground font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.sublabel}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
