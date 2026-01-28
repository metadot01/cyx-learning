import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 lg:py-16 bg-navy text-white pb-safe">
      <div className="section-container">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-16 mb-6 sm:mb-10">
          {/* Column 1: Brand & Contact */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-2 sm:mb-4">
              <span className="text-base sm:text-xl font-bold tracking-tight text-cyan">CYXOR</span>
              <span className="text-base sm:text-xl font-bold ml-1 sm:ml-1.5 text-emerald">Learning</span>
            </div>
            <p className="text-[10px] sm:text-sm text-white/60 mb-3 sm:mb-6 leading-relaxed">
              Interactive AI Learning You Can Trust. Blockchain-verified certificates, AI-powered personalization, and gamified engagement.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1.5 sm:space-y-3 mb-3 sm:mb-6">
              <a href="mailto:contact@cyxorlearning.com" className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-white/70 hover:text-cyan transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyan flex-shrink-0" />
                <span className="truncate">contact@cyxorlearning.com</span>
              </a>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-white/60">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-emerald flex-shrink-0" />
                United Kingdom
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <a href="https://www.linkedin.com/company/cyxor-learninguk" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/cyxorlearning" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/cyxorlearning" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@CYXLEARN" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-5 text-[10px] sm:text-sm uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-1.5 sm:space-y-3 text-[10px] sm:text-sm text-white/70">
              <li><a href="https://cyxorlearning.com/courses/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Browse Courses</a></li>
              <li><Link to="/solutions" className="hover:text-cyan transition-colors">Corporate Upskilling</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan transition-colors">Custom eLearning</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan transition-colors">Gamified Engine</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan transition-colors">Compliance Training</Link></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Verify Certificate</a></li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h4 className="font-bold text-white mb-3 sm:mb-5 text-[10px] sm:text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-1.5 sm:space-y-3 text-[10px] sm:text-sm text-white/70 mb-3 sm:mb-6">
              <li><Link to="/resources" className="hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link to="/resources#instructors" className="hover:text-cyan transition-colors">Our Instructors</Link></li>
              <li><Link to="/resources#contact" className="hover:text-cyan transition-colors">Contact Us</Link></li>
            </ul>
            
            <h4 className="font-bold text-white mb-2 sm:mb-3 text-[10px] sm:text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-1.5 sm:space-y-3 text-[10px] sm:text-sm text-white/70">
              <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
              <li><Link to="/cookie-policy" className="hover:text-cyan transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-3 text-[9px] sm:text-xs text-white/50">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-white/5 border border-white/10">UK Company</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-white/5 border border-white/10">GDPR Compliant</span>
            </div>

            {/* Copyright */}
            <p className="text-[10px] sm:text-sm text-white/50">
              © {currentYear} CYXOR Learning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;