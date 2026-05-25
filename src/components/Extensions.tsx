'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Cat = 'Productivity' | 'Engineering' | 'Design' | 'Writing';

interface Ext {
  name: string;
  desc: string;
  bg: string;            // card gradient background
  iconBg: string;        // icon badge color
  iconContent: React.ReactNode;
  preview: React.ReactNode;
  cats: Cat[];
}

// ── Icon SVGs ───────────────────────────────────────────────────────────────
const LinearIcon = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#5E6AD2"/>
    <path d="M15 70L70 15M25 80L80 25M36 88L88 36M50 93L93 50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);
const GTranslateIcon = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" fill="#4285F4"/>
    <path d="M34.5 26h-4.5v-4H34.5v4zM13.5 22h21v4h-21v-4z" fill="white"/>
    <text x="12" y="35" fontSize="18" fill="white" fontWeight="bold">A</text>
  </svg>
);
const SpotifyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1DB954">
    <circle cx="12" cy="12" r="12" fill="#1DB954"/>
    <path d="M16.5 16.5c-.2 0-.4-.1-.5-.2-2.4-1.5-5.3-1.8-8.8-1-0.4.1-.8-.2-.9-.6s.2-.8.6-.9c3.8-.9 7-.5 9.7 1.1.3.2.4.6.2.9-.1.2-.3.3-.3.7z" fill="white"/>
    <path d="M17.5 14c-.2 0-.5-.1-.6-.3-2.8-1.7-7-2.2-10.3-1.2-.4.1-.9-.1-1-.5s.1-.9.5-1c3.7-1.1 8.3-.6 11.5 1.4.4.2.5.7.3 1.1-.2.3-.4.5-.4.5z" fill="white"/>
    <path d="M18.5 11.4c-.2 0-.4-.1-.6-.2C14.5 9 8.4 8.8 5 9.7c-.5.1-1-.2-1.1-.7s.2-1 .7-1.1c3.8-1 10.4-.8 14.5 1.9.4.3.6.8.3 1.2-.2.3-.5.4-.9.4z" fill="white"/>
  </svg>
);
const ArcIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#212121"/>
    <path d="M6 18 Q12 4 18 18" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M8 18 Q12 7 16 18" stroke="#6B9DFF" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);
const TinyPNGIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#0A6E5A"/>
    <text x="6" y="16" fontSize="10" fill="white" fontWeight="bold">tPNG</text>
  </svg>
);
const PwdIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#0A4A8A"/>
    <circle cx="12" cy="12" r="6" fill="none" stroke="#4A9EE8" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2.5" fill="#4A9EE8"/>
    <line x1="15" y1="15" x2="18" y2="18" stroke="#4A9EE8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const JiraIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#0A2A6A"/>
    <path d="M12 6L18 12L12 18L6 12Z" fill="none" stroke="#4A7EFF" strokeWidth="2"/>
  </svg>
);
const SlackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#4A154B"/>
    <path d="M9 7.5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0M9 9H6M15 7.5v5a1.5 1.5 0 0 0 3 0M15 9h3M7.5 15a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3M9 15v3M16.5 15a1.5 1.5 0 0 0 0 3M16.5 15v3" stroke="#E01E5A" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const NotionIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#1A1A1A"/>
    <text x="6" y="17" fontSize="14" fill="white" fontWeight="900">N</text>
  </svg>
);

// ── Card Preview Components ──────────────────────────────────────────────────
const LinearPreview = () => (
  <div style={{ position:'relative', flex:1, display:'flex', alignItems:'flex-end', justifyContent:'center', overflow:'hidden' }}>
    <div style={{ position:'absolute', bottom:-20, left:'50%', transform:'translateX(-50%)', width:200, height:200, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.15)', boxShadow:'0 0 40px rgba(94,106,210,0.3)' }}/>
    <div style={{ position:'absolute', bottom:10, left:20, display:'flex', flexDirection:'column', gap:6 }}>
      {[1,2,3].map(i=><div key={i} style={{ display:'flex', alignItems:'center', gap:6 }}><div style={{ width:14, height:14, borderRadius:3, border:'1px solid rgba(255,255,255,0.3)', background: i===1?'rgba(94,106,210,0.6)':'transparent' }}/><div style={{ width:60+i*10, height:2, background:'rgba(255,255,255,0.15)', borderRadius:1 }}/></div>)}
    </div>
  </div>
);

const GoogleTranslatePreview = () => {
  const langs = ['Omelette du fromage  البجلينة','Cheese Omelette  Kaas ome','Tortilla de queso  Ostomelet','Käse omlett  Omelette al forr','Ushizi Omelette  チーズオムレ','Omleta cu branza  Trung tran'];
  return (
    <div style={{ flex:1, overflow:'hidden', padding:'0 0 8px' }}>
      {langs.map((l,i)=>(
        <div key={i} style={{ fontSize:11, color: i%2===0?'rgba(255,255,255,0.75)':'rgba(255,255,255,0.35)', padding:'3px 0', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{l}</div>
      ))}
    </div>
  );
};

const SpotifyPreview = () => (
  <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10 }}>
    <div style={{ width:110, height:110, borderRadius:8, background:'linear-gradient(135deg,#2a2a2a,#1a1a1a)', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ fontSize:40 }}>🎵</div>
    </div>
    <div style={{ display:'flex', gap:16, alignItems:'center' }}>
      {['⏮','⏵','⏭'].map((c,i)=><div key={i} style={{ fontSize: i===1?22:16, color: i===1?'#1DB954':'rgba(255,255,255,0.5)', cursor:'pointer' }}>{c}</div>)}
    </div>
  </div>
);

const ArcPreview = () => (
  <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
      <path d="M20 130 Q80 10 140 130" stroke="url(#arc1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 130 Q80 30 120 130" stroke="url(#arc2)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <defs>
        <linearGradient id="arc1" x1="20" y1="130" x2="140" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B9D"/><stop offset="1" stopColor="#6B9DFF"/>
        </linearGradient>
        <linearGradient id="arc2" x1="40" y1="130" x2="120" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B9DFF" stopOpacity="0.5"/><stop offset="1" stopColor="#FF6B9D" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const TinyPNGPreview = () => (
  <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10 }}>
    <div style={{ display:'flex', gap:10, alignItems:'center' }}>
      <div style={{ background:'rgba(255,255,255,0.08)', borderRadius:8, padding:'10px 18px', fontSize:18, fontWeight:700, color:'#fff' }}>150 KB</div>
      <div style={{ color:'rgba(255,255,255,0.4)', fontSize:18 }}>→</div>
      <div style={{ background:'rgba(10,110,90,0.3)', border:'1px solid rgba(10,200,150,0.3)', borderRadius:8, padding:'10px 18px', fontSize:18, fontWeight:700, color:'#0ac896' }}>24 KB</div>
    </div>
    <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)' }}>84% smaller</div>
  </div>
);

const PasswordPreview = () => (
  <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center' }}>
    <div style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:40, padding:'14px 20px', display:'flex', gap:12 }}>
      {[1,2,3,4,5,6].map(i=>(
        <div key={i} style={{ width:16, height:16, borderRadius:'50%', background: i<=4?'#4A9EE8':'rgba(255,255,255,0.15)', boxShadow: i<=4?'0 0 8px rgba(74,158,232,0.6)':'none' }}/>
      ))}
    </div>
  </div>
);

const JiraPreview = () => (
  <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
    <svg width="140" height="130" viewBox="0 0 140 130" fill="none">
      <path d="M70 10L130 70L70 130L10 70Z" fill="none" stroke="rgba(74,126,255,0.4)" strokeWidth="1.5"/>
      <path d="M70 30L110 70L70 110L30 70Z" fill="none" stroke="rgba(74,126,255,0.6)" strokeWidth="1.5"/>
      <path d="M70 50L90 70L70 90L50 70Z" fill="rgba(74,126,255,0.3)" stroke="rgba(74,126,255,0.8)" strokeWidth="1.5"/>
    </svg>
  </div>
);

const SlackPreview = () => {
  const items = ['Search','Set Presence','Set Snooze','Unread Messages'];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:6, padding:'0 4px' }}>
      {items.map((t,i)=>(
        <div key={i} style={{ background: i===0?'rgba(255,255,255,0.1)':'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:'7px 12px', fontSize:12, color: i===0?'#fff':'rgba(255,255,255,0.55)', cursor:'pointer' }}>{t}</div>
      ))}
    </div>
  );
};

const NotionPreview = () => {
  const btns = [
    { label:'Docs', color:'#F59E0B', emoji:'📄' },
    { label:'AI', color:'#8B5CF6', emoji:'✦' },
    { label:'Wikis', color:'#F97316', emoji:'📚' },
    { label:'Projects', color:'#3B82F6', emoji:'🎯' },
  ];
  return (
    <div style={{ flex:1, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, padding:'4px' }}>
      {btns.map(b=>(
        <div key={b.label} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'12px', display:'flex', flexDirection:'column', gap:6, cursor:'pointer' }}>
          <span style={{ fontSize:18 }}>{b.emoji}</span>
          <span style={{ fontSize:12, color:'rgba(255,255,255,0.7)' }}>{b.label}</span>
        </div>
      ))}
    </div>
  );
};

// ── Extension Data ──────────────────────────────────────────────────────────
const EXTENSIONS: Ext[] = [
  { name:'Linear', desc:'Create, search and modify your issues without leaving your keyboard.', bg:'radial-gradient(ellipse at 55% 100%, #202878 0%, #0e1245 38%, #070920 100%)', iconBg:'rgba(94,106,210,0.25)', iconContent:<LinearIcon/>, preview:<LinearPreview/>, cats:['Productivity','Engineering'] },
  { name:'Google Translate', desc:'Use Google Translate to effortlessly translate into multiple languages.', bg:'radial-gradient(ellipse at 50% 100%, #0e3a4c 0%, #07181e 45%, #030b0e 100%)', iconBg:'rgba(66,133,244,0.2)', iconContent:<GTranslateIcon/>, preview:<GoogleTranslatePreview/>, cats:['Productivity','Writing'] },
  { name:'Spotify', desc:'Search for music and podcasts, browse your library, and control playback.', bg:'radial-gradient(ellipse at 50% 70%, #0d6b25 0%, #052d10 38%, #020e04 100%)', iconBg:'rgba(29,185,84,0.25)', iconContent:<SpotifyIcon/>, preview:<SpotifyPreview/>, cats:['Productivity'] },
  { name:'Arc', desc:'Navigate your open tabs or search through your browser history.', bg:'radial-gradient(ellipse at 45% 100%, #2c1068 0%, #130728 42%, #060310 100%)', iconBg:'rgba(140,100,255,0.22)', iconContent:<ArcIcon/>, preview:<ArcPreview/>, cats:['Productivity'] },
  { name:'TinyPNG', desc:'Compress the selected images in Finder with TinyPNG.', bg:'radial-gradient(ellipse at 50% 90%, #0f4838 0%, #061e16 42%, #020c09 100%)', iconBg:'rgba(14,110,85,0.25)', iconContent:<TinyPNGIcon/>, preview:<TinyPNGPreview/>, cats:['Design','Engineering'] },
  { name:'1Password', desc:'Easily grab any password or credential from your 1Password vaults.', bg:'radial-gradient(ellipse at 50% 90%, #0a3070 0%, #06142c 42%, #02050e 100%)', iconBg:'rgba(10,80,180,0.25)', iconContent:<PwdIcon/>, preview:<PasswordPreview/>, cats:['Engineering'] },
  { name:'JIRA', desc:'Manage your JIRA issues and sprints without leaving your keyboard.', bg:'radial-gradient(ellipse at 55% 100%, #0c1e5c 0%, #060e2a 42%, #020408 100%)', iconBg:'rgba(0,82,204,0.22)', iconContent:<JiraIcon/>, preview:<JiraPreview/>, cats:['Engineering'] },
  { name:'Slack', desc:'Set your presence, see unread messages and search your chats.', bg:'radial-gradient(ellipse at 50% 90%, #3e1048 0%, #1a061e 42%, #09030c 100%)', iconBg:'rgba(224,30,90,0.22)', iconContent:<SlackIcon/>, preview:<SlackPreview/>, cats:['Productivity'] },
  { name:'Notion', desc:'The fastest way to search and create Notion pages.', bg:'radial-gradient(ellipse at 50% 90%, #2a2a2a 0%, #141414 42%, #080808 100%)', iconBg:'rgba(255,255,255,0.08)', iconContent:<NotionIcon/>, preview:<NotionPreview/>, cats:['Productivity','Writing'] },
];

const CATS: { label: string; value: Cat | 'all' }[] = [
  { label:'Productivity', value:'Productivity' },
  { label:'Engineering',  value:'Engineering'  },
  { label:'Design',       value:'Design'       },
  { label:'Writing',      value:'Writing'      },
];

export default function Extensions() {
  const [active, setActive] = useState<Cat | 'all'>('Productivity');
  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Mouse drag-to-scroll ──────────────────────────────────────────────────
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };
  const onMouseLeave = () => {
    drag.current.active = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseUp = () => {
    drag.current.active = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.active || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.5;
    scrollRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  const filtered = active === 'all' ? EXTENSIONS : EXTENSIONS.filter(e => e.cats.includes(active as Cat));

  return (
    <section style={{ padding:'100px 0', overflow:'hidden', position:'relative' }}>
      {/* Header row */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 40px', display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:48 }}>
        <div>
          <h2 style={{ fontSize:'clamp(26px,3vw,36px)', fontWeight:700, color:'#fff', letterSpacing:'-0.5px', lineHeight:1.2, marginBottom:10 }}>
            There's an extension for that.
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.45)', lineHeight:1.5, maxWidth:300 }}>
            Use your favorite tools without even opening them.
          </p>
        </div>

        {/* Category pill tabs */}
        <div style={{ display:'flex', alignItems:'center', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:100, padding:'4px', gap:2 }}>
          {CATS.map(cat => (
            <button key={cat.value} onClick={() => setActive(cat.value)} style={{
              fontSize:13, fontWeight:500, padding:'7px 16px', borderRadius:100,
              border:'none', cursor:'pointer', fontFamily:'inherit',
              background: active===cat.value ? 'rgba(255,255,255,0.15)' : 'transparent',
              color: active===cat.value ? '#fff' : 'rgba(255,255,255,0.45)',
              transition:'all 0.2s ease',
            }}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll carousel — wrapped for right-fade effect */}
      <div style={{ position:'relative' }}>
        {/* Right fade overlay */}
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:120, background:'linear-gradient(to left, #0a0a0a 0%, transparent 100%)', zIndex:10, pointerEvents:'none' }} />
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="ext-carousel"
          style={{
            display:'flex', gap:16, overflowX:'auto', padding:'8px 40px 40px',
            scrollbarWidth:'none',
            WebkitOverflowScrolling:'touch',
            scrollSnapType:'x proximity',
            cursor:'grab',
          }}
        >
        <AnimatePresence mode="wait">
          {filtered.map((ext, i) => (
            <motion.div
              key={ext.name + active}
              initial={{ opacity:0, x:30 }}
              animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:-20 }}
              transition={{ duration:0.3, delay: i * 0.06 }}
              whileHover={{ y:-4, transition:{duration:0.2} }}
              style={{
                flexShrink:0, width:320, height:480,
                background: ext.bg,
                borderRadius:20,
                border:'1px solid rgba(255,255,255,0.08)',
                display:'flex', flexDirection:'column',
                padding:20, cursor:'pointer',
                overflow:'hidden', position:'relative',
                boxShadow:'0 8px 32px rgba(0,0,0,0.4)',
                scrollSnapAlign:'start',
                willChange:'transform',
              }}
            >
              {/* Card header */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14, flexShrink:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:ext.iconBg, border:'1px solid rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {ext.iconContent}
                  </div>
                  <span style={{ fontSize:15, fontWeight:600, color:'#fff' }}>{ext.name}</span>
                </div>
                <div style={{ width:28, height:28, borderRadius:8, background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, color:'rgba(255,255,255,0.6)' }}>›</div>
              </div>

              {/* Description */}
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.55, margin:0, flexShrink:0 }}>{ext.desc}</p>

              {/* Preview area */}
              <div style={{ flex:1, marginTop:16, overflow:'hidden', display:'flex', flexDirection:'column' }}>
                {ext.preview}
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            key={'cta-' + active}
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-20 }}
            transition={{ duration:0.3, delay: filtered.length * 0.06 }}
            whileHover={{ y:-4, transition:{duration:0.2} }}
            style={{
              flexShrink:0, width:320, height:480,
              background:'linear-gradient(160deg,#111 0%,#0a0a0a 100%)',
              borderRadius:20, border:'1px solid rgba(255,255,255,0.08)',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              padding:24, cursor:'pointer', gap:16, boxShadow:'0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, marginBottom:8, opacity:0.5 }}>
              {['🎯','📦','🔐','🎨','⚙️','📊','🔔','📅','🌐','🔍','💬','🚀'].map((e,i)=>(
                <div key={i} style={{ width:36, height:36, borderRadius:8, background:'rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>{e}</div>
              ))}
            </div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', margin:0, textAlign:'center' }}>Plus thousands more</p>
            <a href="#" style={{ fontSize:14, fontWeight:600, color:'#fff', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
              Browse the store <span>→</span>
            </a>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`.ext-carousel::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
