
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🚀 Driving Digital Innovation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Business{" "}
                </span>
                with Technology
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We deliver cutting-edge solutions across multiple industries, helping businesses 
                accelerate growth through digital transformation, AI integration, and innovative 
                technology services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  99%
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded w-32"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-muted rounded w-2/3"></div>
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded w-24"></div>
                    <span className="text-xs text-muted-foreground">+23%</span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded">
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded w-3/4"></div>
                  </div>
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
