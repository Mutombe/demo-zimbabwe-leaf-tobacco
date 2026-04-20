import React from 'react';
import { Quotes, MapPin } from '@phosphor-icons/react';

export default function FarmerStoryCard({ farmer, index = 0 }) {
  return (
    <article className="group relative bg-cream-50 border border-cream-300 hover:border-tobacco-400 transition-colors duration-500">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={farmer.photo}
          alt={farmer.name}
          loading="lazy"
          className="w-full h-full object-cover object-center bw-warm group-hover:scale-[1.04] group-hover:filter-none transition-all duration-[1200ms]"
        />
        <div className="absolute top-0 left-0 px-3 py-1.5 bg-cream-50 text-tobacco-700 text-[10px] tracking-[0.22em] uppercase">
          No. {String(index + 1).padStart(2, '0')}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink-900/70 to-transparent">
          <p className="font-display text-xl text-cream-50 leading-tight">
            {farmer.name}
          </p>
          <p className="flex items-center gap-1.5 mt-1 text-cream-200/90 text-sm">
            <MapPin size={12} weight="fill" />
            {farmer.region}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-6 pb-4 border-b border-cream-200 text-xs uppercase tracking-[0.18em] text-tobacco-600">
          <span><span className="font-display text-lg text-tobacco-700 normal-case tracking-normal">{farmer.yearsGrowing}</span> yrs</span>
          <span className="h-3 w-px bg-cream-300" />
          <span><span className="font-display text-lg text-tobacco-700 normal-case tracking-normal">{farmer.hectares}</span> ha</span>
          <span className="h-3 w-px bg-cream-300" />
          <span className="truncate">{farmer.crop}</span>
        </div>
        <Quotes size={20} weight="fill" className="mt-5 text-tobacco-300" />
        <p className="mt-3 font-serif text-[17px] italic text-ink-700 leading-[1.55] text-pretty">
          {farmer.quote}
        </p>
      </div>
    </article>
  );
}
