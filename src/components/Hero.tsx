'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GradientBlinds from './GradientBlinds';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0px', '30px']);

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
      }}
    >
      {/* ── GradientBlinds — FULL 100vh hero background ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: bgY,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <GradientBlinds
          gradientColors={['#FF3030', '#CC0000', '#FF1111', '#AA0000', '#FF4444']}
          angle={20}
          noise={0.3}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.75}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </motion.div>

      {/* ── All hero content stacked and centered ── */}
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
        }}
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(46px, 6.5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: 18,
            maxWidth: 620,
          }}
        >
          Your shortcut to<br />everything.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
            maxWidth: 460,
            fontWeight: 400,
            marginBottom: 48,
          }}
        >
          A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable.
        </motion.p>

        {/* ── Download Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}
        >
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: 'rgba(255,255,255,0.92)',
              color: '#0a0a0a', fontWeight: 600,
              padding: '12px 22px', fontSize: 14.5,
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'background 0.18s',
              letterSpacing: '-0.1px',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.92)')}
          >
            <svg width="15" height="15" viewBox="0 0 814 1000" fill="#0a0a0a">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.7-38.2-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.2 268.9-317.2 99.2 0 148.9 65.2 162.8 65.2 13.3 0 63.6-68.8 166.8-68.8 43.2 0 160.9 13.5 243.9 117.1zm-97.4-174.3c-4.5-28.4-17.5-91.2-51.2-133.3-30.9-37.5-86.1-64.9-133.8-64.9-2 0-4 .2-5.9.4 1.1 32.2 13.3 98.3 47.2 143.6 37.1 49.3 87.2 78.4 143.7 54.2z"/>
            </svg>
            Download for Mac
          </button>

          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: 'rgba(255,255,255,0.92)',
              color: '#0a0a0a', fontWeight: 600,
              padding: '12px 22px', fontSize: 14.5,
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'background 0.18s',
              letterSpacing: '-0.1px',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.92)')}
          >
            <svg width="15" height="15" viewBox="0 0 448 512" fill="#0a0a0a">
              <path d="M0 93.7l183.6-25.3v177H0V93.7zm0 324.6l183.6 25.3V268H0v150.3zM203.8 361l240.3 33.1V268H203.8v93zm0-175.1V268H444V143.9L203.8 185.9z"/>
            </svg>
            Download for Windows (beta)
          </button>
        </motion.div>

        {/* Version meta */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
            letterSpacing: '0.01em',
            marginBottom: 28,
          }}
        >
          v1.104.18&nbsp;&nbsp;|&nbsp;&nbsp;macOS 13+&nbsp;&nbsp;|&nbsp;&nbsp;
          <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.15)', cursor: 'pointer' }}>
            Install via homebrew
          </span>
        </motion.p>

        {/* "Try the new Raycast" pill */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 0,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 100,
            padding: '9px 18px',
            fontSize: 13.5, fontWeight: 500,
            color: '#ffffff',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'background 0.2s, border-color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Try the new Raycast</span>
          <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 10px' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Learn more&nbsp;→</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
