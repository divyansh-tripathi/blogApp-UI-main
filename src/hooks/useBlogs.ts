import { useState, useEffect } from 'react';
import { Blog } from '../types';

const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the cutting-edge technologies shaping the future of web development, from AI-powered tools to revolutionary frameworks.',
    content: 'The landscape of web development is evolving at an unprecedented pace. With the rise of AI-powered development tools, we are seeing a paradigm shift in how developers approach building applications.\n\nFrameworks like React, Vue, and Svelte continue to innovate, introducing features that make development more intuitive and efficient. Server components, progressive enhancement, and edge computing are becoming the new standards.\n\nMachine learning integration is no longer a nice-to-have but a necessity. From personalized user experiences to intelligent search and recommendation systems, AI is transforming how we build and interact with web applications.',
    author: 'Sarah Johnson',
    authorId: '1',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    tags: ['Web Dev', 'AI', 'Future Tech'],
    createdAt: new Date('2024-11-10').toISOString(),
    readTime: 8
  },
  {
    id: '2',
    title: 'Mastering React Hooks: A Complete Guide',
    excerpt: 'Deep dive into React Hooks and learn how to leverage their power to build more efficient and maintainable applications.',
    content: 'React Hooks revolutionized the way we write React components. By allowing functional components to have state and side effects, Hooks eliminated the need for class components in most scenarios.\n\nThe useState and useEffect hooks are just the beginning. Custom hooks enable code reuse in ways that were previously impossible. The useContext hook simplifies state management, while useMemo and useCallback optimize performance.\n\nUnderstanding the dependency array is crucial for preventing infinite loops and ensuring your effects run at the right time. Proper hook usage can dramatically improve your application\'s performance and maintainability.',
    author: 'Michael Chen',
    authorId: '2',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Programming',
    tags: ['React', 'JavaScript', 'Tutorial'],
    createdAt: new Date('2024-11-08').toISOString(),
    readTime: 12
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Learn best practices for designing and implementing RESTful APIs that can handle millions of requests.',
    content: 'Building scalable APIs requires careful consideration of architecture, performance, and security. Node.js provides an excellent foundation for building high-performance APIs thanks to its non-blocking I/O model.\n\nImplementing proper error handling, rate limiting, and authentication are essential for production-ready APIs. Database optimization, caching strategies, and load balancing ensure your API can handle traffic spikes.\n\nDocumentation is often overlooked but critical for API adoption. Tools like Swagger and Postman make it easy to create comprehensive API documentation that developers will actually use.',
    author: 'Emily Rodriguez',
    authorId: '3',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Backend',
    tags: ['Node.js', 'API', 'Scalability'],
    createdAt: new Date('2024-11-05').toISOString(),
    readTime: 10
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox will help you choose the right tool for your layouts.',
    content: 'CSS Grid and Flexbox are both powerful layout tools, but they excel in different scenarios. Grid is designed for two-dimensional layouts, while Flexbox shines in one-dimensional layouts.\n\nUse Grid when you need to define both rows and columns simultaneously. It\'s perfect for page-level layouts and complex UI components. Flexbox is ideal for navigation bars, card layouts, and centering content.\n\nThe beauty of modern CSS is that you don\'t have to choose one over the other. Combining Grid and Flexbox allows you to leverage the strengths of both systems for truly responsive designs.',
    author: 'David Kim',
    authorId: '4',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design',
    tags: ['CSS', 'Layout', 'Web Design'],
    createdAt: new Date('2024-11-03').toISOString(),
    readTime: 6
  },
  {
    id: '5',
    title: 'TypeScript Best Practices for Large Projects',
    excerpt: 'Maintain code quality and developer productivity in large TypeScript projects with these proven strategies.',
    content: 'TypeScript brings type safety to JavaScript, but large projects require additional discipline to maintain quality. Proper typing strategies and architectural patterns are essential.\n\nStrict mode should be enabled from the start. It catches many common errors and enforces better practices. Utility types like Partial, Pick, and Omit can reduce boilerplate and improve code reusability.\n\nOrganizing types into dedicated files and using barrel exports keeps your codebase clean. Path aliases and proper module resolution configuration make imports cleaner and refactoring easier.',
    author: 'Sophie Anderson',
    authorId: '5',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Programming',
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    createdAt: new Date('2024-11-01').toISOString(),
    readTime: 9
  },
  {
    id: '6',
    title: 'The Art of Database Design',
    excerpt: 'Master the principles of database design to create efficient, scalable, and maintainable data structures.',
    content: 'Good database design is the foundation of any successful application. Normalization reduces redundancy and improves data integrity, but over-normalization can hurt performance.\n\nIndexing strategies dramatically impact query performance. Understanding when to use composite indexes, covering indexes, and full-text search indexes is crucial for optimization.\n\nChoosing between SQL and NoSQL depends on your specific use case. Relational databases excel at complex queries and transactions, while NoSQL databases offer flexibility and horizontal scalability.',
    author: 'Alex Thompson',
    authorId: '6',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Database',
    tags: ['Database', 'SQL', 'Architecture'],
    createdAt: new Date('2024-10-28').toISOString(),
    readTime: 11
  }
];

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = () => {
      const storedBlogs = localStorage.getItem('blogapp_blogs');

      if (storedBlogs) {
        setBlogs(JSON.parse(storedBlogs));
      } else {
        localStorage.setItem('blogapp_blogs', JSON.stringify(MOCK_BLOGS));
        setBlogs(MOCK_BLOGS);
      }

      setIsLoading(false);
    };

    setTimeout(loadBlogs, 500);
  }, []);

  const addBlog = (blog: Omit<Blog, 'id' | 'createdAt'>) => {
    const newBlog: Blog = {
      ...blog,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };

    const updatedBlogs = [newBlog, ...blogs];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogapp_blogs', JSON.stringify(updatedBlogs));
  };

  const updateBlog = (id: string, updates: Partial<Blog>) => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === id ? { ...blog, ...updates } : blog
    );
    setBlogs(updatedBlogs);
    localStorage.setItem('blogapp_blogs', JSON.stringify(updatedBlogs));
  };

  const deleteBlog = (id: string) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogapp_blogs', JSON.stringify(updatedBlogs));
  };

  return {
    blogs,
    isLoading,
    addBlog,
    updateBlog,
    deleteBlog
  };
};
