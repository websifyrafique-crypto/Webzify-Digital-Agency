/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { WebDesign } from './pages/services/WebDesign';
import { Ecommerce } from './pages/services/Ecommerce';
import { WebDev } from './pages/services/WebDev';
import { Seo } from './pages/services/Seo';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/website-designing" element={<WebDesign />} />
        <Route path="services/e-commerce-website" element={<Ecommerce />} />
        <Route path="services/website-development" element={<WebDev />} />
        <Route path="services/seo-services" element={<Seo />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
