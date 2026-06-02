'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS = [
  { label: 'Take notes.',            emoji: '📝', desc: 'A quick, always-available scratchpad synced to your clipboard. No app to open.' },
  { label: 'Track your flights.',    emoji: '✈️', desc: 'Paste a flight number and get real-time status, gate info, and delays.' },
  { label: 'Convert anything.',      emoji: '🔄', desc: 'Currencies, units, time zones — all in natural language, instantly.' },
  { label: 'Search your files.',     emoji: '🔍', desc: 'Find any file, folder, or document on your Mac in milliseconds.' },
  { label: 'Run scripts.',           emoji: '⚡', desc: 'Execute shell scripts, Python, AppleScript from a single command.' },
  { label: 'Manage your windows.',   emoji: '🪟', desc: 'Resize, move and snap windows into perfect layouts without touching the mouse.' },
  { label: 'Plan your day.',         emoji: '📅', desc: 'See your calendar at a glance and join meetings with a single keystroke.' },
  { label: 'Remind you of stuff.',   emoji: '🔔', desc: 'Set reminders for anything in natural language — "in 20 minutes" just works.' },
  { label: 'Translate text.',        emoji: '🌍', desc: 'Translate into 100+ languages instantly, right in your launcher.' },
  { label: 'Block distractions.',    emoji: '🎯', desc: 'Focus Mode blocks distracting apps and websites on a schedule.' },
  { label: 'Find text in images.',   emoji: '🖼️', desc: 'OCR-powered search that finds text inside screenshots and images.' },
  { label: 'Insert emojis.',         emoji: '😄', desc: 'The best emoji picker on macOS, with AI suggestions and symbol search.' },
];

export default function WhatElse() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>
            What else can Raycast do?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto' }}>
            A few of the things you&apos;ll discover on day one.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 2 }}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '18px 20px',
                borderRadius: 12,
                cursor: 'default',
                background: hovered === i ? 'rgba(255,255,255,0.04)' : 'transparent',
                transition: 'background 0.15s',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 22, flexShrink: 0, width: 32, textAlign: 'center' }}>{item.emoji}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 2 }}>It can {item.label}</div>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, margin: 0, overflow: 'hidden' }}
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.25)', fontSize: 16, flexShrink: 0 }}
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
