import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const matches = content.match(/#{1,6}.+/g) || [];
    const items = matches.map((heading) => {
      const level = heading.match(/^#+/)?.[0].length || 1;
      const title = heading.replace(/^#+\s*/, '');
      const id = title.toLowerCase().replace(/\s+/g, '-');
      return { id, title, level };
    });
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    document.querySelectorAll('h1, h2, h3').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 bg-[#0a0118]/50 backdrop-blur-sm rounded-xl border border-purple-900/20"
    >
      <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <motion.li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 16}px` }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-sm ${
                activeId === heading.id
                  ? 'text-purple-400'
                  : 'text-gray-400 hover:text-white'
              } transition-colors text-left`}
            >
              {heading.title}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
} 