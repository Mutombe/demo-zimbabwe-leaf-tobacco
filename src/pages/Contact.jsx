import React, { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Phone, EnvelopeSimple, Clock, ArrowRight } from '@phosphor-icons/react';
import { business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const departments = [
  { value: "buying", label: "Buying & contracts" },
  { value: "sales", label: "Exports & sales" },
  { value: "farmer", label: "Grower support / agronomy" },
  { value: "sustainability", label: "Sustainability & reporting" },
  { value: "media", label: "Media & general enquiries" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    department: 'buying',
    message: '',
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Name, email and message are required.");
      return;
    }
    const subject = `[ZLT Enquiry] ${form.department} — ${form.name}`;
    const body =
      `Name: ${form.name}\n` +
      `Company: ${form.company || '—'}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || '—'}\n` +
      `Department: ${departments.find((d) => d.value === form.department)?.label}\n\n` +
      `Message:\n${form.message}`;
    window.location.href =
      `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client…");
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Zimbabwe Leaf Tobacco"
        description="The Harare office of Zimbabwe Leaf Tobacco — +263 71 375 6742. Get in touch with buying, sales, agronomy or sustainability teams."
      />

      {/* Head */}
      <section className="relative bg-cream-50 pt-20 lg:pt-28 pb-16 border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
            Contact
          </p>
          <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-ink-900 text-balance max-w-5xl">
            A note, a call,
            <span className="block font-serif italic text-tobacco-600" style={{ fontWeight: 400 }}>
              or a visit.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-xl italic text-ink-600 leading-relaxed">
            Our Harare office is open to farmers, buyers, journalists and the quietly curious. Pick the department that fits — or just send us a line.
          </p>
        </div>
      </section>

      {/* Form + Side */}
      <section className="bg-cream-50 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <SectionReveal className="lg:col-span-7">
            <div className="bg-cream-100 border border-cream-300 p-6 md:p-10">
              <h2 className="font-display text-3xl lg:text-4xl text-ink-900">
                Send us a message
              </h2>
              <p className="mt-2 font-serif italic text-tobacco-600">
                We aim to reply within one business day.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">
                    Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-ink-800 focus:border-tobacco-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-ink-800 focus:border-tobacco-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-ink-800 focus:border-tobacco-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-ink-800 focus:border-tobacco-600 focus:outline-none transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={onChange}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-ink-800 focus:border-tobacco-600 focus:outline-none transition-colors"
                  >
                    {departments.map((d) => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-ink-800 focus:border-tobacco-600 focus:outline-none transition-colors resize-y"
                  />
                </div>
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-tobacco-700 text-cream-50 px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-tobacco-800 transition-colors"
                  >
                    Send message
                    <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
              </form>
            </div>
          </SectionReveal>

          {/* Side info */}
          <SectionReveal className="lg:col-span-5 space-y-4" delay={120}>
            <div className="bg-ink-900 text-cream-50 p-8 lg:p-10 relative overflow-hidden">
              <div className="grain opacity-30" />
              <div className="relative">
                <p className="text-[11px] tracking-[0.28em] uppercase text-tobacco-300 mb-6">
                  The Harare office
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin size={18} weight="light" className="mt-1 text-tobacco-300 shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-[0.18em] uppercase text-cream-100/60">Address</p>
                      <p className="mt-1 font-serif text-lg text-cream-50">{business.addressFull}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={18} weight="light" className="mt-1 text-tobacco-300 shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-[0.18em] uppercase text-cream-100/60">Phone</p>
                      <a
                        href={`tel:${business.phoneRaw}`}
                        className="mt-1 block font-serif text-lg text-cream-50 hover:text-tobacco-300 transition-colors"
                      >
                        {business.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <EnvelopeSimple size={18} weight="light" className="mt-1 text-tobacco-300 shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-[0.18em] uppercase text-cream-100/60">Email</p>
                      <a
                        href={`mailto:${business.email}`}
                        className="mt-1 block font-serif text-lg text-cream-50 hover:text-tobacco-300 transition-colors break-all"
                      >
                        {business.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={18} weight="light" className="mt-1 text-tobacco-300 shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-[0.18em] uppercase text-cream-100/60">Hours</p>
                      <p className="mt-1 font-serif text-cream-50 leading-relaxed">
                        Mon–Fri {business.hours.weekdays}<br />
                        Sat {business.hours.saturday}<br />
                        Sun {business.hours.sunday}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-cream-100 border border-cream-300 p-8">
              <p className="font-serif italic text-lg text-tobacco-700">
                "A subsidiary of Universal Corporation — the world's largest leaf merchant, with offices on five continents."
              </p>
              <a
                href={business.universalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-tobacco-700 hover:text-tobacco-800 border-b border-tobacco-700 hover:border-tobacco-800 pb-0.5"
              >
                Visit Universal Corporation
                <ArrowRight size={12} weight="bold" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-100 pb-20 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="mb-8">
            <p className="rule-heritage text-[11px] tracking-[0.28em] uppercase">
              Find us
            </p>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl text-ink-900">
              Harare · <span className="font-serif italic text-tobacco-600">on the map</span>
            </h2>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-cream-300">
            <iframe
              title="ZLT Harare office location"
              src="https://www.google.com/maps?q=-17.8292,31.0522&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.35) sepia(0.15)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
