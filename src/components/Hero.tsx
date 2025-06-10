
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg">
            <span className="text-2xl">🌱</span>
            <span className="text-green-700 font-semibold text-lg">Sustainable Solutions for MENA</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-slate-900">Empowering the</span>
              <br />
              <span className="text-slate-900">Middle East with</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Sustainable Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Innovative technologies in energy, water, and infrastructure for a greener tomorrow. 
              XERIC delivers cutting-edge solutions across the MENA region with environmental 
              responsibility and operational excellence.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/verticals"
              className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl min-w-[280px]"
            >
              Discover Our Solutions
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
            
            <button className="group inline-flex items-center justify-center px-10 py-5 bg-white/90 backdrop-blur-sm text-slate-700 rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 font-semibold text-lg min-w-[280px]">
              <Play className="mr-3 text-blue-600 group-hover:scale-110 transition-transform" size={24} />
              Watch Video
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                7+
              </div>
              <div className="text-slate-600 font-semibold text-lg">Service Areas</div>
              <div className="text-slate-500 text-sm mt-1">Comprehensive solutions</div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3">
                2018
              </div>
              <div className="text-slate-600 font-semibold text-lg">Established</div>
              <div className="text-slate-500 text-sm mt-1">Years of expertise</div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                MENA
              </div>
              <div className="text-slate-600 font-semibold text-lg">Region Focus</div>
              <div className="text-slate-500 text-sm mt-1">Specialized knowledge</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
