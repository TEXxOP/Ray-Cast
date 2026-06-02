// ── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Store', href: '/store' },
  { label: 'Pro', href: '/pro' },
  { label: 'AI', href: '/core-features/ai' },
  { label: 'iOS', href: '/ios' },
  { label: 'Windows', href: '/windows' },
  { label: 'Teams', href: '/teams' },
  { label: 'Developers', href: '/developers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Guillermo Rauch',
    handle: '@rauchg',
    role: 'CEO, Vercel',
    quote: "Raycast is the best investment I've made in my productivity toolkit. It's the kind of tool that makes you feel like you have superpowers.",
    favoriteFeature: 'Snippets',
    topExtension: 'Vercel',
    color: '#1a1a2e',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1171518785/rauchg-2-square_400x400.jpg',
  },
  {
    name: 'Marques Brownlee',
    handle: '@MKBHD',
    role: 'Creator, MKBHD',
    quote: "I literally use Raycast every single day. It's replaced so many other apps for me — it's fast, it's powerful, and it just works.",
    favoriteFeature: 'Clipboard History',
    topExtension: 'YouTube',
    color: '#1a0a2e',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1468938854824947714/Ef-KCBr6_400x400.jpg',
  },
  {
    name: 'Koen Bok',
    handle: '@koenbok',
    role: 'Founder, Framer',
    quote: "Raycast is turning my Mac into an AI-native operating system and I'm so here for it.",
    favoriteFeature: 'AI Chat',
    topExtension: 'Notion Search',
    color: '#0a1a2e',
    avatarUrl: 'https://pbs.twimg.com/profile_images/983475423620546561/AEbQJOEo_400x400.jpg',
  },
  {
    name: 'Andreas Storm',
    handle: '@avstorm',
    role: 'Designer & Iconographer',
    quote: "The thoughtfulness in Raycast's design is what got me hooked. Every detail has been considered. It's exactly how I'd build a launcher.",
    favoriteFeature: 'Window Management',
    topExtension: 'Color Picker',
    color: '#1a2e0a',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1503001835019911170/zPvIHPj3_400x400.jpg',
  },
  {
    name: 'Adam Whitcroft',
    handle: '@AdamWhitcroft',
    role: 'Designer, Owner',
    quote: "Raycast has completely changed how I interact with my Mac. It's not just a launcher — it's a whole productivity platform.",
    favoriteFeature: 'Quick AI',
    topExtension: 'Tailwind CSS',
    color: '#2e1a0a',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1600553892335747072/4hJfuMzg_400x400.jpg',
  },
];

// ── Developer Features ────────────────────────────────────────────────────────
export const DEV_FEATURES = [
  {
    title: 'React to macOS',
    desc: 'Use the tools you already know — React and TypeScript — to build extensions that feel truly native.',
    icon: '⚛️',
  },
  {
    title: 'Built-in UI',
    desc: 'Leverage the Raycast design system. Lists, forms, detail views — all ready to use.',
    icon: '🎨',
  },
  {
    title: 'Batteries included',
    desc: 'Built-in utilities for storage, OAuth, AI, toast notifications, and a whole lot more.',
    icon: '🔋',
  },
  {
    title: 'Publish to the Store',
    desc: 'Share your extension with 300,000+ Raycast users. Review, publish, and iterate with ease.',
    icon: '🚀',
  },
];

// ── Automation Cards ──────────────────────────────────────────────────────────
export const AUTO_CARDS = [
  {
    title: 'Snippets',
    desc: 'Type a keyword and watch it transform into full text — emails, code, or anything you repeat.',
    color: 'linear-gradient(90deg, #5E6AD2, #8B5CF6)',
    icon: '✂️',
  },
  {
    title: 'Quicklinks',
    desc: 'Create shortcuts to your most-visited websites, apps, and files. One keystroke away.',
    color: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
    icon: '⚡',
  },
  {
    title: 'Hotkeys & Aliases',
    desc: 'Bind any command to a global hotkey. Your most-used flows, at your fingertips.',
    color: 'linear-gradient(90deg, #F59E0B, #EF4444)',
    icon: '⌨️',
  },
];

// ── Marquee Tags ──────────────────────────────────────────────────────────────
export const MARQUEE_TAGS = [
  'Clipboard History', 'AI Chat', 'Window Management', 'Snippets',
  'Quicklinks', 'File Search', 'Calculator', 'Emoji Picker',
  'Calendar', 'Focus Mode', 'Color Picker', 'System Commands',
  'Confetti', 'Notes', 'Reminders', 'Translation',
  'Screenshot', 'Script Runner', 'Kill Process', 'Menu Bar',
];

// ── Footer Columns ────────────────────────────────────────────────────────────
export const FOOTER_COLS = [
  {
    title: 'Product',
    links: ['Pro', 'Teams', 'Pricing', 'Changelog', 'Browser Extension', 'Developers', 'iOS', 'Windows', 'Raycast 2.0', 'API Docs', 'Manual', 'FAQ'],
  },
  {
    title: 'Features',
    links: ['Raycast Notes', 'Raycast Focus', 'Clipboard History', 'Window Management', 'Snippets', 'File Search', 'Quicklinks', 'Calculator', 'Calendar', 'Emoji Picker'],
  },
  {
    title: 'Extensions',
    links: ['Developer Tools', 'Pomodoro Timer', 'Productivity', 'Project Management', 'Translation', 'AI'],
  },
  {
    title: 'Company',
    links: ['Customers', 'Careers', 'Terms of Service', 'Privacy Policy', 'DPA', 'Trust Center', 'Press Kit', 'Contact'],
  },
  {
    title: 'Community',
    links: ['Ambassadors', 'Slack', 'X / Twitter', 'GitHub', 'Dribbble'],
  },
];

// ── What Else items ────────────────────────────────────────────────────────────
export const WHAT_ELSE_ITEMS = [
  { label: 'It can take notes.', emoji: '📝' },
  { label: 'Track your flights.', emoji: '✈️' },
  { label: 'Convert anything.', emoji: '🔄' },
  { label: 'Search files.', emoji: '🔍' },
  { label: 'Run scripts.', emoji: '⚡' },
  { label: 'Manage your windows.', emoji: '🪟' },
  { label: 'Plan your day.', emoji: '📅' },
  { label: 'Remind you of stuff.', emoji: '🔔' },
  { label: 'Translate into any language.', emoji: '🌍' },
  { label: 'Block distractions.', emoji: '🎯' },
  { label: 'Find text in screenshots.', emoji: '🖼️' },
  { label: 'Insert Emojis.', emoji: '😄' },
];
