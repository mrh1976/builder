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
  const scaleLineRef = useRef<HTMLDivElement>(null);
  const scrollStepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const stepElements = scrollStepRefs.current.filter(Boolean) as HTMLDivElement[];

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
      }
    );

    stepElements.forEach((step) => stepObserver.observe(step));

    return () => {
      stepElements.forEach((step) => stepObserver.unobserve(step));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!scaleLineRef.current) return;

      const pinStepIndex = steps.findIndex((s) => s.isHero);
      if (pinStepIndex === -1) return;

      const pinStep = scrollStepRefs.current[pinStepIndex];
      if (!pinStep) return;

      const rect = pinStep.getBoundingClientRect();
      const winH = window.innerHeight;

      if (rect.top > winH || rect.bottom < 0) {
        scaleLineRef.current.style.transform = "scale(1)";
        return;
      }

      const start = winH * 0.15;
      const end = winH * 0.85;

      const centerY = winH / 2;
      const relative = centerY - rect.top;
      let progress = (relative - start) / (end - start);
      progress = Math.min(Math.max(progress, 0), 1);

      const minScale = 1;
      const maxScale = 1.5;
      const scale = minScale + (maxScale - minScale) * Math.pow(progress, 1.2);

      scaleLineRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps]);

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
              ref={(el) => {
                if (step.isHero && el) {
                  scaleLineRef.current = el;
                }
              }}
            >
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
