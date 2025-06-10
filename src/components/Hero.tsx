
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Globe } from './magicui/globe';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full hover-glow transition-all duration-300">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sustainable Solutions for MENA</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Empowering the</span>
                <br />
                <span className="text-foreground">Middle East with</span>
                <br />
                <span className="text-gradient animate-fade-in">
                  Sustainable Solutions
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
                Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
                XERIC delivers cutting-edge solutions across the MENA region with environmental 
                responsibility and operational excellence.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link 
                to="/verticals"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 hover-lift transition-all duration-300 font-medium shadow-lg group"
              >
                Discover Our Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-3 bg-white border border-border text-foreground rounded-lg hover:bg-muted/50 hover-lift transition-all duration-300 font-medium group">
                <Play className="mr-2 w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center hover-lift transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm text-foreground/60 font-medium">Service Areas</div>
              </div>
              
              <div className="text-center hover-lift transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">2018</div>
                <div className="text-sm text-foreground/60 font-medium">Established</div>
              </div>
              
              <div className="text-center hover-lift transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-foreground/60 font-medium">Certified</div>
              </div>
              
              <div className="text-center hover-lift transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">MENA</div>
                <div className="text-sm text-foreground/60 font-medium">Region Focus</div>
              </div>
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[500px] lg:h-[600px]">
              {/* Globe Container */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 backdrop-blur-sm">
                <Globe className="w-full h-full" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 shadow-lg animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Live Data</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm border border-secondary/20 rounded-lg px-4 py-2 shadow-lg hover-lift">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm font-medium text-primary">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
