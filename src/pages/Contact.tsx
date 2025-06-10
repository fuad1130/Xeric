
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting XERIC. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Office Address",
      details: ["OFF4-87, Building SMARK 2", "Ras Al Khor Industrial Second", "Dubai, UAE"],
      color: "blue"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Number",
      details: ["+971-4-123-4567", "Business Hours: 9:00 AM - 6:00 PM GST", "Emergency Support Available"],
      color: "green"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Address",
      details: ["info@xerictrading.com", "sales@xerictrading.com", "support@xerictrading.com"],
      color: "orange"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM GST", "Friday: 9:00 AM - 1:00 PM GST", "Saturday: Closed"],
      color: "purple"
    }
  ];

  const services = [
    "Water Treatment & Desalination",
    "Environmental Protection & Pollution Control",
    "Industrial Pumps, Engines, Valves & Spare Parts",
    "Power Generation, Transmission & Distribution",
    "Solar Energy Solutions",
    "Alternative Transportation Technologies",
    "Local Warehousing & Logistics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/15 text-accent text-base font-semibold border border-accent/20 mb-8">
              📞 Let's Connect
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-8 text-primary">
              Get in{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed">
              Ready to transform your business with sustainable technology solutions? Let's discuss 
              your project and explore how XERIC can help you achieve your sustainability and 
              operational excellence goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">
                <h2 className="text-4xl font-heading font-bold mb-8 text-primary">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-semibold mb-3 text-primary">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white text-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-semibold mb-3 text-primary">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white text-lg"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-lg font-semibold mb-3 text-primary">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white text-lg"
                        placeholder="+971-4-123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-lg font-semibold mb-3 text-primary">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white text-lg"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-lg font-semibold mb-3 text-primary">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white text-lg"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-lg font-semibold mb-3 text-primary">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white text-lg"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold mb-3 text-primary">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white resize-none text-lg"
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full gradient-primary text-white py-5 px-8 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 shadow-xl"
                  >
                    <Send className="w-6 h-6" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold mb-4 text-primary text-xl">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 mb-2 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary">Visit Our Office</h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Dubai's industrial sector, we're easily accessible 
              and ready to meet with you to discuss your sustainable technology needs.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-muted rounded-2xl overflow-hidden mb-10">
                <iframe
                  src="https://maps.google.com/maps?q=Ras+Al+Khor+Industrial+Second,+Dubai,+UAE&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XERIC Office Location Map"
                  className="rounded-2xl"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 text-xl">Dubai Office</h3>
                  <p className="text-slate-600">Main Headquarters</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 text-xl">Working Hours</h3>
                  <p className="text-slate-600">Sun-Thu: 9AM-6PM GST</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 text-xl">Contact</h3>
                  <p className="text-slate-600">+971-4-123-4567</p>
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

export default Contact;
