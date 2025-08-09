
import { useState } from 'react';
import { ArrowRight, MapPin, Zap, Shield, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [zipCode, setZipCode] = useState('');
  const { toast } = useToast();

  const handleAvailabilityCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode.trim()) {
      toast({
        title: "Please enter a ZIP code",
        description: "ZIP code is required to check availability.",
        variant: "destructive"
      });
      return;
    }
    
    // Show success message
    toast({
      title: "Inquiry Successful!",
      description: "We will call you soon to discuss availability and plans.",
      variant: "default"
    });
    
    // Clear the input
    setZipCode('');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      <div className="absolute inset-0 hero-bg opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 float hidden sm:block">
        <div className="glass p-3 sm:p-4 rounded-2xl">
          <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
        </div>
      </div>
      <div className="absolute top-40 right-4 sm:right-20 float hidden sm:block" style={{ animationDelay: '2s' }}>
        <div className="glass p-3 sm:p-4 rounded-2xl">
          <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-4 sm:left-20 float hidden lg:block" style={{ animationDelay: '4s' }}>
        <div className="glass p-3 sm:p-4 rounded-2xl">
          <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="fade-in-up">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white font-medium">Rated #1 Satellite Internet Provider</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="fade-in-up-delay space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Reliable Satellite Internet
              <span className="block text-gradient-primary">Wherever You Are</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Experience revolutionary satellite internet with lightning-fast speeds, unlimited data, 
              and coverage that reaches even the most remote locations on Earth.
            </p>
          </div>

          {/* Key Stats */}
          <div className="fade-in-up-delay grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="glass p-4 sm:p-6 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">150 Mbps</div>
              <div className="text-white/80 text-sm sm:text-base">Lightning Speed</div>
            </div>
            <div className="glass p-4 sm:p-6 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-white/80 text-sm sm:text-base">Countries</div>
            </div>
            <div className="glass p-4 sm:p-6 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-white/80 text-sm sm:text-base">Uptime</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="fade-in-up-delay space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <a href="tel:TNF" className="btn-primary pulse-glow text-center">
                <span className="hidden sm:inline">Call Now: TNF</span>
                <span className="sm:hidden">Call Now</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#plans" className="btn-secondary text-center">
                View Plans
              </a>
            </div>

            {/* Availability Checker */}
            <div className="max-w-md mx-auto px-4 sm:px-0">
              <form onSubmit={handleAvailabilityCheck} className="glass p-4 sm:p-6 rounded-2xl">
                <h3 className="text-white font-semibold mb-4 text-center">Check Availability</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-white/60" />
                    <input
                      type="text"
                      placeholder="Enter ZIP code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <button type="submit" className="btn-accent px-6 text-center">
                    Check
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-3 text-center">Instant results. No commitment required.</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-1 h-8 sm:h-12 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-3 sm:h-4 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
