import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CtaSection } from '../components/CtaSection';
import { services } from '../data/services';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO 
        title={`${service.title} | Webzify`}
        description={service.description}
      />
      
      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <img src={service.image} alt="Background" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-2xl bg-primary-600/20 backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-primary-500/30"
          >
            <service.icon className="w-10 h-10 text-primary-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Webzify, our {service.title.toLowerCase()} process is designed to deliver measurable results. We combine deep technical expertise with a strategic understanding of your business goals to create a solution that not only looks great but performs exceptionally well.
                </p>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full rounded-2xl shadow-lg mt-8"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">What We Provide</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                      <span className="font-semibold text-navy-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 sticky top-32">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  {service.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Ideal For</h4>
                  <p className="text-gray-700 italic">{service.idealFor}</p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
