
import PageLayout from '@/components/PageLayout';
import { MapPin, Calendar, Tool, CheckCircle, Clock, Phone } from 'lucide-react';

const Installation = () => {
  return (
    <PageLayout 
      title="Professional Installation" 
      subtitle="Free expert installation included with all residential satellite internet plans"
    >
      <div className="space-y-16">
        {/* Installation Benefits */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Why Choose Professional Installation?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Guaranteed Performance</h3>
                <p className="text-muted-foreground text-sm">
                  Expert technicians ensure optimal satellite alignment and signal strength
                </p>
              </div>
              <div>
                <Tool className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Professional Grade Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Specialized equipment for precise installation and weatherproofing
                </p>
              </div>
              <div>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground text-sm">
                  Direct line to your installation technician for any follow-up questions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Schedule</h3>
              <p className="text-muted-foreground text-sm">
                Call to schedule your free installation appointment
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Site Survey</h3>
              <p className="text-muted-foreground text-sm">
                Technician evaluates best location for satellite dish
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Tool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Installation</h3>
              <p className="text-muted-foreground text-sm">
                Professional mounting, alignment, and equipment setup
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Testing</h3>
              <p className="text-muted-foreground text-sm">
                Complete system testing and customer walkthrough
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Equipment & Installation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Satellite dish mounting and alignment</li>
                  <li>• Weatherproof cable routing</li>
                  <li>• Modem/router setup and configuration</li>
                  <li>• WiFi network creation and password setup</li>
                  <li>• System testing and optimization</li>
                  <li>• Customer training and walkthrough</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Additional Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Wall fishing and clean cable runs</li>
                  <li>• Ground-level or roof mounting options</li>
                  <li>• Multiple device connectivity testing</li>
                  <li>• Speed testing and verification</li>
                  <li>• 30-day follow-up support call</li>
                  <li>• Equipment warranty and support setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Schedule Your Installation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Morning, afternoon, or weekend appointments available
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>8 AM - 12 PM</li>
                <li>1 PM - 5 PM</li>
                <li>Saturday Available</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quick Availability</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Most installations can be scheduled within 3-5 days
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>Same week availability</li>
                <li>Emergency installs available</li>
                <li>Weather contingency plans</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Confirmation & Updates</h3>
              <p className="text-muted-foreground text-sm mb-4">
                SMS and email updates throughout the process
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>Appointment reminders</li>
                <li>Technician en route alerts</li>
                <li>Installation completion notice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Prepare for Installation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Before Installation Day</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ensure clear access to installation areas</li>
                  <li>• Move vehicles from driveway/work area</li>
                  <li>• Secure pets indoors during installation</li>
                  <li>• Clear path from dish location to modem area</li>
                  <li>• Have power outlets available near modem location</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Installation Day Tips</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Be present for entire installation (2-4 hours)</li>
                  <li>• Ask questions during the walkthrough</li>
                  <li>• Test internet on all your devices</li>
                  <li>• Save technician contact for follow-up</li>
                  <li>• Register for online account management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Installation FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">How long does installation take?</h3>
              <p className="text-muted-foreground text-sm">
                Most installations are completed in 2-4 hours, including equipment setup and testing.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">What if weather delays installation?</h3>
              <p className="text-muted-foreground text-sm">
                We'll reschedule at no charge. Safety is our priority, and we don't install in severe weather.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">Do I need to be home?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you must be present for the installation to approve dish placement and complete setup.
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">What about wall drilling?</h3>
              <p className="text-muted-foreground text-sm">
                We minimize holes and always ask permission before drilling. Professional wall fishing available.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Schedule?</h3>
            <p className="text-muted-foreground mb-6">
              Call now to schedule your free professional installation appointment.
            </p>
            <a href="tel:1-888-970-1698" className="btn-primary">
              Schedule Installation: 1-888-970-1698
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Installation;
