import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import PriceRange from "@/components/PriceRange";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <PriceRange />
      <Brands />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
