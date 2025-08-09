
import PageLayout from '@/components/PageLayout';

const Terms = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Terms and conditions for using SkyLink satellite internet services"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="glass rounded-2xl p-8">
          <p className="text-muted-foreground mb-6">
            Last updated: January 1, 2025
          </p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By subscribing to or using SkyLink satellite internet services, you agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SkyLink provides satellite-based internet access services. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High-speed satellite internet connectivity</li>
                <li>Professional installation and equipment setup</li>
                <li>24/7 customer support and technical assistance</li>
                <li>Network monitoring and maintenance</li>
                <li>Optional equipment rental and purchase programs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment for services is due monthly in advance. We accept major credit cards and 
                bank transfers. Additional terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly service fees are billed in advance</li>
                <li>Installation and equipment fees may apply</li>
                <li>Late payment fees may be charged for overdue accounts</li>
                <li>Service may be suspended for non-payment</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide continuous service, satellite internet may be affected by 
                weather conditions, equipment maintenance, or other factors beyond our control. We do 
                not guarantee 100% uptime but work diligently to maintain optimal service quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services responsibly and legally. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Illegal activities or content distribution</li>
                <li>Excessive bandwidth usage that impacts other users</li>
                <li>Unauthorized access to networks or systems</li>
                <li>Distribution of malware or harmful content</li>
                <li>Harassment or abuse of other users or staff</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cancellation and Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate service with 30 days written notice. Early termination fees 
                may apply if equipment financing agreements are involved. Upon termination, all 
                equipment must be returned in good condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                SkyLink's liability for service interruptions or damages is limited to the monthly 
                service fee. We are not liable for indirect, incidental, or consequential damages 
                arising from service use or interruption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">
                  Phone: 1-888-970-1698<br />
                  Email: legal@skylink.com<br />
                  Address: 123 Satellite Way, Denver, CO 80202
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
