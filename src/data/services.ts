import { Code, Globe, Layout, Search, Server, ShoppingBag, Smartphone, TrendingUp } from "lucide-react";

export const services = [
  {
    id: "website-designing",
    title: "Website Designing",
    slug: "website-designing",
    description: "Create modern, responsive and user-friendly websites that represent businesses professionally and turn visitors into customers.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200",
    keyBenefits: [
      "Custom, visually striking designs",
      "Mobile-first, responsive layouts",
      "Optimized user experience (UX)",
      "High-converting user interfaces (UI)"
    ],
    features: [
      "Figma to HTML/React/WordPress",
      "Brand Identity Integration",
      "Interactive Prototyping",
      "Accessibility Standards Compliance"
    ],
    idealFor: "Businesses looking to establish a professional digital footprint or rebrand their current online presence."
  },
  {
    id: "e-commerce-website",
    title: "E-Commerce Website",
    slug: "e-commerce-website",
    description: "Create secure, scalable and conversion-focused online stores designed to help businesses sell products online.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    keyBenefits: [
      "Secure and scalable architecture",
      "Seamless checkout experience",
      "Easy product and inventory management",
      "Integrated payment solutions"
    ],
    features: [
      "Custom Shopping Cart",
      "Product filtering and search",
      "Customer Accounts & Order Tracking",
      "Mobile-Optimized Storefront"
    ],
    idealFor: "Retailers, wholesalers, and entrepreneurs wanting to sell products online with a robust digital storefront."
  },
  {
    id: "website-development",
    title: "Website Development",
    slug: "website-development",
    description: "Build fast, functional and scalable websites using modern development technologies and clean architecture.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    keyBenefits: [
      "High-performance, fast-loading architecture",
      "Secure, scalable backend systems",
      "Seamless third-party integrations",
      "Future-proof codebases"
    ],
    features: [
      "Custom Web Applications",
      "API Development & Integration",
      "Database Design & Management",
      "Content Management Systems (CMS)"
    ],
    idealFor: "Companies needing complex functionality, custom portals, or highly performant web applications."
  },
  {
    id: "seo-services",
    title: "SEO Services",
    slug: "seo-services",
    description: "Improve search visibility, attract relevant visitors and build sustainable organic growth with strategic SEO.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    keyBenefits: [
      "Higher search engine rankings",
      "Increased organic, high-intent traffic",
      "Better local visibility in Lahore",
      "Long-term sustainable digital growth"
    ],
    features: [
      "Comprehensive SEO Audits",
      "On-Page & Technical SEO",
      "Keyword Strategy & Content Optimization",
      "Local SEO & Google Business Profile"
    ],
    idealFor: "Businesses wanting to outrank competitors on Google and drive consistent, organic leads."
  }
];
