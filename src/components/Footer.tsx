import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
              WEBZIFY<span className="text-blue-200">.</span>
            </Link>
            <p className="text-blue-50 leading-relaxed max-w-sm">
              Digital solutions for businesses ready to build, grow and compete online.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all text-white">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all text-white">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all text-white">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all text-white">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-blue-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/website-designing" className="text-blue-100 hover:text-white transition-colors">Website Designing</Link></li>
              <li><Link to="/services/e-commerce-website" className="text-blue-100 hover:text-white transition-colors">E-Commerce Website</Link></li>
              <li><Link to="/services/website-development" className="text-blue-100 hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services/seo-services" className="text-blue-100 hover:text-white transition-colors">SEO Services</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-blue-50">+92 303 6346909</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-blue-50">Office No-G 5, Brother Plaza,<br/>Hall Road, Lahore, Pakistan</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
          <p>© 2026 Webzify. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
