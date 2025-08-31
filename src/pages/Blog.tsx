import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "5 Key Strategies for Sustainable Business Growth",
      excerpt: "Discover the fundamental approaches that successful businesses use to achieve long-term, sustainable growth in today's competitive market.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Growth Strategy",
      readTime: "5 min read"
    },
    {
      title: "Digital Transformation: A Complete Guide for SMEs",
      excerpt: "Learn how small and medium enterprises can successfully navigate digital transformation without overwhelming their resources.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Digital Transformation",
      readTime: "8 min read"
    },
    {
      title: "Financial Planning Best Practices for Growing Companies",
      excerpt: "Essential financial planning strategies that every growing company needs to implement for long-term success and stability.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Financial Planning",
      readTime: "6 min read"
    },
    {
      title: "Operations Optimization: Streamlining for Success",
      excerpt: "How to identify bottlenecks in your operations and implement systems that improve efficiency and reduce costs.",
      author: "David Thompson",
      date: "February 28, 2024",
      category: "Operations",
      readTime: "7 min read"
    },
    {
      title: "Market Analysis Techniques for Strategic Decision Making",
      excerpt: "Master the art of market analysis to make informed strategic decisions that drive your business forward.",
      author: "Lisa Park",
      date: "February 20, 2024",
      category: "Strategy",
      readTime: "9 min read"
    },
    {
      title: "Building a Culture of Innovation in Your Organization",
      excerpt: "Create an environment where innovation thrives and your team consistently delivers creative solutions to business challenges.",
      author: "Robert Anderson",
      date: "February 15, 2024",
      category: "Innovation",
      readTime: "6 min read"
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
              Business Insights & <span className="text-accent">Expert Advice</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights on business growth, strategy, and industry trends.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-white shadow-card border-border hover:shadow-lg transition-smooth group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20 bg-gradient-primary rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Never Miss an Insight</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest business strategies and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg text-foreground flex-1"
                />
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;