import { Card, CardContent } from "@/components/ui/card";
import elabanaAntiqueGrey from "../assets/tiles/antique-grey.jpg";
import elabanaGoldenBrown from "../assets/tiles/golden-brown.jpg";
import elabanaRed from "../assets/tiles/red.jpg";
import elabanaVintageOrange from "../assets/tiles/vintage-orange.jpg"
import elabanaTerraBrown from "../assets/tiles/terra-brown.jpg";
import elabanaGoldenOrange from "../assets/tiles/golden-orange.jpg";
import elabanaMahoganyDarkBrown from "../assets/tiles/dark-brown.jpg";
import elabanaOrange from "../assets/tiles/orange.jpg";
import elabanaAntiqueRed from "../assets/tiles/antique-red.jpg";
import elabanaDarkBrown from "../assets/tiles/dark-brown.jpg";

const TileVarieties = () => {
  const tileVarieties = [
    { 
      name: "Antique Grey", 
      image: elabanaAntiqueGrey,
      description: "Elegant, subtle, and timeless appeal"
    },
    { 
      name: "Golden Brown", 
      image: elabanaGoldenBrown,
      description: "Warm earthy tone for classic roofs"
    },
    { 
      name: "Red", 
      image: elabanaRed,
      description: "Bold traditional color for heritage homes"
    },
    { 
      name: "Vintage Orange", 
      image: elabanaVintageOrange,
      description: "Vibrant tone for modern exteriors"
    },
    { 
      name: "Terra Brown", 
      image: elabanaTerraBrown,
      description: "Natural clay finish with rustic charm"
    },
    { 
      name: "Golden Orange", 
      image: elabanaGoldenOrange,
      description: "Bright tone for warm, sunny look"
    },
    { 
      name: "Mahogany Dark Brown", 
      image: elabanaMahoganyDarkBrown,
      description: "Rich tone with deep natural texture"
    },
    { 
      name: "Orange", 
      image: elabanaOrange,
      description: "Fresh and lively roof appearance"
    },
    { 
      name: "Antique Red", 
      image: elabanaAntiqueRed,
      description: "Classic charm with earthy undertones"
    },
    { 
      name: "Dark Brown", 
      image: elabanaDarkBrown,
      description: "Elegant tone for sophisticated style"
    },
  ];

  return (
    <section className="py-1 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            MONIER Elabana Roof Tiles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium MONIER Elabana roof tile collection — a blend of strength, elegance, and vibrant color choices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {tileVarieties.map((tile, index) => (
            <Card
              key={index}
              className="overflow-hidden card-elegant animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tile.image}
                  alt={tile.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"></div>
                <h3 className="absolute bottom-3 left-3 text-lg font-bold text-primary-foreground drop-shadow-md">
                  {tile.name}
                </h3>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground text-center">
                  {tile.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Contact us for detailed specifications, pricing, and availability
          </p>
          <a
            href="https://wa.me/919989547899"
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
