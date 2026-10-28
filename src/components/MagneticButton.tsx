import React, { useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  strength?: number;
  asAnchor?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.35,
  asAnchor = false,
  href,
  onClick,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement>(null);
  const xToRef = useRef<gsap.QuickToFunc | null>(null);
  const yToRef = useRef<gsap.QuickToFunc | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !elementRef.current) return;

    if (!xToRef.current || !yToRef.current) {
      xToRef.current = gsap.quickTo(elementRef.current, 'x', {
        duration: 0.8,
        ease: 'power3.out',
      });
      yToRef.current = gsap.quickTo(elementRef.current, 'y', {
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    xToRef.current(deltaX);
    yToRef.current(deltaY);
  };

  const handleMouseLeave = () => {
    if (!elementRef.current) return;
    
    if (xToRef.current && yToRef.current) {
      xToRef.current(0);
      yToRef.current(0);
    } else {
      gsap.to(elementRef.current, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  };

  const commonProps = {
    ref: elementRef as any,
    className: `inline-flex items-center justify-center font-heading tracking-wider uppercase transition-colors select-none ${className}`,
    onClick: onClick as any,
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {asAnchor && href ? (
        <a href={href} {...commonProps}>
          {children}
        </a>
      ) : (
        <button type="button" {...(props as any)} {...commonProps}>
          {children}
        </button>
      )}
    </div>
  );
};

export default MagneticButton;
