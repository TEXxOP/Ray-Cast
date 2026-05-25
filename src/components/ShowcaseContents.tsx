'use client';
import { motion } from 'framer-motion';

const row = { hidden: { opacity: 0, x: -10 }, show: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.07, duration: 0.3 } }) };

export function ClipboardContent() {
  const items = [
    { label: 'Image (842 × 420)', sub: 'Figma · Image', selected: true },
    { label: '#FF6363', sub: 'VS Code · Color' },
    { label: 'https://raycast.com', sub: 'Chrome · Link' },
    { label: 'export default function…', sub: 'VS Code · Text' },
    { label: 'hello@raycast.com', sub: 'Mail · Text' },
  ];
  return (
    <div style={{ display: 'flex', height: 340, fontFamily: '-apple-system,sans-serif' }}>
      <div style={{ width: '45%', borderRight: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
        <div style={{ padding: '8px 12px 4px', fontSize: 10.5, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>TODAY</div>
        {items.map((item, i) => (
          <motion.div key={i} custom={i} initial="hidden" animate="show" variants={row}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px',
              background: item.selected ? 'rgba(255,255,255,0.08)' : 'transparent',
              borderRadius: 6, margin: '1px 4px', cursor: 'pointer' }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,255,255,0.06)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>
              {i === 0 ? '🖼' : i === 1 ? '🎨' : i === 2 ? '🔗' : i === 3 ? '📝' : '✉️'}
            </div>
            <div>
              <div style={{ fontSize: 12.5, color: item.selected ? '#fff' : 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{item.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          style={{ margin: 10, borderRadius: 10, overflow: 'hidden', background: 'linear-gradient(135deg,#1a0a2e,#2d0a3e,#0a1a3e)', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.2, padding: '0 10px' }}>Magic at<br/>your fingertips</div>
          <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '0 14px' }}>Unlock the power of AI on your Mac.</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}
          style={{ padding: '6px 14px', fontSize: 11.5 }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 6 }}>Information</div>
          {[['Application','Figma'],['Content Type','Image'],['Dimensions','842 × 420'],['Image Size','626.55 KB']].map(([k,v],i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{k}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)' }}>{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function AIContent() {
  const lines = ['Obsidian – Local folder-based knowledge base','Notion – Hybrid workspace with Markdown','Typora – Minimal editor with live preview','Bear – Writing app for Mac and iOS','Joplin – Open-source notebook notes'];
  return (
    <div style={{ fontFamily: '-apple-system,sans-serif', height: 340, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 13.5, color: '#fff' }}>
        which note taking apps support markdown?
      </div>
      <div style={{ flex: 1, overflow: 'hidden', padding: 10 }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 12 }}>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>which note taking apps support markdown?</div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, margin: '0 0 8px' }}>
            Several note-taking apps support Markdown. Here are some popular ones:
          </motion.p>
          <ol style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0, paddingLeft: 14 }}>
            {lines.map((t, i) => (
              <motion.li key={i} custom={i} initial="hidden" animate="show" variants={row}>{t}</motion.li>
            ))}
          </ol>
          <div style={{ marginTop: 10, fontSize: 10.5, color: 'rgba(255,255,255,0.3)' }}>References</div>
          <div style={{ display: 'flex', gap: 5, marginTop: 4 }}>
            {['1 Notion','2 Obsidian','3 +10 more'].map((r,i) => (
              <motion.span key={i} custom={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: '2px 8px', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{r}</motion.span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: '8px 14px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.4)' }}>Raycast AI</span>
        <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.3)' }}>Actions <kbd style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: '1px 5px' }}>⌘K</kbd></span>
      </div>
    </div>
  );
}

export function EmojiContent() {
  const pinned  = ['❤️','👋','👍','🚀','🎉','🙏'];
  const smileys = ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩'];
  return (
    <div style={{ fontFamily: '-apple-system,sans-serif', height: 340, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>←</span>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Search Emoji &amp; Symbols...</span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', padding: '6px 12px' }}>
        <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', marginBottom: 5 }}>PINNED</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 4, marginBottom: 10 }}>
          {pinned.map((e,i) => (
            <motion.div key={i} custom={i} initial="hidden" animate="show" variants={row}
              style={{ aspectRatio:'1', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, borderRadius:8, background: i===0 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)', cursor:'pointer' }}>{e}</motion.div>
          ))}
        </div>
        <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', marginBottom: 5 }}>SMILEYS &amp; PEOPLE</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4 }}>
          {smileys.map((e,i) => (
            <motion.div key={i} custom={i} initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay: i*0.03, duration:0.2 }}
              style={{ aspectRatio:'1', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, borderRadius:7, background:'rgba(255,255,255,0.05)', cursor:'pointer' }}>{e}</motion.div>
          ))}
        </div>
      </div>
      <div style={{ padding:'8px 14px', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.4)' }}>Search Emoji &amp; Symbols</span>
        <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.3)' }}>Copy to Clipboard <kbd style={{ background:'rgba(255,255,255,0.08)', borderRadius:4, padding:'1px 5px' }}>↵</kbd></span>
      </div>
    </div>
  );
}

export function CalculatorContent() {
  return (
    <div style={{ fontFamily:'-apple-system,sans-serif', height:340, display:'flex', flexDirection:'column' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontSize:13.5, color:'#fff' }}>12pm here in london</span>
        <div style={{ display:'flex', gap:5, alignItems:'center' }}>
          <span style={{ fontSize:11, color:'rgba(255,255,255,0.4)' }}>Ask AI</span>
          <kbd style={{ background:'rgba(255,255,255,0.08)', borderRadius:4, padding:'2px 6px', fontSize:10.5, color:'rgba(255,255,255,0.5)' }}>Tab</kbd>
        </div>
      </div>
      <div style={{ margin:'10px', borderRadius:10, overflow:'hidden', border:'1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ padding:'4px 12px', fontSize:10.5, color:'rgba(255,255,255,0.35)', background:'rgba(255,255,255,0.03)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>Calculator</div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.4 }}
          style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', padding:'16px', background:'rgba(255,255,255,0.03)', gap:12, alignItems:'center' }}>
          <div>
            <div style={{ fontSize:16, fontWeight:600, color:'#fff' }}>12pm here in london</div>
            <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:4 }}>12:00 PM</div>
          </div>
          <span style={{ fontSize:18, color:'rgba(255,255,255,0.4)' }}>→</span>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:20, fontWeight:700, color:'#fff' }}>07:30</div>
            <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:4 }}>London, GMT</div>
          </div>
        </motion.div>
      </div>
      <div style={{ padding:'4px 14px 6px', fontSize:11.5, color:'rgba(255,255,255,0.3)' }}>Use "12pm here in london" with…</div>
      {[{e:'🔍',n:'Search Files',c:'File Search',t:'Command'},{e:'📖',n:'Define Word',c:'Dictionary',t:'Command'},{e:'🌐',n:'Search Google',c:'Google Chrome',t:'Quicklink'}].map((r,i) => (
        <motion.div key={i} custom={i} initial="hidden" animate="show" variants={row}
          style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'6px 14px', cursor:'pointer' }}>
          <div style={{ display:'flex', gap:9, alignItems:'center' }}>
            <span style={{ fontSize:14 }}>{r.e}</span>
            <span style={{ fontSize:12.5, color:'#fff' }}>{r.n}</span>
            <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.35)' }}>{r.c}</span>
          </div>
          <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.3)' }}>{r.t}</span>
        </motion.div>
      ))}
      <div style={{ marginTop:'auto', padding:'8px 14px', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.4)' }}>Calculator</span>
        <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.3)' }}>Open Command <kbd style={{ background:'rgba(255,255,255,0.08)', borderRadius:4, padding:'1px 5px' }}>↵</kbd></span>
      </div>
    </div>
  );
}

export function WindowContent() {
  const cmds = ['Left Half','Right Half','Almost Maximize','iOS Development','Last Third','Last Two Thirds','Toggle Full Screen','Top Right Quarter'];
  return (
    <div style={{ fontFamily:'-apple-system,sans-serif', height:340, display:'flex', flexDirection:'column' }}>
      <div style={{ padding:'10px 14px', borderBottom:'1px solid rgba(255,255,255,0.06)', fontSize:13.5, color:'#fff' }}>window management</div>
      <div style={{ padding:'5px 14px 2px', fontSize:10.5, color:'rgba(255,255,255,0.3)', letterSpacing:'0.06em' }}>RESULTS</div>
      <div style={{ flex:1, overflow:'hidden' }}>
        {cmds.map((name,i) => (
          <motion.div key={i} custom={i} initial="hidden" animate="show" variants={row}
            style={{ display:'flex', alignItems:'center', gap:9, padding:'7px 14px',
              background: i===0 ? 'rgba(255,255,255,0.08)' : 'transparent', cursor:'pointer' }}>
            <div style={{ width:22, height:22, borderRadius:5, background:'linear-gradient(135deg,#3b82f6,#1d4ed8)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, color:'#fff', flexShrink:0 }}>⊞</div>
            <span style={{ fontSize:12.5, color: i===0?'#fff':'rgba(255,255,255,0.72)' }}>{name}</span>
            <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.3)' }}>Window Management</span>
          </motion.div>
        ))}
      </div>
      <div style={{ padding:'8px 14px', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.4)' }}>Window Management</span>
        <span style={{ fontSize:11.5, color:'rgba(255,255,255,0.3)' }}>Open Command <kbd style={{ background:'rgba(255,255,255,0.08)', borderRadius:4, padding:'1px 5px' }}>↵</kbd></span>
      </div>
    </div>
  );
}
