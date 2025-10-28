import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <h1 className="font-cursive text-5xl md:text-7xl lg:text-7xl mb-4 text-primary-foreground">
            STONE CULTURE BY
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            SRI VIJAYALAKSHMI NATURAL STONES (SVNS)
          </h2>
        </div>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Bringing elegance and strength to your spaces through premium tiles and natural stones
        </p>

        <Button
          onClick={scrollToProducts}
          size="lg"
          className="btn-glow text-lg px-8 py-6 rounded-full"
        >
          Explore Products
        </Button>

        <div className="mt-16 animate-float">
          <ArrowDown className="text-primary-foreground mx-auto" size={32} />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
