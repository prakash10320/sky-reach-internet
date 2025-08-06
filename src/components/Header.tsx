import { useState, useEffect } from 'react';
import { Menu, X, Phone, Satellite } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-primary/20 backdrop-blur-sm">
              <Satellite className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">SkyLink</h1>
              <p className="text-xs text-white/80">Satellite Internet</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#plans" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Plans
            </a>
            <a href="#coverage" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Coverage
            </a>
            <a href="#features" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Support
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:1-888-970-1698" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">1-888-970-1698</span>
            </a>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass backdrop-blur-xl border-t border-white/20">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <a href="#plans" className="block text-white/90 hover:text-white transition-colors py-2">
                Plans
              </a>
              <a href="#coverage" className="block text-white/90 hover:text-white transition-colors py-2">
                Coverage
              </a>
              <a href="#features" className="block text-white/90 hover:text-white transition-colors py-2">
                Features
              </a>
              <a href="#contact" className="block text-white/90 hover:text-white transition-colors py-2">
                Support
              </a>
              <a href="tel:1-888-970-1698" className="flex items-center space-x-2 text-white py-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">1-888-970-1698</span>
              </a>
              <button className="btn-primary w-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;