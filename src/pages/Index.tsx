import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import IndustryRelevance from "@/components/IndustryRelevance";
import WhyChooseCyxor from "@/components/WhyChooseCyxor";
import FeaturedCourse from "@/components/FeaturedCourse";
import Testimonials from "@/components/Testimonials";
import FeaturedInstructor from "@/components/FeaturedInstructor";
import TransformCTA from "@/components/TransformCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <IndustryRelevance />
        <WhyChooseCyxor />
        <FeaturedCourse />
        <Testimonials />
        <FeaturedInstructor />
        <TransformCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
