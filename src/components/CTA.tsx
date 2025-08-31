import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Transform Your 
            <span className="text-accent block">Business Today</span>
          </h2>
          
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your business potential? Our expert consultants are here to guide you through every step of your transformation journey. Book your free consultation and take the first step toward sustainable growth.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold text-lg px-10 py-6"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Book Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-primary transition-smooth text-lg px-10 py-6"
            >
              <Phone className="mr-3 w-6 h-6" />
              Call Us Now
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 mb-3">Speak directly with our experts</p>
              <p className="text-accent font-semibold">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 mb-3">Get detailed information</p>
              <p className="text-accent font-semibold">hello@growthpartners.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule Online</h3>
              <p className="text-white/80 mb-3">Book at your convenience</p>
              <p className="text-accent font-semibold">Available 24/7</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-accent">Our Commitment to You</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                We're so confident in our ability to help transform your business that we offer a 
                <span className="text-accent font-semibold"> 100% satisfaction guarantee</span> on all our consultancy services. 
                Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;