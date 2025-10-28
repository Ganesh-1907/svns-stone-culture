import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";

const PriceRange = () => {
  const priceData = [
    {
      category: "Roof Tiles",
      dimensions: "Standard Size",
      minPrice: "45",
      maxPrice: "120",
      unit: "Per Tile",
      icon: "🏠",
    },
    {
      category: "Floor Tiles",
      dimensions: "12x12 inches",
      minPrice: "30",
      maxPrice: "80",
      unit: "Per Sq.Ft",
      icon: "⬜",
    },
    {
      category: "Floor Tiles",
      dimensions: "24x24 inches",
      minPrice: "60",
      maxPrice: "150",
      unit: "Per Sq.Ft",
      icon: "⬜",
    },
    {
      category: "Wall Cladding",
      dimensions: "Custom sizes",
      minPrice: "60",
      maxPrice: "250",
      unit: "Per Sq.Ft",
      icon: "🧱",
    },
    {
      category: "Kota Stone",
      dimensions: "Various sizes",
      minPrice: "35",
      maxPrice: "90",
      unit: "Per Sq.Ft",
      icon: "🪨",
    },
    {
      category: "Natural Stones",
      dimensions: "Slate/Random",
      minPrice: "40",
      maxPrice: "180",
      unit: "Per Sq.Ft",
      icon: "🪨",
    },
    {
      category: "River Pebbles",
      dimensions: "20-40mm",
      minPrice: "25",
      maxPrice: "50",
      unit: "Per Kg",
      icon: "⚪",
    },
    {
      category: "Cobble Stones",
      dimensions: "50-100mm",
      minPrice: "40",
      maxPrice: "80",
      unit: "Per Kg",
      icon: "🔵",
    },
  ];

  return (
    <section id="prices" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Price Range
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all our products. Contact us for bulk orders and special discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {priceData.map((item, index) => (
            <Card
              key={index}
              className="card-elegant overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {item.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.dimensions}
                </p>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 mb-3">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <IndianRupee className="text-primary" size={20} />
                    <span className="text-3xl font-bold text-primary">
                      {item.minPrice}
                    </span>
                    <span className="text-xl text-muted-foreground">-</span>
                    <span className="text-3xl font-bold text-primary">
                      {item.maxPrice}
                    </span>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    {item.unit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10 animate-fade-in">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              📋 Important Pricing Information
            </h3>
            <p className="text-muted-foreground mb-4">
              Prices are indicative and may vary based on quantity, location, and current market rates.
            </p>
            <p className="text-primary font-semibold">
              💰 Contact us for accurate quotations and special bulk order discounts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceRange;
