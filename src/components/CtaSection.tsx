import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-blue-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to Build Something Better?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's create a professional digital presence that helps your business stand out and grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Contact Webzify
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
