import type { Extension, Testimonial, AutoCard, DevFeature } from '@/types';

export const EXTENSIONS: Extension[] = [
  { icon: '🟣', name: 'Linear', desc: 'Create, search and modify your issues without leaving your keyboard.', cat: 'engineering' },
  { icon: '🌐', name: 'Google Translate', desc: 'Effortlessly translate into multiple languages from anywhere.', cat: 'writing' },
  { icon: '🎵', name: 'Spotify', desc: 'Search for music and podcasts, browse your library, and control playback.', cat: 'productivity' },
  { icon: '🌀', name: 'Arc', desc: 'Navigate your open tabs or search through your browser history.', cat: 'productivity' },
  { icon: '🗜', name: 'TinyPNG', desc: 'Compress the selected images in Finder with TinyPNG.', cat: 'design' },
  { icon: '🔑', name: '1Password', desc: 'Easily grab any password or credential from your 1Password vaults.', cat: 'engineering' },
  { icon: '📋', name: 'Jira', desc: 'Manage your JIRA issues and sprints without leaving your keyboard.', cat: 'engineering' },
  { icon: '💬', name: 'Slack', desc: 'Set your presence, see unread messages and search your chats.', cat: 'productivity' },
  { icon: '🎥', name: 'Zoom', desc: 'See your upcoming calls and jump straight into them from Raycast.', cat: 'productivity' },
  { icon: '⏱', name: 'Timers', desc: 'Start stopwatches and timers to keep track of your daily tasks.', cat: 'productivity' },
  { icon: '🍅', name: 'Pomodoro', desc: 'Control pomodoro timers and see the current interval in the menu bar.', cat: 'productivity' },
  { icon: '📓', name: 'Notion', desc: 'The fastest way to search and create Notion pages.', cat: 'productivity' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Guillermo Rauch', handle: '@rauchg', role: 'CEO, Vercel', color: '#7C3AED', quote: 'Raycast is incrementally turning my Mac into an AI-native operating system and I\'m so here for it.' },
  { name: 'Marques Brownlee', handle: '@MKBHD', role: 'Creator, MKBHD', color: '#DC2626', quote: 'The single best productivity app on Mac. Nothing comes close to Raycast for my workflow.' },
  { name: 'Adam Wathan', handle: '@adamwathan', role: 'Creator, Tailwind CSS', color: '#0EA5E9', quote: 'I use Raycast dozens of times per day. It\'s replaced Spotlight, Alfred, and countless other tools.' },
  { name: 'Wes Bos', handle: '@wesbos', role: 'Co-host, SyntaxFM', color: '#F59E0B', quote: 'The extensions ecosystem is incredible. If your app isn\'t on Raycast, it should be.' },
  { name: 'Max Stoiber', handle: '@mxstbr', role: 'CEO, Stellate', color: '#10B981', quote: 'Raycast has completely transformed how I work. The speed and extensibility are unmatched.' },
  { name: 'Koen Bok', handle: '@koenbok', role: 'Founder, Framer', color: '#8B5CF6', quote: 'What amazes me most about Raycast is how much faster my entire day flows because of it.' },
];

export const AUTO_CARDS: AutoCard[] = [
  { title: 'Snippets', desc: 'Tired of typing the same thing? Create a snippet and insert it by simply typing its keyword.', color: '#3B82F6' },
  { title: 'Quicklinks', desc: 'Say goodbye to open tabs. Create quicklinks to launch anything from anywhere.', color: '#8B5CF6' },
  { title: 'Hotkeys & Aliases', desc: 'Speed up your workflow by assigning hotkeys or aliases to common commands or apps.', color: '#EC4899' },
  { title: 'Raycast Notes', desc: 'A quick way to capture a thought while working on something else. Always there when you need it.', color: '#F59E0B' },
];

export const DEV_FEATURES: DevFeature[] = [
  { icon: '⚛️', title: 'React to macOS', desc: 'Build rich, native extensions with the technologies you already know: React, TypeScript and Node.' },
  { icon: '🎨', title: 'Built-in UI', desc: 'Our UI component library lets you focus on logic while we handle the pixels.' },
  { icon: '🔋', title: 'Batteries Included', desc: 'A strongly typed API, hot-reloading and modern tooling that make it a blast to work with.' },
  { icon: '🚀', title: 'Publish to the Store', desc: 'Submit your extension to the Raycast Store and share it with thousands of users instantly.' },
];

export const MARQUEE_TAGS = [
  'Notes', 'Flight Tracker', 'Calculator', 'File Search',
  'Script Commands', 'Window Management', 'My Schedule', 'Reminders',
  'Translator', 'Raycast Focus', 'Screenshot Search', 'Emoji Picker',
];

export const NAV_LINKS = ['Store', 'Pro', 'AI', 'iOS', 'Windows', 'Teams', 'Developers', 'Blog', 'Pricing'];

export const FOOTER_COLS = [
  {
    title: 'Product',
    links: ['Store', 'Pro', 'Teams', 'Pricing', 'Changelog', 'Browser Extension', 'iOS', 'Windows', 'Raycast 2.0', 'FAQ'],
  },
  {
    title: 'Core Features',
    links: ['Raycast AI', 'Raycast Notes', 'Raycast Focus', 'Clipboard History', 'Window Management', 'Snippets', 'File Search', 'Quicklinks', 'Calculator', 'Emoji Picker'],
  },
  {
    title: 'Company',
    links: ['Manifesto', 'Customers', 'Careers', 'Terms of Service', 'Privacy Policy', 'Trust Center', 'Press Kit', 'Contact'],
  },
  {
    title: 'Community',
    links: ['Community Stories', 'Ambassadors', 'Slack', 'X/Twitter', 'GitHub', 'Dribbble'],
  },
];
