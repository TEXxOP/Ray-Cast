const fs = require('fs');

const mainHtml = fs.readFileSync('MainLayout.html', 'utf8');

// The mainHtml starts with <main class="page_content___o2aC" id="main-content">
// And ends right before <div class="Footer_container__6pNfo">

// I will extract the parts AFTER the RaycastShowcase so that we keep Nav, Hero, and RaycastShowcase as React components, and just dump the rest as dangerouslySetInnerHTML.

const showcaseEnd = mainHtml.indexOf('<div class="Extensions_container__');
let restOfMain = '';

if (showcaseEnd > -1) {
  restOfMain = mainHtml.substring(showcaseEnd);
} else {
  // Try to find the section by text "Extensions" or similar
  const extensionsTextIdx = mainHtml.indexOf('Supercharge your productivity');
  if (extensionsTextIdx > -1) {
     // Go back to the preceding <div class="Extensions_container
     const divStart = mainHtml.lastIndexOf('<div class="Extensions_', extensionsTextIdx);
     if (divStart > -1) {
         restOfMain = mainHtml.substring(divStart);
     }
  }
}

if (!restOfMain) {
    console.log("Could not find start of extensions");
    // Fallback: just use the whole main minus the hero section
    const startOfMainAfterHero = mainHtml.indexOf('<div class="page_sectionContainer__86OJv">');
    if (startOfMainAfterHero > -1) {
       restOfMain = mainHtml.substring(startOfMainAfterHero);
    }
}

const content = `'use client';

import Nav from './Nav';
import Hero from './Hero';
import RaycastShowcase from './RaycastShowcase';

export default function RaycastInspiredPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflowX: 'hidden',
      }}
    >
      <Nav />
      <main>
        <Hero />
        <RaycastShowcase />
        <div dangerouslySetInnerHTML={{ __html: \`${restOfMain.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      </main>
    </div>
  );
}
`;

fs.writeFileSync('src/components/RaycastInspiredPage.tsx', content);
console.log("Updated RaycastInspiredPage.tsx");
