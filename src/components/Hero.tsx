
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          
          {/* Simple Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-border rounded-full shadow-sm">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-foreground font-medium">Sustainable Solutions for MENA</span>
          </div>

          {/* Clean Typography */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-heading font-light leading-tight tracking-tight">
              <span className="text-foreground">Empowering the</span>
              <br />
              <span className="text-foreground">Middle East with</span>
              <br />
              <span className="text-primary font-normal">
                Sustainable Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-light">
              Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
              XERIC delivers cutting-edge solutions across the MENA region with environmental 
              responsibility and operational excellence.
            </p>
          </div>

          {/* Clean Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/verticals"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-sm"
            >
              Discover Our Solutions
              <ArrowRight className="ml-3" size={20} />
            </Link>
            
            <button className="inline-flex items-center justify-center px-10 py-4 bg-white border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all duration-300 font-medium text-lg">
              <Play className="mr-3 text-primary" size={20} />
              Watch Video
            </button>
          </div>

          {/* Minimal Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-light text-primary">7+</div>
              <div className="text-sm text-foreground/60 font-medium">Service Areas</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-light text-primary">2018</div>
              <div className="text-sm text-foreground/60 font-medium">Established</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-light text-primary">ISO</div>
              <div className="text-sm text-foreground/60 font-medium">Certified</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-light text-primary">MENA</div>
              <div className="text-sm text-foreground/60 font-medium">Region Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
