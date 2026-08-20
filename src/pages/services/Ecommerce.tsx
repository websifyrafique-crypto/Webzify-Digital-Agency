import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, CreditCard, Box, TrendingUp, ShieldCheck, Search } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { CtaSection } from '../../components/CtaSection';

export function Ecommerce() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Custom Storefronts',
      description: 'Tailored e-commerce designs that reflect your brand and provide a seamless shopping experience for your customers.',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment Gateways',
      description: 'Integration of highly secure, multi-currency payment gateways ensuring safe and smooth transactions.',
    },
    {
      icon: Box,
      title: 'Inventory Management',
      description: 'Robust backend systems to easily track stock levels, manage variations, and automate order fulfillment processes.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Streamlined checkout flows, abandoned cart recovery, and strategic layouts designed to maximize your sales.',
    },
    {
      icon: ShieldCheck,
      title: 'Top-Tier Security',
      description: 'SSL certification, fraud protection, and secure data handling to protect both your business and your customers.',
    },
    {
      icon: Search,
      title: 'E-commerce SEO',
      description: 'Advanced product schema, optimized category pages, and fast loading speeds to rank your products higher on search engines.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="E-Commerce Website Development Services | Build Online Stores"
        description="Launch a powerful, secure, and highly scalable E-commerce website. We build custom online stores designed to maximize your sales and growth."
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              High-Converting <span className="text-primary-400">E-Commerce</span> Websites
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Take your retail business online with a robust, scalable, and secure e-commerce platform built to drive sales and deliver exceptional shopping experiences 24/7.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Ecommerce Dashboard" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sell Everywhere, Seamlessly</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Whether you are launching your first online store or upgrading an enterprise-level catalog, we provide end-to-end e-commerce solutions. We focus on creating frictionless buying journeys that turn casual visitors into loyal customers.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our platforms are built to scale with your business, integrating seamlessly with your preferred payment providers, shipping partners, and CRM systems.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">WooCommerce</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">Shopify</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">Custom Solutions</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">B2B Portals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core E-Commerce Features</h2>
            <p className="text-gray-600 text-lg">
              Everything you need to manage, scale, and secure your online retail business efficiently.
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
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-purple-600">
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
