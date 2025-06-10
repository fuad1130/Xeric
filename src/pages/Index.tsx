
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainability Focused",
      description: "We integrate eco-friendly solutions into every project for minimal environmental impact."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Innovation Driven",
      description: "We bring global, cutting-edge technologies to address regional challenges."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reliability & Efficiency",
      description: "Our long-term service approach ensures maximum system performance."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Regional Expertise",
      description: "Deep market knowledge allows us to tailor solutions for the Middle East."
    }
  ];

  const services = [
    {
      title: "Water Treatment & Desalination Solutions",
      description: "Designing and implementing seawater desalination and wastewater treatment systems, including zero liquid discharge, for sustainable water management.",
      benefits: ["Seawater Desalination", "Wastewater Treatment", "Zero Liquid Discharge", "Water Quality Management"]
    },
    {
      title: "Environmental Protection & Pollution Control",
      description: "Providing advanced pollution control systems, sewage treatment, and trenchless sewer rehabilitation using cutting-edge Japanese technology.",
      benefits: ["Advanced Pollution Control", "Sewage Treatment", "Trenchless Rehabilitation", "Japanese Technology"]
    },
    {
      title: "Solar Energy Solutions",
      description: "Designing and installing solar PV systems for residential, commercial, and industrial use with robotic panel cleaning.",
      benefits: ["Solar PV Systems", "Residential Solutions", "Commercial Projects", "Robotic Cleaning"]
    },
    {
      title: "Power Generation, Transmission & Distribution",
      description: "Offering turbines, generators, energy storage, and waste-to-energy solutions with comprehensive maintenance services.",
      benefits: ["Turbines & Generators", "Energy Storage", "Waste-to-Energy", "Maintenance Services"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Project Director, Dubai Municipality",
      content: "XERIC's water treatment solutions have been instrumental in our sustainability initiatives. Their expertise in desalination technology is exceptional.",
      rating: 5,
      company: "Dubai Municipality"
    },
    {
      name: "Sarah Hassan",
      role: "Environmental Manager, ADNOC",
      content: "Their pollution control systems exceeded our expectations. Professional team with deep understanding of regional environmental challenges.",
      rating: 5,
      company: "ADNOC"
    },
    {
      name: "Dr. Omar Khalil",
      role: "Chief Engineer, Masdar City",
      content: "The solar energy solutions provided by XERIC are cutting-edge. Their maintenance services ensure optimal performance year-round.",
      rating: 5,
      company: "Masdar City"
    }
  ];

  const stats = [
    { number: "7+", label: "Service Areas", description: "Comprehensive solutions portfolio" },
    { number: "6", label: "Years Experience", description: "Since 2018 in MENA region" },
    { number: "ISO", label: "Certified Quality", description: "9001, 14001, OHSAS 18001" },
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Why Choose XERIC?</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver sustainable solutions 
              that drive real business results across the MENA region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Comprehensive sustainable solutions tailored for the MENA region, delivering innovation 
              in energy, water, and infrastructure development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-foreground/80 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 text-primary hover:text-secondary font-medium group"
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
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">{stat.number}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders across the MENA region 
              say about working with XERIC.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.role}</div>
                  <div className="text-xs text-foreground/60">{testimonial.company}</div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
              Ready to Start Your Sustainable Future?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how XERIC can help your business leverage sustainable technology 
              for competitive advantage and environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Get Your Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/verticals"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Explore Services
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
