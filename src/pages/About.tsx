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
      
      {/* Hero Section - Minimalistic Design */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            
            {/* Simple Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm text-foreground/70">
              Est. 2018 • Dubai, UAE
            </div>
            
            {/* Clean Typography */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-heading font-light tracking-tight">
                About{" "}
                <span className="text-primary font-normal">XERIC</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-3xl mx-auto font-light">
                Pioneering sustainable infrastructure solutions across the MENA region
              </p>
            </div>
            
            {/* Minimal Stats */}
            <div className="grid grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">6+</div>
                <div className="text-sm text-foreground/50">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">500+</div>
                <div className="text-sm text-foreground/50">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">15+</div>
                <div className="text-sm text-foreground/50">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">3</div>
                <div className="text-sm text-foreground/50">Certifications</div>
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
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-light text-primary">Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To empower the MENA region by delivering sustainable solutions, efficient services, 
                and long-term operational excellence through technology-driven innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-light text-primary">Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                To lead the MENA region in sustainable energy, water, and infrastructure solutions, 
                fostering a greener future through innovation and exceptional partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-heading font-light text-primary">Core Values</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Principles that guide our decisions and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-heading font-medium text-primary">{value.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-heading font-light text-primary">Our Journey</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Key milestones that shaped our commitment to sustainable solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-heading font-medium text-primary mb-2">{milestone.event}</h3>
                    <p className="text-foreground/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-heading font-light text-primary">Certifications</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              International quality and environmental management standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-medium text-primary">{cert.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-light mb-12 text-center text-primary">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-2">Company Name</h3>
                  <p className="text-foreground/80">XERIC Trading and Services L.L.C.</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">License Number</h3>
                  <p className="text-foreground/80">1469895</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Established</h3>
                  <p className="text-foreground/80">2018</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Industry Focus</h3>
                  <p className="text-foreground/80">Energy, Renewables, Water Treatment, Infrastructure</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-4">Office Address</h3>
                <div className="text-foreground/80 space-y-1">
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
