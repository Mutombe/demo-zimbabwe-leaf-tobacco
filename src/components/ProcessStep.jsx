import React from 'react';

export default function ProcessStep({ step, title, body, active = false }) {
  return (
    <div
      className={`relative pl-8 pr-5 py-6 border-l-2 transition-colors duration-500 ${
        active ? 'border-tobacco-700 bg-cream-100' : 'border-cream-300 hover:border-tobacco-400'
      }`}
    >
      <span className="absolute left-[-7px] top-8 timeline-dot" />
      <p className="font-display text-xs tracking-[0.22em] uppercase text-tobacco-600">
        Step {step}
      </p>
      <h3 className="mt-2 font-display text-2xl text-ink-900 leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-500 leading-relaxed text-pretty">
        {body}
      </p>
    </div>
  );
}
