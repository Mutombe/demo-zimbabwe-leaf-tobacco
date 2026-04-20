import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plant, GraduationCap, HandCoins, ShieldCheck } from '@phosphor-icons/react';
import { farmers, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import FarmerStoryCard from '../components/FarmerStoryCard';

const supports = [
  {
    icon: Plant,
    title: "Agronomy",
    body: "Our field team walks the crop with every contract grower — from seedbed to sale. Soil tests, rotation planning, fertiliser programmes and disease pressure, all in one hand.",
  },
  {
    icon: HandCoins,
    title: "Pre-financing",
    body: "Inputs, labour advances and irrigation co-investment, extended ahead of planting and reconciled at sale. We finance the season, not just the sale.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    body: "Season-start workshops and on-farm demonstrations on everything from topping height to curing schedules. The crop gets better. So does the price.",
  },
  {
    icon: ShieldCheck,
    title: "Protection",
    body: "Crop insurance access, transparent grade-based pricing and a buyer who will tell you the truth about your crop. A partnership built over decades — not a seasonal transaction.",
  },
];

export default function Farmers() {
  return (
    <PageTransition>
      <SEO
        title="Farmer Network — Zimbabwe Leaf Tobacco"
        description="Fourteen thousand partner growers across Zimbabwe. Meet some of the names behind the leaf."
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end -mt-[80px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1800&q=80&sat=-60"
            alt="Cured tobacco leaves hanging in barn"
            loading="eager"
            className="w-full h-full object-cover object-center bw-deep"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/20 to-ink-900/80" />
        </div>
        <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-10 pb-16 lg:pb-20 pt-36">
          <p className="text-[11px] tracking-[0.28em] uppercase text-cream-200/80 mb-6">
            The grower partnership
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-cream-50 text-balance max-w-5xl">
            Fourteen thousand
            <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
              growing seasons.
            </span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-xl italic text-cream-100/90 leading-relaxed">
            Every bale has a name attached to it. These are some of them.
          </p>
        </div>
      </section>

      {/* Meta stats */}
      <section className="bg-cream-100 border-y border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-300">
          {[
            { v: "14,000", l: "Registered growers" },
            { v: "6 provinces", l: "Served" },
            { v: "Avg 18 yrs", l: "Grower tenure" },
            { v: "92%", l: "Contract renewal" },
          ].map((s, i) => (
            <div key={i} className="py-8 px-5 text-center">
              <p className="font-display text-3xl lg:text-4xl text-tobacco-700">{s.v}</p>
              <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-ink-500">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grower profiles */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-16">
            <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
              Grower profiles
            </p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[0.95] tracking-tight text-ink-900 text-balance">
              The leaf travels, but
              <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                the story stays rooted.
              </span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {farmers.map((f, i) => (
              <SectionReveal key={f.name} delay={i * 80}>
                <FarmerStoryCard farmer={f} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grower support programme */}
      <section className="bg-ink-900 text-cream-50 py-24 lg:py-32 relative overflow-hidden">
        <div className="grain opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-tobacco-300 mb-6">
              The support programme
            </p>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
              Long before harvest,
              <span className="block font-serif italic text-tobacco-300" style={{ fontWeight: 400 }}>
                long after the sale.
              </span>
            </h2>
            <p className="mt-6 font-serif text-lg italic text-cream-100/80 leading-relaxed max-w-xl">
              A partnership programme built from a simple idea — a good merchant invests in the grower's whole season, not just the week of the sale.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-px bg-cream-100/10">
            {supports.map((s, i) => {
              const Icon = s.icon;
              return (
                <SectionReveal key={s.title} delay={i * 80} className="bg-ink-900 p-8 lg:p-10">
                  <Icon size={32} weight="light" className="text-tobacco-300" />
                  <h3 className="mt-6 font-display text-3xl text-cream-50">{s.title}</h3>
                  <p className="mt-3 font-serif text-[17px] italic text-cream-100/80 leading-relaxed text-pretty">
                    {s.body}
                  </p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-ink-900 text-balance">
              A grower asking about contracts? <span className="font-serif italic text-tobacco-600">We want to hear from you.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-tobacco-700 text-cream-50 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-800 transition-colors whitespace-nowrap"
          >
            Talk to the field team
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
