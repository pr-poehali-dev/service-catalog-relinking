import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Advantages from "@/components/Advantages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Index;
