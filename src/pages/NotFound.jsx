import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="Page not found — Zimbabwe Leaf Tobacco"
        description="The page you are looking for is not here."
      />
      <section className="min-h-[80vh] bg-cream-50 flex items-center">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="rule-heritage justify-center text-[11px] tracking-[0.28em] uppercase">
            404 · lost in the fields
          </p>
          <h1 className="mt-10 font-display text-7xl md:text-9xl text-tobacco-700 leading-none">
            404
          </h1>
          <p className="mt-6 font-display text-3xl md:text-4xl text-ink-900 leading-tight text-balance">
            This page is <span className="font-serif italic text-tobacco-600">off the map.</span>
          </p>
          <p className="mt-6 font-serif text-lg italic text-ink-500 leading-relaxed max-w-lg mx-auto">
            The link you followed may be old, mistyped, or pointing to a field we never planted. Let's take you back to the road.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-tobacco-700 text-cream-50 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-800 transition-colors"
            >
              Back to home
              <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-ink-800 text-ink-800 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-ink-800 hover:text-cream-50 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
