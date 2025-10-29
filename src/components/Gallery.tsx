import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-farm-house.jpg";
import gallery2 from "@/assets/gallery-community.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-school.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery6,
      title: "Kid Shine Global Pre-School",
      description: "Elegant Global Pre-School with roof Tiles and  river pebbles and cobblestone pathways",
    },
    {
      src: gallery1,
      title: "Luxury Farmhouse Construction",
      description: "Complete tile work with modern rustic design",
    },
    {
      src: gallery2,
      title: "Luxury Community",
      description: "Contemporary architecture with elegant Roof tile",
    },
    {
      src: gallery3,
      title: "Premium Roof Tile Installation",
      description: "Terracotta roof tiles on modern villa with expert installation",
    },
    {
      src: gallery4,
      title: "Elegant Stone Cladding",
      description: "Beautiful farmhouse with natural stone wall cladding and pathway",
    },
    {
      src: gallery5,
      title: "Premium Floor Tiles",
      description: "Modern residential flooring with high-quality tiles in outdoor patio",
    },
    
  ];

  return (
    <section id="gallery" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our completed projects showcasing excellence in craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl card-elegant animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-primary-foreground/90">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-zoom-in"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
