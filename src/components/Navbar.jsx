import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, Phone } from '@phosphor-icons/react';
import { business, navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      {/* Meta-strip: heritage stamp */}
      <div className="hidden md:flex items-center justify-between max-w-[1400px] mx-auto px-5 lg:px-10 h-8 text-[11px] tracking-[0.22em] uppercase text-tobacco-600">
        <span>Est. {business.established}</span>
        <span>Harare · Zimbabwe · A Universal Corporation subsidiary</span>
        <span>Five continents · one leaf</span>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          transparent
            ? 'bg-transparent border-b border-transparent'
            : 'bg-cream-50/95 backdrop-blur-md border-b border-cream-300'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-20 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={business.logo}
              alt={business.name}
              className="h-12 w-12 shrink-0"
              loading="eager"
             onError={e => { e.currentTarget.style.display = 'none'; }} />
            <div className="flex flex-col leading-none min-w-0">
              <span
                className={`font-display text-[17px] sm:text-[19px] tracking-tight truncate ${
                  transparent ? 'text-cream-50' : 'text-ink-900'
                }`}
              >
                {business.name}
              </span>
              <span
                className={`font-serif italic text-[12px] sm:text-[13px] mt-1 truncate ${
                  transparent ? 'text-cream-200' : 'text-tobacco-600'
                }`}
              >
                Leaf merchants since {business.established}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-[0.08em] uppercase transition-colors ${
                    transparent
                      ? isActive
                        ? 'text-cream-50'
                        : 'text-cream-100/90 hover:text-cream-50'
                      : isActive
                        ? 'text-tobacco-700'
                        : 'text-ink-600 hover:text-tobacco-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span
                        className={`absolute -bottom-1.5 left-0 right-0 h-px ${
                          transparent ? 'bg-cream-50' : 'bg-tobacco-700'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${business.phoneRaw}`}
              aria-label="Call"
              className={`h-10 px-4 hidden sm:flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase transition-colors border ${
                transparent
                  ? 'text-cream-50 border-cream-100/40 hover:bg-cream-50 hover:text-tobacco-800'
                  : 'text-tobacco-700 border-tobacco-700/30 hover:bg-tobacco-700 hover:text-cream-50'
              }`}
            >
              <Phone size={14} weight="bold" />
              {business.phone}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`h-10 w-10 flex lg:hidden items-center justify-center ${
                transparent ? 'text-cream-50' : 'text-ink-800'
              }`}
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/50"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-cream-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-cream-300">
            <span className="font-display text-lg text-ink-900">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-ink-800"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl transition-colors border-b border-cream-200 ${
                    isActive ? 'text-tobacco-700' : 'text-ink-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-cream-300 space-y-3">
            <a
              href={`tel:${business.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-tobacco-700 text-cream-50 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-tobacco-800 transition-colors"
            >
              <Phone size={14} weight="bold" />
              {business.phone}
            </a>
            <p className="text-xs text-ink-400 text-center">
              {business.addressFull}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
