import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Our Services', 
      path: '/services',
      subLinks: [
        { name: 'Website Designing', path: '/services/website-designing' },
        { name: 'E-Commerce Website', path: '/services/e-commerce-website' },
        { name: 'Website Development', path: '/services/website-development' },
        { name: 'SEO Services', path: '/services/seo-services' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-white py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-navy-900">
            WEBZIFY<span className="text-purple-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-purple-600 py-2',
                        isActive ? 'text-purple-600' : 'text-gray-600'
                      )
                    }
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-xl border border-gray-100 rounded-md py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium transition-colors hover:text-purple-600',
                      isActive ? 'text-purple-600' : 'text-gray-600'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-sm font-medium text-white transition-colors hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.name} className="flex flex-col">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-base font-medium transition-colors hover:text-purple-600 block py-2',
                      isActive ? 'text-purple-600' : 'text-gray-600'
                    )
                  }
                >
                  {link.name}
                </NavLink>
                <div className="pl-4 border-l-2 border-gray-100 mt-1 flex flex-col gap-1">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className="block py-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-base font-medium transition-colors hover:text-purple-600 block py-2',
                    isActive ? 'text-purple-600' : 'text-gray-600'
                  )
                }
              >
                {link.name}
              </NavLink>
            )
          ))}
          <Link
            to="/contact"
            className="inline-flex h-12 mt-2 w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-sm font-medium text-white transition-colors hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
