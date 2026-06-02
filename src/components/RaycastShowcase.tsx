'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardContent, AIContent, EmojiContent, CalculatorContent, WindowContent } from './ShowcaseContents';
import BorderGlow from './BorderGlow';

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
      {/* ── Outer background glow ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,150,150,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

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
          border: '1px solid rgba(255,255,255,0.12)',
          borderBottom: 'none',
          borderRadius: '16px 16px 0 0',
          padding: '12px 12px 0',
          boxShadow: '0 -4px 60px rgba(0,0,0,0.5)',
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
                radial-gradient(ellipse 80% 60% at 50% 10%, rgba(255,120,120,0.08) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 30% 80%, rgba(100,120,255,0.04) 0%, transparent 50%),
                #0c0c0e
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
                <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}></span>
                {['Finder','File','Edit','View','Go','Window','Help'].map(m => (
                  <span key={m} style={{ fontWeight: m==='Finder'?600:400, color: m==='Finder'?'rgba(255,255,255,0.9)':'rgba(255,255,255,0.6)' }}>{m}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg></span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg></span>
                <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Mon Jun 2&nbsp;&nbsp;9:41 AM</span>
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
        <div style={{ display:'flex', justifyContent:'center', gap:12, padding:'36px 0 0', zIndex: 10 }}>
          {TABS.map(({ id, Icon, label }, i) => (
            <div key={id} style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center' }}>
              {active === i && (
                <motion.div layoutId="tip" style={{ position:'absolute', bottom:'calc(100% + 10px)', background:'rgba(28,28,30,0.95)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:8, padding:'5px 11px', fontSize:11.5, color:'#fff', whiteSpace:'nowrap', pointerEvents:'none', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', fontWeight: 500 }}
                  transition={{ type:'spring', stiffness:400, damping:30 }}>
                  {label}
                  <div style={{ position: 'absolute', bottom: -5, left: '50%', marginLeft: -5, width: 10, height: 10, background: 'rgba(28,28,30,0.95)', borderRight: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)', transform: 'rotate(45deg)' }} />
                </motion.div>
              )}
              <BorderGlow
                edgeSensitivity={20}
                glowColor={active === i ? '0 100 65' : '40 80 80'}
                backgroundColor={active===i ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.03)'}
                borderRadius={13}
                glowRadius={10}
                glowIntensity={0.8}
                coneSpread={20}
                animated={false}
                colors={active === i ? ['#ff4040', '#ff6b35', '#ff4040'] : ['#c084fc', '#f472b6', '#38bdf8']}
              >
                <button onClick={() => goTo(i)} title={label} style={{
                  width:46, height:46, borderRadius:13,
                  border:'none',
                  background: 'transparent',
                  color: active===i ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
                  transition:'all 0.2s ease', outline:'none',
                  boxShadow: active===i ? '0 4px 16px rgba(0,0,0,0.3)' : 'none',
                }}>
                  <Icon />
                </button>
              </BorderGlow>
              {/* progress bar under active tab */}
              {active === i && (
                <motion.div key={active + '-bar'}
                  initial={{ scaleX:0 }} animate={{ scaleX:1 }}
                  transition={{ duration:4.5, ease:'linear' }}
                  style={{ height:2.5, width:46, background:'#ff4040', borderRadius:3, marginTop:8, transformOrigin:'left', boxShadow: '0 0 8px rgba(255,64,64,0.5)' }}
                />
              )}
            </div>
          ))}
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
