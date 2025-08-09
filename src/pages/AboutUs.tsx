
import PageLayout from '@/components/PageLayout';
import { Satellite, Users, Award, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <PageLayout 
      title="About SkyLink" 
      subtitle="Leading the future of satellite internet connectivity worldwide"
    >
      <div className="space-y-16">
        {/* Company Story */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2010, SkyLink has been at the forefront of satellite internet technology, 
                connecting communities and businesses across the globe. We started with a simple mission: 
                to make high-speed internet accessible to everyone, regardless of their location.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've expanded our network to cover 99% of the continental United States 
                and continue to invest in cutting-edge technology to provide faster, more reliable 
                satellite internet services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 1 million customers nationwide, from rural families staying 
                connected to urban businesses requiring reliable backup internet solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-muted-foreground">Coverage Area</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Satellite className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-muted-foreground">Network Uptime</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the digital divide by providing reliable, high-speed satellite internet 
              to underserved communities and remote locations. We believe everyone deserves 
              access to the opportunities that come with being connected.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Innovation in satellite technology</li>
              <li>• Customer-first service approach</li>
              <li>• Reliability you can count on</li>
              <li>• Transparency in pricing and service</li>
              <li>• Environmental responsibility</li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Connected?</h3>
            <p className="text-muted-foreground mb-6">
              Join over 1 million satisfied customers who trust SkyLink for their internet needs.
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

export default AboutUs;
