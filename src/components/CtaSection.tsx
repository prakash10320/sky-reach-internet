import { Gift, Phone, ArrowRight, Check } from 'lucide-react';

const offers = [
  'Free $100 prepaid card',
  'No activation fees',
  '30-day satisfaction guarantee',
  'Free installation included'
];

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gift Icon */}
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-8">
            <Gift className="h-12 w-12 text-white" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Claim Your Free $100
            <span className="block">Prepaid Card Today!</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Order Now and Claim Your Free $100 Prepaid Card! Don't miss this limited-time offer! 
            Place your order today and receive a $100 prepaid card for shopping, dining, or bills.
          </p>

          {/* Urgency Message */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-12">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <span className="text-white font-semibold">Limited Time Offer - Hurry, claim yours now!</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <a 
              href="tel:1-888-970-1698" 
              className="flex items-center justify-center space-x-3 bg-white text-primary hover:bg-white/90 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Call 1-888-970-1698</span>
            </a>
            <a 
              href="#plans" 
              className="flex items-center justify-center space-x-3 glass text-white hover:bg-white/20 font-semibold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <span>View Plans</span>
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>

          {/* Offer Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <div
                key={offer}
                className="flex items-center space-x-3 glass p-4 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-1 rounded-full bg-white/20">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">{offer}</span>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-12 p-8 glass rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-6">
              Call now to speak with our satellite internet experts and claim your free $100 prepaid card!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="tel:1-888-970-1698" 
                className="text-2xl font-bold text-white hover:text-white/80 transition-colors flex items-center space-x-2"
              >
                <Phone className="h-6 w-6" />
                <span>1-888-970-1698</span>
              </a>
              <div className="text-white/60 text-sm">
                Available 24/7 • No commitment required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;