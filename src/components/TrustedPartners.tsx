import defantraLogo from "@/assets/defantra-logo.jpg";
import xantumLogo from "@/assets/xantum-logo.jpg";
import srecLogo from "@/assets/srec-logo.jpg";
import solidarityLogo from "@/assets/solidarity-logo.jpg";

const partners = [
  { name: "SREC", logo: srecLogo, alt: "Sri Ramakrishna Engineering College" },
  { name: "Xantum Computing", logo: xantumLogo, alt: "Xantum Computing" },
  { name: "Defantra", logo: defantraLogo, alt: "Defantra" },
  { name: "Solidarity Foundation", logo: solidarityLogo, alt: "Solidarity Foundation" },
];

const TrustedPartners = () => {
  return (
    <div className="pt-6 sm:pt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center justify-center gap-2 mb-3 sm:mb-6">
        <div className="h-px w-5 sm:w-10 bg-gradient-to-r from-transparent to-white/30" />
        <p className="text-[9px] sm:text-xs text-white/50 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-medium">
          Trusted Partners
        </p>
        <div className="h-px w-5 sm:w-10 bg-gradient-to-l from-transparent to-white/30" />
      </div>
      
      <div className="relative overflow-hidden py-1 sm:py-4">
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-navy/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-navy/80 to-transparent z-10 pointer-events-none" />
        
        {/* Animated marquee container */}
        <div className="flex animate-marquee gap-4 sm:gap-12 will-change-transform">
          {/* First set of logos */}
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0 group"
            >
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-md sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-1 sm:p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-105">
                <img 
                  src={partner.logo} 
                  alt={partner.alt} 
                  className="w-full h-full object-contain" 
                  loading="lazy"
                />
              </div>
              <span className="text-[8px] sm:text-xs text-white/50 text-center whitespace-nowrap transition-colors group-hover:text-white/70">
                {partner.name}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <div 
              key={`${partner.name}-dup`}
              className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0 group"
            >
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-md sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-1 sm:p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-105">
                <img 
                  src={partner.logo} 
                  alt={partner.alt} 
                  className="w-full h-full object-contain" 
                  loading="lazy"
                />
              </div>
              <span className="text-[8px] sm:text-xs text-white/50 text-center whitespace-nowrap transition-colors group-hover:text-white/70">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
