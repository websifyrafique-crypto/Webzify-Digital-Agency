import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Globe, Cpu, Lock, Repeat } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { CtaSection } from '../../components/CtaSection';

export function WebDev() {
  const features = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building highly interactive, fast, and responsive user interfaces using modern frameworks like React, Vue, and Angular.',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Developing robust, scalable server-side applications and databases with Node.js, Python, PHP, or Java.',
    },
    {
      icon: Globe,
      title: 'API Development & Integration',
      description: 'Creating seamless RESTful and GraphQL APIs to connect your web app with third-party services and mobile applications.',
    },
    {
      icon: Cpu,
      title: 'Custom Web Applications',
      description: 'Engineering complex, bespoke web applications tailored to solve your specific business challenges and automate workflows.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Implementing industry-standard security protocols, data encryption, and vulnerability protection to safeguard your data.',
    },
    {
      icon: Repeat,
      title: 'Continuous Maintenance',
      description: 'Providing ongoing support, performance monitoring, updates, and feature enhancements post-launch.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Custom Website Development Services | Web Solutions"
        description="Expert website development services. We build secure, fast, and highly scalable custom web applications and business solutions."
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Advanced <span className="text-blue-600">Website Development</span> Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Move beyond basic templates. We engineer powerful, secure, and scalable custom web architectures that drive operational efficiency and business growth.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineering Excellence for the Modern Web</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Whether you need a complex enterprise web application, a custom CRM, or a high-traffic corporate portal, our development team has the technical expertise to deliver. We focus on clean code, optimal performance, and scalable infrastructure.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our agile development process ensures transparency, rapid iteration, and a final product that perfectly aligns with your technical requirements and business objectives.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Scalable</h4>
                  <p className="text-sm text-gray-500">Built to handle traffic spikes and business growth.</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Performant</h4>
                  <p className="text-sm text-gray-500">Optimized for lightning-fast loading speeds.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Web Development Code" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technical Capabilities</h2>
            <p className="text-gray-600 text-lg">
              Full-stack expertise to handle every layer of your web application.
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
