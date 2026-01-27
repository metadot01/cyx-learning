import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Menu, 
  Zap, 
  Users, 
  TrendingUp, 
  MessageSquare,
  Cloud,
  Shield,
  Database,
  GitBranch,
  FileCheck,
  Heart,
  Landmark,
  Award,
  Route,
  ClipboardCheck,
  Settings,
  BarChart3,
  Link2,
  BadgeCheck,
  Fingerprint,
  BookOpen,
  FileText,
  GraduationCap,
  Phone,
  Sparkles,
  Target,
  Building2,
  Scale
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import cyxorLogo from "@/assets/cyxor-logo-header.png";
import ContactDialog from "@/components/ContactDialog";

const navItems = [
  {
    label: "Upskill",
    href: "/solutions#upskill",
    description: "Employee Development & Growth",
    icon: TrendingUp,
    color: "text-emerald",
    bgColor: "bg-emerald/10",
    featured: {
      title: "Workforce Upskilling",
      description: "Transform your workforce with personalized learning paths designed for the modern workplace.",
      cta: "Explore Programs",
      href: "/solutions#upskill"
    },
    items: [
      { label: "Digital Skills", href: "/solutions#digital-skills", description: "Modern technology proficiency", icon: Zap },
      { label: "Leadership Training", href: "/solutions#leadership", description: "Develop future leaders", icon: Users },
      { label: "Soft Skills", href: "/solutions#soft-skills", description: "Communication & collaboration", icon: MessageSquare },
      { label: "Career Pathways", href: "/solutions#career", description: "Growth & advancement tracks", icon: Target },
    ],
  },
  {
    label: "Enterprise Tech",
    href: "/solutions#enterprise",
    description: "Technology & IT Training",
    icon: Cloud,
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    featured: {
      title: "Enterprise Technology",
      description: "Keep your teams at the cutting edge with comprehensive tech training programs.",
      cta: "View Tech Courses",
      href: "/solutions#enterprise"
    },
    items: [
      { label: "Cloud Computing", href: "/solutions#cloud", description: "AWS, Azure, GCP training", icon: Cloud },
      { label: "Cybersecurity", href: "/solutions#cybersecurity", description: "Security best practices", icon: Shield },
      { label: "Data & AI", href: "/solutions#data-ai", description: "Analytics & machine learning", icon: Database },
      { label: "DevOps", href: "/solutions#devops", description: "CI/CD & automation", icon: GitBranch },
    ],
  },
  {
    label: "Compliance",
    href: "/solutions#compliance",
    description: "Regulatory & Safety Training",
    icon: Scale,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    featured: {
      title: "Compliance Training",
      description: "Ensure your organization meets all regulatory requirements with up-to-date compliance courses.",
      cta: "Browse Compliance",
      href: "/solutions#compliance"
    },
    items: [
      { label: "GDPR & Privacy", href: "/solutions#gdpr", description: "Data protection compliance", icon: FileCheck },
      { label: "Health & Safety", href: "/solutions#health-safety", description: "Workplace safety standards", icon: Heart },
      { label: "Financial Regulations", href: "/solutions#financial", description: "FCA & industry standards", icon: Landmark },
      { label: "Industry Standards", href: "/solutions#standards", description: "Sector-specific requirements", icon: Award },
    ],
  },
  {
    label: "Learning Paths",
    href: "/learning-that-works",
    description: "Structured Learning Programs",
    icon: Route,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    featured: {
      title: "Structured Learning",
      description: "Role-based curricula designed to take your employees from skill gaps to mastery.",
      cta: "Discover Paths",
      href: "/learning-that-works"
    },
    items: [
      { label: "Role-Based Learning", href: "/learning-that-works#role-based", description: "Job-specific curricula", icon: ClipboardCheck },
      { label: "Skill Assessments", href: "/learning-that-works#assessments", description: "Identify skill gaps", icon: BarChart3 },
      { label: "Custom Programs", href: "/learning-that-works#custom", description: "Tailored for your org", icon: Settings },
      { label: "Progress Tracking", href: "/learning-that-works#tracking", description: "Monitor employee growth", icon: TrendingUp },
    ],
  },
  {
    label: "Certifications",
    href: "/resources#certifications",
    description: "Verified Credentials",
    icon: BadgeCheck,
    color: "text-emerald",
    bgColor: "bg-emerald/10",
    featured: {
      title: "Blockchain Credentials",
      description: "Industry-recognized certifications verified on blockchain for tamper-proof validation.",
      cta: "Get Certified",
      href: "/resources#certifications"
    },
    items: [
      { label: "Blockchain Credentials", href: "/resources#blockchain", description: "Tamper-proof verification", icon: Link2 },
      { label: "Industry Certifications", href: "/resources#industry-certs", description: "Recognized qualifications", icon: Award },
      { label: "Digital Badges", href: "/resources#badges", description: "Shareable achievements", icon: Sparkles },
      { label: "Verification Portal", href: "/resources#verification", description: "Validate credentials", icon: Fingerprint },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Support & Knowledge",
    icon: BookOpen,
    color: "text-cyan",
    bgColor: "bg-cyan/10",
    featured: {
      title: "Learning Resources",
      description: "Access case studies, insights, and connect with our expert instructors.",
      cta: "Explore Resources",
      href: "/resources"
    },
    items: [
      { label: "Case Studies", href: "/resources#case-studies", description: "Success stories", icon: FileText },
      { label: "Blog & Insights", href: "/resources#blog", description: "Industry knowledge", icon: BookOpen },
      { label: "Our Instructors", href: "/resources#instructors", description: "Expert educators", icon: GraduationCap },
      { label: "Contact Us", href: "contact-dialog", isDialog: true, description: "Get in touch", icon: Phone },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  const toggleMobileSection = (label: string) => {
    setExpandedMobileSection(expandedMobileSection === label ? null : label);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const handleContactClick = () => {
    setOpenDropdown(null);
    setContactOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 gap-2">
              <img 
                src={cyxorLogo} 
                alt="CYXOR Learning" 
                className="h-10 sm:h-11 lg:h-12 w-auto mix-blend-multiply dark:mix-blend-screen dark:brightness-0 dark:invert"
                style={{ backgroundColor: 'transparent' }}
              />
              <div className="hidden sm:flex items-center">
                <span className="text-lg font-bold text-ocean drop-shadow-[0_0_8px_rgba(10,36,99,0.3)]">CYXOR</span>
                <span className="text-lg font-bold text-emerald ml-1 drop-shadow-[0_0_8px_rgba(0,200,150,0.3)]">Learning</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isActiveRoute(item.href) 
                        ? 'text-emerald bg-emerald/5' 
                        : 'text-foreground hover:text-emerald hover:bg-emerald/5'
                    }`}
                  >
                    {item.label}
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                      <div className="bg-background rounded-2xl shadow-2xl border border-border overflow-hidden min-w-[520px]">
                        <div className="flex">
                          {/* Featured Card */}
                          <div className={`w-[200px] p-5 ${item.bgColor} border-r border-border/30`}>
                            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
                              <item.icon className={`w-5 h-5 ${item.color}`} />
                            </div>
                            <h3 className="font-bold text-foreground text-sm mb-2">
                              {item.featured.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                              {item.featured.description}
                            </p>
                            <Link
                              to={item.featured.href}
                              className={`inline-flex items-center text-xs font-semibold ${item.color} hover:underline`}
                            >
                              {item.featured.cta}
                              <ChevronDown className="w-3 h-3 ml-1 -rotate-90" />
                            </Link>
                          </div>
                          
                          {/* Menu Items */}
                          <div className="flex-1 p-4">
                            <div className="grid grid-cols-2 gap-1">
                              {item.items.map((subItem) => {
                                const SubIcon = subItem.icon;
                                return 'isDialog' in subItem && subItem.isDialog ? (
                                  <button
                                    key={subItem.label}
                                    onClick={handleContactClick}
                                    className="flex items-start gap-3 p-3 rounded-xl group transition-all hover:bg-muted/50 text-left"
                                  >
                                    <div className={`w-9 h-9 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                      <SubIcon className={`w-4 h-4 ${item.color}`} />
                                    </div>
                                    <div>
                                      <span className="block text-sm font-semibold text-foreground group-hover:text-emerald transition-colors">
                                        {subItem.label}
                                      </span>
                                      <span className="block text-xs text-muted-foreground mt-0.5">
                                        {subItem.description}
                                      </span>
                                    </div>
                                  </button>
                                ) : (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    className="flex items-start gap-3 p-3 rounded-xl group transition-all hover:bg-muted/50"
                                  >
                                    <div className={`w-9 h-9 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                      <SubIcon className={`w-4 h-4 ${item.color}`} />
                                    </div>
                                    <div>
                                      <span className="block text-sm font-semibold text-foreground group-hover:text-emerald transition-colors">
                                        {subItem.label}
                                      </span>
                                      <span className="block text-xs text-muted-foreground mt-0.5">
                                        {subItem.description}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom CTA Bar */}
                        <div className="px-5 py-3 bg-muted/30 border-t border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              Need enterprise solutions?
                            </span>
                          </div>
                          <button
                            onClick={handleContactClick}
                            className="text-xs font-semibold text-emerald hover:underline"
                          >
                            Talk to Sales →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-emerald/30 text-emerald hover:bg-emerald/10 hover:border-emerald"
                onClick={() => setContactOpen(true)}
              >
                Request Demo
              </Button>
              <Button 
                size="sm"
                className="bg-emerald hover:bg-emerald/90 text-white"
                onClick={() => setContactOpen(true)}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button 
                  className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-background p-0 overflow-hidden">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <img 
                      src={cyxorLogo} 
                      alt="CYXOR Learning" 
                      className="h-9 w-auto mix-blend-multiply dark:mix-blend-screen dark:brightness-0 dark:invert"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto">
                    {navItems.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={item.label} className="border-b border-border/30">
                          <button
                            onClick={() => toggleMobileSection(item.label)}
                            className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-muted/30 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                                <ItemIcon className={`w-4 h-4 ${item.color}`} />
                              </div>
                              <div>
                                <span className="block font-semibold text-foreground">
                                  {item.label}
                                </span>
                                <span className="block text-xs text-muted-foreground mt-0.5">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 text-emerald transition-transform duration-200 flex-shrink-0 ${
                                expandedMobileSection === item.label ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          
                          {/* Expandable Sub-items */}
                          {expandedMobileSection === item.label && (
                            <div className="bg-muted/30 py-2 px-4">
                              {item.items.map((subItem) => {
                                const SubIcon = subItem.icon;
                                return 'isDialog' in subItem && subItem.isDialog ? (
                                  <button
                                    key={subItem.label}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setContactOpen(true);
                                    }}
                                    className="flex items-center gap-3 w-full text-left py-3 px-3 rounded-lg hover:bg-background transition-colors"
                                  >
                                    <SubIcon className={`w-4 h-4 ${item.color}`} />
                                    <div>
                                      <span className="block text-sm font-medium text-foreground">
                                        {subItem.label}
                                      </span>
                                      <span className="block text-xs text-muted-foreground mt-0.5">
                                        {subItem.description}
                                      </span>
                                    </div>
                                  </button>
                                ) : (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-background transition-colors"
                                  >
                                    <SubIcon className={`w-4 h-4 ${item.color}`} />
                                    <div>
                                      <span className="block text-sm font-medium text-foreground">
                                        {subItem.label}
                                      </span>
                                      <span className="block text-xs text-muted-foreground mt-0.5">
                                        {subItem.description}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>

                  {/* Mobile CTAs */}
                  <div className="p-4 border-t border-border space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-emerald/30 text-emerald hover:bg-emerald/10"
                      onClick={() => {
                        setMobileOpen(false);
                        setContactOpen(true);
                      }}
                    >
                      Request Demo
                    </Button>
                    <Button 
                      className="w-full bg-emerald hover:bg-emerald/90 text-white"
                      onClick={() => {
                        setMobileOpen(false);
                        setContactOpen(true);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Contact Dialog */}
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Header;
