import { BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white">BlogApp</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your destination for quality content and inspiring stories.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
               <Link
                className="block text-slate-400 hover:text-white transition-colors text-sm"
                to="/"
              >
                Home
              </Link>

              <Link
                className="block text-slate-400 hover:text-white transition-colors text-sm"
                to="/blogs"
              >
                Blogs
              </Link>

              <Link
                className="block text-slate-400 hover:text-white transition-colors text-sm"
                to="/"
              >
                Categories
              </Link>

              <Link
                className="block text-slate-400 hover:text-white transition-colors text-sm"
                to="/about"
              >
                About
              </Link>
              
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Technology</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Programming</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Business</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 BlogApp. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-current" /> by the BlogApp Team
          </p>
        </div>
      </div>
    </footer>
  );
};
