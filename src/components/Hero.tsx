
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-background via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/15 text-accent text-base font-semibold border border-accent/20">
                🌱 Sustainable Solutions for MENA
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-primary text-shadow">
                Empowering the Middle East with
                <span className="block gradient-primary bg-clip-text text-transparent mt-2">
                  Sustainable Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
                XERIC delivers cutting-edge solutions across the MENA region with environmental 
                responsibility and operational excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/verticals"
                className="inline-flex items-center justify-center px-10 py-5 gradient-primary text-white rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl"
              >
                Discover Our Solutions
                <ArrowRight className="ml-3" size={24} />
              </Link>
              <button className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-lg">
                <Play className="mr-3" size={24} />
                Watch Video
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-heading font-bold gradient-primary bg-clip-text text-transparent">
                  7+
                </div>
                <div className="text-base text-slate-600 font-medium mt-2">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-heading font-bold gradient-accent bg-clip-text text-transparent">
                  2018
                </div>
                <div className="text-base text-slate-600 font-medium mt-2">Established</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-heading font-bold gradient-orange bg-clip-text text-transparent">
                  MENA
                </div>
                <div className="text-base text-slate-600 font-medium mt-2">Region Focus</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 gradient-accent rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative glass rounded-3xl p-8 shadow-2xl">
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="h-6 gradient-primary rounded-lg w-48"></div>
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                </div>
                
                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 space-y-4 border border-blue-100">
                    <div className="w-12 h-12 bg-secondary rounded-xl shadow-md"></div>
                    <div className="h-3 bg-secondary/40 rounded-lg w-3/4"></div>
                    <div className="h-3 bg-secondary/25 rounded-lg w-1/2"></div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 space-y-4 border border-green-100">
                    <div className="w-12 h-12 bg-accent rounded-xl shadow-md"></div>
                    <div className="h-3 bg-accent/40 rounded-lg w-2/3"></div>
                    <div className="h-3 bg-accent/25 rounded-lg w-3/4"></div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="gradient-primary rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 bg-white rounded-lg w-40"></div>
                      <span className="text-sm text-white font-bold bg-white/20 px-3 py-1 rounded-full">+15% Growth</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-lg overflow-hidden">
                      <div className="h-3 bg-white rounded-lg w-4/5 transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-lg shadow-sm"></div>
                    <div className="w-8 h-8 bg-secondary rounded-lg shadow-sm"></div>
                    <div className="w-8 h-8 bg-orange rounded-lg shadow-sm"></div>
                  </div>
                  <span className="text-sm text-slate-600 font-semibold">ISO Certified</span>
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
