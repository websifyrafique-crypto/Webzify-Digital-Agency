import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Smartphone, Palette, Zap, Search, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { CtaSection } from '../../components/CtaSection';

export function WebDesign() {
  const features = [
    {
      icon: Layout,
      title: 'Custom UI/UX Design',
      description: 'We craft unique, user-centric interfaces tailored to your brand identity, ensuring an intuitive and engaging user experience.',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile-First',
      description: 'Your website will look flawless and function perfectly across all devices, from desktop monitors to smartphones and tablets.',
    },
    {
      icon: Palette,
      title: 'Modern Aesthetics',
      description: 'Utilizing the latest design trends, typography, and color theory to make your brand stand out visually in a crowded market.',
    },
    {
      icon: Zap,
      title: 'Fast Loading Speeds',
      description: 'Optimized graphics and lightweight coding structure ensure that your design not only looks great but performs exceptionally fast.',
    },
    {
      icon: Search,
      title: 'SEO-Friendly Structure',
      description: 'Our designs are built with search engine visibility in mind, incorporating proper semantic HTML and content hierarchy.',
    },
    {
      icon: ShieldCheck,
      title: 'Conversion Focused',
      description: 'Strategic placement of call-to-actions, trust signals, and clear navigation paths to maximize lead generation and sales.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Professional Website Designing Services | Custom Web Design"
        description="Get professional, responsive, and custom website designing services. We create stunning, user-friendly designs that elevate your brand and drive conversions."
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Professional <span className="text-blue-600">Website Designing</span> Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              We don't just design websites; we craft digital experiences. Transform your online presence with stunning, responsive, and conversion-focused web designs tailored to your business goals.
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
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs a Premium Web Design</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                In today's digital landscape, your website is often the first interaction a potential customer has with your brand. A poor design can turn them away instantly, while a professional, intuitive design builds trust and guides them toward a purchase or inquiry.
              </p>
              <ul className="space-y-4">
                {[
                  'Establish immediate brand credibility and trust.',
                  'Reduce bounce rates with intuitive navigation.',
                  'Engage users with compelling visual storytelling.',
                  'Adapt seamlessly to mobile and tablet screens.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" 
                alt="Web Design Process" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Design Expertise</h2>
            <p className="text-gray-600 text-lg">
              We combine aesthetics with functionality to deliver websites that not only look beautiful but perform flawlessly.
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
