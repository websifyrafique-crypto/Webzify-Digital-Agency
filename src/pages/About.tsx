import { motion } from 'motion/react';
import { Target, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials';
import { CtaSection } from '../components/CtaSection';

export function About() {
  return (
    <>
      <SEO 
        title="About Webzify"
        description="Learn about Webzify, a premier Digital Marketing and Web Development Agency in Lahore, dedicated to building powerful digital solutions for businesses."
      />
      
      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary-600/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            About <span className="text-primary-500">Webzify</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            We are a team of digital strategists, designers, developers, and marketers committed to creating practical, high-performance digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded in Lahore, Webzify emerged from a clear observation: businesses were struggling to find a reliable partner that understood both the technical complexities of web development and the strategic nuances of digital marketing. We built Webzify to bridge that gap, offering a unified approach to digital growth.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with exceptional digital infrastructure. We aim to transform how companies present themselves online by delivering websites and marketing strategies that are not only visually impressive but functionally superior and conversion-optimized.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Webzify Team Meeting" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe / Approach */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Approach & Beliefs</h2>
            <p className="text-lg text-gray-600">The core principles that guide every project we undertake at Webzify.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Function Over Fluff", desc: "We design for business impact. A beautiful website that doesn't convert is a failed project. We prioritize clear navigation, fast load times, and strong calls-to-action." },
              { icon: Lightbulb, title: "Scalable Architecture", desc: "We build with the future in mind. Our development practices ensure that your digital assets can scale seamlessly as your business grows and evolves." },
              { icon: Users, title: "Transparent Partnership", desc: "We don't hide behind technical jargon. We believe in clear communication, honest timelines, and working as an extension of your own team." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Need Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Why Businesses Need a Strong Digital Presence</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "First Impressions Matter: 94% of first impressions relate to your site's web design.",
                "Search Visibility is Critical: If you aren't on page one, you are invisible.",
                "Mobile Domination: The majority of web traffic is mobile. A responsive site is mandatory.",
                "Trust & Credibility: Consumers research online before buying. A poor site loses trust.",
                "24/7 Sales Engine: An optimized website generates leads while you sleep.",
                "Competitive Edge: A superior digital experience sets you apart from local competitors."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaSection />
    </>
  );
}
