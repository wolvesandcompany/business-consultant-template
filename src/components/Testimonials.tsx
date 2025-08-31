import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Solutions",
      company: "Technology Startup",
      rating: 5,
      text: "Growth Partners transformed our entire business strategy. Their expertise in scaling operations helped us achieve 150% revenue growth in just 6 months. The team's professionalism and results-driven approach exceeded our expectations.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "Managing Director, Green Valley Manufacturing",
      company: "Manufacturing",
      rating: 5,
      text: "The operational improvements they implemented saved us 30% in costs while dramatically improving our production efficiency. Their lean manufacturing approach was exactly what we needed to stay competitive.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, Metro Retail Group",
      company: "Retail & E-commerce",
      rating: 5,
      text: "Our digital transformation journey wouldn't have been possible without Growth Partners. They helped us build a strong online presence that resulted in 200% increase in online sales. Highly recommended!",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      title: "CFO, Innovative Solutions Inc.",
      company: "Consulting Services",
      rating: 5,
      text: "Their financial planning expertise helped us optimize our cash flow and make strategic investments that accelerated our growth. The ROI on their services was evident within months.",
      avatar: "DT"
    },
    {
      name: "Lisa Park",
      title: "Operations Manager, Swift Logistics",
      company: "Logistics & Transportation",
      rating: 5,
      text: "The process optimization strategies they developed eliminated bottlenecks and improved our delivery times by 60%. Their systematic approach to operations excellence is unmatched.",
      avatar: "LP"
    },
    {
      name: "Robert Anderson",
      title: "President, Anderson Holdings",
      company: "Investment & Finance",
      rating: 5,
      text: "Growth Partners provided strategic guidance that helped us navigate market challenges and expand into new territories. Their business acumen and market insights are invaluable.",
      avatar: "RA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about working with Growth Partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-card border-border hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Trusted by 200+ Businesses Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-white/90 text-sm">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <p className="text-white/90 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-white/90 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <p className="text-white/90 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;