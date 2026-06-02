const fs = require('fs');

const html = fs.readFileSync('raycast-home.html', 'utf8');

function extractAndWrite(startStr, endStr, compName) {
  const start = html.indexOf(startStr);
  let end = -1;
  if (endStr) {
    end = html.indexOf(endStr, start);
  } else {
    // just some arbitrary large chunk if endStr not given
    end = start + 50000;
  }
  
  if (start === -1) {
    console.log("Could not find", compName);
    return;
  }
  
  let chunk = html.substring(start, end);
  chunk = chunk.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  const content = `import React from 'react';\n\nexport default function ${compName}() {\n  return (\n    <div dangerouslySetInnerHTML={{ __html: \`${chunk.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />\n  );\n}\n`;
  
  fs.writeFileSync(`src/components/${compName}.tsx`, content);
  console.log(`Updated src/components/${compName}.tsx`);
}

// Map the sections
extractAndWrite('<div class="Extensions_container__oQd5Q">', '<div class="AI_container__XqT44">', 'Extensions');
extractAndWrite('<div class="AI_container__XqT44">', '<div class="GetYourTimeBack_container__J6oE_">', 'AISection');
extractAndWrite('<div class="GetYourTimeBack_container__J6oE_">', '<div class="Testimonials_container__D9_bM">', 'Automation'); // Automation and Keyboard are merged in the actual site under GetYourTimeBack and following sections
extractAndWrite('<div class="Testimonials_container__D9_bM">', '<div class="WhatElse_container__T8v9F">', 'Testimonials');
extractAndWrite('<div class="WhatElse_container__T8v9F">', '<div class="CommunitySection_container__O4LdC">', 'WhatElse');
extractAndWrite('<div class="CommunitySection_container__O4LdC">', '<div class="Footer_container__6pNfo">', 'Sections'); // Sections can just be the community/developers
extractAndWrite('<div class="Footer_container__6pNfo">', '</body>', 'Footer');
