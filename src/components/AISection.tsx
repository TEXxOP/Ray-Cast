'use client';

import { motion } from 'framer-motion';

const AI_FEATURES = [
  {
    num: '01',
    title: 'Ask Anything, Anytime, Anywhere',
    desc: 'Quick AI combines the power of AI with the web to answer any question without leaving your workflow.',
  },
  {
    num: '02',
    title: 'Your Always-On Assistant',
    desc: 'Stuck while coding? Need help writing an email? Meet your new AI teammate, available from any app.',
  },
  {
    num: '03',
    title: 'Your Automation Assistant',
    desc: 'Create your own AI Commands to automate repetitive tasks and eliminate the tedious chores of your day.',
  },
];

const MODELS = ['GPT-4o', 'Claude 3.7 Sonnet', 'Gemini 2.0 Flash', 'Llama 3.3', 'Mistral'];

export default function AISection() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: 100, padding: '4px 14px', fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#a78bfa', marginBottom: 18 }}>
            ✦ AI
          </div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>
            Your Mac just<br />got smarter.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto' }}>
            AI where it&apos;s most useful — right in your OS, without ever opening a browser.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="ai-layout">
          {/* Chat window mockup */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div style={{ background: 'rgba(16,16,20,0.95)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)' }}>
              {/* Window bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
                    <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'block' }} />
                  ))}
                </div>
                <span style={{ flex: 1, textAlign: 'center', fontSize: 12.5, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>AI Chat</span>
              </div>

              {/* Model selector */}
              <div style={{ padding: '10px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 8, overflowX: 'auto' }}>
                {MODELS.map((m, i) => (
                  <span key={m} style={{
                    fontSize: 11.5, fontWeight: 500,
                    padding: '4px 10px', borderRadius: 100, whiteSpace: 'nowrap',
                    background: i === 0 ? 'rgba(167,139,250,0.15)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${i === 0 ? 'rgba(167,139,250,0.3)' : 'rgba(255,255,255,0.07)'}`,
                    color: i === 0 ? '#a78bfa' : 'rgba(255,255,255,0.35)',
                    cursor: 'pointer',
                  }}>{m}</span>
                ))}
              </div>

              {/* Chat body */}
              <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 200 }}>
                {/* User message */}
                <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
                  <div style={{ fontSize: 13.5, lineHeight: 1.6, padding: '10px 14px', borderRadius: '12px 12px 4px 12px', background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.2)', color: '#e0d7ff' }}>
                    What are the key improvements in React 19?
                  </div>
                </div>
                {/* AI response */}
                <div style={{ maxWidth: '90%' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a78bfa', marginBottom: 8 }}>Raycast AI · GPT-4o</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.65, padding: '12px 15px', borderRadius: '4px 12px 12px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)' }}>
                    React 19 introduces <code style={{ background: 'rgba(255,255,255,0.09)', padding: '1px 5px', borderRadius: 4, fontSize: 12, color: '#a78bfa' }}>Actions</code>, the new{' '}
                    <code style={{ background: 'rgba(255,255,255,0.09)', padding: '1px 5px', borderRadius: 4, fontSize: 12, color: '#a78bfa' }}>use()</code> hook, improved Server Components, native form handling with{' '}
                    <code style={{ background: 'rgba(255,255,255,0.09)', padding: '1px 5px', borderRadius: 4, fontSize: 12, color: '#a78bfa' }}>useFormStatus</code>, and better Suspense integration...
                    <span style={{ animation: 'blink 1s infinite', marginLeft: 2 }}>▊</span>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div style={{ padding: '10px 18px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '9px 14px', fontSize: 13.5, color: 'rgba(255,255,255,0.3)' }}>
                  Ask anything…
                </div>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontSize: 14 }}>↑</div>
              </div>
            </div>
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            {AI_FEATURES.map((f) => (
              <div key={f.num} style={{ display: 'flex', gap: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', flexShrink: 0, paddingTop: 3, fontFamily: 'ui-monospace, monospace', letterSpacing: '1px' }}>{f.num}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#fff' }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}

            <a
              href="https://www.raycast.com/core-features/ai"
              target="_blank" rel="noopener noreferrer"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: '#fff',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '10px 20px', fontSize: 14, fontWeight: 600, borderRadius: 10,
                transition: 'all .2s', textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              More about AI →
            </a>
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
