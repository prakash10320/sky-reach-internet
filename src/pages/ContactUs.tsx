
import PageLayout from '@/components/PageLayout';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      variant: "default"
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Get in touch with our expert team for support and inquiries"
    >
      <div className="space-y-16">
        {/* Contact Methods */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass rounded-xl p-6 text-center">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a href="tel:TNF" className="text-primary hover:text-primary/80 font-semibold">
              TNF
            </a>
            <p className="text-sm text-muted-foreground mt-1">24/7 Support</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a href="mailto:support@skylink.com" className="text-primary hover:text-primary/80">
              support@skylink.com
            </a>
            <p className="text-sm text-muted-foreground mt-1">Quick Response</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground text-sm">
              123 Satellite Way<br />
              Denver, CO 80202
            </p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Monday - Sunday<br />
              24/7 Available
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Installation Request</option>
                  <option>Service Upgrade</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">How do I check availability?</h3>
              <p className="text-muted-foreground text-sm">Call us at TNF and we'll check coverage in your area instantly.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">What's included in installation?</h3>
              <p className="text-muted-foreground text-sm">Free professional installation includes dish setup, modem configuration, and testing.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">How long does installation take?</h3>
              <p className="text-muted-foreground text-sm">Most installations are completed within 2-4 hours by our certified technicians.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-2">Is there a contract?</h3>
              <p className="text-muted-foreground text-sm">No long-term contracts required. Cancel anytime with 30 days notice.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
