import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Problems from "@/components/Problems";
import ProcessCardComponent from "@/components/ProcessCardComponent";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <HeroSection />

      {/* Problems vs Solutions Card Component */}
      <Problems />

      {/* Process */}
      <ProcessCardComponent />

      {/* Pricing */}
      <Pricing />
      {/* FAQs */}
      <FAQs />
    </section>
  );
}
