import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PriceRange = () => {
  const priceData = [
    {
      category: "Roof Tiles",
      dimensions: "Standard Size",
      priceRange: "₹45 - ₹120 per tile",
      unit: "Per Tile",
    },
    {
      category: "Floor Tiles",
      dimensions: "12x12 inches",
      priceRange: "₹30 - ₹80 per sq.ft",
      unit: "Per Sq.Ft",
    },
    {
      category: "Floor Tiles",
      dimensions: "24x24 inches",
      priceRange: "₹60 - ₹150 per sq.ft",
      unit: "Per Sq.Ft",
    },
    {
      category: "Wall Cladding",
      dimensions: "Custom sizes",
      priceRange: "₹60 - ₹250 per sq.ft",
      unit: "Per Sq.Ft",
    },
    {
      category: "Kota Stone",
      dimensions: "Various sizes",
      priceRange: "₹35 - ₹90 per sq.ft",
      unit: "Per Sq.Ft",
    },
    {
      category: "Natural Stones",
      dimensions: "Slate/Random",
      priceRange: "₹40 - ₹180 per sq.ft",
      unit: "Per Sq.Ft",
    },
    {
      category: "River Pebbles",
      dimensions: "20-40mm",
      priceRange: "₹25 - ₹50 per kg",
      unit: "Per Kg",
    },
    {
      category: "Cobble Stones",
      dimensions: "50-100mm",
      priceRange: "₹40 - ₹80 per kg",
      unit: "Per Kg",
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

        <div className="max-w-5xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-bold text-foreground">Product Category</TableHead>
                  <TableHead className="font-bold text-foreground">Dimensions</TableHead>
                  <TableHead className="font-bold text-foreground">Price Range</TableHead>
                  <TableHead className="font-bold text-foreground">Unit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData.map((item, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell>{item.dimensions}</TableCell>
                    <TableCell className="text-primary font-semibold">
                      {item.priceRange}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-6 bg-primary/5 border-t">
            <p className="text-center text-sm text-muted-foreground">
              * Prices are indicative and may vary based on quantity, location, and current market rates.
              <br />
              Contact us for accurate quotations and bulk order discounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceRange;
