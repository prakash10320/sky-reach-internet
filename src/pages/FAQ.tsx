
import PageLayout from '@/components/PageLayout';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      subtitle="Quick answers to common questions about satellite internet service"
    >
      <div className="space-y-16">
        {/* FAQ Categories */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a href="#service" className="glass rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
              <h3 className="font-semibold">Service & Plans</h3>
            </a>
            <a href="#installation" className="glass rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
              <h3 className="font-semibold">Installation</h3>
            </a>
            <a href="#technical" className="glass rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
              <h3 className="font-semibold">Technical</h3>
            </a>
            <a href="#billing" className="glass rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
              <h3 className="font-semibold">Billing</h3>
            </a>
          </div>
        </section>

        {/* Service & Plans */}
        <section id="service">
          <h2 className="text-2xl font-bold mb-6">Service & Plans</h2>
          <div className="space-y-4">
            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                What internet speeds can I expect?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Our satellite internet plans offer download speeds from 25 Mbps up to 100+ Mbps, with upload speeds typically 10-20% of download speeds. Actual speeds may vary based on network conditions, location, and weather.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Is there a data limit?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Some plans have priority data allowances (20GB-50GB), after which speeds may be reduced during peak hours. Our unlimited plans have no hard data caps, ensuring you stay connected.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                How does satellite internet work?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Your satellite dish communicates with satellites in geostationary orbit 22,236 miles above Earth. Data travels from your location to the satellite, then to our ground stations, and connects to the global internet.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Can I use WiFi with satellite internet?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Yes! Our modem includes a built-in WiFi router, allowing you to connect all your wireless devices. We can also help you set up a custom WiFi network name and password.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Installation */}
        <section id="installation">
          <h2 className="text-2xl font-bold mb-6">Installation</h2>
          <div className="space-y-4">
            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                How long does installation take?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Professional installation typically takes 2-4 hours, including dish mounting, cable routing, modem setup, and system testing. Our certified technicians ensure everything works perfectly before leaving.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Where will the satellite dish be installed?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>The dish needs a clear view of the southern sky. Common locations include rooftops, ground-level mounts, or side-of-house installations. Our technician will find the best spot for optimal signal.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Is installation really free?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Yes! Standard professional installation is completely free with all residential plans. This includes dish mounting, cable running, modem setup, and system testing. No hidden fees.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                What if I'm not satisfied after installation?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund all fees and arrange free equipment pickup. Your satisfaction is guaranteed.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Technical */}
        <section id="technical">
          <h2 className="text-2xl font-bold mb-6">Technical Support</h2>
          <div className="space-y-4">
            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                What causes internet slowdowns?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Slowdowns can be caused by severe weather, network congestion during peak hours, or equipment issues. Most weather-related slowdowns are temporary and resolve quickly.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                How do I troubleshoot connection issues?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>First, check all cable connections and power cycle your modem (unplug for 30 seconds). Ensure no obstructions block your dish. If issues persist, call our 24/7 support line.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Can I use streaming services?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Absolutely! Our plans support Netflix, Hulu, YouTube, and other streaming services. Higher-speed plans provide better streaming quality and support for multiple simultaneous streams.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                What about gaming and video calls?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Satellite internet works well for most online activities. While latency is higher than terrestrial connections, our service supports gaming, video calls, and remote work applications effectively.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Billing */}
        <section id="billing">
          <h2 className="text-2xl font-bold mb-6">Billing & Payments</h2>
          <div className="space-y-4">
            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                How much does service cost?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Plans start at $49.99/month for basic service up to $129.99/month for premium high-speed plans. All prices include equipment rental, and installation is free.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Are there contracts or commitments?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>No long-term contracts required! You can cancel service anytime with 30 days notice. We believe in earning your business with great service, not locking you in with contracts.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                What payment methods do you accept?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>We accept all major credit cards, debit cards, and bank transfers. Automatic payment is available for your convenience, and you can manage billing through our online customer portal.</p>
              </div>
            </details>

            <details className="glass rounded-lg p-6">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Can I change or upgrade my plan?
                <ChevronDown className="h-5 w-5" />
              </summary>
              <div className="mt-4 text-muted-foreground">
                <p>Yes! You can upgrade or downgrade your service plan anytime. Changes take effect at your next billing cycle, and there are no fees for plan changes.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our expert support team is available 24/7 to help answer any questions not covered here.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:1-888-970-1698" className="btn-primary">
                Call Now: 1-888-970-1698
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default FAQ;
