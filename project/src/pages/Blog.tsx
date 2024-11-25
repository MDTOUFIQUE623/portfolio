import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'A comprehensive guide to creating scalable and type-safe web applications using React and TypeScript.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'Web Development']
  },
  {
    id: '2',
    title: 'Getting Started with Next.js and Server Components',
    excerpt: 'Learn how to leverage Next.js 13+ features and Server Components for better performance.',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'React', 'Performance']
  },
  {
    id: '3',
    title: 'Mastering TailwindCSS for Modern UI Design',
    excerpt: 'Tips and tricks for creating beautiful user interfaces using TailwindCSS utility classes.',
    date: 'March 5, 2024',
    readTime: '5 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1000&q=80',
    tags: ['CSS', 'TailwindCSS', 'UI Design']
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  const navigate = useNavigate();
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-[#0a0118]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/20"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-purple-500/5 text-purple-400 border border-purple-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          onClick={() => navigate(`/blog/${post.id}`)}
        >
          Read More
          <FiArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.article>
  );
};

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative h-[400px] rounded-xl overflow-hidden mb-12"
  >
    <img 
      src={post.image}
      alt={post.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/70 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4 inline-block">
        {post.category}
      </span>
      <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
      <p className="text-gray-300 mb-6 max-w-2xl">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-gray-400">
        <div className="flex items-center gap-2">
          <FiCalendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </motion.article>
);

export default function Blog() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Latest
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {' '}Blog Posts
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sharing my thoughts, experiences, and insights about web development, programming, and technology.
        </p>
      </motion.div>

      {/* Featured Post */}
      <FeaturedPost post={featuredPost} />

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}