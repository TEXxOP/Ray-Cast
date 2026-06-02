'use client';

import { motion } from 'framer-motion';

const MARQUEE_TAGS = [
  'Clipboard History', 'AI Chat', 'Window Management', 'Snippets',
  'Quicklinks', 'File Search', 'Calculator', 'Emoji Picker',
  'Calendar', 'Focus Mode', 'Color Picker', 'System Commands',
  'Confetti', 'Notes', 'Reminders', 'Translation',
  'Screenshot', 'Script Runner', 'Kill Process', 'Menu Bar',
];

const AUTO_CARDS = [
  {
    title: 'Snippets',
    desc: 'Type a keyword and watch it expand into templates, boilerplate, or frequently used text.',
    color: 'linear-gradient(90deg, #5E6AD2, #8B5CF6)',
    iconBg: 'rgba(94,106,210,0.15)',
    emoji: '✂️',
  },
  {
    title: 'Quicklinks',
    desc: 'Create shortcuts to your most-visited websites, apps, files, and more. One keystroke away.',
    color: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
    iconBg: 'rgba(6,182,212,0.15)',
    emoji: '⚡',
  },
  {
    title: 'Hotkeys & Aliases',
    desc: 'Bind any command or extension to a global hotkey. Your most-used flows, instantly.',
    color: 'linear-gradient(90deg, #F59E0B, #EF4444)',
    iconBg: 'rgba(245,158,11,0.15)',
    emoji: '⌨️',
  },
  {
    title: 'Script Commands',
    desc: 'Run shell scripts, AppleScripts, and more — right from your launcher, with one press.',
    color: 'linear-gradient(90deg, #10B981, #06B6D4)',
    iconBg: 'rgba(16,185,129,0.15)',
    emoji: '⚙️',
  },
];

const doubled = [...MARQUEE_TAGS, ...MARQUEE_TAGS];

export default function Automation() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>
            Don&apos;t repeat yourself.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto' }}>
            Automate the things you do all the time.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 60 }}>
          {AUTO_CARDS.map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18,
                padding: 28,
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                transition: 'transform .2s',
              }}
            >
              {/* color bar top */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: card.color, borderRadius: '18px 18px 0 0' }} />

              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: card.iconBg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 20, marginBottom: 16, marginTop: 8,
              }}>
                {card.emoji}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: '#fff' }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 100, zIndex: 2, background: 'linear-gradient(90deg, #0a0a0a, transparent)' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 100, zIndex: 2, background: 'linear-gradient(-90deg, #0a0a0a, transparent)' }} />
          <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: 'marquee 28s linear infinite' }}>
            {doubled.map((tag, i) => (
              <span key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 100, padding: '7px 18px', fontSize: 13,
                color: 'rgba(255,255,255,0.4)', fontWeight: 500, whiteSpace: 'nowrap',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </section>
  );
}
