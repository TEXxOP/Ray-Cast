'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';

type Cat = 'Productivity' | 'Engineering' | 'Design' | 'Writing';

const CDN = 'https://misc-assets.raycast.com/extension-cards';

interface Ext {
  name: string;
  desc: string;
  slug: string;
  bg: string;
  iconSlug: string;
  webSlug: string;
  cats: Cat[];
  href: string;
}

const EXTENSIONS: Ext[] = [
  // ── Productivity ────────────────────────────────────────────────────────────
  {
    name: 'Linear',
    desc: 'Create, search and modify your issues without leaving your keyboard.',
    slug: 'linear',
    bg: 'linear-gradient(138deg, rgba(32, 35, 91, 0.70) 22%, rgba(7, 9, 33, 0.70) 82%)',
    iconSlug: 'linear-icon',
    webSlug: 'linear-web',
    cats: ['Productivity', 'Engineering'],
    href: 'https://www.raycast.com/linear/linear',
  },
  {
    name: 'Google Translate',
    desc: 'Use Google Translate to effortlessly translate into multiple languages.',
    slug: 'google-translate',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(43, 94, 180, 0.70), rgba(13, 16, 35, 0.42))',
    iconSlug: 'google-translate-icon',
    webSlug: 'google-translate-web',
    cats: ['Productivity', 'Writing'],
    href: 'https://www.raycast.com/gebeto/translate',
  },
  {
    name: 'Spotify',
    desc: 'Search for music and podcasts, browse your library, and control playback.',
    slug: 'spotify',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(29, 185, 84, 0.40), rgba(5, 20, 10, 0.70))',
    iconSlug: 'spotify-icon',
    webSlug: 'spotify-web',
    cats: ['Productivity'],
    href: 'https://www.raycast.com/mattisssa/spotify-player',
  },
  {
    name: 'Arc',
    desc: 'Navigate your open tabs or search through your browser history.',
    slug: 'arc',
    bg: 'radial-gradient(94.21% 78.40% at 45% 29.91%, rgba(140, 100, 255, 0.50), rgba(6, 3, 16, 0.80))',
    iconSlug: 'arc-icon',
    webSlug: 'arc-web',
    cats: ['Productivity'],
    href: 'https://www.raycast.com/the-browser-company/arc',
  },
  {
    name: 'TinyPNG',
    desc: 'Compress the selected images in Finder with TinyPNG.',
    slug: 'tiny-png',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(14, 110, 85, 0.60), rgba(6, 30, 22, 0.80))',
    iconSlug: 'tiny-png-icon',
    webSlug: 'tiny-png-web',
    cats: ['Design', 'Engineering'],
    href: 'https://www.raycast.com/kawamataryo/tinypng',
  },
  {
    name: '1Password',
    desc: 'Easily grab any password or credential from your 1Password vaults.',
    slug: '1password',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(10, 80, 180, 0.60), rgba(6, 20, 44, 0.80))',
    iconSlug: '1password-icon',
    webSlug: '1password-web',
    cats: ['Engineering'],
    href: 'https://www.raycast.com/khasbilegt/1password',
  },
  {
    name: 'Pomodoro',
    desc: 'Control pomodoro timers and see the current interval in the menu bar.',
    slug: 'pomodoro',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(180, 30, 30, 0.60), rgba(40, 5, 5, 0.80))',
    iconSlug: 'pomodoro-icon',
    webSlug: 'pomodoro-web',
    cats: ['Productivity'],
    href: 'https://www.raycast.com/asubbotin/pomodoro',
  },
  {
    name: 'Notion',
    desc: 'The fastest way to search and create Notion pages.',
    slug: 'notion',
    bg: 'radial-gradient(126.42% 76.60% at 50% 32.26%, rgba(84, 95, 102, 0.70), rgba(0, 36, 69, 0.13))',
    iconSlug: 'notion-icon',
    webSlug: 'notion-web',
    cats: ['Productivity', 'Writing'],
    href: 'https://www.raycast.com/notion/notion',
  },
  {
    name: 'Todoist',
    desc: 'Check your Todoist tasks and quickly create new ones.',
    slug: 'todoist',
    bg: 'radial-gradient(126.42% 76.60% at 50% 32.26%, rgba(84, 55, 102, 0.70), rgba(36, 0, 69, 0.13))',
    iconSlug: 'todoist-icon',
    webSlug: 'todoist-web',
    cats: ['Productivity'],
    href: 'https://www.raycast.com/doist/todoist',
  },
  // ── Engineering ─────────────────────────────────────────────────────────────
  {
    name: 'GitHub',
    desc: 'Search your repositories, manage issues and pull requests, and more.',
    slug: 'github',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(50, 50, 60, 0.80), rgba(10, 10, 15, 0.90))',
    iconSlug: 'github-icon',
    webSlug: 'github-web',
    cats: ['Engineering'],
    href: 'https://www.raycast.com/raycast/github',
  },
  {
    name: 'VS Code',
    desc: 'Control VS Code with keyboard shortcuts and open your recent projects.',
    slug: 'visual-studio-code',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(0, 80, 180, 0.60), rgba(0, 20, 50, 0.80))',
    iconSlug: 'visual-studio-code-icon',
    webSlug: 'visual-studio-code-web',
    cats: ['Engineering'],
    href: 'https://www.raycast.com/thomas/visual-studio-code',
  },
  // ── Design ───────────────────────────────────────────────────────────────────
  {
    name: 'Color Picker',
    desc: 'Pick and convert colors from anywhere on your screen.',
    slug: 'color-picker',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(180, 60, 180, 0.50), rgba(30, 5, 30, 0.80))',
    iconSlug: 'color-picker-icon',
    webSlug: 'color-picker-web',
    cats: ['Design'],
    href: 'https://www.raycast.com/thomas/color-picker',
  },
  {
    name: 'Figma',
    desc: 'Search files and open them directly — and jump between projects fast.',
    slug: 'figma',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(166, 100, 255, 0.40), rgba(10, 0, 30, 0.80))',
    iconSlug: 'figma-icon',
    webSlug: 'figma-web',
    cats: ['Design'],
    href: 'https://www.raycast.com/michaelschultz/figma-files-raycast',
  },
  // ── Writing ──────────────────────────────────────────────────────────────────
  {
    name: 'Lorem Ipsum',
    desc: 'Generate Lorem Ipsum placeholder text in seconds.',
    slug: 'lorem-ipsum',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(90, 70, 50, 0.60), rgba(20, 15, 5, 0.80))',
    iconSlug: 'lorem-ipsum-icon',
    webSlug: 'lorem-ipsum-web',
    cats: ['Writing'],
    href: 'https://www.raycast.com/AntonNiklasson/lorem-ipsum',
  },
  {
    name: 'Grammarly',
    desc: 'Check your writing with Grammarly and get suggestions on the fly.',
    slug: 'grammarly',
    bg: 'radial-gradient(94.21% 78.40% at 50% 29.91%, rgba(20, 140, 80, 0.60), rgba(5, 30, 15, 0.80))',
    iconSlug: 'grammarly-icon',
    webSlug: 'grammarly-web',
    cats: ['Writing'],
    href: 'https://www.raycast.com/nicnocquee/grammarly',
  },
];

const CATS: { label: string; value: Cat | 'all' }[] = [
  { label: 'Productivity', value: 'Productivity' },
  { label: 'Engineering',  value: 'Engineering'  },
  { label: 'Design',       value: 'Design'       },
  { label: 'Writing',      value: 'Writing'      },
];

function ExtCard({ ext, delay }: { ext: Ext; delay: number }) {
  const iconUrl = `${CDN}/${ext.iconSlug}.png`;
  const webUrl  = `${CDN}/${ext.webSlug}.png`;

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <motion.a
      href={ext.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, delay }}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      style={{
        flexShrink: 0,
        width: 340,
        height: 440,
        background: ext.bg,
        borderRadius: 24,
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 32px 0',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 1px 0px 0px rgba(255,255,255,0.10) inset, 0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 32px rgba(0,0,0,0.5)',
        textDecoration: 'none',
        scrollSnapAlign: 'start',
        willChange: 'transform',
      }}
    >
      {/* Top Highlight Fade In (Original Raycast Style) */}
      <motion.div 
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'radial-gradient(100% 100% at 50% 0, rgba(255,255,255,0.12) 0%, transparent 100%)',
        }}
      />

      {/* Hardware-accelerated Spotlight Glow */}
      <motion.div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5,
        background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.12), transparent 40%)`,
        mixBlendMode: 'overlay',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, overflow: 'hidden', flexShrink: 0, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={iconUrl}
              alt={ext.name}
              width={48}
              height={48}
              style={{ width: 48, height: 48, objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{ext.name}</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 20, display: 'flex', alignItems: 'center' }}>›</span>
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, margin: 0, flexShrink: 0 }}>
        {ext.desc}
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '16px 0 0', flexShrink: 0 }} />

      {/* Preview image — fills remaining space */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src={webUrl}
          alt={`${ext.name} preview`}
          style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px 8px 0 0' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    </motion.a>
  );
}

export default function Extensions() {
  const [active, setActive] = useState<Cat | 'all'>('Productivity');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mouse drag-to-scroll
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current; if (!el) return;
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };
  const onMouseLeave = () => { drag.current.active = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab'; };
  const onMouseUp    = () => { drag.current.active = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab'; };
  const onMouseMove  = (e: React.MouseEvent) => {
    if (!drag.current.active || !scrollRef.current) return;
    e.preventDefault();
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.5;
    scrollRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  const filtered = active === 'all' ? EXTENSIONS : EXTENSIONS.filter(e => e.cats.includes(active as Cat));

  return (
    <section style={{ padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Header row */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
        <div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 8 }}>
            There&apos;s an extension for that.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, maxWidth: 300 }}>
            Use your favorite tools without even opening them.
          </p>
        </div>

        {/* Category pill tabs */}
        <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '4px', gap: 2 }}>
          {CATS.map(cat => (
            <button key={cat.value} onClick={() => setActive(cat.value)} style={{
              fontSize: 13, fontWeight: 500, padding: '7px 16px', borderRadius: 100,
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              background: active === cat.value ? 'rgba(255,255,255,0.15)' : 'transparent',
              color: active === cat.value ? '#fff' : 'rgba(255,255,255,0.45)',
              transition: 'all 0.18s ease',
            }}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div style={{ position: 'relative' }}>
        {/* Fade overlays */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #0a0a0a 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="ext-carousel"
          style={{
            display: 'flex', gap: 14, overflowX: 'auto', padding: '8px 40px 48px',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x proximity',
            cursor: 'grab',
          }}
        >
          <AnimatePresence mode="wait">
            {filtered.map((ext, i) => (
              <ExtCard key={ext.name + active} ext={ext} delay={i * 0.05} />
            ))}

            {/* CTA card */}
            <motion.a
              key={'cta-' + active}
              href="https://www.raycast.com/store"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: filtered.length * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                flexShrink: 0, width: 340, height: 440,
                background: 'linear-gradient(160deg,#111 0%,#0a0a0a 100%)',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: 32, cursor: 'pointer', gap: 18,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 4, opacity: 0.45 }}>
                {['🎯','📦','🔐','🎨','⚙️','📊','🔔','📅','🌐','🔍','💬','🚀'].map((e, i) => (
                  <div key={i} style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{e}</div>
                ))}
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', margin: 0, textAlign: 'center' }}>Plus thousands more</p>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
                Browse the store <span>→</span>
              </span>
            </motion.a>
          </AnimatePresence>
        </div>
      </div>

      <style>{`.ext-carousel::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
