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
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                if (onComplete) {
                  setTimeout(onComplete, duration * 1000);
                }
              }, delay * 1000);
            } else {
              setIsVisible(true);
              if (onComplete) {
                setTimeout(onComplete, duration * 1000);
              }
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px'
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay, duration, onComplete]);

  const axis = direction === 'horizontal' ? 'X' : 'Y';
  const offset = reverse ? -distance : distance;

  const baseStyles: React.CSSProperties = {
    transform: isVisible 
      ? 'translate3d(0, 0, 0) scale(1)' 
      : `translate${axis}(${offset}px) scale(${scale})`,
    opacity: isVisible ? 1 : (animateOpacity ? initialOpacity : 1),
    transition: `transform ${duration}s ${ease} ${delay}s, opacity ${duration}s ${ease} ${delay}s`,
    willChange: isVisible ? 'auto' : 'transform, opacity'
  };

  return (
    <div ref={ref} style={baseStyles}>
      {children}
    </div>
  );
};

export default AnimatedContent;
