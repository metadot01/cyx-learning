import { Link } from "react-router-dom";
import { Mail, MapPin, FileText, BookOpen, GraduationCap, ArrowUpRight, Shield, Award } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [contactOpen, setContactOpen] = useState(false);

  const resourceLinks = [
    { label: "Case Studies", href: "/resources#case-studies", icon: FileText },
    { label: "Blog & Insights", href: "/resources#blog", icon: BookOpen },
    { label: "Our Instructors", href: "/resources#instructors", icon: GraduationCap },
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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/cyxorlearning",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/cyxorlearning",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@CYXLEARN",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <footer className="bg-gradient-to-b from-navy via-navy to-slate-950 text-white pb-safe relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-cyan/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-emerald/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Top Accent Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />


        {/* Main Footer Content */}
        <div className="section-container py-14 sm:py-20 relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Column 1: Brand & Contact - Takes 2 columns on large screens */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <div className="flex items-center mb-5">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan">CYXOR</span>
                <span className="text-2xl sm:text-3xl font-bold ml-2 text-emerald">Learning</span>
              </div>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Interactive AI Learning You Can Trust. Blockchain-verified certificates, AI-powered personalization, and gamified engagement.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a href="mailto:contact@cyxorlearning.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-cyan transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/20 flex items-center justify-center group-hover:border-cyan/40 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-4 h-4 text-cyan" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">contact@cyxorlearning.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald/20 to-emerald/5 border border-emerald/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald" />
                  </div>
                  United Kingdom
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan hover:bg-cyan/10 hover:border-cyan/30 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">
                Solutions
              </h4>
              <ul className="space-y-3.5">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-white/70 hover:text-cyan transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link to={link.href} className="text-sm text-white/70 hover:text-cyan transition-colors inline-block hover:translate-x-1 duration-300">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">
                Resources
              </h4>
              <ul className="space-y-3.5">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-cyan transition-colors inline-block hover:translate-x-1 duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => setContactOpen(true)}
                    className="text-sm text-white/70 hover:text-cyan transition-colors text-left hover:translate-x-1 duration-300 inline-block"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">
                Company
              </h4>
              <ul className="space-y-3.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-cyan transition-colors inline-block hover:translate-x-1 duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Legal */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3.5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-cyan transition-colors inline-block hover:translate-x-1 duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 relative">
          <div className="section-container py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan/10 to-cyan/5 border border-cyan/10">
                  <Shield className="w-4 h-4 text-cyan" />
                  <span className="text-xs font-medium text-white/70">UK Registered Company</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald/10 to-emerald/5 border border-emerald/10">
                  <Award className="w-4 h-4 text-emerald" />
                  <span className="text-xs font-medium text-white/70">GDPR Compliant</span>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-sm text-white/40">
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
