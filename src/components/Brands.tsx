import { useEffect, useRef } from "react";

const Brands = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  const brands = [
    { name: "MONIER Roofing Tiles", tagline: "Premium Quality Roof Solutions" },
    { name: "Terracotta Jalis", tagline: "Traditional Elegance" },
    { name: "Natural Stones", tagline: "Nature's Best" },
    { name: "Clay Roof Tiles", tagline: "Durable & Eco-Friendly" },
    { name: "Wirecut Bricks", tagline: "Modern Architecture" },
    { name: "Terracotta Jalis", tagline: "Traditional Elegance" },
    { name: "Natural Stones", tagline: "Nature's Best" },
    { name: "Clay Roof Tiles", tagline: "Durable & Eco-Friendly" },
    { name: "Wirecut Bricks", tagline: "Modern Architecture" },
  ];

  return (
    <section className="py-16 bg-background border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Our Premium Brands & Products
          </h2>
          <p className="text-muted-foreground">
            Authorized dealers of leading brands in construction materials
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card rounded-xl p-6 shadow-lg min-w-[300px] card-elegant"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground">{brand.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
