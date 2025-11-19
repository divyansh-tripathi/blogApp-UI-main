import { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { Blog } from '../types';
import { BlogCard } from './BlogCard';
import { BlogModal } from './BlogModal';

interface BlogsSectionProps {
  blogs: Blog[];
}

export const BlogsSection = ({ blogs }: BlogsSectionProps) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blogs" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-4">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Discover Amazing Content</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our collection of insightful articles written by passionate creators
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>Showing {filteredBlogs.length} of {blogs.length} articles</span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={40} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => setSelectedBlog(blog)}
              />
            ))}
          </div>
        )}
      </div>

      <BlogModal
        blog={selectedBlog}
        isOpen={!!selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </section>
  );
};
