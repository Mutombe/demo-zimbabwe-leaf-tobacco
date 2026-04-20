import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import Operations from './pages/Operations';
import Farmers from './pages/Farmers';
import Sustainability from './pages/Sustainability';
import Heritage from './pages/Heritage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { useEffect } from 'react';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollReset />
      <Navbar />

      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/farmers" element={<Farmers />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
      <ScrollToTop />
      <Toaster
        position="top-center"
        theme="light"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '2px',
            background: '#FEFCF6',
            color: '#1A1813',
            border: '1px solid #EADFC3',
          },
        }}
      />
    </>
  );
}
