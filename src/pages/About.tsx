
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Lightbulb, ArrowDown } from 'lucide-react';

const About = () => {
  const values = [{
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation Driven",
    description: "We bring global, cutting-edge technologies to address regional challenges in the MENA market."
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Sustainability Focused",
    description: "We integrate eco-friendly solutions into every project for minimal environmental impact."
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Reliability & Efficiency",
    description: "Our long-term service approach ensures maximum system performance and operational excellence."
  }, {
    icon: <Award className="w-8 h-8" />,
    title: "Regional Expertise",
    description: "Deep market knowledge allows us to tailor solutions specifically for the Middle East and North Africa."
  }];

  const certifications = [{
    name: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent quality in all our services and deliverables."
  }, {
    name: "ISO 14001:2015",
    description: "Environmental Management System certification demonstrating our commitment to environmental responsibility."
  }, {
    name: "OHSAS 18001",
    description: "Occupational Health and Safety certification ensuring safe working environments for all our projects."
  }];

  const milestones = [{
    year: "2018",
    event: "Company Founded",
    description: "XERIC Trading and Services L.L.C. established in Dubai, UAE with License No. 1469895"
  }, {
    year: "2019",
    event: "First Major Project",
    description: "Secured first large-scale water treatment project in the UAE"
  }, {
    year: "2020",
    event: "ISO Certifications",
    description: "Achieved ISO 9001, 14001, and OHSAS 18001 certifications"
  }, {
    year: "2021",
    event: "Solar Division Launch",
    description: "Expanded services to include comprehensive solar energy solutions"
  }, {
    year: "2022",
    event: "Regional Expansion",
    description: "Extended operations across MENA region with strategic partnerships"
  }, {
    year: "2023",
    event: "Environmental Innovation",
    description: "Launched advanced pollution control systems using Japanese technology"
  }, {
    year: "2024",
    event: "Sustainable Leadership",
    description: "Recognized as leading provider of sustainable infrastructure solutions"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Clean Wipro-inspired Design */}
      <section className="min-h-screen flex items-center justify-center bg-background relative">
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            
            {/* Simple Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-border rounded-full shadow-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-foreground font-medium">Est. 2018 • Dubai, UAE</span>
            </div>
            
            {/* Clean Typography */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight leading-tight">
                About{" "}
                <span className="text-primary font-normal">XERIC</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto font-light">
                Pioneering sustainable infrastructure solutions across the MENA region
              </p>
            </div>
            
            {/* Minimal Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">6+</div>
                <div className="text-sm text-foreground/60">Years</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">500+</div>
                <div className="text-sm text-foreground/60">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">15+</div>
                <div className="text-sm text-foreground/60">Countries</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">3</div>
                <div className="text-sm text-foreground/60">Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Simple Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ArrowDown className="w-5 h-5 text-foreground/30 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-heading font-light text-primary">Mission</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To empower the MENA region by delivering sustainable solutions, efficient services, 
                and long-term operational excellence through technology-driven innovation.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-heading font-light text-primary">Vision</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To lead the MENA region in sustainable energy, water, and infrastructure solutions, 
                fostering a greener future through innovation and exceptional partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-heading font-light text-primary">Core Values</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Principles that guide our decisions and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-medium text-primary">{value.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-heading font-light text-primary">Our Journey</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Key milestones that shaped our commitment to sustainable solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-heading font-medium text-primary mb-3">{milestone.event}</h3>
                    <p className="text-foreground/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-heading font-light text-primary">Certifications</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              International quality and environmental management standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-medium text-primary">{cert.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-heading font-light mb-16 text-center text-primary">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-primary mb-3 text-lg">Company Name</h3>
                  <p className="text-foreground/80">XERIC Trading and Services L.L.C.</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-3 text-lg">License Number</h3>
                  <p className="text-foreground/80">1469895</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-3 text-lg">Established</h3>
                  <p className="text-foreground/80">2018</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-3 text-lg">Industry Focus</h3>
                  <p className="text-foreground/80">Energy, Renewables, Water Treatment, Infrastructure</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-6 text-lg">Office Address</h3>
                <div className="text-foreground/80 space-y-2 leading-relaxed">
                  <p>OFF4-87, Building SMARK 2</p>
                  <p>Ras Al Khor Industrial Second</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
