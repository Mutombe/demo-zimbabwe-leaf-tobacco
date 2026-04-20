import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Quotes,
  Handshake,
  Factory,
  Boat,
  Leaf,
  MapPin,
  Star,
} from '@phosphor-icons/react';
import {
  hero,
  marqueeItems,
  intro,
  operations,
  stats,
  testimonials,
  timeline,
  farmers,
  heritageGallery,
  business,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import FarmerStoryCard from '../components/FarmerStoryCard';

const OP_ICONS = { Handshake, Factory, Boat };

export default function Home() {
  const earlyTimeline = timeline.slice(0, 4);
  const featuredFarmers = farmers.slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title="Zimbabwe Leaf Tobacco — A Century of Leaf, Grown in Zimbabwe"
        description={hero.sub}
      />

      {/* ================ HERO — B&W full-bleed field ================ */}
      <section className="relative min-h-[92vh] lg:min-h-[100vh] -mt-[80px] flex items-end overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            loading="eager"
            className="w-full h-full object-cover object-center bw-deep animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900/75" />
          <div className="grain opacity-40" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-10 pb-14 lg:pb-20 pt-36 lg:pt-40">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-cream-200/80 mb-8">
              <span className="h-px w-12 bg-tobacco-300" />
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-[13vw] md:text-[88px] lg:text-[108px] leading-[0.92] tracking-[-0.02em] text-cream-50 text-balance">
              {hero.headline}<br />
              <span className="italic font-serif text-tobacco-300" style={{ fontWeight: 400 }}>
                {hero.headlineItalic}
              </span>
            </h1>
            <p className="mt-8 max-w-xl font-serif text-[19px] md:text-[21px] leading-[1.55] text-cream-100/90 text-pretty">
              {hero.sub}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to={hero.ctaPrimary.to}
                className="group inline-flex items-center gap-3 bg-cream-50 text-ink-900 px-7 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-300 transition-colors"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={hero.ctaSecondary.to}
                className="inline-flex items-center gap-3 text-cream-50 border border-cream-100/40 px-7 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-cream-50 hover:text-ink-900 transition-colors"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            <p className="mt-10 font-serif italic text-sm text-cream-200/70">
              {hero.footNote}
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-cream-100/60">
          <span>Scroll</span>
          <span className="h-16 w-px bg-cream-100/40" />
        </div>
      </section>

      {/* ================ MARQUEE ================ */}
      <section className="relative border-y border-cream-300 bg-cream-100 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-6 font-display italic text-lg text-tobacco-700"
            >
              <Leaf size={14} weight="fill" className="text-tobacco-400" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================ INTRO — editorial ================ */}
      <section className="relative bg-cream-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <SectionReveal className="lg:col-span-4">
              <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
                {intro.eyebrow}
              </p>
              <p className="mt-8 font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink-900 text-balance">
                We do not grow tobacco.
                <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                  We grow the grower.
                </span>
              </p>
            </SectionReveal>

            <SectionReveal className="lg:col-span-7 lg:col-start-6" delay={120}>
              <p className="drop-cap font-serif text-[20px] md:text-[22px] leading-[1.6] text-ink-700 text-pretty">
                {intro.body}
              </p>
              <p className="mt-8 font-serif italic text-sm text-tobacco-600">
                {intro.signature}
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px bg-cream-300">
                {stats.map((s) => (
                  <div key={s.label} className="bg-cream-50 p-6">
                    <p className="font-display text-4xl text-tobacco-700">{s.value}</p>
                    <p className="mt-2 text-xs tracking-[0.18em] uppercase text-ink-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ================ OPERATIONS — 3 columns ================ */}
      <section className="relative bg-ink-900 text-cream-50 py-24 lg:py-32 overflow-hidden">
        <div className="grain opacity-50" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tobacco-300 mb-6">
              What we do
            </p>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
              Buy. Process.
              <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
                Export.
              </span>
            </h2>
            <p className="mt-6 font-serif text-lg italic text-cream-100/80 leading-relaxed max-w-lg">
              A single, end-to-end line between a Zimbabwean field and a finished product on another continent.
            </p>
          </SectionReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-12">
            {operations.map((op, i) => {
              const Icon = OP_ICONS[op.icon];
              return (
                <SectionReveal key={op.slug} delay={i * 100}>
                  <div className="group">
                    <div className="relative overflow-hidden aspect-[4/5] mb-6">
                      <img
                        src={op.image}
                        alt={op.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center bw-warm group-hover:scale-[1.04] group-hover:filter-none transition-all duration-[1200ms]"
                      />
                      <div className="absolute top-0 left-0 p-4 bg-ink-900/80 backdrop-blur-sm">
                        <p className="font-display text-2xl text-tobacco-300">{op.number}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-tobacco-300 mb-3">
                      {Icon && <Icon size={20} weight="light" />}
                      <p className="text-[11px] tracking-[0.28em] uppercase">
                        {op.title}
                      </p>
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl leading-tight text-cream-50 text-balance">
                      {op.tagline}
                    </h3>
                    <p className="mt-4 font-serif text-[17px] italic text-cream-100/80 leading-relaxed text-pretty">
                      {op.summary}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          <SectionReveal className="mt-16">
            <Link
              to="/operations"
              className="inline-flex items-center gap-3 border border-cream-100/30 text-cream-50 px-7 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-cream-50 hover:text-ink-900 transition-colors"
            >
              Explore our operations
              <ArrowRight size={14} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ================ HERITAGE STRIP ================ */}
      <section className="relative bg-cream-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="rule-heritage justify-center text-[11px] tracking-[0.28em] uppercase">
              Since 1918
            </p>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink-900 text-balance">
              A hundred seasons
              <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                and counting.
              </span>
            </h2>
          </SectionReveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {earlyTimeline.map((m, i) => (
              <SectionReveal key={m.year} delay={i * 80}>
                <div className="relative pt-6 border-t-2 border-tobacco-700">
                  <p className="font-display text-5xl text-tobacco-700">{m.year}</p>
                  <p className="mt-3 font-display text-lg text-ink-900 leading-snug text-balance">
                    {m.title}
                  </p>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-12 text-center">
            <Link
              to="/heritage"
              className="inline-flex items-center gap-3 text-tobacco-700 text-[12px] tracking-[0.22em] uppercase border-b border-tobacco-700 hover:border-tobacco-800 pb-1"
            >
              Read the full history
              <ArrowRight size={14} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ================ GALLERY — heritage mood ================ */}
      <section className="relative bg-ink-900 py-24 lg:py-32 overflow-hidden">
        <div className="grain opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-xl mb-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tobacco-300 mb-4">
              From the field
            </p>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-cream-50 text-balance">
              A documentary
              <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
                of Zimbabwean leaf.
              </span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
            <div className="lg:col-span-8 aspect-[16/10] overflow-hidden">
              <img
                src={heritageGallery[0].src}
                alt={heritageGallery[0].alt}
                loading="lazy"
                className="w-full h-full object-cover object-center bw-deep hover:filter-none hover:scale-105 transition-all duration-[1200ms]"
              />
            </div>
            <div className="lg:col-span-4 aspect-[4/5] lg:aspect-auto overflow-hidden">
              <img
                src={heritageGallery[1].src}
                alt={heritageGallery[1].alt}
                loading="lazy"
                className="w-full h-full object-cover object-center bw-deep hover:filter-none hover:scale-105 transition-all duration-[1200ms]"
              />
            </div>
            <div className="lg:col-span-4 aspect-[4/5] lg:aspect-[4/5] overflow-hidden">
              <img
                src={heritageGallery[2].src}
                alt={heritageGallery[2].alt}
                loading="lazy"
                className="w-full h-full object-cover object-center bw-deep hover:filter-none hover:scale-105 transition-all duration-[1200ms]"
              />
            </div>
            <div className="lg:col-span-4 aspect-[4/5] overflow-hidden">
              <img
                src={heritageGallery[3].src}
                alt={heritageGallery[3].alt}
                loading="lazy"
                className="w-full h-full object-cover object-center bw-deep hover:filter-none hover:scale-105 transition-all duration-[1200ms]"
              />
            </div>
            <div className="lg:col-span-4 aspect-[4/5] overflow-hidden">
              <img
                src={heritageGallery[4].src}
                alt={heritageGallery[4].alt}
                loading="lazy"
                className="w-full h-full object-cover object-center bw-deep hover:filter-none hover:scale-105 transition-all duration-[1200ms]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================ FARMER NETWORK — preview ================ */}
      <section className="relative bg-cream-100 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <SectionReveal className="max-w-2xl">
              <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
                The grower partnership
              </p>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink-900 text-balance">
                Fourteen thousand
                <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                  growing seasons.
                </span>
              </h2>
              <p className="mt-6 font-serif text-lg italic text-ink-600 leading-relaxed max-w-xl">
                Every bale has a name attached to it. These are some of them.
              </p>
            </SectionReveal>

            <SectionReveal delay={120}>
              <Link
                to="/farmers"
                className="inline-flex items-center gap-3 border border-tobacco-700/30 text-tobacco-700 px-6 py-3 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-700 hover:text-cream-50 transition-colors"
              >
                Meet the network
                <ArrowRight size={14} weight="bold" />
              </Link>
            </SectionReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredFarmers.map((f, i) => (
              <SectionReveal key={f.name} delay={i * 100}>
                <FarmerStoryCard farmer={f} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================ TESTIMONIALS — B2B ================ */}
      <section className="relative bg-cream-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-xl mb-16">
            <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
              From the trade
            </p>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink-900 text-balance">
              The partners who
              <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                carry our leaf.
              </span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-px bg-cream-300">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 100} className="bg-cream-50">
                <div className="p-8 lg:p-10 h-full flex flex-col">
                  <Quotes size={28} weight="fill" className="text-tobacco-300" />
                  <p className="mt-6 flex-1 font-serif text-[19px] italic text-ink-700 leading-[1.55] text-pretty">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-cream-300">
                    <p className="font-display text-lg text-ink-900">{t.author}</p>
                    <p className="mt-1 text-xs tracking-[0.12em] uppercase text-tobacco-600">
                      {t.role}
                    </p>
                    <p className="mt-1 text-sm text-ink-500">{t.company}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================ CTA — contact prompt ================ */}
      <section className="relative bg-ink-900 text-cream-50 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80&sat=-70"
            alt="Tobacco field at dusk"
            loading="lazy"
            className="w-full h-full object-cover object-center bw-deep opacity-60"
          />
          <div className="absolute inset-0 bg-ink-900/70" />
          <div className="grain opacity-50" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tobacco-300 mb-6">
              Talk to the merchant
            </p>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              A buyer, a grower,
              <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
                a shipment to plan?
              </span>
            </h2>
            <p className="mt-8 font-serif text-xl italic text-cream-100/80 leading-relaxed">
              Our sample room, buying floor and agronomy team are one phone call away. Find the right person at our Harare office — or come in.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-cream-50 text-ink-900 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-300 transition-colors"
              >
                Get in touch
                <ArrowRight size={14} weight="bold" />
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-3 border border-cream-100/40 text-cream-50 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-cream-50 hover:text-ink-900 transition-colors"
              >
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
