'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RaycastLogo from './RaycastLogo';

// ── Apple-like icon for download buttons ─────────────────────────────────────
const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width={14} height={14}>
    <path fill="currentColor" d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777" />
  </svg>
);

const WindowsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width={14} height={14}>
    <path fill="currentColor" fillRule="evenodd" d="M0 0h7.584v7.584H0zm8.416 0h7.583v7.584H8.416zm-.832 8.416H0V16h7.584zm.832 0h7.583V16H8.416z" clipRule="evenodd" />
  </svg>
);

// ── Tagline ───────────────────────────────────────────────────────────────────
export function Tagline() {
  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 750, letterSpacing: '-1.5px', marginBottom: 10 }}
        >
          It&apos;s not about saving time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontSize: 'clamp(18px,3vw,32px)', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '-0.5px' }}
        >
          It&apos;s about feeling like you&apos;re never wasting it.
        </motion.p>
      </div>
    </section>
  );
}

// ── Community ─────────────────────────────────────────────────────────────────
export function Community() {
  const cards = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 127 127" fill="none">
          <rect width="127" height="127" rx="19" fill="#611F69"/>
          <path d="M31.7 80.9c0 7-5.7 12.7-12.7 12.7S6.3 87.9 6.3 80.9 12 68.2 19 68.2h12.7v12.7zm6.4 0c0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7v31.8c0 7-5.7 12.7-12.7 12.7s-12.7-5.7-12.7-12.7V80.9zm12.7-49.2c-7 0-12.7-5.7-12.7-12.7S43.8 6.3 50.8 6.3s12.7 5.7 12.7 12.7v12.7H50.8zm0 6.3c7 0 12.7 5.7 12.7 12.7S57.8 63.4 50.8 63.4H19c-7 0-12.7-5.7-12.7-12.7s5.7-12.7 12.7-12.7h31.8zm49.2 12.7c0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7-5.7 12.7-12.7 12.7H100V50.7zm-6.4 0c0 7-5.7 12.7-12.7 12.7s-12.7-5.7-12.7-12.7V19c0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7v31.7zm-12.7 49.2c7 0 12.7 5.7 12.7 12.7s-5.7 12.7-12.7 12.7-12.7-5.7-12.7-12.7V100h12.7zm0-6.4c-7 0-12.7-5.7-12.7-12.7s5.7-12.7 12.7-12.7H108c7 0 12.7 5.7 12.7 12.7s-5.7 12.7-12.7 12.7H80.9z" fill="white"/>
        </svg>
      ),
      name: 'Slack',
      stat: '37k',
      statLabel: 'members',
      desc: 'Get the inside track on new features and learn how other people use Raycast.',
      cta: 'Join community',
      href: 'https://www.raycast.com/community',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.258 5.622 5.905-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      name: 'X / Twitter',
      stat: '90k',
      statLabel: 'followers',
      desc: 'Keep up to date with the latest releases, features and improvements.',
      cta: 'Follow us',
      href: 'https://twitter.com/raycastapp',
    },
  ];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Stay in the loop.</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto' }}>
            Join the community and learn how other people get the most out of Raycast.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="community-grid">
          {cards.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.015 }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                padding: 40,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                {c.icon}
                <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{c.name}</span>
              </div>
              <div style={{ fontSize: 32, fontWeight: 830, letterSpacing: '-1.5px', marginBottom: 4, color: '#fff' }}>
                {c.stat} <span style={{ fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>{c.statLabel}</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 24 }}>{c.desc}</p>
              <button style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px', fontSize: 13, borderRadius: 8, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'background 0.15s, border-color 0.15s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {c.cta}
              </button>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.community-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}

// ── Developers ────────────────────────────────────────────────────────────────
export function Developers() {
  const features = [
    { title: 'React to macOS', desc: 'Use the tools you already know — React and TypeScript — to build extensions that feel truly native on macOS.', icon: '⚛️' },
    { title: 'Built-in UI components', desc: 'Leverage the Raycast design system. Lists, forms, detail views, action panels — all ready to use.', icon: '🎨' },
    { title: 'Batteries included', desc: 'Built-in utilities for storage, OAuth, AI, clipboard, toast notifications, and a whole lot more.', icon: '🔋' },
    { title: 'Publish to the Store', desc: 'Share your extension with 300,000+ Raycast users. Review, publish, and iterate with ease.', icon: '🚀' },
    { title: 'Open source & free', desc: 'Extensions are open source. Your users can trust what they install, and you build on solid foundations.', icon: '🔓' },
    { title: 'Rich documentation', desc: 'Comprehensive API docs, guides, and community support to help you build faster and better.', icon: '📚' },
  ];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 750, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF6363', marginBottom: 14 }}>Developers</div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 820, letterSpacing: '-2.5px', lineHeight: 1.08, marginBottom: 16 }}>Build the perfect tools.</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
            Our extension API lets anyone with web dev skills unleash the power of Raycast.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px,1fr))', gap: 16 }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,99,99,0.18)' }}
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 28, transition: 'border-color .3s, transform .2s' }}
            >
              <span style={{ fontSize: 28, display: 'block', marginBottom: 14 }}>{f.icon}</span>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: '#fff' }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a
            href="https://developers.raycast.com"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '11px 22px', fontSize: 14, fontWeight: 600, borderRadius: 10,
              textDecoration: 'none', transition: 'background 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
          >
            Read the documentation →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center', position: 'relative',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 28, padding: '90px 40px', overflow: 'hidden',
          }}
        >
          {/* Radial glow */}
          <div style={{
            position: 'absolute', width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,99,99,0.08) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
          }} />

          <h2 style={{ fontSize: 'clamp(38px,6vw,64px)', fontWeight: 840, letterSpacing: '-2.5px', marginBottom: 14, position: 'relative', color: '#fff' }}>
            Take the short way.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', marginBottom: 40, position: 'relative' }}>
            Download and use Raycast for free.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20, position: 'relative' }}>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0a0a0a', fontWeight: 600,
              padding: '13px 26px', fontSize: 14.5, borderRadius: 10,
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e8e8e8')}
              onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
            >
              <AppleIcon /> Download for Mac
            </button>
            <a
              href="https://ray.so/download-windows"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                fontWeight: 600, padding: '13px 26px', fontSize: 14.5, borderRadius: 10,
                cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
              <WindowsIcon /> Download for Windows (beta)
            </a>
          </div>

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', position: 'relative', fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}>
            v1.104.19 · macOS 13+ · Free forever
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  {
    title: 'Product',
    links: [
      { label: 'Pro', href: '/pro' },
      { label: 'Teams', href: '/teams' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Browser Extension', href: '/browser-extension' },
      { label: 'Developers', href: '/developers' },
      { label: 'iOS', href: '/ios' },
      { label: 'Windows', href: '/windows' },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Raycast AI', href: '/core-features/ai' },
      { label: 'Clipboard History', href: '/core-features/clipboard-history' },
      { label: 'Window Management', href: '/core-features/window-management' },
      { label: 'Snippets', href: '/core-features/snippets' },
      { label: 'File Search', href: '/core-features/file-search' },
      { label: 'Quicklinks', href: '/core-features/quicklinks' },
      { label: 'Calculator', href: '/core-features/calculator' },
      { label: 'Emoji Picker', href: '/core-features/emoji-picker' },
    ],
  },
  {
    title: 'Extensions',
    links: [
      { label: 'Developer Tools', href: '/store' },
      { label: 'Pomodoro Timer', href: '/store' },
      { label: 'Productivity', href: '/store' },
      { label: 'Project Management', href: '/store' },
      { label: 'Translation', href: '/store' },
      { label: 'AI Extensions', href: '/store' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Customers', href: '/customers' },
      { label: 'Careers', href: '/jobs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press Kit', href: '/press' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Ambassadors', href: '/ambassadors' },
      { label: 'Slack', href: '/community' },
      { label: 'X / Twitter', href: 'https://twitter.com/raycastapp' },
      { label: 'GitHub', href: 'https://github.com/raycast' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 52 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>
              <RaycastLogo size={24} id="footer" />
              Raycast
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 28, lineHeight: 1.6 }}>
              Your shortcut to everything.
            </p>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>
              Subscribe to newsletter
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 8, padding: '9px 13px', color: '#fff',
                  fontSize: 13, fontFamily: 'inherit', outline: 'none', minWidth: 0,
                }}
              />
              <button style={{
                background: '#FF6363', color: '#fff', fontWeight: 600,
                padding: '7px 14px', fontSize: 13, borderRadius: 8,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
              }}>
                Subscribe
              </button>
            </div>
          </div>

          {/* Cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>{col.title}</p>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', transition: 'color .2s', textDecoration: 'none' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)',
          fontSize: 12, color: 'rgba(255,255,255,0.25)', flexWrap: 'wrap', gap: 12,
        }}>
          <p>© {new Date().getFullYear()} Raycast Technologies Inc.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { l: 'Privacy', h: '/privacy-policy' },
              { l: 'Terms', h: '/terms-of-service' },
              { l: 'Contact', h: '/contact' },
            ].map(({ l, h }) => (
              <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.25)', transition: 'color .2s', textDecoration: 'none' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr !important}}
        @media(max-width:520px){.footer-grid{grid-template-columns:1fr !important}}
      `}</style>
    </footer>
  );
}
