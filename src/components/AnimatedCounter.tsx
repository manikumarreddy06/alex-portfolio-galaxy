
import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // IntersectionObserver to start counter when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          
          const startTime = Date.now();
          const endTime = startTime + duration;
          
          const animateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Use easeOutQuad easing function for smooth animation
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);
            
            if (now < endTime) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animateCount);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-4xl font-display font-bold" ref={countRef}>
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
