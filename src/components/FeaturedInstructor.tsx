import { Linkedin, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import bharathPhoto from "@/assets/bharath-shivaram.jpg";
const expertise = [
  { name: "AI Agent Architecture", color: "tag-ai" },
  { name: "LLM Security", color: "tag-ai" },
  { name: "Platform Engineering", color: "tag-cloud" },
  { name: "Blockchain", color: "tag-blockchain" },
  { name: "Big Data", color: "tag-compliance" },
];

const FeaturedInstructor = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-card">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-emerald/5" />
      
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-ocean rounded-full">
            Meet Your Instructor
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mt-3 sm:mt-4 px-2">
            Learn from{" "}
            <span className="text-emerald">Industry Experts</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200} animation="scale" className="max-w-3xl mx-auto">
          <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-lg overflow-hidden">
            {/* Decorative gradient - hidden on mobile */}
            <div className="hidden sm:block absolute top-0 right-0 w-48 h-48 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="hidden sm:block absolute bottom-0 left-0 w-36 h-36 bg-lavender/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
              {/* Profile section */}
              <div className="flex flex-col items-center text-center lg:w-1/3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-cyan/20 to-lavender/20 border-2 border-cyan/30 overflow-hidden mb-2 sm:mb-3">
                  <img 
                    src={bharathPhoto} 
                    alt="Bharath Shivaram" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">Bharath Shivaram</h3>
                <p className="text-emerald font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Founder and AI Platform Architect</p>
                <a href="https://www.defantra.com/#/research-partnerships" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 hover:text-emerald transition-colors">Defantra UK Ltd.</a>
                
                <div className="flex gap-2">
                  <Link to="/resources#instructors">
                    <Button variant="hero" size="sm" className="text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      View Courses
                    </Button>
                  </Link>
                  <a href="https://www.linkedin.com/company/cyxor-learninguk" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Details section */}
              <div className="lg:w-2/3 lg:pl-4 sm:lg:pl-6 lg:border-l border-border w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold text-emerald uppercase tracking-wider mb-1.5 sm:mb-2">Education</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-start gap-1.5 sm:gap-2">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-sm">MSc Artificial Intelligence, University of Stirling, UK</span>
                      </li>
                      <li className="flex items-start gap-1.5 sm:gap-2">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-sm">MS Analytics, University of Connecticut, USA</span>
                      </li>
                      <li className="flex items-start gap-1.5 sm:gap-2">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-sm">Bachelor of Engineering (Computer Science), BIT, India</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold text-emerald uppercase tracking-wider mb-1.5 sm:mb-2">Experience</h4>
                    <p className="text-[11px] sm:text-sm text-muted-foreground">
                      Senior engineering roles at Dell Technologies, EMC. Founder and Director of AI Platforms at Xantum Computing.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-emerald uppercase tracking-wider mb-1.5 sm:mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {expertise.map((skill) => (
                      <span 
                        key={skill.name} 
                        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs rounded-full font-medium ${skill.color}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedInstructor;
