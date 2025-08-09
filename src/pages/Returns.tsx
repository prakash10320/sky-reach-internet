
import PageLayout from '@/components/PageLayout';
import { RotateCcw, CheckCircle, Phone, Package } from 'lucide-react';

const Returns = () => {
  return (
    <PageLayout 
      title="Returns & Refunds" 
      subtitle="Easy returns and money-back guarantee for your peace of mind"
    >
      <div className="space-y-16">
        {/* Money Back Guarantee */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              We're confident you'll love your SkyLink satellite internet service. If you're not 
              completely satisfied within the first 30 days, we'll refund your service fees and 
              arrange free equipment return shipping.
            </p>
          </div>
        </section>

        {/* Return Process */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Simple Return Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Contact Us</h3>
              <p className="text-muted-foreground text-sm">
                Call 1-888-970-1698 to initiate your return within 30 days
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Pack Equipment</h3>
              <p className="text-muted-foreground text-sm">
                Use original packaging or our provided return kit
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Free Pickup</h3>
              <p className="text-muted-foreground text-sm">
                We'll schedule free pickup from your location
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Get Refund</h3>
              <p className="text-muted-foreground text-sm">
                Refund processed within 5-7 business days
              </p>
            </div>
          </div>
        </section>

        {/* Return Policy Details */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Return Policy Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">What's Covered</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Full refund of service fees paid</li>
                  <li>• Free return shipping for all equipment</li>
                  <li>• No restocking fees or penalties</li>
                  <li>• Professional equipment removal if needed</li>
                  <li>• Cancellation of future billing</li>
                  <li>• No questions asked within 30 days</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Return Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Return initiated within 30 days of activation</li>
                  <li>• All equipment returned in good condition</li>
                  <li>• Original accessories and cables included</li>
                  <li>• Equipment not damaged by misuse</li>
                  <li>• Return authorization number required</li>
                  <li>• Customer account in good standing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to Return */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Equipment Return Checklist</h2>
            <p className="text-muted-foreground mb-6">
              Please ensure all items are included in your return shipment:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Satellite Equipment</h3>
                <div className="space-y-2 text-muted-foreground">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span>Satellite dish and LNB</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span>Mounting hardware and brackets</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span>Coaxial cables and connectors</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Modem & Accessories</h3>
                <div className="space-y-2 text-muted-foreground">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span>Satellite modem/router</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span>Power adapter and cables</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span>Ethernet cable and manuals</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Information */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Refund Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">5-7 Days</div>
              <h3 className="font-semibold mb-2">Processing Time</h3>
              <p className="text-muted-foreground text-sm">
                Refunds are processed within 5-7 business days after we receive your returned equipment
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <h3 className="font-semibold mb-2">Money Back</h3>
              <p className="text-muted-foreground text-sm">
                Full refund of all service fees paid, with no hidden deductions or fees
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">$0</div>
              <h3 className="font-semibold mb-2">Return Shipping</h3>
              <p className="text-muted-foreground text-sm">
                Completely free return shipping - we'll even schedule pickup from your location
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Return FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">What if equipment is damaged?</h3>
              <p className="text-muted-foreground text-sm">
                Normal wear and tear is expected. However, equipment damaged by misuse may incur replacement fees.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can I return after 30 days?</h3>
              <p className="text-muted-foreground text-sm">
                Our guarantee is 30 days from activation. After that, standard cancellation terms apply.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">How do I track my return?</h3>
              <p className="text-muted-foreground text-sm">
                You'll receive tracking information for your return shipment and refund status updates.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">What about installation costs?</h3>
              <p className="text-muted-foreground text-sm">
                Installation is free, and there are no installation fees to refund. Removal is also free if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help with a Return?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to make your return process as smooth as possible.
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

export default Returns;
