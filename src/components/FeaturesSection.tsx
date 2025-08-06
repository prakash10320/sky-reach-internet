import { 
  Globe, 
  Zap, 
  Shield, 
  MapPin, 
  Clock, 
  Wrench, 
  Lock, 
  Calendar 
} from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Connect from anywhere with our satellite network spanning the entire globe.',
    color: 'text-accent'
  },
  {
    icon: Zap,
    title: 'High-Speed Internet',
    description: 'Enjoy blazing fast download speeds up to 150 Mbps for seamless streaming.',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Reliable Connection',
    description: '99.9% uptime guarantee with our advanced satellite technology.',
    color: 'text-accent'
  },
  {
    icon: MapPin,
    title: 'Rural Coverage',
    description: 'Perfect for remote locations where traditional internet isn\'t available.',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Low Latency',
    description: 'Reduced latency for gaming, video calls, and real-time applications.',
    color: 'text-accent'
  },
  {
    icon: Wrench,
    title: 'Easy Installation',
    description: 'Professional installation available nationwide with quick setup.',
    color: 'text-primary'
  },
  {
    icon: Lock,
    title: 'Secure Connection',
    description: 'Advanced encryption and security features to protect your data.',
    color: 'text-accent'
  },
  {
    icon: Calendar,
    title: 'Flexible Plans',
    description: 'Choose from monthly or annual plans with no long-term contracts.',
    color: 'text-primary'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-foreground font-medium">Why Choose SkyLink</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unmatched Reliability, Speed & 
            <span className="text-gradient-primary block">Coverage Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our satellite internet service provides unmatched reliability, speed, and coverage 
            to keep you connected anywhere, anytime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-premium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${
                    feature.color.includes('primary') 
                      ? 'from-primary/10 to-primary/5' 
                      : 'from-accent/10 to-accent/5'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 glass px-8 py-4 rounded-2xl">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-foreground font-semibold text-lg">
              Voted #1 Satellite Internet Provider in 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;