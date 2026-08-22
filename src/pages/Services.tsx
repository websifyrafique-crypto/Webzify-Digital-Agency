import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CtaSection } from '../components/CtaSection';
import { services } from '../data/services';

export function Services() {
  return (
    <>
      <SEO 
        title="Our Services | Webzify"
        description="Explore Webzify's professional digital services including Website Designing, E-Commerce Development, Custom Web Development, and SEO Services."
      />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Digital Services That Help Your <span className="text-blue-200">Business Move Forward</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto"
          >
            From high-converting website designs to robust technical SEO, we provide the end-to-end services required for sustainable digital success.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:rtl' : ''}`}
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:col-start-2 lg:row-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                    <span className="font-bold text-blue-950">{service.title}</span>
                  </div>
                </div>

                <div className={`${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1 lg:ltr' : ''}`}>
                  <h2 className="text-3xl font-bold text-blue-950 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-blue-950 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-900 px-8 text-sm font-semibold text-white transition-all hover:bg-blue-600 group"
                  >
                    View Service Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
