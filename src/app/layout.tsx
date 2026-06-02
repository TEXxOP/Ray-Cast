import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raycast – Your shortcut to everything',
  description: 'A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/13d7c099d5cf5edd.css" />
        <link rel="stylesheet" href="/css/3563776b487bdaf8.css" />
        <link rel="stylesheet" href="/css/4b9ae64dfe6b13c7.css" />
        <link rel="stylesheet" href="/css/5038a0f8e1dbb537.css" />
        <link rel="stylesheet" href="/css/80f9c2fc1a177881.css" />
        <link rel="stylesheet" href="/css/88cec015e89afcfe.css" />
        <link rel="stylesheet" href="/css/a59e492e46719f4d.css" />
        <link rel="stylesheet" href="/css/af9f5781b0bfa376.css" />
        <link rel="stylesheet" href="/css/daa5c66cd12da278.css" />
        <link rel="stylesheet" href="/css/f1de5538ee4eef17.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
