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
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            What Our{" "}
            <span className="text-emerald">Clients Say</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real results from regulated teams across the UK
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              delay={index * 150}
              animation="fade-up"
            >
              <div className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border group hover:shadow-card-hover hover:border-cyan/20 transition-all h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-7 h-7 rounded-full bg-ocean flex items-center justify-center shadow-lg">
                    <Quote className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-foreground font-medium mb-6 leading-relaxed text-base flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20">
                    <span className="text-cyan font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-cyan font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <p className="text-muted-foreground">
            Join <span className="text-emerald font-semibold">10,000+ professionals</span> who've upskilled with <span className="text-ocean font-semibold">CYXOR</span> <span className="text-emerald font-semibold">LEARNING</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
