import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowRight, PhoneCall } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found | Webzify"
        description="The page you are looking for does not exist or has been moved."
      />
      
      <section className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-50 py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <div className="text-[150px] md:text-[200px] font-black text-blue-100 leading-none mb-4 select-none">
            404
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm md:text-base font-bold text-white transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/30"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white border border-blue-100 px-8 text-sm md:text-base font-bold text-blue-950 transition-all hover:bg-blue-50 shadow-sm"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white border border-blue-100 px-8 text-sm md:text-base font-bold text-blue-950 transition-all hover:bg-blue-50 shadow-sm"
            >
              <PhoneCall className="w-5 h-5" />
              Contact Webzify
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
