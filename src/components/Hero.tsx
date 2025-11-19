import { BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
        <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-300"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
          <span className="text-blue-300 text-sm font-semibold flex items-center gap-2">
            <Sparkles size={16} />
            Welcome to the Future of Blogging
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="inline-block transform hover:scale-110 transition-transform duration-300">
            Stories
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {" "}
            That{" "}
          </span>
          <span className="inline-block transform hover:scale-110 transition-transform duration-300">
            Inspire
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dive into a world of knowledge, creativity, and innovation. Discover
          stories that matter, from writers who care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Link to="/blogs">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2">
              <BookOpen size={20} />
              Start Reading
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </Link>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all transform hover:scale-105">
            Explore Categories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: BookOpen,
              label: "1000+ Articles",
              desc: "Diverse content",
            },
            {
              icon: TrendingUp,
              label: "Trending Topics",
              desc: "Stay updated",
            },
            {
              icon: Sparkles,
              label: "Quality Writers",
              desc: "Expert insights",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.label}
              </h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};
