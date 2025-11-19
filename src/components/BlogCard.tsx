import { Calendar, Clock, User, Tag } from 'lucide-react';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
}

export const BlogCard = ({ blog, onClick }: BlogCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="relative p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <User size={16} />
            <span>{blog.author}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{blog.readTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};
