import { Globe, MapPin, Satellite, Users, Shield, Zap } from 'lucide-react';
import globalCoverage from '@/assets/global-coverage.jpg';

const coverageStats = [
  {
    icon: Globe,
    value: '98%',
    label: 'North America Coverage',
    description: 'Extensive coverage throughout the United States, Canada, and Mexico'
  },
  {
    icon: Satellite,
    value: '100+',
    label: 'Countries Served',
    description: 'Global satellite network spanning all seven continents'
  },
  {
    icon: Users,
    value: '99%',
    label: 'Uptime Guarantee',
    description: 'Reliable connectivity with industry-leading uptime'
  },
  {
    icon: Zap,
    value: '150',
    label: 'Mbps Max Speed',
    description: 'Lightning-fast speeds for all your connectivity needs'
  }
];

const CoverageSection = () => {
  return (
    <section id="coverage" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${globalCoverage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-secondary-light/90" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <Globe className="h-4 w-4 text-accent" />
            <span className="text-white font-medium">Global Coverage Network</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nationwide Coverage,
            <span className="text-gradient-primary block">Even in Rural Areas</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Our satellite network provides reliable internet connectivity across all seven continents, 
            reaching even the most remote locations on Earth.
          </p>
        </div>

        {/* Coverage Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coverageStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="card-premium text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-white font-semibold mb-2">{stat.label}</div>
                    <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Details */}
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Reliable Coverage Where You Need It Most
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">High-speed connectivity</h4>
                      <p className="text-white/70 text-sm">Fast, reliable internet in urban and rural areas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-accent/20 mt-1">
                      <Zap className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Low latency performance</h4>
                      <p className="text-white/70 text-sm">Optimized for gaming, video calls, and real-time apps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">99% uptime guarantee</h4>
                      <p className="text-white/70 text-sm">Industry-leading reliability you can count on</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-flex flex-col items-center space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <MapPin className="h-12 w-12 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-2">Coverage may vary in extremely remote areas</p>
                    <a 
                      href="tel:1-888-970-1698" 
                      className="btn-accent inline-flex items-center space-x-2"
                    >
                      <span>Call for Coverage Info</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;