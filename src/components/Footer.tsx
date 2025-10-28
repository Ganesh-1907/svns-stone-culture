import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">STONE CULTURE</h3>
            <p className="text-primary-foreground/80 mb-4">
              Sri Vijayalakshmi Natural Stones (SVNS) - Your trusted partner for premium
              tiles and natural stones across Telangana and Andhra Pradesh.
            </p>
            <p className="text-primary-foreground/80">
              <strong>Proprietor:</strong> Ganesh Bora
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Prices", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-primary-foreground/80">+91 9989547899</p>
                  <p className="text-primary-foreground/80">+91 8919581753</p>
                  <p className="text-primary-foreground/80">+91 7816087488</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="flex-shrink-0 mt-1" size={18} />
                <p className="text-primary-foreground/80">info@stoneculture.com</p>
              </div>
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} STONE CULTURE BY SRI VIJAYALAKSHMI NATURAL
            STONES (SVNS). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
