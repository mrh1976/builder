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
    const stepElements = scrollStepRefs.current.filter(
      Boolean,
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
