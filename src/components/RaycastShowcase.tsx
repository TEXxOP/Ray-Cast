'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardContent, AIContent, EmojiContent, CalculatorContent, WindowContent } from './ShowcaseContents';

// ── SVG Tab Icons ────────────────────────────────
const ClipSVG  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="3" y="6" width="18" height="16" rx="2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>;
const StarSVG  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>;
const SmiSVG   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>;
const CalcSVG  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="10" x2="8" y2="10" strokeWidth="2.5"/><line x1="12" y1="10" x2="12" y2="10" strokeWidth="2.5"/><line x1="16" y1="10" x2="16" y2="10" strokeWidth="2.5"/><line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5"/><line x1="12" y1="14" x2="16" y2="14" strokeWidth="2.5"/><line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5"/><line x1="8" y1="6" x2="16" y2="6"/></svg>;
const WinSVG   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="2" y1="9" x2="12" y2="9"/></svg>;

const TABS = [
  { id: 'clipboard',   Icon: ClipSVG,  label: 'Clipboard History', query: 'magic at your fingertips' },
  { id: 'ai',          Icon: StarSVG,  label: 'AI',                query: 'which note taking apps…' },
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
    }, 38);
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

  // auto-cycle every 4 s
  useEffect(() => {
    autoRef.current = setTimeout(() => goTo((active + 1) % TABS.length), 4000);
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const cap = CAPTIONS[tab.id];

  return (
    <section style={{ width:'100%', display:'flex', flexDirection:'column', alignItems:'center', padding:'0 24px 100px' }}>
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true, margin:'-80px' }}
        transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
        style={{
          width:'100%', maxWidth:800,
          background:'rgba(16,16,18,0.92)',
          backdropFilter:'blur(28px)',
          borderRadius:16,
          border:'1px solid rgba(255,255,255,0.09)',
          boxShadow:'0 40px 120px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.04)',
          overflow:'hidden',
        }}
      >
        {/* macOS system menu bar */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'5px 14px', background:'rgba(255,255,255,0.03)', borderBottom:'1px solid rgba(255,255,255,0.06)', fontSize:11.5, color:'rgba(255,255,255,0.5)' }}>
          <div style={{ display:'flex', gap:14 }}>
            <span style={{ fontWeight:700, color:'rgba(255,255,255,0.7)' }}>🍎</span>
            {['Finder','File','Edit','View','Go','Window','Help'].map(m => <span key={m}>{m}</span>)}
          </div>
          <div style={{ display:'flex', gap:14, alignItems:'center' }}>
            <span>⬆ 49</span>
            <span>🌐 1</span>
            <span>Lunch · 37m left</span>
            <span>📶</span>
            <span>🔋</span>
            <span style={{ fontWeight:500, color:'rgba(255,255,255,0.65)' }}>Mon Jun 22&nbsp;&nbsp;9:41 AM</span>
          </div>
        </div>

        {/* Window traffic lights + search bar */}
        <div style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderBottom:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,255,255,0.015)' }}>
          <div style={{ display:'flex', gap:6 }}>
            {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <div key={i} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
          </div>
          <div style={{ flex:1, display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.05)', borderRadius:8, padding:'5px 12px', border:'1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize:11, color:'rgba(255,255,255,0.3)' }}>←</span>
            <span style={{ fontSize:13, color:'rgba(255,255,255,0.85)', flex:1, minHeight:18 }}>
              {typed}<span style={{ opacity: typed.length < tab.query.length ? 1 : 0, borderRight:'1.5px solid rgba(255,255,255,0.6)', marginLeft:1 }}>&nbsp;</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity:0, y:8 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }}
            transition={{ duration:0.22 }}
          >
            {CONTENT[tab.id]}
          </motion.div>
        </AnimatePresence>

        {/* Status bar */}
        <div style={{ padding:'7px 14px', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', justifyContent:'space-between', background:'rgba(255,255,255,0.015)', fontSize:11.5 }}>
          <div style={{ display:'flex', alignItems:'center', gap:6, color:'rgba(255,255,255,0.4)' }}>
            <div style={{ width:15, height:15, borderRadius:4, background:'#FF6B35', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <tab.Icon />
            </div>
            {tab.label}
          </div>
          <div style={{ display:'flex', gap:14, color:'rgba(255,255,255,0.3)' }}>
            <span>Copy to Clipboard <kbd style={{ background:'rgba(255,255,255,0.07)', borderRadius:4, padding:'1px 5px' }}>↵</kbd></span>
            <span>Actions <kbd style={{ background:'rgba(255,255,255,0.07)', borderRadius:4, padding:'1px 5px' }}>⌘K</kbd></span>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display:'flex', justifyContent:'center', gap:10, padding:'12px 14px', borderTop:'1px solid rgba(255,255,255,0.06)', background:'rgba(0,0,0,0.2)' }}>
          {TABS.map(({ id, Icon, label }, i) => (
            <div key={id} style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center' }}>
              {active === i && (
                <motion.div layoutId="tip" style={{ position:'absolute', bottom:'calc(100% + 8px)', background:'rgba(28,28,30,0.97)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, padding:'4px 10px', fontSize:11, color:'rgba(255,255,255,0.75)', whiteSpace:'nowrap', pointerEvents:'none' }}
                  transition={{ type:'spring', stiffness:380, damping:28 }}>
                  {label}
                </motion.div>
              )}
              <button onClick={() => goTo(i)} title={label} style={{
                width:46, height:46, borderRadius:12,
                border:'1px solid rgba(255,255,255,0.08)',
                background: active===i ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
                color: active===i ? '#ffffff' : 'rgba(255,255,255,0.42)',
                cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.18s ease', outline:'none',
              }}>
                <Icon />
              </button>
              {/* progress bar under active tab */}
              {active === i && (
                <motion.div key={active + '-bar'}
                  initial={{ scaleX:0 }} animate={{ scaleX:1 }}
                  transition={{ duration:4, ease:'linear' }}
                  style={{ height:2, width:46, background:'rgba(255,255,255,0.3)', borderRadius:1, marginTop:4, transformOrigin:'left' }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Caption */}
      <AnimatePresence mode="wait">
        <motion.p key={tab.id + '-cap'}
          initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
          transition={{ duration:0.25 }}
          style={{ marginTop:26, textAlign:'center', maxWidth:500, fontSize:16.5, lineHeight:1.65, color:'rgba(255,255,255,0.55)', fontWeight:400 }}
        >
          <strong style={{ color:'#fff', fontWeight:600 }}>{cap.title}</strong>{' '}{cap.sub}
        </motion.p>
      </AnimatePresence>
    </section>
  );
}
