import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import StatsSection from "../sections/StatsSection";
import CTASection from "../sections/CTASection";

export default function HomeScreen() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection limit={3} />
      <StatsSection />
      <CTASection />
    </>
  );
}
