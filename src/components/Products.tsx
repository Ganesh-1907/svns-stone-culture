import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import roofTiles from "@/assets/roof-tiles.jpg";
import floorTiles from "@/assets/floor-tiles.jpg";
import wallCladding from "@/assets/wall-cladding.jpg";
import naturalStones from "@/assets/natural-stones.jpg";
import pebbles from "@/assets/pebbles.jpg";

const Products = () => {
  const products = [
    {
      name: "Roof Tiles",
      image: roofTiles,
      description: "MONIER Roofing Tiles, Terracotta Jalis, Clay & Glass Roof Tiles",
      dimensions: "Various sizes available",
      priceRange: "₹45 - ₹120 per tile",
    },
    {
      name: "Floor Tiles",
      image: floorTiles,
      description: "Premium floor tiles, Kota stones, All types of flooring solutions",
      dimensions: "12x12, 16x16, 24x24 inches",
      priceRange: "₹30 - ₹200 per sq.ft",
    },
    {
      name: "Wall Claddings",
      image: wallCladding,
      description: "Natural stone claddings, Wirecut bricks, Modern facade solutions",
      dimensions: "Custom sizes",
      priceRange: "₹60 - ₹250 per sq.ft",
    },
    {
      name: "Natural Stones",
      image: naturalStones,
      description: "Slate stones, Random stones, Tandoor stones, Kota stones",
      dimensions: "Various sizes",
      priceRange: "₹40 - ₹180 per sq.ft",
    },
    {
      name: "Pebbles & Cobbles",
      image: pebbles,
      description: "River pebbles, Cobble stones, All types of decorative pebbles",
      dimensions: "20mm to 100mm",
      priceRange: "₹25 - ₹80 per kg",
    },
  ];

  const handleGetQuote = (productName: string) => {
    const message = `Hi, I would like to get a quote for ${productName}. Please provide details.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=917816087488&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium tiles, stones, and construction materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden card-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary-foreground">
                  {product.name}
                </h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground/80">{product.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{product.dimensions}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-lg font-bold text-primary mb-4">
                    {product.priceRange}
                  </p>
                  <Button
                    onClick={() => handleGetQuote(product.name)}
                    className="w-full btn-glow"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Products List */}
        <div className="mt-16 bg-muted rounded-xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Complete Product Range
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "MONIER Roofing Tiles",
              "Terracotta Jalis",
              "Clay Roof Tiles",
              "Wirecut Bricks",
              "Wall Claddings",
              "Floor Tiles",
              "Ceiling Tiles",
              "Glass Roof Tiles",
              "Natural Stones",
              "River Pebbles",
              "Cobble Stones",
              "Kota Stones",
              "Tandoor Stones",
              "Random Stones",
              "Slate Stones",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 p-3 bg-card rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
