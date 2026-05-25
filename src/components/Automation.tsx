'use client';

import { motion } from 'framer-motion';
import { AUTO_CARDS, MARQUEE_TAGS } from '@/data';

export default function Automation() {
  const doubled = [...MARQUEE_TAGS, ...MARQUEE_TAGS];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Don&apos;t repeat yourself.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 460, margin: '0 auto' }}>Automate the things you do all the time.</p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 56 }}>
          {AUTO_CARDS.map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.12)' }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 30,
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                transition: 'box-shadow .3s',
              }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: card.color }} />
              <h3 style={{ fontSize: 18, fontWeight: 750, marginBottom: 10, marginTop: 14 }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, width: 100, zIndex: 2,
            background: 'linear-gradient(90deg, var(--bg), transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, bottom: 0, right: 0, width: 100, zIndex: 2,
            background: 'linear-gradient(-90deg, var(--bg), transparent)',
          }} />
          <div style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'marquee 22s linear infinite' }}>
            {doubled.map((tag, i) => (
              <span key={i} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 100, padding: '8px 20px', fontSize: 13,
                color: 'var(--muted)', fontWeight: 500, whiteSpace: 'nowrap',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </section>
  );
}
