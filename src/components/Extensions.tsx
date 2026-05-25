'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXTENSIONS } from '@/data';
import type { Extension } from '@/types';

type Category = 'all' | Extension['cat'];

const CATS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Productivity', value: 'productivity' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Design', value: 'design' },
  { label: 'Writing', value: 'writing' },
];

export default function Extensions() {
  const [active, setActive] = useState<Category>('all');
  const filtered = active === 'all' ? EXTENSIONS : EXTENSIONS.filter((e) => e.cat === active);

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 750, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Extensions</div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>There&apos;s an extension<br />for that.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 460, margin: '0 auto' }}>Use your favorite tools without even opening them.</p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 42, flexWrap: 'wrap' }}>
          {CATS.map((cat) => (
            <button key={cat.value} onClick={() => setActive(cat.value)} style={{
              fontSize: 13, fontWeight: 550, padding: '8px 18px', borderRadius: 100,
              border: `1px solid ${active === cat.value ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
              background: active === cat.value ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: active === cat.value ? 'var(--text)' : 'var(--muted)',
              cursor: 'pointer', transition: 'all .2s', fontFamily: 'inherit',
            }}>{cat.label}</button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((ext) => (
              <motion.div key={ext.name} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                whileHover={{ y: -3, borderColor: 'rgba(255,99,99,0.25)' }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: 16, cursor: 'pointer',
                  transition: 'box-shadow .25s',
                }}>
                <span style={{ fontSize: 26, flexShrink: 0, lineHeight: 1 }}>{ext.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 650, marginBottom: 4 }}>{ext.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.55 }}>{ext.desc}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#" style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted)', transition: 'color .2s' }}>Browse thousands more →</a>
        </div>
      </div>
    </section>
  );
}
