'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GradientBlinds from './GradientBlinds';
import StarBorder from './StarBorder';

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width={16} height={16}>
    <path fill="currentColor" d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777" />
  </svg>
);

const WindowsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width={16} height={16}>
    <path fill="currentColor" fillRule="evenodd" d="M0 0h7.584v7.584H0zm8.416 0h7.583v7.584H8.416zm-.832 8.416H0V16h7.584zm.832 0h7.583V16H8.416z" clipRule="evenodd" />
  </svg>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0px', '40px']);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 60,
      }}
    >
      {/* ── Background: Raycast signature red noise blinds ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.1 }}
        style={{
          position: 'absolute',
          inset: 0,
          y: bgY,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <GradientBlinds
          gradientColors={['#ff4040', '#d81010', '#8c0000', '#ff1010']}
          angle={18}
          noise={0}
          blindCount={12}
          blindMinWidth={75}
          spotlightRadius={0.7}
          spotlightSoftness={1.5}
          spotlightOpacity={0.9}
          mouseDampening={0.1}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
        {/* Soft vignette to blend bottom edge into body bg */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% -20%, transparent 40%, #0a0a0a 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 300,
          background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
          zIndex: 1,
        }} />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          padding: '0 24px',
          opacity: contentOpacity,
          y: contentY,
          scale: contentScale,
        }}
      >
        {/* ── Try the new Raycast ── */}
        <StarBorder
          as={motion.a}
          href="/new"
          color="#ff4040"
          speed="4s"
          initial={{ opacity: 0, y: -15, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginBottom: 32,
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.24), 0 2px 8px rgba(0,0,0,0.12)',
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 500, letterSpacing: '0.1px' }}>Try the new Raycast</span>
          <span style={{ color: 'rgba(255,255,255,0.15)', margin: '0 12px', fontSize: 13, transform: 'translateY(-0.5px)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, letterSpacing: '0.1px', display: 'flex', alignItems: 'center', gap: 4 }}>
            Learn more <span style={{ fontFamily: 'system-ui', fontSize: 14 }}>→</span>
          </span>
        </StarBorder>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 64,
            fontWeight: 600,
            fontFeatureSettings: '"ss08" on, "ss02" on, "liga" off',
            lineHeight: '110%',
            color: '#ffffff',
            marginBottom: 24,
            maxWidth: 540,
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.15)',
          }}
        >
          Your shortcut to everything.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 18,
            color: '#ffffff',
            lineHeight: 'normal',
            maxWidth: 540,
            fontWeight: 400,
            marginBottom: 44,
            letterSpacing: '0.2px',
            textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
            textWrap: 'balance',
          }}
        >
          A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}
        >
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#ffffff',
              color: '#0a0a0a', fontWeight: 600,
              padding: '16px 28px', fontSize: 16,
              borderRadius: 12,
              border: 'none',
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'background 0.15s',
              letterSpacing: '-0.2px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e8e8e8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
          >
            <AppleIcon />
            Download for Mac
          </button>

          <a
            href="https://ray.so/download-windows"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.92)',
              color: '#0a0a0a', fontWeight: 600,
              padding: '16px 28px', fontSize: 16,
              borderRadius: 12,
              border: 'none',
              cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none',
              transition: 'background 0.15s',
              letterSpacing: '-0.2px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.92)')}
          >
            <WindowsIcon />
            Download for Windows (beta)
          </a>
        </motion.div>

        {/* ── Meta info ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            fontSize: 12.5,
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
            letterSpacing: '0.02em',
            marginBottom: 36,
          }}
        >
          <span>v1.104.19</span>
          <span style={{ margin: '0 12px' }}>macOS 13+</span>
          <a href="#" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.2)', transition: 'color 0.15s' }}
             onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
             onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
            Install via homebrew
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
