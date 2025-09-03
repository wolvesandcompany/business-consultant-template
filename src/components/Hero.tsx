import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-business-team.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional business team collaborating"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 mt-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business
              <span className="text-accent block">Into Success</span>
            </h1>

            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              We help small to medium enterprises achieve sustainable growth
              through expert consultancy in business strategy, financial
              planning, and digital transformation.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "Proven strategies that deliver measurable results",
                "Expert guidance from seasoned business professionals",
                "Tailored solutions for your unique business challenges",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-primary hover:bg-white/90 hover:text-primary transition-smooth"
              >
                Learn More About Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    200+
                  </div>
                  <p className="text-white/80 text-sm">
                    Businesses Transformed
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">95%</div>
                  <p className="text-white/80 text-sm">Client Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">10+</div>
                  <p className="text-white/80 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-card">
                <img
                  src={heroImage}
                  alt="Professional business consultation"
                  className="rounded-xl w-full h-96 object-cover shadow-card"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">
                      +
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">40%</div>
                    <p className="text-muted-foreground text-sm">
                      Average Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
