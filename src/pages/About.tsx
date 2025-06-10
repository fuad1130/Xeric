
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
      
      {/* Hero Section - Improved Spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-12">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
              Established 2018 • Licensed in UAE
            </div>
            
            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-none">
                About{" "}
                <span className="relative">
                  <span className="gradient-primary bg-clip-text text-neutral-950">US </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full opacity-30"></div>
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-5xl mx-auto px-4">
                Pioneering sustainable infrastructure solutions across the MENA region with cutting-edge technology 
                in <span className="text-primary font-semibold">aerospace</span>, <span className="text-accent font-semibold">renewable energy</span>, 
                and <span className="text-secondary font-semibold">water treatment</span>.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-16">
              <div className="text-center space-y-3">
                <div className="text-4xl md:text-5xl font-bold text-primary">6+</div>
                <div className="text-foreground/60 font-medium text-lg">Years Experience</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl md:text-5xl font-bold text-accent">500+</div>
                <div className="text-foreground/60 font-medium text-lg">Projects Completed</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl md:text-5xl font-bold text-secondary">15+</div>
                <div className="text-foreground/60 font-medium text-lg">MENA Countries</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl md:text-5xl font-bold text-orange">3</div>
                <div className="text-foreground/60 font-medium text-lg">ISO Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce space-y-2">
              <span className="text-foreground/60 text-sm">Learn More</span>
              <ArrowDown className="w-5 h-5 text-foreground/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white border border-border rounded-2xl p-10 space-y-6">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To empower the MENA region by delivering sustainable solutions, efficient services, 
                and long-term operational excellence. We revolutionize the region through technology-driven 
                solutions in energy, water, and infrastructure, ensuring environmental responsibility.
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-2xl p-10 space-y-6">
              <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To lead the MENA region in sustainable energy, water, and infrastructure solutions, 
                fostering a greener future. We aim to be the regional leader recognized for innovation, 
                sustainability, and exceptional client partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Our Core Values</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              These principles guide our decisions, shape our culture, and drive our commitment to 
              excellence and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow space-y-6">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">{value.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Our Journey</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              From startup to regional leader - here are the key milestones that shaped XERIC's 
              commitment to sustainable solutions.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-border rounded-xl p-8 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-primary">{milestone.event}</h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Quality Certifications</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is validated by international quality and environmental 
              management certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow space-y-6">
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">{cert.name}</h3>
                <p className="text-foreground/80 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-border rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-primary">Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-primary text-xl">Company Name</h3>
                    <p className="text-foreground/80 text-lg">XERIC Trading and Services L.L.C.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-primary text-xl">License Number</h3>
                    <p className="text-foreground/80 text-lg">1469895</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-primary text-xl">Established</h3>
                    <p className="text-foreground/80 text-lg">2018</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-primary text-xl">Industry Focus</h3>
                    <p className="text-foreground/80 text-lg">Energy, Renewables, Water Treatment, Infrastructure</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-primary text-xl">Office Address</h3>
                  <div className="text-foreground/80 space-y-2 text-lg">
                    <p>OFF4-87, Building SMARK 2</p>
                    <p>Ras Al Khor Industrial Second</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>
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
