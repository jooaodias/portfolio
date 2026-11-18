'use client'

import React, { useRef, useEffect, ReactNode, useState } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 28,
  direction = 'vertical',
  reverse = false,
  duration = 0.5,
  ease = 'cubic-bezier(0.16, 1, 0.3, 1)',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      hasAnimated.current = true;
      return;
    }

    let delayTimer: ReturnType<typeof setTimeout> | undefined;
    let completeTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.disconnect();

            const reveal = () => {
              setIsVisible(true);
              if (onComplete) {
                completeTimer = setTimeout(onComplete, duration * 1000);
              }
            };

            if (delay > 0) {
              delayTimer = setTimeout(reveal, delay * 1000);
            } else {
              reveal();
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '50px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (delayTimer) clearTimeout(delayTimer);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, [threshold, delay, duration, onComplete]);

  const axis = direction === 'horizontal' ? 'X' : 'Y';
  const offset = reverse ? -distance : distance;

  const baseStyles: React.CSSProperties = {
    transform: isVisible
      ? 'translate3d(0, 0, 0) scale(1)'
      : `translate${axis}(${offset}px) scale(${scale})`,
    opacity: isVisible ? 1 : (animateOpacity ? initialOpacity : 1),
    transition: `transform ${duration}s ${ease}, opacity ${duration}s ${ease}`,
    willChange: isVisible ? 'auto' : 'transform, opacity',
  };

  return (
    <div
      ref={ref}
      style={baseStyles}
      className="motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!transition-none"
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
