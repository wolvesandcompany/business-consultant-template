import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: "TechStart Solutions",
      industry: "Technology",
      challenge: "Scaling operations while maintaining quality",
      solution: "Implemented streamlined processes and digital automation",
      results: [
        { metric: "Revenue Growth", value: "150%", icon: DollarSign },
        { metric: "Team Efficiency", value: "75%", icon: Users },
        { metric: "Market Share", value: "40%", icon: TrendingUp }
      ],
      timeline: "6 months",
      description: "A mid-sized tech company struggling with rapid growth needed strategic guidance to scale efficiently without compromising service quality."
    },
    {
      company: "Green Valley Manufacturing",
      industry: "Manufacturing",
      challenge: "Outdated processes reducing profitability",
      solution: "Operations optimization and lean manufacturing implementation",
      results: [
        { metric: "Cost Reduction", value: "30%", icon: DollarSign },
        { metric: "Production Speed", value: "85%", icon: TrendingUp },
        { metric: "Quality Score", value: "95%", icon: Users }
      ],
      timeline: "8 months",
      description: "Traditional manufacturer needed modernization to compete in today's market while reducing operational costs."
    },
    {
      company: "Metro Retail Group",
      industry: "Retail",
      challenge: "Digital transformation and online presence",
      solution: "Comprehensive digital strategy and e-commerce platform",
      results: [
        { metric: "Online Sales", value: "200%", icon: TrendingUp },
        { metric: "Customer Base", value: "120%", icon: Users },
        { metric: "ROI", value: "180%", icon: DollarSign }
      ],
      timeline: "4 months",
      description: "Retail business needed to establish strong online presence and integrate digital channels with traditional operations."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Success <span className="text-accent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses, real results. See how we've helped companies achieve remarkable transformations.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="bg-white shadow-card border-border overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Content */}
                <div className="lg:col-span-2 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <CardTitle className="text-2xl text-foreground">{caseStudy.company}</CardTitle>
                      <Badge variant="secondary">{caseStudy.industry}</Badge>
                      <Badge variant="outline">{caseStudy.timeline}</Badge>
                    </div>
                    <CardDescription className="text-lg text-muted-foreground">
                      {caseStudy.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </CardContent>
                </div>

                {/* Results */}
                <div className="bg-gradient-primary p-8 text-white flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-6 text-center">Key Results</h4>
                  <div className="space-y-6">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <result.icon className="w-6 h-6 text-accent mr-2" />
                          <span className="text-3xl font-bold text-accent">+{result.value}</span>
                        </div>
                        <p className="text-white/90 text-sm">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Be Our Next Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every success story starts with a conversation. Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-gold transition-smooth">
                Book Your Free Consultation
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-smooth">
                Download Case Study Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;