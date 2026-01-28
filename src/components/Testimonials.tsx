import { Quote, Star } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "CYXOR's gamified GDPR training transformed our completion rates from 18% to 95% in 8 weeks. Our team actually asked for more compliance courses—something I never thought I'd see.",
    author: "Claire Thompson",
    role: "Chief Compliance Officer",
    company: "Healthcare Provider | London",
    rating: 5,
  },
  {
    quote: "We deployed our first production RAG system 6 weeks after starting CYXOR's AI course. The hands-on labs gave our team confidence to actually build, not just understand theory.",
    author: "Harpreet Singh",
    role: "Head of AI Engineering",
    company: "UK Financial Services",
    rating: 5,
  },
  {
    quote: "Passed ISO 27001 audit on first try. CYXOR's training records and blockchain certificates satisfied our auditors completely. Saved us at least 200 hours of documentation.",
    author: "Michael Chen",
    role: "CISO",
    company: "Critical Infrastructure | Manchester",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-card border-y border-border">
      {/* Subtle background decoration - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-80 h-80 bg-emerald/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-ocean rounded-full">
            Client Success
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight px-2">
            What Our{" "}
            <span className="text-emerald">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-4">
            Real results from regulated teams across the UK
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              delay={index * 150}
              animation="fade-up"
            >
              <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-background border border-border group hover:shadow-card-hover hover:border-cyan/20 transition-all h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-ocean flex items-center justify-center shadow-lg">
                    <Quote className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3 sm:mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-foreground font-medium mb-4 sm:mb-6 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20">
                    <span className="text-cyan font-bold text-sm sm:text-base">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-xs sm:text-sm">{testimonial.author}</p>
                    <p className="text-[10px] sm:text-xs text-cyan font-medium">{testimonial.role}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8 sm:mt-10">
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Join <span className="text-emerald font-semibold">1,300+ professionals</span> who've upskilled with <span className="text-ocean font-semibold">CYXOR</span> <span className="text-emerald font-semibold">LEARNING</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
