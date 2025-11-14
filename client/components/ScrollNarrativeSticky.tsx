import { useEffect, useRef } from "react";
import styles from "./ScrollNarrativeSticky.module.css";

interface ScrollStep {
  text: string | React.ReactNode;
  isHero?: boolean;
  lineClass?: string;
}

interface ScrollNarrativeStickyProps {
  steps: ScrollStep[];
}

export default function ScrollNarrativeSticky({
  steps,
}: ScrollNarrativeStickyProps) {
  const scrollStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scaleLineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const stepElements = scrollStepRefs.current.filter(
      (el) => el !== null,
    ) as HTMLDivElement[];

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          } else {
            entry.target.classList.remove(styles.active);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    stepElements.forEach((step) => stepObserver.observe(step));

    return () => {
      stepElements.forEach((step) => stepObserver.unobserve(step));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!scaleLineRef.current) return;

      const rect = scaleLineRef.current.parentElement?.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const winH = window.innerHeight;

      if (rect.top > winH || rect.bottom < 0) {
        scaleLineRef.current.style.setProperty('--scale', '1', 'important');
        return;
      }

      const start = winH * 0.2;
      const end = winH * 0.8;

      const centerY = winH / 2;
      const relative = centerY - rect.top;
      let progress = (relative - start) / (end - start);
      progress = Math.min(Math.max(progress, 0), 1);

      const minScale = 1;
      const maxScale = 1.5;
      const scale = minScale + (maxScale - minScale) * progress;

      scaleLineRef.current.style.setProperty('--scale', scale.toString(), 'important');
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.prividiumScroll}>
      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => {
            scrollStepRefs.current[index] = el;
          }}
          className={`${styles.scrollStep} ${
            step.isHero ? styles.scrollStepPin : ""
          }`}
          data-step={index + 1}
        >
          <div className={styles.stickyInner}>
            <p
              className={`${styles.line} ${
                step.lineClass ? styles[step.lineClass] : ""
              }`}
            >
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
