import { Building2, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Projects Completed", value: "100+" },
    { icon: Award, label: "Years Experience", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: TrendingUp, label: "Products Range", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-primary">
              At <span className="font-bold text-primary">STONE CULTURE BY SRI VIJAYALAKSHMI NATURAL STONES (SVNS)</span>, 
              we bring elegance and strength to your spaces through premium tiles and stones. With a passion for quality, 
              we supply the finest roofing, cladding, and flooring materials along with reliable installation and delivery services.
            </p>
            <p className="text-lg md:text-xl  leading-relaxed text-primary">
              We serve across <span className="font-semibold text-accent">Telangana and Andhra Pradesh</span> with a commitment 
              to excellence. As authorized dealers of MONIER ROOFING TILES and suppliers of premium natural stones, 
              terracotta jalis, and all types of construction materials, we have built a reputation for trust, quality, 
              and professional service.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center card-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
