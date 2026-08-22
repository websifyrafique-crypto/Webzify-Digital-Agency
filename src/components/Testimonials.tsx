import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "The team completely transformed our outdated platform. The new e-commerce architecture not only improved our site speed by 3x but directly contributed to a 45% increase in Q3 online sales. True engineering partners.",
      author: "Sarah Jenkins",
      role: "Technical Director at TechFlow Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      content: "We needed a complete overhaul of our digital presence to attract enterprise clients. Their strategic approach to UI/UX and technical SEO helped us secure three major contracts within months of launch.",
      author: "Marcus Chen",
      role: "CEO of Horizon Logistics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 3,
      content: "Exceptional attention to detail. They didn't just build a website; they engineered a robust web application that integrated seamlessly with our internal inventory APIs. Outstanding post-launch support.",
      author: "Elena Rodriguez",
      role: "Head of Digital at Artisan Goods",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Client <span className="text-blue-600">Success Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Don't just take our word for it. Read how our technical expertise and strategic design have driven real business growth for our partners.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              <div className="relative z-10 flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
