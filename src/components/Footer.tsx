import { Link } from "react-router-dom";
import { Mail, MapPin, FileText, BookOpen, GraduationCap, Phone, ArrowUpRight, Shield, Award } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [contactOpen, setContactOpen] = useState(false);

  const resourceLinks = [
    { label: "Case Studies", href: "/resources#case-studies", description: "Success stories", icon: FileText },
    { label: "Blog & Insights", href: "/resources#blog", description: "Industry knowledge", icon: BookOpen },
    { label: "Our Instructors", href: "/resources#instructors", description: "Expert educators", icon: GraduationCap },
  ];

  const solutionLinks = [
    { label: "Browse Courses", href: "https://cyxorlearning.com/courses/", external: true },
    { label: "Corporate Upskilling/Reskilling", href: "/solutions" },
    { label: "Custom eLearning", href: "/solutions" },
    { label: "Gamified Engine", href: "/solutions" },
    { label: "Compliance Training", href: "/solutions" },
    { label: "Verify Certificate", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/resources" },
    { label: "Learning Paths", href: "/learning-that-works" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/cyxor-learninguk",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/cyxorlearning",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/cyxorlearning",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@CYXLEARN",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <footer className="bg-navy text-white pb-safe relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Resources Section - Featured */}
        <div className="relative border-b border-white/10">
          <div className="section-container py-10 sm:py-14 lg:py-16">
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan bg-cyan/10 rounded-full mb-3">
                RESOURCES
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Learning Resources & Support
              </h3>
              <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto">
                Access case studies, insights, and connect with our expert instructors
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {resourceLinks.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Link
                    key={resource.label}
                    to={resource.href}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-emerald/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan" />
                    </div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-cyan transition-colors flex items-center gap-2">
                      {resource.label}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-white/60">{resource.description}</p>
                  </Link>
                );
              })}
            </div>
            
            {/* Contact CTA */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald hover:bg-emerald/90 text-white font-semibold transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="section-container py-10 sm:py-14 lg:py-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
            {/* Column 1: Brand & Contact */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-cyan">CYXOR</span>
                <span className="text-xl sm:text-2xl font-bold ml-1.5 text-emerald">Learning</span>
              </div>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Interactive AI Learning You Can Trust. Blockchain-verified certificates, AI-powered personalization, and gamified engagement.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:contact@cyxorlearning.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Mail className="w-4 h-4 text-cyan" />
                  </div>
                  <span>contact@cyxorlearning.com</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald" />
                  </div>
                  United Kingdom
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-all hover:scale-110 border border-white/10"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                Solutions
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-cyan transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link to={link.href} className="hover:text-cyan transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
                Company
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="hover:text-cyan transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => setContactOpen(true)}
                    className="hover:text-cyan transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="hover:text-cyan transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 relative">
          <div className="section-container py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                  <Shield className="w-3.5 h-3.5 text-cyan" />
                  UK Company
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                  <Award className="w-3.5 h-3.5 text-emerald" />
                  GDPR Compliant
                </span>
              </div>

              {/* Copyright */}
              <p className="text-sm text-white/50">
                © {currentYear} CYXOR Learning. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Footer;
