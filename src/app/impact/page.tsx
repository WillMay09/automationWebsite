import Navbar from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { Advantage } from "@/src/components/AIAdvantage";
import { BusinessBenfits } from "@/src/components/businessBenefits";
import { HeroSection } from "@/src/components/AIHeroSection";
import { CustomSoftware } from "@/src/components/customSoftwarebenefits";
export default function Impact() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Advantage />
      <BusinessBenfits />
      <CustomSoftware />
      <Footer />
    </>
  );
}
