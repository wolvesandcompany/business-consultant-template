import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We develop targeted strategies that align with your business goals and market opportunities.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand your unique challenges.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Our track record speaks for itself with consistent results and satisfied clients.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Oriented',
      description: 'We focus on sustainable growth strategies that deliver long-term value to your business.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Your Trusted Partner in 
              <span className="text-accent"> Business Growth</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Growth Partners, we specialize in transforming small to medium-sized enterprises through strategic consultancy and proven methodologies. Our mission is to empower businesses with the insights, strategies, and tools they need to achieve sustainable growth and competitive advantage.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our consultants bring decades of combined experience across various industries, ensuring you get world-class expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Measurable Results</h3>
                  <p className="text-muted-foreground">
                    We don't just give advice – we ensure our strategies deliver tangible, measurable improvements to your bottom line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-smooth border border-border"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;