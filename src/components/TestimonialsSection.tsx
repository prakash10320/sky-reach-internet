import { Quote, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Johnson',
    location: 'Rural Montana',
    plan: 'Residential Plan',
    rating: 5,
    content: 'After years of struggling with unreliable DSL, SkyLink\'s satellite service has been life-changing. I can finally work from home without constant disconnections and my kids can attend online classes without issues.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Sarah Williams',
    location: 'Western Colorado',
    plan: 'Roam Plan',
    rating: 5,
    content: 'The installation was quick and professional, and the speeds are much better than what was promised. We\'re finally able to stream our favorite shows without buffering, even during peak hours.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Robert Chen',
    location: 'Remote Alaska',
    plan: 'Boat Plan',
    rating: 5,
    content: 'Living in such a remote area, we never thought we\'d have reliable internet. While occasional weather issues affect service, it\'s been 95% reliable which is impressive given our location and harsh conditions.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Upstate New York',
    plan: 'Residential Plan',
    rating: 5,
    content: 'Customer service has been exceptional. When we had an issue after a storm, they sent a technician the next day who fixed everything and even optimized our setup for better performance.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-foreground font-medium">Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
            <span className="text-gradient-primary block">About Their Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Read real testimonials from customers who've transformed their internet experience 
            with our satellite services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-premium group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Plan Badge */}
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-primary text-sm font-medium">{testimonial.plan}</span>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground">Join Thousands of Satisfied Customers</h3>
            <p className="text-muted-foreground">Ready to experience reliable satellite internet?</p>
            <a href="tel:1-888-970-1698" className="btn-primary">
              Call 1-888-970-1698 Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;