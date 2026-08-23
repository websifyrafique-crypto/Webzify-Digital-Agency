import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

import { CtaSection } from '../components/CtaSection';
import { blogPosts } from '../data/blog';

export function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Webzify Blog`}
        description={post.excerpt}
        type="article"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": [post.image],
          "datePublished": post.date,
          "dateModified": post.date,
          "author": [{
              "@type": "Person",
              "name": post.author
          }],
          "publisher": {
            "@type": "Organization",
            "name": "Webzify",
            "logo": {
              "@type": "ImageObject",
              "url": "https://webzify-digital-agency.vercel.app/logo.png"
            }
          }
        })}
      </script>
      
      <article className="pt-8 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
                        <div className="-mt-4 mb-4">
              <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: post.title }]} className="!text-gray-500 [&_a]:!text-gray-500 hover:[&_a]:!text-blue-600 [&_span.text-white]:!text-gray-900" />
            </div>
<Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            
            <div className="mb-8 flex items-center gap-2">
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mb-8 leading-[1.2]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 mb-12 py-6 border-y border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-blue-950">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
              
              <div className="flex items-center gap-4 ml-auto">
                <span className="text-gray-400">Share:</span>
                <button className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-4 h-4" /></button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter className="w-4 h-4" /></button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="prose prose-lg prose-blue max-w-none 
                prose-headings:font-bold prose-headings:text-blue-950 
                prose-p:text-gray-600 prose-p:leading-relaxed 
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
