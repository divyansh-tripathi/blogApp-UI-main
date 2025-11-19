import { Cpu, PenTool, Users, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden">
      
      {/* Floating Light Effects */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full -bottom-40 right-10 animate-pulse delay-500"></div>
      <div className="absolute w-72 h-72 bg-purple-600/10 blur-3xl rounded-full top-1/2 -translate-y-1/2 left-1/2 animate-pulse delay-700"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-lg leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            About Our Platform
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-20">
          A futuristic place where ideas become stories, writers find their voice,
          and readers explore the brilliance of creativity.  
          Built for dreamers, thinkers, and creators — by people who believe in the power of words.
        </p>

        {/* 3D Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: Cpu,
              title: "Modern Tech",
              desc: "A lightning-fast, AI-powered blogging experience.",
            },
            {
              icon: PenTool,
              title: "Creative Freedom",
              desc: "Write without limits — style, format & express freely.",
            },
            {
              icon: Users,
              title: "Community Focused",
              desc: "Connect with passionate writers & curious readers.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "Your stories reach thousands across the world.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="
                group 
                bg-white/5 border border-white/10
                backdrop-blur-xl 
                p-8 rounded-3xl 
                shadow-xl 
                hover:shadow-cyan-500/40 
                transition-all 
                transform 
                hover:-translate-y-3 
                hover:scale-[1.03]
                hover:border-white/20
                cursor-pointer
                relative
              "
            >
              {/* Glow Behind Card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-xl opacity-0 group-hover:opacity-60 transition-all"></div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md group-hover:rotate-6 transition-transform duration-300">
                <card.icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-3">
                {card.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
