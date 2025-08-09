
import PageLayout from '@/components/PageLayout';

const Privacy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="How we collect, use, and protect your personal information"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="glass rounded-2xl p-8">
          <p className="text-muted-foreground mb-6">
            Last updated: January 1, 2025
          </p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our services, contact customer support, or communicate with us.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal information (name, email, phone number, address)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Service usage data and network performance metrics</li>
                <li>Device information and technical specifications</li>
                <li>Customer support interactions and communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Process and manage your satellite internet service</li>
                <li>Provide customer support and technical assistance</li>
                <li>Send service-related communications and updates</li>
                <li>Monitor network performance and troubleshoot issues</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect the rights, property, or safety of SkyLink or others</li>
                <li>With service providers who assist in our operations</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes 
                encryption, secure servers, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">
                  Email: privacy@skylink.com<br />
                  Phone: 1-888-970-1698<br />
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

export default Privacy;
