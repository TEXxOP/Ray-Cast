'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardContent, AIContent, EmojiContent, CalculatorContent, WindowContent } from './ShowcaseContents';
import Dock from './Dock';

// ── SVG Tab Icons ────────────────────────────────
const ClipSVG  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="3" y="6" width="18" height="16" rx="2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>;
const StarSVG  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>;
const SmiSVG   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>;
const CalcSVG  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="10" x2="8" y2="10" strokeWidth="2.5"/><line x1="12" y1="10" x2="12" y2="10" strokeWidth="2.5"/><line x1="16" y1="10" x2="16" y2="10" strokeWidth="2.5"/><line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5"/><line x1="12" y1="14" x2="16" y2="14" strokeWidth="2.5"/><line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5"/><line x1="8" y1="6" x2="16" y2="6"/></svg>;
const WinSVG   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="2" y1="9" x2="12" y2="9"/></svg>;

const TABS = [
  { id: 'clipboard',   Icon: ClipSVG,  label: 'Clipboard History', query: 'magic at your fingertips' },
  { id: 'ai',          Icon: StarSVG,  label: 'AI',                query: 'which note taking apps support markdown?' },
  { id: 'emoji',       Icon: SmiSVG,   label: 'Emoji Picker',      query: 'Search Emoji & Symbols…' },
  { id: 'calculator',  Icon: CalcSVG,  label: 'Calculator',        query: '12pm here in london' },
  { id: 'window',      Icon: WinSVG,   label: 'Window Management', query: 'window management' },
];

const CONTENT: Record<string, React.ReactNode> = {
  clipboard:  <ClipboardContent />,
  ai:         <AIContent />,
  emoji:      <EmojiContent />,
  calculator: <CalculatorContent />,
  window:     <WindowContent />,
};

const CAPTIONS: Record<string, { title: string; sub: string }> = {
  clipboard:  { title: 'Remember Everything.', sub: "Stop playing Clipboard ping pong — you'll never forget anything." },
  ai:         { title: 'Be Curious.',           sub: 'Ask AI anything without ever leaving your keyboard.' },
  emoji:      { title: 'Express Yourself.',     sub: 'Search emojis and symbols and paste them anywhere.' },
  calculator: { title: 'Calculate Anything.',   sub: 'Currencies, units, time zones — all in natural language.' },
  window:     { title: 'Tidy Up.',              sub: 'Resize and reorganize windows without touching your mouse.' },
};

// Typing animation hook
function useTyped(target: string, running: boolean) {
  const [text, setText] = useState('');
  useEffect(() => {
    setText('');
    if (!running) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(target.slice(0, i));
      if (i >= target.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [target, running]);
  return text;
}

export default function RaycastShowcase() {
  const [active, setActive]     = useState(0);
  const [typing, setTyping]     = useState(true);
  const autoRef                 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tab                     = TABS[active];
  const typed                   = useTyped(tab.query, typing);

  const goTo = (i: number) => {
    setActive(i);
    setTyping(false);
    setTimeout(() => setTyping(true), 80);
  };

  useEffect(() => {
    autoRef.current = setTimeout(() => goTo((active + 1) % TABS.length), 4500);
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const cap = CAPTIONS[tab.id];

  return (
    <section style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 24px',
      position: 'relative',
    }}>
      {/* ── Outer background glow and stars ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#0a0a0a',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,150,150,0.04) 0%, transparent 70%)',
          zIndex: 1,
        }} />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.6,
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.8) 100%, transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.6) 100%, transparent),
            radial-gradient(1.5px 1.5px at 90px 40px, rgba(255,255,255,0.9) 100%, transparent),
            radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.4) 100%, transparent),
            radial-gradient(1px 1px at 210px 90px, rgba(255,255,255,0.7) 100%, transparent),
            radial-gradient(1px 1px at 260px 180px, rgba(255,255,255,0.5) 100%, transparent),
            radial-gradient(1.5px 1.5px at 320px 50px, rgba(255,255,255,0.8) 100%, transparent)
          `,
          backgroundSize: '400px 400px',
          zIndex: 0
        }} />
      </div>

      {/* ── MacBook Frame ── */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: 1024,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Laptop lid — the screen portion */}
        <div style={{
          background: '#000000',
          border: '2px solid #1a1a1a',
          borderBottom: 'none',
          borderRadius: '20px 20px 0 0',
          padding: '16px 16px 0',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 -4px 60px rgba(0,0,0,0.6)',
          position: 'relative',
        }}>
          {/* Screen area (where the macOS UI lives) */}
          <div style={{
            position: 'relative',
            borderRadius: '8px 8px 0 0',
            overflow: 'hidden',
            background: '#0c0c0e',
          }}>
            {/* Desktop background with subtle gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(140% 140% at 5% 105%, rgba(255, 40, 40, 0.4) 0%, transparent 50%),
                radial-gradient(100% 100% at 85% 0%, rgba(255, 60, 60, 0.25) 0%, transparent 50%),
                #050505
              `,
              zIndex: 0,
            }} />

            {/* macOS menu bar */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px 14px',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(20px)',
              fontSize: 12.5,
              color: 'rgba(255,255,255,0.6)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.9)' }}>
                  <svg width="12" height="15" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </span>
                {['Finder','File','Edit','View','Go','Window','Help'].map(m => (
                  <span key={m} style={{ fontWeight: m==='Finder'?600:500, color: m==='Finder'?'rgba(255,255,255,0.9)':'rgba(255,255,255,0.7)' }}>{m}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> 49</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> 1</span>
                <span>Lunch - 37m left</span>
                <span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg></span>
                <span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg></span>
                <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.9)', fontSize: 13 }}>Mon Jun 22&nbsp;&nbsp;9:41 AM</span>
              </div>
            </div>

            {/* ── Raycast Launcher Floating Window ── */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: 700,
              margin: '48px auto 0',
              background: 'rgba(18, 18, 20, 0.82)',
              backdropFilter: 'blur(40px) saturate(200%)',
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 28px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: 480,
            }}>
              {/* Search bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', gap: 7 }}>
                  {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, border: '1px solid rgba(0,0,0,0.15)' }} />)}
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 7, padding: '7px 12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.25)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', flex: 1, height: 20, display: 'flex', alignItems: 'center', letterSpacing: '-0.2px' }}>
                    {typed}<span style={{ opacity: typed.length < tab.query.length ? 1 : 0, borderRight: '2px solid rgba(255,255,255,0.7)', marginLeft: 1, height: 15 }}>&nbsp;</span>
                  </span>
                </div>
              </div>

              {/* Dynamic inner content */}
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: 'rgba(0,0,0,0.15)' }}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div key={active}
                    initial={{ opacity: 0, filter: 'blur(6px)', scale: 0.97 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, filter: 'blur(6px)', scale: 1.03 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    {CONTENT[tab.id]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action status bar */}
              <div style={{ padding: '8px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', fontSize: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                  <div style={{ width: 16, height: 16, borderRadius: 4, background: tab.id==='ai'?'#A78BFA':'#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <tab.Icon />
                  </div>
                  {tab.label}
                </div>
                <div style={{ display: 'flex', gap: 14, color: 'rgba(255,255,255,0.35)', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>Copy <kbd style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 3, padding: '1px 5px', fontSize: 10.5, color: '#fff', fontFamily: 'inherit' }}>↵</kbd></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>Actions <kbd style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 3, padding: '1px 5px', fontSize: 10.5, color: '#fff', fontFamily: 'inherit' }}>⌘K</kbd></span>
                </div>
              </div>
            </div>

            {/* Bottom space below the Raycast window inside screen */}
            <div style={{ height: 48 }} />
          </div>
        </div>

        {/* MacBook chin / bottom bezel with notch-like center */}
        <div style={{
          height: 20,
          background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 40%, #0e0e0e 100%)',
          borderRadius: '0 0 4px 4px',
          border: '1px solid rgba(255,255,255,0.08)',
          borderTop: 'none',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Hinge dip indicator */}
          <div style={{
            width: 80,
            height: 4,
            borderRadius: '0 0 4px 4px',
            background: 'rgba(255,255,255,0.06)',
          }} />
        </div>

        {/* Laptop base/body */}
        <div style={{
          height: 10,
          width: '108%',
          marginLeft: '-4%',
          background: 'linear-gradient(180deg, #1a1a1a, #0d0d0d)',
          borderRadius: '0 0 8px 8px',
          border: '1px solid rgba(255,255,255,0.06)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }} />

        {/* ── Feature tab bar (below the MacBook) ── */}
        <div style={{ display:'flex', justifyContent:'center', padding:'36px 0 0', zIndex: 10, width: '100%' }}>
          <Dock
            items={TABS.map((tab, i) => ({
              icon: <tab.Icon />,
              label: tab.label,
              onClick: () => goTo(i),
              isActive: active === i
            }))}
            panelHeight={60}
            baseItemSize={46}
            magnification={65}
            distance={100}
          />
        </div>
      </motion.div>

      {/* Caption Text */}
      <AnimatePresence mode="wait">
        <motion.p key={tab.id + '-cap'}
          initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
          transition={{ duration:0.3 }}
          style={{ marginTop:14, textAlign:'center', maxWidth:600, fontSize:17, lineHeight:1.6, color:'rgba(255,255,255,0.55)', fontWeight:400, position: 'relative', zIndex: 1 }}
        >
          <strong style={{ color:'#fff', fontWeight:600 }}>{cap.title}</strong>{' '}{cap.sub}
        </motion.p>
      </AnimatePresence>
    </section>
  );
}
