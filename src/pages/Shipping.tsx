
import PageLayout from '@/components/PageLayout';
import { Truck, Package, Clock, MapPin } from 'lucide-react';

const Shipping = () => {
  return (
    <PageLayout 
      title="Shipping Information" 
      subtitle="Equipment delivery and installation details for your satellite internet service"
    >
      <div className="space-y-16">
        {/* Shipping Options */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Shipping Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6">
              <Truck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Free Standard Shipping</h3>
              <p className="text-muted-foreground text-sm mb-4">
                5-7 business days delivery for all equipment orders over $99
              </p>
              <div className="text-primary font-semibold">FREE</div>
            </div>
            <div className="glass rounded-xl p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Express Shipping</h3>
              <p className="text-muted-foreground text-sm mb-4">
                2-3 business days delivery for urgent installations
              </p>
              <div className="text-primary font-semibold">$29.99</div>
            </div>
            <div className="glass rounded-xl p-6">
              <Package className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Installation Package</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Equipment delivery + professional installation scheduled
              </p>
              <div className="text-primary font-semibold">FREE*</div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">What's Included in Your Shipment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Equipment Package</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Satellite dish and mounting hardware</li>
                  <li>• High-performance modem/router</li>
                  <li>• Coaxial and ethernet cables</li>
                  <li>• Power adapters and surge protector</li>
                  <li>• Professional installation kit</li>
                  <li>• User manual and quick setup guide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Installation Materials</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Wall mounting brackets and hardware</li>
                  <li>• Weatherproofing materials</li>
                  <li>• Cable routing accessories</li>
                  <li>• Signal meter and alignment tools</li>
                  <li>• Safety equipment for technicians</li>
                  <li>• Warranty and service documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Process */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Shipping Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Order Confirmation</h3>
              <p className="text-muted-foreground text-sm">
                Your order is processed and confirmed within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Package Preparation</h3>
              <p className="text-muted-foreground text-sm">
                Equipment is carefully packaged and prepared for shipment
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Shipping & Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Package is shipped with full tracking information provided
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery & Setup</h3>
              <p className="text-muted-foreground text-sm">
                Professional installation scheduled upon delivery
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Service Areas & Delivery</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-4">Nationwide Coverage</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We ship equipment and provide professional installation services 
                  across all 50 states, with special focus on rural and remote areas 
                  where traditional internet options are limited.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Free shipping to all US addresses</li>
                  <li>• Alaska and Hawaii included</li>
                  <li>• Rural and remote area specialists</li>
                  <li>• Professional installation nationwide</li>
                </ul>
              </div>
              <div className="glass rounded-xl p-6">
                <h4 className="font-semibold mb-4">Delivery Timeframes</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Continental US</span>
                    <span className="text-primary">5-7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alaska & Hawaii</span>
                    <span className="text-primary">7-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Delivery</span>
                    <span className="text-primary">2-3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Installation Scheduling</span>
                    <span className="text-primary">1-3 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Shipping FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">Do I need to be home for delivery?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, signature is required for all equipment deliveries to ensure safe receipt of your satellite internet equipment.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can I track my shipment?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! You'll receive tracking information via email and SMS once your order ships.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">What if I'm not satisfied?</h3>
              <p className="text-muted-foreground text-sm">
                We offer a 30-day satisfaction guarantee. If you're not happy, we'll arrange return shipping at no cost.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">Is installation really free?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Professional installation is included with all residential service plans. No hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-muted-foreground mb-6">
              Get your satellite internet equipment shipped fast with free professional installation.
            </p>
            <a href="tel:1-888-970-1698" className="btn-primary">
              Call Now: 1-888-970-1698
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Shipping;
