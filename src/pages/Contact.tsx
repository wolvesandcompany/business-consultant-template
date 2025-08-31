import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@growthpartners.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Business District, NY 10001',
      description: 'Visit us for in-person consultations'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8am - 6pm EST',
      description: 'Weekend consultations by appointment'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Let's Start Your <span className="text-accent">Transformation</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to take your business to the next level? Get in touch with our expert consultants today.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <Card className="bg-white shadow-card border-border">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="John"
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            className="w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service Interest
                        </label>
                        <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                          <option value="">Select a service</option>
                          <option value="growth">Business Growth Strategy</option>
                          <option value="financial">Financial Planning</option>
                          <option value="operations">Operations Optimization</option>
                          <option value="digital">Digital Transformation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your business challenges and goals..."
                          className="w-full h-32"
                          required
                        />
                      </div>

                      <Button size="lg" className="w-full bg-gradient-accent text-accent-foreground hover:shadow-gold">
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground text-lg">
                    Choose the best way to reach us. We're here to help transform your business.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-white shadow-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-1">{info.details}</p>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Consultation CTA */}
                <Card className="bg-gradient-primary text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Calendar className="mr-3 w-6 h-6 text-accent" />
                      Book a Free Consultation
                    </CardTitle>
                    <CardDescription className="text-white/90">
                      Schedule a 30-minute strategy session with our experts.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      size="lg" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
                    >
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map/Location Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground text-lg">
                Located in the heart of the business district for easy access.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Growth Partners Office</h4>
                  <p className="text-muted-foreground">123 Business District, New York, NY 10001</p>
                  <p className="text-sm text-muted-foreground mt-2">Interactive map would be integrated here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;