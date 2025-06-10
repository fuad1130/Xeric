
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
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
              <span className="text-primary">
                Sustainable Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
              XERIC delivers cutting-edge solutions across the MENA region with environmental 
              responsibility and operational excellence.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              to="/verticals"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all duration-200 font-medium">
              <Play className="mr-2 w-4 h-4 text-primary" />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-foreground/60 font-medium">Service Areas</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2018</div>
              <div className="text-sm text-foreground/60 font-medium">Established</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">ISO</div>
              <div className="text-sm text-foreground/60 font-medium">Certified</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">MENA</div>
              <div className="text-sm text-foreground/60 font-medium">Region Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
