
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                🌱 Sustainable Solutions for MENA
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-primary">
                Empowering the Middle East with
                <span className="gradient-primary bg-clip-text text-transparent">
                  {" "}Sustainable{" "}
                </span>
                Solutions
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
                XERIC delivers cutting-edge solutions across the MENA region with environmental 
                responsibility and operational excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/verticals"
                className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Discover Our Solutions
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
                <Play className="mr-2" size={20} />
                Watch Video
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold gradient-primary bg-clip-text text-transparent">
                  7+
                </div>
                <div className="text-sm text-foreground/70">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold gradient-accent bg-clip-text text-transparent">
                  2018
                </div>
                <div className="text-sm text-foreground/70">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold gradient-orange bg-clip-text text-transparent">
                  MENA
                </div>
                <div className="text-sm text-foreground/70">Region Focus</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 gradient-accent rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white border border-border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="h-4 gradient-primary rounded w-40"></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                
                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="w-8 h-8 bg-secondary rounded-lg"></div>
                    <div className="h-2 bg-secondary/30 rounded w-3/4"></div>
                    <div className="h-2 bg-secondary/20 rounded w-1/2"></div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="w-8 h-8 bg-accent rounded-lg"></div>
                    <div className="h-2 bg-accent/30 rounded w-2/3"></div>
                    <div className="h-2 bg-accent/20 rounded w-3/4"></div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="gradient-primary bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-3 bg-white rounded w-32"></div>
                    <span className="text-xs text-primary font-semibold">+15% Growth</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded">
                    <div className="h-2 bg-white rounded w-4/5"></div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                    <div className="w-6 h-6 bg-secondary rounded"></div>
                    <div className="w-6 h-6 bg-orange rounded"></div>
                  </div>
                  <span className="text-xs text-foreground/60">ISO Certified</span>
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
