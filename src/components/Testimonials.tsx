'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Guillermo Rauch',
    handle: '@rauchg',
    role: 'CEO, Vercel',
    quote: "Raycast is the best investment I've made in my productivity toolkit. It has literally changed how I interact with my computer every single day.",
    favoriteFeature: 'Snippets',
    featureDesc: 'Turning words into code.',
    topExt: 'Vercel',
    extDesc: 'Deploy from anywhere.',
    avatarBg: '#000000',
    initials: 'GR',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1640737350074527744/8e_JDsOC_400x400.jpg',
  },
  {
    name: 'Marques Brownlee',
    handle: '@MKBHD',
    role: 'Creator, MKBHD',
    quote: "I literally use Raycast every single day. It replaced so many apps for me — fast, powerful, and it just works. The clipboard history alone is worth it.",
    favoriteFeature: 'Clipboard History',
    featureDesc: 'Remember everything.',
    topExt: 'YouTube',
    extDesc: 'Search and open videos.',
    avatarBg: '#1a1a1a',
    initials: 'MB',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1468938854824947714/Ef-KCBr6_400x400.jpg',
  },
  {
    name: 'Koen Bok',
    handle: '@koenbok',
    role: 'Founder, Framer',
    quote: "Raycast is incrementally turning my Mac into an AI-native operating system and I'm so here for it. Best productivity app for the modern era.",
    favoriteFeature: 'AI Chat',
    featureDesc: 'Realtime knowledge, anywhere.',
    topExt: 'Notion Search',
    extDesc: 'Instant Notion access.',
    avatarBg: '#0d1117',
    initials: 'KB',
    avatarUrl: 'https://pbs.twimg.com/profile_images/983475423620546561/AEbQJOEo_400x400.jpg',
  },
  {
    name: 'Andreas Storm',
    handle: '@avstorm',
    role: 'Designer & Iconographer',
    quote: "The thoughtfulness in Raycast's design is exactly what got me hooked. Every detail has been considered with incredible care.",
    favoriteFeature: 'Window Management',
    featureDesc: 'Layouts in one keystroke.',
    topExt: 'Color Picker',
    extDesc: 'Pick from anywhere.',
    avatarBg: '#1a0a0a',
    initials: 'AS',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1503001835019911170/zPvIHPj3_400x400.jpg',
  },
  {
    name: 'Adam Whitcroft',
    handle: '@AdamWhitcroft',
    role: 'Designer, Owner',
    quote: "Raycast has completely changed how I interact with my Mac. It's not just a launcher — it's a whole new way of computing.",
    favoriteFeature: 'Quick AI',
    featureDesc: 'Instant answers, everywhere.',
    topExt: 'Tailwind CSS',
    extDesc: 'Class search on demand.',
    avatarBg: '#0a1a2e',
    initials: 'AW',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1600553892335747072/4hJfuMzg_400x400.jpg',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>
            Built for professionals<br />like you.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 440, margin: '0 auto' }}>
            Used by seriously productive people.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'start' }} className="testi-layout">
          {/* Avatar column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} className="testi-avatars">
            {TESTIMONIALS.map((item, i) => (
              <motion.button
                key={item.handle}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: 48, height: 48, position: 'relative', borderRadius: '50%', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                {/* Avatar image with fallback */}
                <div style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: item.avatarBg,
                  overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: active === i ? '2px solid rgba(255,99,99,0.8)' : '2px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.2s',
                }}>
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span style="font-size:13px;font-weight:750;color:#fff">${item.initials}</span>`;
                      }
                    }}
                  />
                </div>
                {active === i && (
                  <div style={{
                    position: 'absolute', inset: -3, borderRadius: '50%',
                    border: '2px solid rgba(255,99,99,0.6)',
                    pointerEvents: 'none',
                  }} />
                )}
              </motion.button>
            ))}
          </div>

          {/* Quote card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: 40,
              }}
            >
              {/* Feature highlights */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                    Favorite Feature
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '4px 12px', fontSize: 12, fontWeight: 500, color: '#fff' }}>
                    {t.favoriteFeature}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                    Top Extension
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '4px 12px', fontSize: 12, fontWeight: 500, color: '#fff' }}>
                    {t.topExt}
                  </span>
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 28 }} />

              {/* Quote */}
              <p style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.5, letterSpacing: '-0.3px', marginBottom: 28, color: '#fff' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', overflow: 'hidden', background: t.avatarBg, border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                  <img src={t.avatarUrl} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                    {t.role} · <span style={{ color: 'rgba(255,255,255,0.3)' }}>{t.handle}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px) {
          .testi-layout { grid-template-columns: 1fr !important; }
          .testi-avatars { flex-direction: row !important; flex-wrap: wrap; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
