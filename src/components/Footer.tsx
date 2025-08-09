
import { Satellite, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-primary/20 backdrop-blur-sm">
                <Satellite className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">SkyLink</h1>
                <p className="text-xs text-white/80">Satellite Internet</p>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Connecting the world with reliable satellite internet. Experience lightning-fast speeds 
              and unmatched coverage, wherever you are.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:1-888-970-1698" 
                className="flex items-center space-x-3 text-accent hover:text-accent/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">1-888-970-1698</span>
              </a>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-5 w-5" />
                <span>support@skylink.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#plans" className="text-white/80 hover:text-white transition-colors">
                  View Plans
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-white/80 hover:text-white transition-colors">
                  Coverage Map
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/installation" className="text-white/80 hover:text-white transition-colors">
                  Installation Service
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/80 hover:text-white transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Connected?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust SkyLink for their satellite internet needs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:1-888-970-1698" className="btn-primary">
                Call Now: 1-888-970-1698
              </a>
              <a href="#plans" className="btn-secondary">
                View All Plans
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 2025 SkyLink Satellite Internet. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-white/60 hover:text-white transition-colors flex items-center space-x-1">
              <span>Contact</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
