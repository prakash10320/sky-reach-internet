import { Check, Phone, Star, Wifi, Globe, Anchor } from 'lucide-react';
const plans = [{
  name: 'Residential Plan',
  subtitle: 'Perfect for homes',
  price: '$120',
  period: '/mo + taxes',
  speed: 'Low Latency Unlimited Speed',
  features: ['No data caps', 'Stable and secure connectivity for your residence', 'Enjoy seamless streaming and browsing', 'Round-the-clock customer support', '99.9% reliability'],
  popular: false,
  color: 'primary',
  icon: Wifi
}, {
  name: 'Roam Plan',
  subtitle: 'For mobile connectivity',
  price: '$50',
  period: '/mo + taxes',
  speed: 'Up to 500 Mbps',
  additionalPricing: 'Unlimited: $165/mo',
  packageInfo: 'Unlimited: $165/mo',
  features: ['Reliable high-speed connectivity at sea', '24/7 onboard technical support', 'Smooth streaming and seamless navigation', 'Multi-device connectivity with secure'],
  popular: true,
  color: 'accent',
  icon: Globe
}, {
  name: 'Boat Plan',
  subtitle: 'For maritime use',
  price: '$50',
  period: '/mo + taxes',
  speed: 'Up to 300 Mbps',
  additionalPricing: '1024GB: $165/mo',
  packageInfo: '1024GB: $165/mo',
  features: ['Stable and secure connectivity on open waters', 'Enjoy seamless streaming and browsing while offshore', 'Round-the-clock customer support', 'Weather-resistant equipment with easy'],
  popular: false,
  color: 'primary',
  icon: Anchor
}];
const PlansSection = () => {
  return <section id="plans" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary to-secondary-light relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 sm:px-6 py-3 rounded-full mb-6">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-white font-medium text-sm sm:text-base">Choose Your Perfect Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 px-4 sm:px-0">
            Select the Ideal Connectivity
            <span className="text-gradient-primary block">Solution for Your Needs</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed px-4 sm:px-0">
            Transparent pricing with professional setup and no long-term contract requirements.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => <div key={plan.name} className={`card-pricing ${plan.popular ? 'popular' : ''} group`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Popular Badge */}
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-6 rounded-full text-sm font-semibold mx-0 my-[10px] py-[5px]">
                    Most Popular
                  </div>
                </div>}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <plan.icon className="h-6 w-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>
                  <p className="text-white/70">{plan.subtitle}</p>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-white">
                      {plan.price}
                      <span className="text-lg font-normal text-white/70">{plan.period}</span>
                    </div>
                    {plan.additionalPricing && <div className="text-sm text-white/60 mt-1">{plan.additionalPricing}</div>}
                  </div>
                </div>

                {/* Speed Info */}
                <div className="text-center p-4 glass rounded-xl">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Wifi className="h-4 w-4 text-white/70" />
                    <div className="text-sm text-white/70">Speed</div>
                  </div>
                  <div className="font-semibold text-white">{plan.speed}</div>
                </div>

                {/* Package Info (for Roam and Boat plans) */}
                {plan.packageInfo && <div className="text-center p-4 glass rounded-xl">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <div className="w-4 h-4 border border-white/70 rounded" />
                      <div className="text-sm text-white/70">Package</div>
                    </div>
                    <div className="font-semibold text-white">{plan.packageInfo}</div>
                  </div>}

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => <li key={idx} className="flex items-start space-x-3">
                        <div className={`p-1 rounded-full ${plan.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'} mt-0.5`}>
                          <Check className={`h-3 w-3 ${plan.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                        </div>
                        <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                      </li>)}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a href="tel:8552147142" className={`w-full flex items-center justify-center space-x-2 ${plan.popular ? 'btn-accent' : 'btn-primary'} group-hover:scale-105 transition-transform duration-300`}>
                    <Phone className="h-4 w-4" />
                    <span>Call Now: 8552147142 TFN</span>
                  </a>
                </div>
              </div>
            </div>)}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-white/80">
            All plans include professional setup and no long-term contract requirements.
          </p>
          <p className="text-white/60 text-sm">
            Prices shown do not include applicable taxes and fees.
          </p>
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <Phone className="h-4 w-4 text-accent" />
            <span className="text-white font-medium">Need help choosing? Call Now: 8552147142 TFN</span>
          </div>
        </div>
      </div>
    </section>;
};
export default PlansSection;