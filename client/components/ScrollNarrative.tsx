import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

interface ScrollNarrativeProps {
  children: React.ReactNode;
  className?: string;
  animateGradient?: boolean;
}

export default function ScrollNarrative({
  children,
  className = "",
  animateGradient = false,
}: ScrollNarrativeProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [gradientOffset, setGradientOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!animateGradient || !elementRef.current) return;

    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = window.innerHeight / 2;
      const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);

      setGradientOffset(progress * 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateGradient]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        backgroundPosition: animateGradient ? `${gradientOffset}% 0` : undefined,
        backgroundSize: animateGradient ? "200% 100%" : undefined,
      }}
    >
      {children}
    </div>
  );
}
