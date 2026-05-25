'use client';

import { motion } from 'framer-motion';

const AI_FEATURES = [
  { num: '01', title: 'Ask Anything, Anytime, Anywhere', desc: 'Quick AI combines the power of AI with the web to answer any question instantly.' },
  { num: '02', title: 'Always On Assistant', desc: 'Stuck while coding? Need help writing an email? Meet your new virtual assistant.' },
  { num: '03', title: 'Your Automation Assistant', desc: 'Create your own AI Commands to automate repetitive tasks and eliminate chores.' },
];

export default function AISection() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 750, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#a78bfa', marginBottom: 14 }}>AI</div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Your Mac just<br />got smarter.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 460, margin: '0 auto' }}>AI where it&apos;s most useful — right on your OS.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="ai-layout">
          {/* Chat window */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
                    <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'block' }} />
                  ))}
                </div>
                <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>AI Chat</span>
              </div>
              <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 220 }}>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, padding: '12px 15px', borderRadius: 10, background: 'rgba(255,99,99,0.1)', color: '#ffb3b3', alignSelf: 'flex-end', maxWidth: '82%' }}>
                  What are the latest changes in React 19?
                </div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, padding: '12px 15px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', color: 'var(--muted)' }}>
                  <span style={{ display: 'block', fontSize: 10, fontWeight: 750, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a78bfa', marginBottom: 8 }}>Raycast AI</span>
                  React 19 introduces Actions, the new <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 5px', borderRadius: 4, fontSize: 12 }}>use</code> hook, Server Components, improved hydration, and enhanced form handling with useFormStatus...
                  <span style={{ animation: 'blink 1s infinite' }}>▊</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {AI_FEATURES.map((f) => (
              <div key={f.num} style={{ display: 'flex', gap: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--dim)', flexShrink: 0, paddingTop: 3 }}>{f.num}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 7 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
            <a href="#" style={{
              alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'var(--text)', border: '1px solid rgba(255,255,255,0.12)',
              padding: '10px 20px', fontSize: 14, fontWeight: 600, borderRadius: 9, transition: 'all .2s',
            }}>More about AI →</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media(max-width:1024px) { .ai-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
