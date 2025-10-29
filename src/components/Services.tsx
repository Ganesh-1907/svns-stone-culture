import { Truck, HardHat, Home, Wrench, Package, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Farm House Construction",
      description: "Complete construction services with premium materials and expert craftsmanship",
    },
    {
      icon: HardHat,
      title: "Civil Construction",
      description: "Professional civil engineering and construction solutions for all projects",
    },
    {
      icon: Package,
      title: "Material Supply",
      description: "Wide range of tiles, stones, and construction materials for all needs",
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description: "Expert installation of roof tiles, floor tiles, and wall claddings",
    },
    {
      icon: Truck,
      title: "Delivery Services",
      description: "Prompt and safe delivery across Telangana and Andhra Pradesh",
    },
    {
      icon: MapPin,
      title: "On-Site Consultation",
      description: "Free site visits and professional guidance for your projects",
    },
  ];

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction and material supply services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center bg-card rounded-xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
          <p className="text-lg text-muted-foreground mb-6">
            We proudly serve across Telangana and Andhra Pradesh
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Hyderabad",
              "Warangal",
              "Karimnagar",
              "Nizamabad",
              "Vijayawada",
              "Visakhapatnam",
              "Guntur",
              "Tirupati",
              "Srikakulam",
              "And surrounding regions",
            ].map((area, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
