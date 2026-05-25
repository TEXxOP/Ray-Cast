'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/data';

function getInitials(name: string): string {
  return name.split(' ').map((n) => n[0]).join('');
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Built for professionals<br />like you.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 460, margin: '0 auto' }}>Used by seriously productive people.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 48, alignItems: 'start' }} className="testi-layout">
          {/* Avatar column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="testi-avatars">
            {TESTIMONIALS.map((item, i) => (
              <motion.button key={item.handle} onClick={() => setActive(i)}
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                style={{
                  width: 50, height: 50, position: 'relative', borderRadius: '50%',
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                }}>
                <div style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: item.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 14, fontWeight: 750, color: '#fff',
                }}>
                  {getInitials(item.name)}
                </div>
                {active === i && (
                  <div style={{
                    position: 'absolute', inset: -4, borderRadius: '50%',
                    border: `2px solid ${item.color}`, pointerEvents: 'none',
                  }} />
                )}
              </motion.button>
            ))}
          </div>

          {/* Quote card */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 42 }}>
              <p style={{ fontSize: 22, fontWeight: 650, lineHeight: 1.5, letterSpacing: '-0.4px', marginBottom: 30 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: t.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 14, fontWeight: 750, color: '#fff', flexShrink: 0,
                }}>
                  {getInitials(t.name)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                    {t.role} · <span style={{ color: '#666' }}>{t.handle}</span>
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
          .testi-avatars { flex-direction: row !important; flex-wrap: wrap; }
        }
        @media(max-width:520px) { .testi-card { padding: 24px !important; } }
      `}</style>
    </section>
  );
}
