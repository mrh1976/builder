import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface SplitTextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitTextReveal({
  children,
  className = "",
  delay = 0,
}: SplitTextRevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [visibleWords, setVisibleWords] = useState(0);
  const words = children.split(" ");

  useEffect(() => {
    if (!inView) return;

    let wordIndex = 0;
    const timer = setInterval(() => {
      if (wordIndex < words.length) {
        setVisibleWords(wordIndex + 1);
        wordIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50 + delay / words.length);

    return () => clearInterval(timer);
  }, [inView, words.length, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease-out",
      }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleWords ? 1 : 0.2,
            transition: "opacity 0.3s ease-in",
            display: "inline",
            marginRight: "0.35em",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
