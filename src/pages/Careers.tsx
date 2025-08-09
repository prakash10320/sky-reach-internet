
import PageLayout from '@/components/PageLayout';
import { Briefcase, MapPin, Clock, Star } from 'lucide-react';

const Careers = () => {
  return (
    <PageLayout 
      title="Join Our Team" 
      subtitle="Build the future of satellite internet connectivity with us"
    >
      <div className="space-y-16">
        {/* Why Work With Us */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Why Choose SkyLink?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground text-sm">
                  Work with cutting-edge satellite technology and be part of connecting the world
                </p>
              </div>
              <div>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Clear career paths with training, certifications, and advancement opportunities
                </p>
              </div>
              <div>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground text-sm">
                  Flexible schedules, comprehensive benefits, and a supportive work environment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Employee Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-primary">Health & Wellness</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive medical, dental, and vision coverage</li>
                  <li>• Mental health and wellness programs</li>
                  <li>• Fitness center membership reimbursement</li>
                  <li>• Health savings account with company matching</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Financial Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Competitive salary with performance bonuses</li>
                  <li>• 401(k) retirement plan with company matching</li>
                  <li>• Stock options and profit sharing</li>
                  <li>• Tuition reimbursement program</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Time Off</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Generous PTO starting at 3 weeks annually</li>
                  <li>• 12 paid holidays plus floating holidays</li>
                  <li>• Paid parental leave</li>
                  <li>• Sabbatical opportunities after 5 years</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Work Environment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Remote and hybrid work options</li>
                  <li>• Modern offices and equipment</li>
                  <li>• Professional development budget</li>
                  <li>• Team building and company events</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Satellite Installation Technician</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Multiple Locations
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      Entry Level
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Install and maintain satellite internet equipment. Training provided, travel required. 
                    Great entry point into satellite technology career.
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Customer Support Specialist</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Remote / Denver, CO
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      Entry-Mid Level
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Provide exceptional customer service via phone, chat, and email. Help customers with 
                    technical issues, billing questions, and service optimization.
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Network Operations Engineer</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Denver, CO
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      Senior Level
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Monitor and optimize satellite network performance. Requires networking expertise, 
                    satellite knowledge preferred. Competitive salary and benefits.
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Sales Representative</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Territory-based
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      Mid Level
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Drive sales growth in assigned territory. Build relationships with customers and 
                    partners. Excellent compensation with commission and bonuses.
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Culture & Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Innovation & Excellence</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We're passionate about pushing the boundaries of satellite technology and delivering 
                  exceptional service to our customers.
                </p>
                <h3 className="font-semibold mb-3">Teamwork & Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Success comes from working together, sharing knowledge, and supporting each other 
                  to achieve common goals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Diversity & Inclusion</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We believe diverse perspectives make us stronger and are committed to creating an 
                  inclusive workplace for everyone.
                </p>
                <h3 className="font-semibold mb-3">Community Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Our work connects communities and enables opportunities. We take pride in making 
                  a positive difference in people's lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Apply Online</h3>
              <p className="text-muted-foreground text-sm">
                Submit your application and resume through our online portal
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Phone Screening</h3>
              <p className="text-muted-foreground text-sm">
                Initial conversation with our HR team to discuss your background
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Interview</h3>
              <p className="text-muted-foreground text-sm">
                In-person or video interview with the hiring manager and team
              </p>
            </div>
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Welcome Aboard</h3>
              <p className="text-muted-foreground text-sm">
                Offer, onboarding, and comprehensive training program
              </p>
            </div>
          </div>
        </section>

        {/* Contact HR */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Questions About Careers?</h2>
            <p className="text-muted-foreground mb-6">
              Our HR team is here to help with any questions about positions, benefits, or our company culture.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:careers@skylink.com" className="btn-primary">
                Email: careers@skylink.com
              </a>
              <a href="tel:1-888-970-1698" className="btn-secondary">
                Call: 1-888-970-1698
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Careers;
