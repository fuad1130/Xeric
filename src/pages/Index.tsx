
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize your business operations with cutting-edge technology solutions that drive efficiency and growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Work with industry veterans and certified professionals who bring decades of combined experience."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of 500+ successful projects with measurable ROI and business impact."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and localized expertise across multiple regions."
    }
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions.",
      benefits: ["Predictive Analytics", "Process Automation", "Intelligent Decision Making", "Cost Reduction"]
    },
    {
      title: "Cloud Solutions",
      description: "Migrate, optimize, and scale your infrastructure with enterprise-grade cloud services and architecture.",
      benefits: ["99.9% Uptime", "Scalable Infrastructure", "Cost Optimization", "Enhanced Security"]
    },
    {
      title: "Mobile Development",
      description: "Create engaging mobile experiences with native and cross-platform applications for iOS and Android.",
      benefits: ["Cross-Platform Apps", "Native Performance", "User-Centric Design", "App Store Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and proactive threat management.",
      benefits: ["Threat Detection", "Compliance Management", "Data Protection", "24/7 Monitoring"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, FinanceFlow Inc.",
      content: "TechXplore transformed our legacy banking systems into a modern, cloud-based platform. The results exceeded our expectations with 40% improved efficiency.",
      rating: 5,
      company: "FinanceFlow Inc."
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations, RetailMax",
      content: "Their e-commerce solution helped us increase online sales by 300% while improving customer satisfaction. Exceptional team and delivery.",
      rating: 5,
      company: "RetailMax"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Chief Medical Officer, HealthTech Solutions",
      content: "The telemedicine platform they developed during the pandemic was crucial for our operations. Reliable, secure, and user-friendly.",
      rating: 5,
      company: "HealthTech Solutions"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", description: "Successfully delivered across all verticals" },
    { number: "50+", label: "Enterprise Clients", description: "Fortune 500 and growing companies" },
    { number: "99.9%", label: "Uptime Guarantee", description: "Reliable, scalable infrastructure" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock technical assistance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechXplore?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 text-primary hover:text-primary/80 font-medium group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with TechXplore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help your business leverage technology for competitive advantage and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/verticals"
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
