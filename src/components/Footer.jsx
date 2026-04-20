import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, EnvelopeSimple, ArrowRight } from '@phosphor-icons/react';
import { business, navLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-cream-100 mt-24 sm:mt-32 overflow-hidden">
      <div className="grain opacity-60" />

      {/* Big watermark */}
      <div className="absolute -bottom-8 left-0 right-0 text-center pointer-events-none select-none">
        <span className="font-display text-[22vw] leading-none tracking-tighter text-cream-50/[0.03]">
          {business.monogram}
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 sm:py-20">
        {/* Top row — big brand statement */}
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-cream-100/10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <img src={business.logo} alt={business.name} className="h-14 w-14" loading="lazy"  onError={e => { e.currentTarget.style.display = 'none'; }} />
              <div>
                <p className="font-display text-2xl text-cream-50">
                  {business.name}
                </p>
                <p className="font-serif italic text-sm text-tobacco-300 mt-1">
                  Leaf merchants since {business.established}
                </p>
              </div>
            </div>
            <p className="font-serif text-xl md:text-2xl italic text-cream-200 leading-[1.35] max-w-xl text-balance">
              "A century of leaf, grown in Zimbabwe — and travelled with our name to the far corners of the trade."
            </p>
            <p className="mt-6 text-sm text-cream-100/60 max-w-md leading-relaxed">
              A subsidiary of Universal Corporation, operating from Harare since 1918. Buyers, processors and exporters of Zimbabwean tobacco — in partnership with the country's growers.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-tobacco-300 mb-6">
              The company
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream-100/80 hover:text-cream-50 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{l.label}</span>
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-tobacco-300 mb-6">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-cream-100/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-tobacco-300 shrink-0" />
                <span>{business.addressFull}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 text-tobacco-300 shrink-0" />
                <span>
                  Mon–Fri {business.hours.weekdays}<br />
                  Sat {business.hours.saturday}<br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-tobacco-300 shrink-0" />
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={16} className="mt-0.5 text-tobacco-300 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-cream-50 transition-colors break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-100/50">
          <p>
            © {new Date().getFullYear()} {business.name}. A subsidiary of {business.parent}. All rights reserved.
          </p>
          <p className="tracking-[0.18em] uppercase">
            Rated {business.rating} · {business.reviewCount} Google reviews
          </p>
        </div>

        <p className="mt-4 text-center text-[11px] text-cream-100/40 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tobacco-300 hover:text-cream-50 transition-colors underline underline-offset-2"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
