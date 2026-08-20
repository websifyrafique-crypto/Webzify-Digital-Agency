import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CtaSection } from '../components/CtaSection';
import { blogPosts } from '../data/blog';

export function Blog() {
  return (
    <>
      <SEO 
        title="Webzify Insights | Digital Marketing Blog"
        description="Practical insights about websites, e-commerce, SEO and digital growth from the Webzify team."
      />
      
      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Webzify <span className="text-primary-500">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Practical insights about websites, e-commerce, SEO and digital growth.
          </motion.p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow"
              >
                <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 shadow-sm">
                    {post.category}
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="block mb-4 group-hover:text-purple-600 transition-colors">
                    <h2 className="text-xl font-bold text-navy-900 line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 group-hover:text-primary-700 transition-colors mt-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
