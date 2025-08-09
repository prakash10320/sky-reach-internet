
import { Satellite, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Satellite className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">SkyLink</span>
            </div>
            <p className="text-white/80">
              Connecting the world with reliable, high-speed satellite internet. 
              Experience the future of connectivity today.
            </p>
            <div className="flex space-x-4">
              <a href="tel:TNF" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('plans')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  View Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('coverage')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Coverage Map
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/installation" className="text-white/80 hover:text-white transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/80 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:TNF" className="text-white/80 hover:text-white">
                  TNF
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:support@skylink.com" className="text-white/80 hover:text-white">
                  support@skylink.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-white/80">
                  123 Satellite Way<br />
                  Denver, CO 80202
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/support" className="text-white/80 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
                Shipping Policy
              </Link>
              <Link to="/returns" className="text-white/80 hover:text-white transition-colors">
                Return Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/10 rounded-2xl p-8 mb-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Get Connected?</h3>
            <p className="text-white/80">Join millions who trust SkyLink for their internet needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:TNF" className="btn-primary">
                Call Now: TNF
              </a>
              <button 
                onClick={() => scrollToSection('plans')}
                className="btn-secondary"
              >
                View All Plans
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 SkyLink. All rights reserved. Connecting you to tomorrow's possibilities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
