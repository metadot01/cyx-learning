import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GraduationCap, Linkedin, Award, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import bharathPhoto from "@/assets/bharath-shivaram.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const techStack = {
  "AI & ML": ["PyTorch", "TensorFlow", "Transformers", "LangChain", "LlamaIndex", "LangGraph", "AutoGen"],
  "Cloud & MLOps": ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "MLflow", "Kubeflow", "Terraform"],
  "Data Engineering": ["Spark", "Kafka", "Flink", "Delta Lake", "Snowflake", "dbt"],
  "Blockchain": ["Solidity", "Ethereum", "Polygon", "Hardhat", "ethers.js"],
  "Vector Databases": ["Pinecone", "Weaviate", "FAISS", "pgVector", "Qdrant"],
};

const expertise = [
  "AI Agent Architecture",
  "Large Language Models (LLMs)",
  "AI Safety & Security",
  "Platform & Cloud Engineering",
  "Big Data & Distributed Systems",
  "Blockchain & Verifiable Credentials",
];

const Resources = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 blockchain-grid opacity-30" />
          <div className="section-container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Our <span className="text-emerald">Instructors</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CYXOR LEARNING instructors are industry practitioners, researchers, and architects who design and deliver hands-on, verifiable learning for enterprise and regulated environments.
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our instructors combine real-world engineering experience with academic depth, ensuring learners gain skills that are immediately applicable and auditable.
            </p>
          </div>
        </section>

        {/* Lead Instructor */}
        <section id="instructors" className="py-16 scroll-mt-24">
          <div className="section-container">
            <div className="text-center mb-10">
              <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
                Lead Instructor
              </span>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-lg">
                {/* Header with photo */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-8 border-b border-border">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-cyan/20 to-lavender/20 border-2 border-cyan/30 overflow-hidden flex-shrink-0">
                    <img 
                      src={bharathPhoto} 
                      alt="Bharath Shivaram" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">Bharath Shivaram</h2>
                    <p className="text-emerald font-semibold text-lg mb-2">Founder & AI Platform Architect</p>
                    <p className="text-muted-foreground mb-4 max-w-2xl">
                      Bharath is an AI systems architect and educator specialising in agentic AI systems, large language model (LLM) security, and enterprise AI platforms. He leads curriculum design and instructor standards across CYXOR LEARNING.
                    </p>
                    <a 
                      href="https://www.linkedin.com/company/cyxor-learninguk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Specialisation */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-emerald uppercase tracking-wider mb-3">Specialisation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI Agent Architecture & Orchestration</li>
                    <li>• Agentic AI Systems & LLM Optimisation</li>
                    <li>• AI & LLM Security</li>
                    <li>• Enterprise AI Platform Engineering</li>
                    <li>• Blockchain-Based Credential Verification</li>
                  </ul>
                </div>

                {/* Education & Research */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-emerald uppercase tracking-wider mb-3">Education</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">MSc Artificial Intelligence</p>
                          <p className="text-sm">University of Stirling, Scotland, UK</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">MS Business Analytics & Project Management</p>
                          <p className="text-sm">University of Connecticut, USA</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-emerald uppercase tracking-wider mb-3">Research</h3>
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                      <p className="text-sm font-medium text-foreground mb-1">Dissertation</p>
                      <p className="text-sm text-muted-foreground italic">
                        "Analyzing Chain-of-Thought Vulnerabilities in Large Language Models using Interpretation and Quantization"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-emerald uppercase tracking-wider mb-3">Professional Experience</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Senior advisory and engineering roles at Dell Technologies and EMC</li>
                    <li>• Experience delivering AI and analytics solutions in healthcare and regulated industries</li>
                    <li>• Founder of Xantum Computing, building enterprise AI, security, and blockchain solutions</li>
                  </ul>
                </div>

                {/* Areas of Expertise */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-emerald uppercase tracking-wider mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Stack */}
                <div>
                  <h3 className="text-lg font-bold text-emerald uppercase tracking-wider mb-4">Technical Stack</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(techStack).map(([category, technologies]) => (
                      <div key={category} className="p-4 rounded-xl bg-secondary/30 border border-border">
                        <h4 className="font-bold text-primary text-sm mb-2">{category}</h4>
                        <p className="text-xs text-muted-foreground">
                          {technologies.join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teach With Us CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <GraduationCap className="w-12 h-12 text-emerald mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Teach With <span className="text-foreground font-extrabold">CYXOR</span> <span className="text-emerald font-extrabold">LEARNING</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We collaborate with experienced practitioners, researchers, and instructors who want to teach cutting-edge topics through hands-on, outcome-driven learning.
              </p>
              <a href="mailto:contact@cyxorlearning.co.uk">
                <Button variant="hero" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@cyxorlearning.co.uk
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 scroll-mt-24">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about our courses or enterprise solutions? We'd love to hear from you.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={errors.name ? "border-destructive" : ""}
                          maxLength={100}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={errors.email ? "border-destructive" : ""}
                          maxLength={255}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company (optional)"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className={errors.company ? "border-destructive" : ""}
                        maxLength={100}
                      />
                      {errors.company && (
                        <p className="text-xs text-destructive">{errors.company}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={errors.message ? "border-destructive" : ""}
                        maxLength={1000}
                      />
                      <div className="flex justify-between">
                        {errors.message ? (
                          <p className="text-xs text-destructive">{errors.message}</p>
                        ) : (
                          <span />
                        )}
                        <p className="text-xs text-muted-foreground">
                          {formData.message.length}/1000
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
