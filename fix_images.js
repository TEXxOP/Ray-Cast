const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace /_next/image or /_next/static with absolute urls, avoiding double replacement
  content = content.replace(/(?<!https:\/\/www\.raycast\.com)\/_next\/(image|static)\b/g, 'https://www.raycast.com/_next/$1');
  
  // Also encode URI components if necessary, avoiding double replacement
  content = content.replace(/(?<!https%3A%2F%2Fwww\.raycast\.com)%2F_next%2F(image|static)\b/g, 'https%3A%2F%2Fwww.raycast.com%2F_next%2F$1');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

console.log("Done updating image paths.");
