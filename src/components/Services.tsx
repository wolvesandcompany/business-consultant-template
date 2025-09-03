import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  DollarSign,
  Settings,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description:
        "Develop comprehensive growth strategies tailored to your market and business model.",
      features: [
        "Market Analysis",
        "Competitive Positioning",
        "Growth Roadmapping",
        "Performance Metrics",
      ],
      color: "primary",
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description:
        "Optimize your financial performance with expert budgeting, forecasting, and analysis.",
      features: [
        "Budget Planning",
        "Cash Flow Management",
        "Investment Analysis",
        "Risk Assessment",
      ],
      color: "accent",
    },
    {
      icon: Settings,
      title: "Operations Optimization",
      description:
        "Streamline your operations for maximum efficiency and cost-effectiveness.",
      features: [
        "Process Improvement",
        "Cost Reduction",
        "Quality Management",
        "Supply Chain",
      ],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description:
        "Embrace digital technologies to modernize your business and stay competitive.",
      features: [
        "Technology Strategy",
        "Digital Marketing",
        "Automation Solutions",
        "Data Analytics",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Our Core <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive business consultancy services designed to
            address every aspect of your business growth journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-smooth border-border bg-white"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    service.color === "accent"
                      ? "bg-gradient-accent"
                      : "bg-gradient-primary"
                  }`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-smooth"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our comprehensive approach ensures every aspect of your business is
            optimized for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-primary hover:bg-white/90 hover:text-primary"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
