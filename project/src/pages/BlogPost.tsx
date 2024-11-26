import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { marked } from 'marked';
import TableOfContents from '../components/blog/TableOfContents';
import ReadingProgress from '../components/blog/ReadingProgress';
import ShareButtons from '../components/blog/ShareButtons';

// This would typically come from your backend/CMS
const blogContent = {
  '1': {
    title: 'Building Modern Web Applications with React and TypeScript',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'Web Development'],
    content: `
# Building Modern Web Applications with React and TypeScript

React and TypeScript have become the go-to combination for building modern web applications. In this comprehensive guide, we'll explore how to create scalable and type-safe applications using these powerful technologies.

## Why TypeScript with React?

TypeScript adds static typing to JavaScript, which helps catch errors early in development. When combined with React, it provides:

- Better developer experience with autocompletion
- Enhanced code reliability through type checking
- Improved maintainability with clear interfaces
- Rich IDE support for faster development

## Getting Started

First, let's set up a new React project with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
# or with Vite
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Key Concepts

### 1. Type-Safe Props

Define clear interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {label}
    </button>
  );
};
\`\`\`

### 2. Custom Hooks with TypeScript

Create type-safe custom hooks:

\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
\`\`\`

## Best Practices

1. Always define proper interfaces for your props
2. Use type inference when possible
3. Avoid using 'any' type
4. Implement proper error boundaries
5. Use discriminated unions for complex state

## Advanced Patterns

### Generic Components

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Conclusion

TypeScript and React together provide a robust foundation for building modern web applications. By following these patterns and best practices, you can create maintainable and scalable applications that are less prone to runtime errors.
    `
  },
  '2': {
    title: 'Getting Started with Next.js and Server Components',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'React', 'Performance'],
    content: `
# Getting Started with Next.js and Server Components

Next.js 13+ introduces revolutionary Server Components that change how we build React applications. Let's explore how to leverage these features for better performance.

## Understanding Server Components

Server Components allow you to render complex components on the server, reducing the JavaScript bundle sent to the client.

### Benefits

- Reduced client-side JavaScript
- Improved initial page load
- Better SEO
- Access to backend resources directly

## Implementation

### 1. Setting Up a Next.js Project

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
\`\`\`

### 2. Creating Server Components

\`\`\`typescript
// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return (
    <main>
      <h1>Server Component Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
\`\`\`

## Best Practices

1. Use Server Components for:
   - Data fetching
   - Database queries
   - File system access
   
2. Use Client Components for:
   - Interactivity
   - Browser APIs
   - State management

## Performance Optimization

Tips for optimizing Server Components:
- Implement proper caching strategies
- Use streaming for large datasets
- Optimize images and assets

## Conclusion

Next.js Server Components represent the future of React applications, offering a perfect balance between performance and developer experience.
    `
  },
  '3': {
    title: 'Mastering TailwindCSS for Modern UI Design',
    date: 'March 5, 2024',
    readTime: '5 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1000&q=80',
    tags: ['CSS', 'TailwindCSS', 'UI Design'],
    content: `
# Mastering TailwindCSS for Modern UI Design

TailwindCSS has revolutionized how we approach UI design in web development. Let's explore how to create beautiful, responsive interfaces using TailwindCSS.

## Why TailwindCSS?

- Utility-first approach
- Highly customizable
- Built-in responsive design
- Excellent developer experience

## Getting Started

### Installation

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### Configuration

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4c1d95',
        secondary: '#8b5cf6',
      },
    },
  },
  plugins: [],
}
\`\`\`

## Design Patterns

### 1. Responsive Design

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 bg-white shadow rounded">
    <!-- Content -->
  </div>
</div>
\`\`\`

### 2. Dark Mode

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Content -->
</div>
\`\`\`

## Advanced Techniques

1. Custom Animations
2. Component Extraction
3. Theme Customization
4. Plugin Development

## Best Practices

- Use consistent spacing
- Implement proper color schemes
- Follow mobile-first approach
- Extract common patterns into components

## Conclusion

TailwindCSS provides a powerful toolkit for modern UI design, enabling developers to create beautiful interfaces efficiently.
    `
  }
};

// Create a custom renderer for marked
const renderer = new marked.Renderer();
renderer.code = (code: string, language: string | undefined) => {
  const validLanguage = language || 'text';
  return `<div class="code-block">
    <pre><code class="language-${validLanguage}">${code}</code></pre>
  </div>`;
};

// Configure marked with proper types
marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
  pedantic: false
});

export default function BlogPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = blogContent[id as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl text-white">Blog post not found</h1>
        <button 
          onClick={() => navigate('/blog')}
          className="mt-4 text-purple-400 hover:text-purple-300"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  // Use marked directly
  const renderedContent = marked.parse(post.content);

  return (
    <>
      <ReadingProgress />
      <div className="py-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <FiArrowLeft />
          <span>Back to Blog</span>
        </motion.button>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9">
            {/* Hero Section */}
            <motion.div
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
                <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
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
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-purple-500/5 text-purple-400 border border-purple-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="mb-8">
              <ShareButtons 
                url={window.location.href} 
                title={post.title} 
              />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert prose-purple max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: renderedContent
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <TableOfContents content={post.content} />
          </div>
        </div>
      </div>
    </>
  );
} 