import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validated = contactSchema.parse(formData);

      // Create WhatsApp message
      const message = `Name: ${validated.name}\nPhone: ${validated.phone}\nMessage: ${validated.message}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=917816087488&text=${encodeURIComponent(message)}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Show success toast
      toast.success("Message sent successfully to proprietor!");

      // Reset form
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a room at Zanu Sunidhi Guest Inn.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=919989547899&text=${message}`;
  window.open(whatsappUrl, "_blank");
  };


  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9989547899", "+91 8919581753"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@stoneculture.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Near Edulavalasa Junction",
        "Polaki Mandal, Srikakulam District",
        "Andhra Pradesh - 532421",
      ],
    },
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for quotes, inquiries, or project consultations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number (10 digits)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full btn-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110 animate-float"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-3 bg-card rounded-xl card-elegant"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            {/* <div className="p-6 bg-card rounded-xl card-elegant">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://wa.me/917816087488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div> */}

            {/* Proprietor Info */}
            {/* <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Proprietor</h3>
              <p className="text-xl font-semibold text-primary">Ganesh Bora</p>
            </div> */}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient ">Find Us Here</h3>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=17.4443683624268,78.3621139526367&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="STONE CULTURE Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
