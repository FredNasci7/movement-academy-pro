import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <div className="h-16 bg-primary" />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;
