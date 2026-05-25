'use client';

import { motion } from 'framer-motion';
import { DEV_FEATURES, FOOTER_COLS } from '@/data';
import RaycastLogo from './RaycastLogo';

export function Tagline() {
  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 750, letterSpacing: '-1.5px', marginBottom: 10 }}>
          It&apos;s not about saving time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontSize: 'clamp(18px,3vw,32px)', color: 'var(--muted)', fontWeight: 500, letterSpacing: '-0.5px' }}>
          It&apos;s about feeling like you&apos;re never wasting it.
        </motion.p>
      </div>
    </section>
  );
}

export function Community() {
  const cards = [
    { icon: '💬', name: 'Slack', stat: '37k', statLabel: 'members', desc: 'Get the inside track on new features and learn how other people use Raycast.', cta: 'Join →' },
    { icon: '𝕏', name: 'X / Twitter', stat: '90k', statLabel: 'followers', desc: 'Keep up to date with the latest releases, features and improvements.', cta: 'Follow →' },
  ];
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Stay in the loop.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 460, margin: '0 auto' }}>Join the community and learn how other people get the most out of Raycast.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="community-grid">
          {cards.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 38, cursor: 'pointer' }}>
              <div style={{ fontSize: 34, marginBottom: 14 }}>{c.icon}</div>
              <div style={{ fontSize: 30, fontWeight: 830, letterSpacing: '-1.5px', marginBottom: 4 }}>{c.stat} <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--muted)' }}>{c.statLabel}</span></div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{c.name}</div>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 22 }}>{c.desc}</p>
              <button style={{ background: 'transparent', color: 'var(--text)', border: '1px solid rgba(255,255,255,0.12)', padding: '7px 15px', fontSize: 13, borderRadius: 7, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>{c.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.community-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}

export function Developers() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 750, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Developers</div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Build the perfect tools.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>Our extension API lets anyone with web dev skills unleash the power of Raycast.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 16 }}>
          {DEV_FEATURES.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,99,99,0.2)' }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 30, cursor: 'pointer', transition: 'box-shadow .3s' }}>
              <span style={{ fontSize: 30, display: 'block', marginBottom: 16 }}>{f.icon}</span>
              <h3 style={{ fontSize: 16, fontWeight: 720, marginBottom: 9 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'var(--text)', border: '1px solid rgba(255,255,255,0.12)', padding: '10px 20px', fontSize: 14, fontWeight: 600, borderRadius: 9 }}>Get started →</a>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', position: 'relative', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 26, padding: '90px 40px', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,99,99,0.12) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
          }} />
          <h2 style={{ fontSize: 'clamp(38px,6vw,64px)', fontWeight: 840, letterSpacing: '-2.5px', marginBottom: 14, position: 'relative' }}>Take the short way.</h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 38, position: 'relative' }}>Download and use Raycast for free.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22, position: 'relative' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: '#fff', fontWeight: 600, padding: '14px 28px', fontSize: 15, borderRadius: 11, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              Download for Mac
            </button>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', color: 'var(--text)', fontWeight: 600, padding: '14px 28px', fontSize: 15, borderRadius: 11, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Download for Windows (beta)
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'var(--dim)', position: 'relative' }}>v1.104.18 · macOS 13+ · Install via homebrew</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 52 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 750, fontSize: 16, marginBottom: 10 }}>
              <RaycastLogo size={26} id="footer" />
              Raycast
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 30 }}>Your shortcut to everything.</p>
            <p style={{ fontSize: 11, fontWeight: 750, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Subscribe to newsletter</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="you@example.com" style={{
                flex: 1, background: 'var(--surface2)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '9px 13px', color: 'var(--text)',
                fontSize: 13, fontFamily: 'inherit', outline: 'none', minWidth: 0,
              }} />
              <button style={{ background: 'var(--accent)', color: '#fff', fontWeight: 600, padding: '7px 15px', fontSize: 13, borderRadius: 7, border: 'none', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </div>

          {/* Cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 11, fontWeight: 750, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 4 }}>{col.title}</p>
              {col.links.map((link) => (
                <a key={link} href="#" style={{ fontSize: 13, color: 'var(--muted)', transition: 'color .2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text)'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--muted)'}
                >{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--dim)', flexWrap: 'wrap', gap: 12 }}>
          <p>© {new Date().getFullYear()} Raycast Technologies Inc.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Contact'].map((l) => (
              <a key={l} href="#" style={{ color: 'var(--dim)', transition: 'color .2s' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr !important}} @media(max-width:520px){.footer-grid{grid-template-columns:1fr !important}}`}</style>
    </footer>
  );
}
