'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RaycastLogo from './RaycastLogo';

const NAV_LINKS = [
  { label: 'Store',       href: 'https://www.raycast.com/store' },
  { label: 'Pro',         href: 'https://www.raycast.com/pro' },
  { label: 'AI',          href: 'https://www.raycast.com/core-features/ai' },
  { label: 'iOS',         href: 'https://www.raycast.com/ios' },
  { label: 'Windows',     href: 'https://www.raycast.com/windows' },
  { label: 'Teams',       href: 'https://www.raycast.com/teams' },
  { label: 'Developers',  href: 'https://www.raycast.com/developers' },
  { label: 'Blog',        href: 'https://www.raycast.com/blog' },
  { label: 'Pricing',     href: 'https://www.raycast.com/pricing' },
];

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width={13} height={13}>
    <path fill="currentColor" d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777" />
  </svg>
);

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          width: 'calc(100% - 48px)',
          maxWidth: 1100,
        }}
      >
        {/* The pill container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            background: scrolled ? 'rgba(10,10,10,0.92)' : 'rgba(18,18,18,0.82)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 14,
            padding: '0 8px 0 16px',
            height: 58,
            transition: 'background 0.3s',
          }}
        >
          {/* Logo */}
          <a
            href="https://www.raycast.com"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontWeight: 650, fontSize: 14.5, letterSpacing: '-0.3px',
              color: '#fff', textDecoration: 'none', flexShrink: 0,
              marginRight: 6,
            }}
          >
            <RaycastLogo id="nav" />
            Raycast
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)', marginRight: 6, flexShrink: 0 }} />

          {/* Desktop links — centered */}
          <div style={{ display: 'flex', gap: 0, flex: 1, justifyContent: 'center' }} className="nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 13.5, fontWeight: 500,
                  color: 'rgba(255,255,255,0.5)',
                  padding: '6px 10px', borderRadius: 8,
                  transition: 'color .15s, background .15s',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }} className="nav-actions-desktop">
            <a
              href="https://www.raycast.com/users/sign_in"
              style={{
                fontSize: 13.5, fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                padding: '6px 11px', borderRadius: 8,
                transition: 'color .15s, background .15s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#fff';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Log in
            </a>
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#ffffff', color: '#0a0a0a', fontWeight: 600,
                padding: '7px 14px', fontSize: 13, borderRadius: 8,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'background .15s',
                letterSpacing: '-0.1px',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e4e4e4')}
              onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
            >
              <AppleIcon />
              Download
            </button>
          </div>

          {/* Burger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
              marginLeft: 4,
            }}
            className="nav-burger"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'rgba(255,255,255,0.6)', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'rgba(255,255,255,0.6)', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'rgba(255,255,255,0.6)', borderRadius: 2 }} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              style={{
                marginTop: 8,
                background: 'rgba(12,12,12,0.97)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 14,
                padding: '12px 16px 16px',
                backdropFilter: 'blur(24px)',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block', padding: '11px 4px',
                    color: 'rgba(255,255,255,0.6)', fontSize: 15,
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 14, alignItems: 'center' }}>
                <a href="https://www.raycast.com/users/sign_in" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Log in</a>
                <button style={{
                  background: '#ffffff', color: '#0a0a0a', fontWeight: 600,
                  padding: '9px 18px', fontSize: 14, borderRadius: 8,
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                }}>Download</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @media (max-width: 900px) {
            .nav-links-desktop { display: none !important; }
            .nav-actions-desktop { display: none !important; }
            .nav-burger { display: flex !important; }
          }
        `}</style>
      </nav>
    </>
  );
}
