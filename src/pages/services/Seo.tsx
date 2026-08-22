import React from 'react';
import { motion } from 'motion/react';
import { Search, BarChart, LineChart, FileText, MapPin, Link2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { CtaSection } from '../../components/CtaSection';

export function Seo() {
  const features = [
    {
      icon: Search,
      title: 'Comprehensive SEO Audits',
      description: 'Deep technical analysis of your website to identify bottlenecks, crawl errors, and opportunities for immediate growth.',
    },
    {
      icon: FileText,
      title: 'On-Page Optimization',
      description: 'Optimizing meta tags, headings, content structure, and internal linking to make your site highly relevant to search intent.',
    },
    {
      icon: BarChart,
      title: 'Keyword Research & Strategy',
      description: 'Identifying high-volume, low-competition keywords that your target audience is actively searching for.',
    },
    {
      icon: LineChart,
      title: 'Technical SEO',
      description: 'Improving site speed, mobile-friendliness, core web vitals, and schema markup to meet Google’s strict technical guidelines.',
    },
    {
      icon: Link2,
      title: 'Authority Link Building',
      description: 'Acquiring high-quality, relevant backlinks from authoritative domains to boost your website’s domain rating and trust.',
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Optimizing your Google Business Profile and local citations to dominate local search results and drive foot traffic.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Expert SEO Services | Search Engine Optimization"
        description="Dominate search rankings with our expert SEO services. We offer technical SEO, on-page optimization, local SEO, and link building to drive organic traffic."
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Data-Driven <span className="text-white">SEO Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white mb-8"
            >
              Stop hiding on the second page. Dominate search engine rankings, attract high-intent organic traffic, and multiply your revenue with our proven SEO strategies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="SEO Analytics Dashboard" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">SEO is a Strategy, Not a One-Time Fix</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                In a highly competitive digital landscape, having a beautiful website isn't enough. If your potential customers can't find you on Google, you are losing business to your competitors every single day.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We utilize white-hat, sustainable SEO practices focused on long-term growth. We don't just chase vanity metrics; we target keywords that actually convert and bring measurable ROI to your business.
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Audit & Strategy</h4>
                    <p className="text-sm text-gray-600">We analyze your current standing and map a path to the top.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Optimization Execution</h4>
                    <p className="text-sm text-gray-600">Deploying technical fixes, content upgrades, and metadata tweaks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ongoing Growth</h4>
                    <p className="text-sm text-gray-600">Continuous monitoring, link building, and performance reporting.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Service Arsenal</h2>
            <p className="text-gray-600 text-lg">
              A holistic approach to search engine dominance, covering every angle of optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
