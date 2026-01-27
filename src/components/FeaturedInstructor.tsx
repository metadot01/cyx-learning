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
    <section className="py-20 lg:py-28 gradient-section">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight">
            Course
            <br />
            <span className="text-emerald">Instructor</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200} animation="scale" className="max-w-3xl mx-auto">
          <div className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-lg overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-lavender/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6">
              {/* Profile section */}
              <div className="flex flex-col items-center text-center lg:w-1/3">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-cyan/20 to-lavender/20 border-2 border-cyan/30 overflow-hidden mb-3">
                  <img 
                    src={bharathPhoto} 
                    alt="Bharath Shivaram" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">Bharath Shivaram</h3>
                <p className="text-emerald font-semibold text-sm mb-1">Founder and AI Platform Architect</p>
                <a href="https://www.defantra.com/#/research-partnerships" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground mb-3 hover:text-emerald transition-colors">Defantra UK Ltd.</a>
                
                <div className="flex gap-2">
                  <Link to="/resources#instructors">
                    <Button variant="hero" size="sm" className="text-sm h-9 px-4">
                      <BookOpen className="w-4 h-4 mr-1" />
                      View Courses
                    </Button>
                  </Link>
                  <a href="https://www.linkedin.com/company/cyxor-learninguk" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Details section */}
              <div className="lg:w-2/3 lg:pl-6 lg:border-l border-border">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-xs font-bold text-emerald uppercase tracking-wider mb-2">Education</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        MSc Artificial Intelligence, University of Stirling, UK
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        MS Analytics, University of Connecticut, USA
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        Bachelor of Engineering (Computer Science), BIT, India
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald uppercase tracking-wider mb-2">Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Senior engineering roles at Dell Technologies, EMC. Founder and Director of AI Platforms at Xantum Computing.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald uppercase tracking-wider mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {expertise.map((skill) => (
                      <span 
                        key={skill.name} 
                        className={`px-2.5 py-1 text-xs rounded-full font-medium ${skill.color}`}
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
