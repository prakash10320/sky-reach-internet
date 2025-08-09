
import PageLayout from '@/components/PageLayout';
import { Phone, MessageCircle, Mail, Clock, Headphones, Wrench } from 'lucide-react';

const Support = () => {
  return (
    <PageLayout 
      title="Customer Support" 
      subtitle="24/7 expert support for all your satellite internet needs"
    >
      <div className="space-y-16">
        {/* Support Options */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Get Help Now</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak with a live expert 24/7
              </p>
              <a href="tel:1-888-970-1698" className="btn-primary text-sm">
                1-888-970-1698
              </a>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Quick answers through online chat
              </p>
              <button className="btn-secondary text-sm">
                Start Chat
              </button>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Detailed help via email
              </p>
              <a href="mailto:support@skylink.com" className="btn-secondary text-sm">
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Support Hours</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Technical Support</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Phone: 24/7 Available</p>
                  <p>Live Chat: 6 AM - 12 AM EST</p>
                  <p>Email: Response within 2 hours</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Sales & Billing</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 7 AM - 10 PM EST</p>
                  <p>Saturday - Sunday: 8 AM - 8 PM EST</p>
                  <p>Emergency Line: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">How Can We Help?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6">
              <Wrench className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Technical Issues</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Internet connection problems</li>
                <li>• Slow speeds or performance</li>
                <li>• Equipment troubleshooting</li>
                <li>• WiFi setup and configuration</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <Headphones className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Account & Billing</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Payment and billing questions</li>
                <li>• Plan changes and upgrades</li>
                <li>• Account management</li>
                <li>• Service cancellation</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Installation</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Installation scheduling</li>
                <li>• Equipment delivery tracking</li>
                <li>• Site survey questions</li>
                <li>• Installation preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Self-Help Resources */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Self-Help Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Quick Fixes</h3>
                <div className="space-y-3">
                  <details className="glass rounded-lg p-4">
                    <summary className="font-medium cursor-pointer">Internet is slow or not working</summary>
                    <div className="mt-3 text-muted-foreground text-sm">
                      <p>1. Check all cable connections</p>
                      <p>2. Power cycle your modem (unplug 30 seconds)</p>
                      <p>3. Check for obstructions to dish</p>
                      <p>4. Contact support if issue persists</p>
                    </div>
                  </details>
                  <details className="glass rounded-lg p-4">
                    <summary className="font-medium cursor-pointer">WiFi password reset</summary>
                    <div className="mt-3 text-muted-foreground text-sm">
                      <p>1. Locate the label on your modem</p>
                      <p>2. Find the WiFi network name and password</p>
                      <p>3. Or call us to create a custom password</p>
                    </div>
                  </details>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Popular Articles</h3>
                <div className="space-y-3">
                  <a href="#" className="block glass rounded-lg p-4 hover:bg-muted/10 transition-colors">
                    <h4 className="font-medium mb-1">Setting up your WiFi network</h4>
                    <p className="text-muted-foreground text-sm">Complete guide to WiFi configuration</p>
                  </a>
                  <a href="#" className="block glass rounded-lg p-4 hover:bg-muted/10 transition-colors">
                    <h4 className="font-medium mb-1">Optimizing your internet speed</h4>
                    <p className="text-muted-foreground text-sm">Tips for better performance</p>
                  </a>
                  <a href="#" className="block glass rounded-lg p-4 hover:bg-muted/10 transition-colors">
                    <h4 className="font-medium mb-1">Understanding data allowances</h4>
                    <p className="text-muted-foreground text-sm">Managing your data usage</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8 border border-red-200">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Emergency Support</h2>
            <p className="text-muted-foreground mb-6">
              For urgent technical issues affecting your service, our emergency line is available 24/7.
            </p>
            <a href="tel:1-888-970-1698" className="btn-primary bg-red-600 hover:bg-red-700">
              Emergency Line: 1-888-970-1698
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Support;
