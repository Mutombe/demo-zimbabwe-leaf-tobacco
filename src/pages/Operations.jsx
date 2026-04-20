import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Factory, Boat, CheckCircle } from '@phosphor-icons/react';
import { operations, leafJourney, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ProcessStep from '../components/ProcessStep';

const OP_ICONS = { Handshake, Factory, Boat };

export default function Operations() {
  return (
    <PageTransition>
      <SEO
        title="Operations — Zimbabwe Leaf Tobacco"
        description="Buying, processing and exporting Zimbabwean tobacco — end to end, from contract grower to container door."
      />

      {/* Page head */}
      <section className="relative bg-cream-50 pt-20 lg:pt-28 pb-16 border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
            Our operations
          </p>
          <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-ink-900 text-balance max-w-5xl">
            From contract grower to
            <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
              container door.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-xl italic text-ink-600 leading-relaxed">
            Three tightly-connected operations — buying, processing and exporting — make up the long patient line between a Zimbabwean seedling and a finished product across the seas.
          </p>
        </div>
      </section>

      {/* Operations sections — alternating */}
      {operations.map((op, i) => {
        const Icon = OP_ICONS[op.icon];
        const reverse = i % 2 === 1;
        return (
          <section
            key={op.slug}
            className={`relative py-24 lg:py-32 ${
              i === 1 ? 'bg-ink-900 text-cream-50' : 'bg-cream-50 text-ink-900'
            }`}
          >
            {i === 1 && <div className="grain opacity-40 absolute inset-0" />}
            <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
              <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <SectionReveal className={`lg:col-span-6 ${reverse ? 'lg:col-start-7' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={op.image}
                      alt={op.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center bw-warm"
                    />
                    <div className={`absolute top-0 left-0 px-5 py-3 ${
                      i === 1 ? 'bg-cream-50 text-tobacco-700' : 'bg-ink-900 text-cream-50'
                    }`}>
                      <p className="font-display text-2xl">{op.number}</p>
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal className={`lg:col-span-6 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`} delay={120}>
                  <div className={`flex items-center gap-3 mb-4 ${i === 1 ? 'text-tobacco-300' : 'text-tobacco-600'}`}>
                    {Icon && <Icon size={24} weight="light" />}
                    <p className="text-[11px] tracking-[0.28em] uppercase">
                      {op.title}
                    </p>
                  </div>
                  <h2 className={`font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance ${
                    i === 1 ? 'text-cream-50' : 'text-ink-900'
                  }`}>
                    {op.tagline}
                  </h2>
                  <p className={`mt-6 font-serif text-xl italic leading-relaxed text-pretty ${
                    i === 1 ? 'text-cream-100/85' : 'text-ink-600'
                  }`}>
                    {op.summary}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {op.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed">
                        <CheckCircle
                          size={18}
                          weight="fill"
                          className={`mt-0.5 shrink-0 ${i === 1 ? 'text-tobacco-300' : 'text-tobacco-500'}`}
                        />
                        <span className={i === 1 ? 'text-cream-100/90' : 'text-ink-700'}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SectionReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* The leaf journey — 8-step timeline */}
      <section className="relative bg-cream-100 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-16">
            <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
              The leaf journey
            </p>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink-900 text-balance">
              Eight steps, from
              <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
                seedling to shipment.
              </span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {leafJourney.map((s, i) => (
              <SectionReveal key={s.step} delay={(i % 4) * 60}>
                <ProcessStep step={s.step} title={s.title} body={s.body} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tobacco-700 text-cream-50 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-balance">
              Planning a shipment? <span className="font-serif italic text-tobacco-300">We're listening.</span>
            </h2>
            <p className="mt-4 font-serif text-lg italic text-cream-100/85">
              From sample to container — the Harare team is a phone call away.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-cream-50 text-tobacco-800 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-300 transition-colors"
            >
              Contact us
              <ArrowRight size={14} weight="bold" />
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-3 border border-cream-100/40 text-cream-50 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-cream-50 hover:text-tobacco-800 transition-colors"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
