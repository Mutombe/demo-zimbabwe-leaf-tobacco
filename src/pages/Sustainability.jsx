import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Heart,
  Drop,
  Tree,
  UsersThree,
  HandHeart,
} from '@phosphor-icons/react';
import { sustainabilityPillars } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const ICONS = { Leaf, Heart, Drop, Tree, UsersThree, HandHeart };

export default function Sustainability() {
  return (
    <PageTransition>
      <SEO
        title="Sustainability — Zimbabwe Leaf Tobacco"
        description="Soil, water, forests, farmer welfare, labour and community — our six sustainability pillars, in numbers."
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end -mt-[80px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1800&q=80&sat=-60"
            alt="Farm homestead at golden hour"
            loading="eager"
            className="w-full h-full object-cover object-center bw-deep"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-forest-900/30 to-ink-900/80" />
        </div>
        <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-10 pb-16 lg:pb-20 pt-36">
          <p className="text-[11px] tracking-[0.28em] uppercase text-cream-200/80 mb-6">
            Our commitments
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-cream-50 text-balance max-w-5xl">
            A seasonal business, with
            <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
              a generational outlook.
            </span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-xl italic text-cream-100/90 leading-relaxed">
            Six pillars, measured and reported — the quiet maths behind a hundred-year merchant house.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <SectionReveal className="lg:col-span-5">
              <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
                The stewardship
              </p>
              <p className="mt-8 font-display text-4xl lg:text-5xl leading-[0.95] tracking-tight text-ink-900 text-balance">
                A leaf merchant
                <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                  is a land merchant.
                </span>
              </p>
            </SectionReveal>

            <SectionReveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <p className="font-serif text-[20px] leading-[1.6] text-ink-700 text-pretty">
                We don't farm the land ourselves — but our trade depends on it for as long as Zimbabwe grows tobacco. Which is to say, as long as we are a business. Our sustainability programme isn't a marketing claim; it is a hundred-year insurance policy, written in soil, in forests, in water tables and in farming families.
              </p>
              <p className="mt-6 text-sm tracking-[0.18em] uppercase text-tobacco-600">
                Six pillars · measured annually · reported to Universal Corporation
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Six pillars grid */}
      <section className="bg-cream-100 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-300">
            {sustainabilityPillars.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <SectionReveal key={p.title} delay={i * 60}>
                  <article className="bg-cream-50 p-8 lg:p-10 h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      {Icon && <Icon size={36} weight="light" className="text-tobacco-600" />}
                      <span className="text-[10px] tracking-[0.22em] uppercase text-tobacco-400">
                        0{i + 1} / 0{sustainabilityPillars.length}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-3xl text-ink-900 leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 font-serif text-[17px] italic text-ink-600 leading-relaxed text-pretty">
                      {p.body}
                    </p>
                    <div className="mt-8 pt-6 border-t border-cream-300">
                      <p className="font-display text-4xl text-tobacco-700">{p.metric}</p>
                      <p className="mt-1 text-xs tracking-[0.18em] uppercase text-ink-500">
                        {p.metricLabel}
                      </p>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Forest pillar — big visual feature */}
      <section className="relative bg-forest-800 text-cream-50 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441794016917-7b6933969960?auto=format&fit=crop&w=1800&q=80&sat=-40"
            alt="Forest at sunrise"
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-30 bw-warm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/80 to-transparent" />
          <div className="grain opacity-30" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tobacco-300 mb-6">
              A closer look
            </p>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
              Nineteen million trees,
              <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
                and counting.
              </span>
            </h2>
            <p className="mt-8 font-serif text-xl italic text-cream-100/85 leading-relaxed">
              Curing tobacco takes heat. Heat takes fuel. For too many decades, that fuel came from Zimbabwe's natural forests. In 2012 we launched a woodlot programme — a co-funded partnership with every contract grower — planting fast-growing species specifically for curing.
            </p>
            <p className="mt-6 font-serif text-xl italic text-cream-100/85 leading-relaxed">
              Today, every hectare we cure is matched by a hectare of cultivated woodlot. The forests that remain are the forests that stay.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-cream-100/20">
              <div>
                <p className="font-display text-4xl text-tobacco-300">19M</p>
                <p className="mt-2 text-xs tracking-[0.18em] uppercase text-cream-100/60">
                  Trees planted
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-tobacco-300">2012</p>
                <p className="mt-2 text-xs tracking-[0.18em] uppercase text-cream-100/60">
                  Programme launched
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-tobacco-300">1:1</p>
                <p className="mt-2 text-xs tracking-[0.18em] uppercase text-cream-100/60">
                  Hectare, replaced
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting note */}
      <section className="bg-cream-50 py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="rule-heritage justify-center text-[11px] tracking-[0.28em] uppercase">
            Transparency
          </p>
          <p className="mt-8 font-serif text-2xl italic text-ink-700 leading-relaxed text-balance">
            "The figures on this page are reviewed and reported annually as part of the Universal Corporation global sustainability disclosures. Where we fall short, we say so. Where we progress, we show the working."
          </p>
          <p className="mt-6 text-xs tracking-[0.18em] uppercase text-tobacco-600">
            — The ZLT Sustainability Committee
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tobacco-700 text-cream-50 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-balance">
              More on our sustainability reporting? <span className="font-serif italic text-tobacco-300">Happy to share.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-cream-50 text-tobacco-800 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-300 transition-colors whitespace-nowrap"
          >
            Request a report
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
