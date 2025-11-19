import { X, Calendar, Clock, User, Tag } from 'lucide-react';
import { Blog } from '../types';

interface BlogModalProps {
  blog: Blog | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal = ({ blog, isOpen, onClose }: BlogModalProps) => {
  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl my-8 border border-slate-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
              {blog.category}
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">{blog.title}</h2>

            <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              {blog.excerpt}
            </p>

            <div className="text-slate-400 leading-relaxed space-y-4">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
