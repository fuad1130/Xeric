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
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Established 2018 • Licensed in UAE
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8">
              About{" "}
              <span className="relative">
                <span className="gradient-primary bg-clip-text text-neutral-950">US </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full opacity-30"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-4xl mx-auto">
              Pioneering sustainable infrastructure solutions across the MENA region with cutting-edge technology 
              in <span className="text-primary font-semibold">aerospace</span>, <span className="text-accent font-semibold">renewable energy</span>, 
              and <span className="text-secondary font-semibold">water treatment</span>.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-foreground/60 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-foreground/60 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-foreground/60 font-medium">MENA Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">3</div>
                <div className="text-foreground/60 font-medium">ISO Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-foreground/60 text-sm mb-2">Learn More</span>
              <ArrowDown className="w-5 h-5 text-foreground/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-border rounded-2xl p-8">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To empower the MENA region by delivering sustainable solutions, efficient services, 
                and long-term operational excellence. We revolutionize the region through technology-driven 
                solutions in energy, water, and infrastructure, ensuring environmental responsibility.
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-2xl p-8">
              <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                To lead the MENA region in sustainable energy, water, and infrastructure solutions, 
                fostering a greener future. We aim to be the regional leader recognized for innovation, 
                sustainability, and exceptional client partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Our Core Values</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and drive our commitment to 
              excellence and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <div key={index} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Our Journey</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              From startup to regional leader - here are the key milestones that shaped XERIC's 
              commitment to sustainable solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-border rounded-xl p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 text-primary">{milestone.event}</h3>
                    <p className="text-foreground/80">{milestone.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Quality Certifications</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Our commitment to excellence is validated by international quality and environmental 
              management certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => <div key={index} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">{cert.name}</h3>
                <p className="text-foreground/80">{cert.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-border rounded-2xl p-8">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center text-primary">Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-primary mb-2">Company Name</h3>
                    <p className="text-foreground/80">XERIC Trading and Services L.L.C.</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary mb-2">License Number</h3>
                    <p className="text-foreground/80">1469895</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary mb-2">Established</h3>
                    <p className="text-foreground/80">2018</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary mb-2">Industry Focus</h3>
                    <p className="text-foreground/80">Energy, Renewables, Water Treatment, Infrastructure</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-primary mb-2">Office Address</h3>
                  <div className="text-foreground/80 space-y-1">
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
    </div>;
};
export default About;