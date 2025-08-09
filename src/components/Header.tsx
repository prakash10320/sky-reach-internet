
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1.5 sm:p-2 rounded-xl bg-primary/20 backdrop-blur-sm">
              <Satellite className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-white">SkyLink</h1>
              <p className="text-xs text-white/80">Satellite Internet</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-white">SkyLink</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#plans" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Plans
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#coverage" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Coverage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link to="/about" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:1-888-970-1698" className="hidden xl:flex items-center space-x-2 text-white/90 hover:text-white transition-all duration-300">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">1-888-970-1698</span>
            </a>
            <button className="btn-primary text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white transition-all duration-300 hover:bg-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 glass backdrop-blur-xl border-t border-white/20 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            <a 
              href="#plans" 
              className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plans
            </a>
            <a 
              href="#coverage" 
              className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Coverage
            </a>
            <a 
              href="#features" 
              className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <Link 
              to="/about" 
              className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-white/90 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-white/20 pt-4 mt-4">
              <a href="tel:1-888-970-1698" className="flex items-center space-x-2 text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">1-888-970-1698</span>
              </a>
              <button className="btn-primary w-full mt-4 text-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
