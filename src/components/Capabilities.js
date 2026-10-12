import React, { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import "./Capabilities.css";
import ThreeScene from "./ThreeScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

const capabilities = [
  {
    title: "Backend & Distributed Systems",
    description:
      "Event-driven pipelines and REST microservices built for throughput, from 500K+ events/day on Kafka to services holding 500+ concurrent users with zero downtime.",
    items: ["Node.js", "Express.js", "Hapi.js", "Spring Boot", ".NET", "Microservices", "Kafka", "WebSockets"],
  },
  {
    title: "Frontend Engineering",
    description:
      "Responsive, fast interfaces with a performance budget: memoization and render optimizations that cut re-renders by 60% and Time-to-Interactive by 1.2s.",
    items: ["React.js", "Next.js", "Angular", "Redux", "TypeScript", "Webpack", "Figma"],
  },
  {
    title: "Data & Performance",
    description:
      "Schema design, indexing and caching that turn slow paths into fast ones: 6.2s → 800ms dashboards and 9s → 1.3s reports.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Hibernate / JPA"],
  },
  {
    title: "Cloud, DevOps & Observability",
    description:
      "CI/CD from commit to production, telemetry and latency dashboards, and safe rollouts with feature flags and phased deploys.",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Feature Flags"],
  },
  {
    title: "Security, Quality & Languages",
    description:
      "Secure-by-default services with JWT/RBAC, OWASP reviews and PII guardrails, backed by test suites that doubled coverage to 80%+.",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "JWT · RBAC", "OWASP", "JUnit · Jest"],
  },
];

export default function Capabilities() {
  // Plain object the scroll timeline writes to; the globe eases toward it.
  const rotationTarget = useRef({ y: 0 });
  const sectionRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsDesktop(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    setIsDesktop(mq.matches);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const stepsCount = useMemo(() => capabilities.length + 1, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const intro = section.querySelector(".capabilities-intro");
    const cards = Array.from(section.querySelectorAll(".capability-card"));

    if (!intro || cards.length === 0) return;

    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === section) st.kill();
    });

    gsap.set(intro, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      pointerEvents: "auto",
    });

    gsap.set(cards, {
      autoAlpha: 0,
      y: 80,
      pointerEvents: "none",
    });

    const steps = cards.length + 1;
    const introSegment = 1 / (steps - 1);
    const introThreshold = introSegment * 0.9;

    const endDistance = () => {
      const factor = isDesktop ? 0.5 : 0.65;
      return `+=${Math.round(window.innerHeight * factor * steps)}`;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: endDistance,
        scrub: 0.6,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        snap: {
          snapTo: 1 / (steps - 1),
          // Snap to the nearest step in the scroll direction instead of
          // flinging several cards ahead based on scroll velocity.
          inertia: false,
          directional: true,
          duration: { min: 0.35, max: 0.9 },
          delay: 0.05,
          ease: "power2.out",
        },

        onUpdate: (self) => {
          const showIntro = self.progress <= introThreshold;
          if (showIntro) {
            gsap.set(intro, { display: "block", autoAlpha: 1 });
          } else {
            gsap.set(intro, { autoAlpha: 0, display: "none" });
          }
        },

        onRefresh: () => {
          gsap.set(section, { clearProps: "transform" });
        },
      },
    });

    tl.set(intro, { autoAlpha: 1, y: 0, display: "block" }, 0);

    const target = rotationTarget.current;
    target.y = 0;
    const totalTurns = 1;
    const turnPerCard = (Math.PI * 2 * totalTurns) / cards.length;

    for (let i = 0; i < cards.length; i++) {
      const stepTime = i + 1;

      tl.to(
        target,
        { y: -(i + 1) * turnPerCard, ease: "none", duration: 1 },
        stepTime
      );

      tl.to(
        cards[i],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          pointerEvents: "auto",
        },
        stepTime + 0.05
      );

      if (i > 0) {
        tl.to(
          cards[i - 1],
          {
            autoAlpha: 0,
            y: -20,
            duration: 0.25,
            ease: "power2.inOut",
            pointerEvents: "none",
          },
          stepTime
        );
      }
    }

    ScrollTrigger.refresh();

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [isDesktop, stepsCount]);

  return (
    <section ref={sectionRef} className="capabilities-section" id="capabilities">
      <div className="capabilities-left">
        <p className="capabilities-p">Capabilities</p>
        <h2 className="capabilities-title">How I Operate.</h2>

        <div className="capabilities-stage">
          <div className="capabilities-intro">
            <div className="capabilities-intro-top">
              Capabilities shaped by real-world systems and measurable outcomes. Scroll to explore.
            </div>
          </div>

          {capabilities.map((cap, index) => (
            <div key={index} className="capability-card">
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
              <div className="capability-items">
                {cap.items.map((item, i) => (
                  <span key={i} className="capability-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="capabilities-right">
        {isDesktop ? <ThreeScene rotationTarget={rotationTarget.current} /> : null}
      </div>
    </section>
  );
}
