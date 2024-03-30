import HeroSection from "@/components/HeroSection";
import Problems from "@/components/Problems";
import ProcessCardComponent from "@/components/ProcessCardComponent";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <HeroSection />

      {/* Problems vs Solutions Card Component */}
      <Problems />

      {/* TODO: Process */}
      <ProcessCardComponent />

      {/* TODO: FAQs */}
    </section>
  );
}
