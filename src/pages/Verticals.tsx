
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Cpu, Smartphone, Zap, Shield, Cloud, Database, Globe } from 'lucide-react';

const Verticals = () => {
  const verticals = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Financial Services",
      description: "Digital transformation solutions for banks, fintech, and financial institutions.",
      features: [
        "Core Banking Modernization",
        "Mobile Banking Applications",
        "Fraud Detection & Prevention",
        "Regulatory Compliance Solutions",
        "AI-Powered Risk Assessment"
      ],
      technologies: ["Blockchain", "AI/ML", "Cloud Computing", "Cybersecurity"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Healthcare & Life Sciences",
      description: "Innovative technology solutions improving patient care and operational efficiency.",
      features: [
        "Electronic Health Records (EHR)",
        "Telemedicine Platforms",
        "Medical Device Integration",
        "Clinical Data Analytics",
        "HIPAA Compliant Solutions"
      ],
      technologies: ["IoT", "Data Analytics", "Cloud Infrastructure", "Mobile Apps"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Retail & E-Commerce",
      description: "End-to-end digital commerce solutions driving customer engagement and sales.",
      features: [
        "Omnichannel Commerce Platforms",
        "Customer Experience Optimization",
        "Inventory Management Systems",
        "Personalization Engines",
        "Supply Chain Integration"
      ],
      technologies: ["Progressive Web Apps", "AI Recommendations", "Analytics", "CRM"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Manufacturing & Industry 4.0",
      description: "Smart manufacturing solutions leveraging IoT, AI, and automation technologies.",
      features: [
        "Industrial IoT Implementation",
        "Predictive Maintenance Systems",
        "Quality Control Automation",
        "Supply Chain Optimization",
        "Digital Twin Technology"
      ],
      technologies: ["IoT Sensors", "Edge Computing", "Machine Learning", "Robotics"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Government & Public Sector",
      description: "Secure, scalable solutions for government agencies and public institutions.",
      features: [
        "Citizen Services Portals",
        "Data Security & Privacy",
        "Compliance Management",
        "Digital Identity Solutions",
        "Smart City Infrastructure"
      ],
      technologies: ["Cybersecurity", "Cloud Services", "Identity Management", "Analytics"],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Technology & Software",
      description: "Cutting-edge solutions for tech companies and software development organizations.",
      features: [
        "Cloud Native Development",
        "DevOps & CI/CD Pipeline",
        "Microservices Architecture",
        "API Development & Management",
        "Performance Optimization"
      ],
      technologies: ["Kubernetes", "Docker", "AWS/Azure", "Monitoring Tools"],
      gradient: "from-teal-600 to-green-600"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Education & EdTech",
      description: "Transforming education through innovative learning platforms and technologies.",
      features: [
        "Learning Management Systems",
        "Virtual Classroom Solutions",
        "Student Information Systems",
        "Educational Content Delivery",
        "Assessment & Analytics"
      ],
      technologies: ["Learning Analytics", "Mobile Learning", "Cloud Platforms", "AI Tutoring"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Energy & Utilities",
      description: "Smart grid solutions and energy management systems for the future.",
      features: [
        "Smart Grid Management",
        "Energy Analytics & Optimization",
        "Renewable Energy Integration",
        "Utility Customer Portals",
        "Asset Management Systems"
      ],
      technologies: ["IoT", "Data Analytics", "Mobile Apps", "Cloud Computing"],
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Verticals
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We serve diverse industries with specialized expertise, delivering tailored solutions 
              that address unique challenges and drive digital transformation across sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {verticals.map((vertical, index) => (
              <div key={index} className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${vertical.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {vertical.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{vertical.title}</h3>
                    <p className="text-muted-foreground">{vertical.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Solutions:</h4>
                  <ul className="space-y-2">
                    {vertical.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vertical.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with us to leverage cutting-edge technology solutions tailored to your industry's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium">
                Download Case Studies
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
