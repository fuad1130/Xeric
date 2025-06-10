
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Cpu, Smartphone, Zap, Shield, Cloud, Database, Globe } from 'lucide-react';

const Verticals = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Water Treatment & Desalination Solutions",
      description: "Designing and implementing seawater desalination and wastewater treatment systems, including zero liquid discharge, for sustainable water management.",
      features: [
        "Seawater Desalination Plants",
        "Wastewater Treatment Systems",
        "Zero Liquid Discharge Solutions",
        "Water Quality Management",
        "Membrane Technology"
      ],
      technologies: ["RO Technology", "Membrane Bioreactors", "UV Disinfection", "Advanced Oxidation"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Environmental Protection & Pollution Control",
      description: "Providing advanced pollution control systems, sewage treatment, and trenchless sewer rehabilitation using cutting-edge Japanese technology.",
      features: [
        "Advanced Pollution Control Systems",
        "Sewage Treatment Plants",
        "Trenchless Sewer Rehabilitation",
        "Air Quality Management",
        "Environmental Monitoring"
      ],
      technologies: ["Japanese Technology", "Biofilters", "Scrubber Systems", "CCTV Inspection"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Industrial Pumps, Engines, Valves & Spare Parts",
      description: "Supplying high-quality mechanical solutions for maritime, transportation, and industrial sectors.",
      features: [
        "Industrial Pump Systems",
        "Marine Engines & Parts",
        "Control Valves",
        "Transportation Equipment",
        "Emergency Spare Parts"
      ],
      technologies: ["Centrifugal Pumps", "Marine Propulsion", "Smart Valves", "Predictive Maintenance"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Power Generation, Transmission & Distribution",
      description: "Offering turbines, generators, energy storage, and waste-to-energy solutions with comprehensive maintenance services.",
      features: [
        "Gas & Steam Turbines",
        "Generator Systems",
        "Energy Storage Solutions",
        "Waste-to-Energy Plants",
        "Grid Integration"
      ],
      technologies: ["Combined Cycle", "Battery Storage", "Smart Grid", "Energy Management"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Solar Energy Solutions",
      description: "Designing and installing solar PV systems for residential, commercial, and industrial use with robotic panel cleaning.",
      features: [
        "Solar PV System Design",
        "Residential Solar Installations",
        "Commercial Solar Projects",
        "Industrial Solar Solutions",
        "Robotic Panel Cleaning"
      ],
      technologies: ["Monocrystalline Panels", "Inverter Technology", "Monitoring Systems", "Cleaning Robots"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Alternative Transportation Technologies",
      description: "Introducing eco-friendly, high-speed transportation solutions for the Middle East.",
      features: [
        "Electric Vehicle Infrastructure",
        "High-Speed Rail Systems",
        "Sustainable Logistics",
        "Smart Mobility Solutions",
        "Charging Networks"
      ],
      technologies: ["EV Charging", "Maglev Technology", "IoT Integration", "Smart Traffic"],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Local Warehousing & Logistics",
      description: "Providing local inventory and logistics for quick access to critical and AOG spare parts.",
      features: [
        "Strategic Inventory Management",
        "AOG Parts Availability",
        "Supply Chain Optimization",
        "Emergency Response",
        "Digital Tracking Systems"
      ],
      technologies: ["Inventory Management", "RFID Tracking", "Automated Systems", "Real-time Monitoring"],
      gradient: "from-teal-600 to-green-600"
    }
  ];

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
              <span className="text-foreground font-medium">Comprehensive Solutions Portfolio</span>
            </div>
            
            {/* Clean Typography */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight leading-tight">
                Our{" "}
                <span className="text-primary font-normal">Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto font-light">
                Comprehensive sustainable solutions tailored for the MENA region, delivering cutting-edge 
                technology services that drive environmental responsibility and operational excellence.
              </p>
            </div>
            
            {/* Minimal Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">7+</div>
                <div className="text-sm text-foreground/60">Service Areas</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">500+</div>
                <div className="text-sm text-foreground/60">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">ISO</div>
                <div className="text-sm text-foreground/60">Certified</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-light text-primary">24/7</div>
                <div className="text-sm text-foreground/60">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-border rounded-2xl p-10 hover:shadow-lg transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-3 text-primary">{service.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-heading font-bold mb-4 text-primary">Key Solutions:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-heading font-bold mb-4 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-light text-primary">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Partner with XERIC to leverage cutting-edge sustainable technology solutions 
              tailored to your industry's unique needs across the MENA region.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <button className="px-10 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium">
                Schedule Consultation
              </button>
              <button className="px-10 py-4 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all font-medium">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Verticals;
