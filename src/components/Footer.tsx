import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">STONE CULTURE BY</h3>
            <p className="text-primary-foreground/80 mb-1">
              Sri Vijayalakshmi Natural Stones (SVNS) 
            </p>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for premium
              tiles and natural stones across Telangana and Andhra Pradesh.
            </p>
            <p className="text-primary-foreground/80">
              <strong>Proprietor:</strong> Ganesh Bora
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-2 text-primary">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-primary-foreground/80">+91 9989547899</p>
                  <p className="text-primary-foreground/80">+91 8919581753</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="flex-shrink-0 mt-1" size={18} />
                <p className="text-primary-foreground/80">info@stoneculture.com</p>
              </div>
              
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-2 text-primary">Address</h4>
            <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <p className="text-primary-foreground/80">
                  Near Edulavalasa Junction, Polaki Mandal,
                  <br />
                  Srikakulam District, Andhra Pradesh - 532421
                </p>
              </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-gradient">
            © {new Date().getFullYear()} STONE CULTURE BY SVNS. All rights reserved. | Developed by Build Your Vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
