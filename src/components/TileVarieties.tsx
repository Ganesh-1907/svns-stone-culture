import { Card, CardContent } from "@/components/ui/card";
import elabanaGoldenBrown from "@/assets/tiles/elabana-golden-brown.jpg";
import elabanaAntiqueGrey from "@/assets/tiles/elabana-antique-grey.jpg";
import elabanaRed from "@/assets/tiles/elabana-red.jpg";
import elabanaTeraBrown from "@/assets/tiles/elabana-terra-brown.jpg";
import elabanaVintageGreen from "@/assets/tiles/elabana-vintage-green.jpg";
import elabanaChocolate from "@/assets/tiles/elabana-chocolate.jpg";
import elabanaCharcoal from "@/assets/tiles/elabana-charcoal.jpg";
import elabanaSlateBlue from "@/assets/tiles/elabana-slate-blue.jpg";
import elabanaSandstone from "@/assets/tiles/elabana-sandstone.jpg";
import elabanaRusticRed from "@/assets/tiles/elabana-rustic-red.jpg";
import elabanaCopper from "@/assets/tiles/elabana-copper.jpg";
import elabanaSlateGrey from "@/assets/tiles/elabana-slate-grey.jpg";
import elabanaSageGreen from "@/assets/tiles/elabana-sage-green.jpg";
import elabanaBurgundy from "@/assets/tiles/elabana-burgundy.jpg";
import elabanaEbony from "@/assets/tiles/elabana-ebony.jpg";

const TileVarieties = () => {
  const tileVarieties = [
    { name: "Golden Brown", image: elabanaGoldenBrown },
    { name: "Antique Grey", image: elabanaAntiqueGrey },
    { name: "Terracotta Red", image: elabanaRed },
    { name: "Terra Brown", image: elabanaTeraBrown },
    { name: "Vintage Green", image: elabanaVintageGreen },
    { name: "Chocolate", image: elabanaChocolate },
    { name: "Charcoal", image: elabanaCharcoal },
    { name: "Slate Blue", image: elabanaSlateBlue },
    { name: "Sandstone", image: elabanaSandstone },
    { name: "Rustic Red", image: elabanaRusticRed },
    { name: "Copper Brown", image: elabanaCopper },
    { name: "Slate Grey", image: elabanaSlateGrey },
    { name: "Sage Green", image: elabanaSageGreen },
    { name: "Burgundy", image: elabanaBurgundy },
    { name: "Ebony Black", image: elabanaEbony },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            MONIER Elabana Roof Tiles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of premium MONIER Elabana roof tiles in 15 stunning color varieties
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tileVarieties.map((tile, index) => (
            <Card
              key={index}
              className="overflow-hidden card-elegant animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={tile.image}
                  alt={`Elabana ${tile.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-center font-bold text-foreground">
                  {tile.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Contact us for detailed specifications, pricing, and availability
          </p>
          <a
            href="https://wa.me/917816087488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors btn-glow"
          >
            Get Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TileVarieties;
