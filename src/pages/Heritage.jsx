import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quotes } from '@phosphor-icons/react';
import { timeline, heritageGallery, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Heritage() {
  return (
    <PageTransition>
      <SEO
        title="Heritage — Zimbabwe Leaf Tobacco"
        description="A hundred seasons of leaf, written into Zimbabwean soil — from a small merchant office in Salisbury in 1918 to a global export operation today."
      />

      {/* Hero — editorial cover */}
      <section className="relative min-h-[80vh] flex items-end -mt-[80px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=80&sat=-80"
            alt="Heritage: farmer walking through field at dusk"
            loading="eager"
            className="w-full h-full object-cover object-center bw-deep"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/20 to-ink-900/85" />
        </div>
        <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-10 pb-16 lg:pb-20 pt-36 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <p className="text-[11px] tracking-[0.28em] uppercase text-cream-200/80 mb-6">
              Our story · Volume 107
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[110px] leading-[0.88] tracking-[-0.02em] text-cream-50 text-balance">
              One hundred
              <br />
              <span className="italic font-serif text-tobacco-300" style={{ fontWeight: 400 }}>
                & seven seasons.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-3 text-cream-100/80 text-sm tracking-[0.12em] uppercase lg:text-right">
            Est. {business.established}<br />Harare, Zimbabwe
          </div>
        </div>
      </section>

      {/* Prologue */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
              A prologue
            </p>
            <p className="mt-10 drop-cap font-serif text-[22px] md:text-[24px] leading-[1.6] text-ink-700 text-pretty">
              The history of Zimbabwe Leaf Tobacco is, in many ways, the history of a country's most storied agricultural export. It begins in 1918 with a single merchant office on what was then Pioneer Street, Salisbury — and stretches forward, through independence, through good and lean seasons, through wars and cyclones and currency reforms, to a Harare operation that today ships leaf to sixty-two destinations across five continents.
            </p>
            <p className="mt-6 font-serif text-[20px] italic text-tobacco-600 leading-relaxed">
              What follows are the milestones that shaped us — and the long, patient work between them.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline — vertical editorial */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="rule-heritage justify-center text-[11px] tracking-[0.28em] uppercase">
              The timeline
            </p>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink-900 text-balance">
              A century,
              <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                in dated chapters.
              </span>
            </h2>
          </SectionReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[26px] md:left-1/2 top-2 bottom-2 w-px bg-tobacco-400/40" />

            <div className="space-y-14 lg:space-y-20">
              {timeline.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <SectionReveal key={m.year} delay={i * 40}>
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                      {/* Dot */}
                      <div className="absolute left-[22px] md:left-1/2 top-3 md:-translate-x-1/2 timeline-dot" />

                      <div className={`pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                        <p className="font-display text-6xl lg:text-7xl text-tobacco-700 leading-none">
                          {m.year}
                        </p>
                      </div>
                      <div className={`pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                        <p className="font-display text-2xl lg:text-3xl text-ink-900 leading-tight text-balance">
                          {m.title}
                        </p>
                        <p className="mt-3 font-serif text-[17px] italic text-ink-600 leading-relaxed text-pretty">
                          {m.body}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Image plate */}
      <section className="bg-ink-900 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {heritageGallery.slice(0, 6).map((g, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center bw-deep group-hover:filter-none group-hover:scale-105 transition-all duration-[1200ms]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-ink-900/80 to-transparent">
                  <p className="font-serif italic text-xs md:text-sm text-cream-100">
                    {g.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative bg-tobacco-700 text-cream-50 py-24 lg:py-32 overflow-hidden">
        <div className="grain opacity-40" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <Quotes size={44} weight="fill" className="text-tobacco-300 mx-auto" />
          <p className="mt-10 font-serif text-3xl lg:text-4xl italic leading-[1.35] text-cream-50 text-balance">
            A merchant does not outlive a century by being clever. A merchant outlives a century by being faithful — to the farmers who grow the leaf, the buyers who trust the bale, and the soil that makes the story possible in the first place.
          </p>
          <p className="mt-8 text-xs tracking-[0.22em] uppercase text-tobacco-300">
            — A reflection on 100 years, ZLT Annual Report
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-ink-900 text-balance">
              Writing the next chapter? <span className="font-serif italic text-tobacco-600">Come and meet us.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-tobacco-700 text-cream-50 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-800 transition-colors whitespace-nowrap"
          >
            Visit our office
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
