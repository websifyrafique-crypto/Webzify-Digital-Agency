import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Code2, MonitorPlay, Search, TrendingUp, CheckCircle2, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials';
import { CtaSection } from '../components/CtaSection';
import { services } from '../data/services';
import { blogPosts } from '../data/blog';

export function Home() {
  return (
    <>
      <SEO 
        title="Webzify | Digital Marketing & Web Development Agency in Lahore"
        description="Webzify helps businesses build powerful websites, launch high-performing e-commerce stores, develop modern web solutions, and improve online visibility with SEO."
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 mb-6 leading-[1.1]">
                Build Your Digital Presence. <br className="hidden lg:block" />
                <span className="text-primary-600">Grow Your Business.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Webzify helps businesses build powerful websites, launch high-performing e-commerce stores, develop modern web solutions, and improve their online visibility with strategic SEO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-primary-600 px-8 text-base font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/services"
                  className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-base font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Web Development and Digital Marketing Dashboard" 
                  className="w-full h-auto rounded-xl object-cover"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="text-green-600 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Traffic Growth</p>
                      <p className="text-sm font-bold text-navy-900">+124.5%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Code2 className="text-primary-600 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Clean Code</p>
                      <p className="text-sm font-bold text-navy-900">Optimized</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Digital Solutions Designed Around Your Business</h2>
            <p className="text-lg text-gray-600">We don't just build websites; we create digital assets that drive real business results.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Modern & Responsive Design", desc: "Beautiful interfaces that work flawlessly across all devices and screen sizes.", icon: MonitorPlay },
              { title: "Business-Focused Development", desc: "Custom features and integrations built to solve your specific operational challenges.", icon: Code2 },
              { title: "SEO-Friendly Websites", desc: "Structured for search engines from day one to ensure maximum organic visibility.", icon: Search },
              { title: "Long-Term Digital Growth", desc: "Scalable architecture that grows with your business and adapts to future needs.", icon: BarChart3 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Services</h2>
              <p className="text-lg text-gray-400">Comprehensive digital solutions to help your business establish, grow, and dominate its online market.</p>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="p-8">
                  <service.icon className="w-10 h-10 text-primary-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary-400 transition-colors"
                  >
                    Explore {service.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Webzify Team Working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full -z-10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Your Digital Growth Partner</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Webzify combines world-class design, robust development, and strategic SEO to help businesses establish a stronger, more profitable online presence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that a website should be more than just a digital brochure; it should be a hard-working asset that attracts visitors, builds trust, and generates revenue.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Strategic approach to digital growth', 'Transparent communication and reporting', 'Focus on measurable business results'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-navy-900 px-8 text-sm font-semibold text-white transition-all hover:bg-navy-800"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio / Showcase Section */}
      <section className="py-24 bg-navy-900 text-white border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Webzify Project Showcase</h2>
            <p className="text-lg text-gray-400">Explore sample layouts and architectural capabilities demonstrating our approach to modern web development and design.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Sample Project", title: "Corporate Website Architecture", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
              { category: "Webzify Showcase", title: "E-Commerce Store Interface", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" },
              { category: "Sample Project", title: "SEO Analytics Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
              { category: "Webzify Showcase", title: "Modern Landing Page", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
              { category: "Sample Project", title: "Service Business Portal", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" },
              { category: "Webzify Showcase", title: "Responsive Web Application", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900 to-transparent">
                  <p className="text-primary-400 text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-primary-600 px-8 text-base font-semibold text-white transition-all hover:bg-primary-700"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">A proven, transparent process to take your project from concept to successful launch.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[
              { num: "01", title: "Discover", desc: "We take the time to deeply understand your business, target audience, and specific goals." },
              { num: "02", title: "Plan", desc: "Developing a comprehensive strategy covering site architecture, design direction, and SEO." },
              { num: "03", title: "Design", desc: "Creating visually stunning, brand-aligned interfaces with a focus on optimal user experience." },
              { num: "04", title: "Develop", desc: "Writing clean, efficient, and scalable code to bring the designs to life flawlessly." },
              { num: "05", title: "Optimize", desc: "Rigorous testing for speed, responsiveness, security, and technical SEO compliance." },
              { num: "06", title: "Launch & Grow", desc: "Deploying your project and providing ongoing support to ensure sustained digital growth." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-slate-50 group-hover:text-primary-50 transition-colors pointer-events-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Latest Insights / Blog Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Latest Insights</h2>
              <p className="text-lg text-gray-600">Practical tips, trends, and strategies for digital growth.</p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
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
                  
                  <Link to={`/blog/${post.slug}`} className="block mb-4 group-hover:text-primary-600 transition-colors">
                    <h2 className="text-xl font-bold text-navy-900 line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:text-primary-700 transition-colors mt-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
