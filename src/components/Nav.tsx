'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RaycastLogo from './RaycastLogo';
import { NAV_LINKS } from '@/data';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Floating pill nav — always visible, matches raycast.com ── */}
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
            background: 'rgba(18, 18, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14,
            padding: '0 8px 0 16px',
            height: 62,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontWeight: 650, fontSize: 15, letterSpacing: '-0.3px',
              color: '#fff', textDecoration: 'none', flexShrink: 0,
              marginRight: 8,
            }}
          >
            <RaycastLogo id="nav" />
            Raycast
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.1)', marginRight: 8, flexShrink: 0 }} />

          {/* Desktop links — centered */}
          <div
            style={{ display: 'flex', gap: 0, flex: 1, justifyContent: 'center' }}
            className="nav-links-desktop"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 13.5, fontWeight: 500,
                  color: 'rgba(255,255,255,0.55)',
                  padding: '6px 11px', borderRadius: 8,
                  transition: 'color .15s, background .15s',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}
            className="nav-actions-desktop"
          >
            <a
              href="#"
              style={{
                fontSize: 13.5, fontWeight: 500,
                color: 'rgba(255,255,255,0.55)',
                padding: '6px 11px', borderRadius: 8,
                transition: 'color .15s, background .15s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#fff';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
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
              <svg width="13" height="13" viewBox="0 0 814 1000" fill="#0a0a0a">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.7-38.2-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.2 268.9-317.2 99.2 0 148.9 65.2 162.8 65.2 13.3 0 63.6-68.8 166.8-68.8 43.2 0 160.9 13.5 243.9 117.1zm-97.4-174.3c-4.5-28.4-17.5-91.2-51.2-133.3-30.9-37.5-86.1-64.9-133.8-64.9-2 0-4 .2-5.9.4 1.1 32.2 13.3 98.3 47.2 143.6 37.1 49.3 87.2 78.4 143.7 54.2z" />
              </svg>
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
                background: 'rgba(18,18,18,0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: '12px 16px 16px',
                backdropFilter: 'blur(20px)',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block', padding: '10px 4px',
                    color: 'rgba(255,255,255,0.6)', fontSize: 15,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                  }}
                >
                  {link}
                </a>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 14, alignItems: 'center' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Log in</a>
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
          @media (max-width: 768px) {
            .nav-links-desktop { display: none !important; }
            .nav-actions-desktop { display: none !important; }
            .nav-burger { display: flex !important; }
          }
        `}</style>
      </nav>
    </>
  );
}
