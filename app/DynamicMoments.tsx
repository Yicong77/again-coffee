"use client";

import { useEffect, useState } from "react";
import styles from "./dynamic-moments.module.css";
import OptimizedImage from "./OptimizedImage";

const slides = [
  {
    baseName: "again-rabbit-latte",
    alt: "A playful rabbit and carrot latte art held above a warm timber table",
    number: "01",
    width: 1086,
    height: 1448,
    kicker: "Little joys",
    title: "A little bunny for your morning.",
    copy: "Carrots, a little bunny, and a playful cup made to make you smile.",
  },
  {
    baseName: "again-cinnamon-cloud",
    alt: "A cinnamon-topped milk coffee in a speckled ceramic cup",
    number: "02",
    width: 1086,
    height: 1448,
    kicker: "Soft & spiced",
    title: "Slow down for something warm.",
    copy: "A cloud of milk, a generous dusting of cinnamon, and a quiet pause.",
  },
  {
    baseName: "again-cake-table",
    alt: "Blueberry cake with hot and iced coffees arranged on a cafe table",
    number: "03",
    width: 1089,
    height: 1444,
    kicker: "Better together",
    title: "Coffee, cake, and time to stay.",
    copy: "Bring someone you like and order one more thing for the table.",
  },
];

export default function DynamicMoments() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section
      className={styles.section}
      id="moments-gallery"
      aria-label="Again Coffee photo stories"
    >
      <div className={`page-width ${styles.heading}`}>
        <div>
          <p>AT AGAIN · PHOTO JOURNAL</p>
          <h2>Made to make<br /><em>you smile.</em></h2>
        </div>
        <p>Three small moments from a slower day at the café.</p>
      </div>

      <div
        className={styles.gallery}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false);
        }}
      >
        <div className={styles.slides}>
          {slides.map((slide, index) => (
            <article
              className={`${styles.slide} ${index === active ? styles.active : ""}`}
              aria-hidden={index !== active}
              key={slide.baseName}
            >
              <figure>
                <OptimizedImage
                  alt={slide.alt}
                  baseName={slide.baseName}
                  height={slide.height}
                  sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 60vw"
                  width={slide.width}
                  widths={[480, 720, slide.width]}
                />
              </figure>
              <div className={styles.story}>
                <div className={styles.storyTop}>
                  <span>{slide.number} / 03</span>
                  <span>{slide.kicker}</span>
                </div>
                <div aria-live="polite">
                  <h3>{slide.title}</h3>
                  <p>{slide.copy}</p>
                </div>
                <span className={styles.signature}>Again</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.controls}>
          <div className={styles.arrows}>
            <button type="button" onClick={() => move(-1)} aria-label="Previous photo">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Next photo">→</button>
          </div>
          <div className={styles.dots} aria-label="Choose a photo">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={index === active ? styles.dotActive : ""}
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1}: ${slide.title}`}
                aria-current={index === active ? "true" : undefined}
                key={slide.src}
              />
            ))}
          </div>
          <div className={styles.progress} aria-hidden="true">
            <span key={active} className={paused ? styles.progressPaused : ""} />
          </div>
        </div>
      </div>
    </section>
  );
}
