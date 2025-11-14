import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

interface HighlightedNarrativeLineProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighlightedNarrativeLine({
  children,
  className = "",
}: HighlightedNarrativeLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = window.innerHeight / 2;
      const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + scrollProgress * 0.15;

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        inViewRef(node);
      }}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(0) scale(${scale})`
          : "translateY(20px) scale(0.95)",
        transition: "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.1s linear",
        transformOrigin: "center",
      }}
    >
      {children}
    </div>
  );
}
