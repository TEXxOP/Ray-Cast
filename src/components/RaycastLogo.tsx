'use client';

interface LogoProps {
  size?: number;
  id?: string;
}

export default function RaycastLogo({ size = 22, id = 'logo' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" fill={`url(#${id}-grad)`} />
      <defs>
        <linearGradient id={`${id}-grad`} x1="2" y1="2" x2="20" y2="20">
          <stop stopColor="#FF6363" />
          <stop offset="1" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
}
