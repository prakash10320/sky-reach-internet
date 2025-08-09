
import PageLayout from '@/components/PageLayout';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <PageLayout 
      title="SkyLink Blog" 
      subtitle="Latest news, updates, and insights about satellite internet technology"
    >
      <div className="space-y-16">
        {/* Featured Article */}
        <section>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  The Future of Rural Internet: How Satellite Technology is Bridging the Digital Divide
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Explore how advanced satellite internet technology is transforming connectivity in rural 
                  America, providing high-speed internet access to previously underserved communities and 
                  enabling new opportunities for education, business, and communication.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">Sarah Johnson, CTO</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>January 8, 2025</span>
                </div>
                <a href="#" className="btn-primary inline-flex items-center">
                  Read Article <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center min-h-64">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📡</span>
                  </div>
                  <p className="text-muted-foreground">Featured Article</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium mb-3">
                  Technology
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  New Satellite Constellation Launches: What This Means for Internet Speeds
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn about our latest satellite deployments and how they're improving connection 
                  speeds and reliability across our network.
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>January 5, 2025</span>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read More →
                </a>
              </div>
            </article>

            <article className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium mb-3">
                  Tips & Guides
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  Optimizing Your Home Network for Remote Work and Video Streaming
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential tips for setting up your satellite internet connection for the best 
                  performance when working from home or streaming content.
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>January 3, 2025</span>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read More →
                </a>
              </div>
            </article>

            <article className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <span className="text-3xl">🏡</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-medium mb-3">
                  Customer Stories
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  From Isolated to Connected: A Montana Ranch Family's Internet Journey
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Read how satellite internet transformed daily life for the Peterson family, 
                  enabling remote education and keeping their ranch business competitive.
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>December 28, 2024</span>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read More →
                </a>
              </div>
            </article>

            <article className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium mb-3">
                  Technology
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  Understanding Weather Impact on Satellite Internet Performance
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn about how different weather conditions affect satellite signals and what 
                  we're doing to minimize weather-related interruptions.
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>December 25, 2024</span>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read More →
                </a>
              </div>
            </article>

            <article className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-3xl">🌍</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium mb-3">
                  Company News
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  SkyLink Expands Coverage to Alaska and Northern Canada
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We're excited to announce expanded service coverage bringing high-speed satellite 
                  internet to remote communities in Alaska and northern Canadian territories.
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>December 22, 2024</span>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read More →
                </a>
              </div>
            </article>

            <article className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-medium mb-3">
                  Industry Insights
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  2025 Satellite Internet Industry Trends and Predictions
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our analysis of emerging trends in satellite internet technology and what 
                  customers can expect in terms of speed, pricing, and availability improvements.
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>December 20, 2024</span>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest satellite internet news, tips, and updates.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Blog;
