import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([data]);
        
      if (error) {
        throw error;
      }
      
      setFormState('success');
      // Reset after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    } catch (err) {
      console.error('Error saving contact:', err);
      setFormState('error');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us | Webzify"
        description="Have a website, e-commerce or SEO project in mind? Contact Webzify and let's discuss how we can help your business grow online."
      />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Let's Talk About <span className="text-blue-200">Your Project</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto"
          >
            Have a website, e-commerce or SEO project in mind? Contact Webzify and let's discuss how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-600" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="bg-blue-800 text-white p-10 md:p-14 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-blue-50 mb-12">
                  Fill out the form and our team will get back to you within 24 hours to discuss your digital needs.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Phone</p>
                      <p className="text-lg font-semibold">+92 303 6346909</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                      <p className="text-lg font-semibold">info@webzify.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">Office</p>
                      <p className="text-lg font-semibold leading-snug">
                        Office No-G 5, Brother Plaza,<br />
                        Hall Road, Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-10 md:p-14 lg:w-3/5 bg-white">
              <h2 className="text-3xl font-bold text-blue-950 mb-8">Send us a Message</h2>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : formState === 'error' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800 mb-2">Something went wrong</h3>
                  <p className="text-red-700 mb-6">We couldn't send your message. Please try again later.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-blue-950">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full h-12 px-4 rounded-lg bg-blue-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-blue-950">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full h-12 px-4 rounded-lg bg-blue-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-blue-950">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        className="w-full h-12 px-4 rounded-lg bg-blue-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="+92 300 0000000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-blue-950">Interested Service</label>
                      <select 
                        id="service"
                        name="service"
                        className="w-full h-12 px-4 rounded-lg bg-blue-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-700"
                      >
                        <option value="">Select a service</option>
                        <option value="Website Designing">Website Designing</option>
                        <option value="E-Commerce">E-Commerce Website</option>
                        <option value="Web Development">Website Development</option>
                        <option value="SEO">SEO Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-blue-950">Project Details *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      rows={5}
                      className="w-full p-4 rounded-lg bg-blue-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full h-14 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center transition-all hover:bg-blue-700 focus:ring-4 focus:ring-primary-500/30 disabled:opacity-70"
                  >
                    {formState === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="h-[400px] w-full bg-blue-200">
        <iframe 
          title="Webzify Office Location"
          src="https://maps.google.com/maps?q=Hall%20Road,%20Lahore,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
