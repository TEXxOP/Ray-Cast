import React from 'react';
import './StarBorder.css';

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType | any;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  [key: string]: any;
}

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '4s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        '--star-color': color,
        '--star-speed': speed,
        '--border-thickness': `${thickness}px`,
        ...rest.style
      } as React.CSSProperties}
      {...rest}
    >
      <div className="border-highlight"></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
