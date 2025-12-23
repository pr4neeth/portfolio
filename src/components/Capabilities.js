import React, { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import "./Capabilities.css";
import ThreeScene from "./ThreeScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

const capabilities = [
  {
    title: "Systems architecture",
    description:
      "End-to-end product ownership across modern frameworks and tools with a bias for measurable performance.",
    items: ["Node.js", "React.js", "Express.js", "MongoDB", "MySQL", "Hapi.js", "Angular"],
  },
  {
    title: "Coding Languages",
    description:
      "Proficient in multiple programming languages to build robust and scalable software solutions.",
    items: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "JSP"],
  },
  {
    title: "Deployment and Maintenance",
    description:
      "Supporting processes like deployment, CI/CD, documentation, and API design to streamline workflows.",
    items: ["Hosting & Deployment", "CI/CD Pipelines", "Documentation", "API Design", "Testing & QA"],
  },
];

export default function Capabilities() {
  const globeRef = useRef(null);
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
      const factor = isDesktop ? 0.55 : 0.7;
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

    const hasGlobe = isDesktop && globeRef.current;
    const totalTurns = 1;
    const turnPerCard = (Math.PI * 2 * totalTurns) / cards.length;

    for (let i = 0; i < cards.length; i++) {
      const stepTime = i + 1;

      if (hasGlobe) {
        tl.to(
          globeRef.current.rotation,
          { y: -(i + 1) * turnPerCard, ease: "none", duration: 1 },
          stepTime
        );
      }

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
              Capabilities shaped by real-world systems and measurable outcomes.
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
        {isDesktop ? <ThreeScene globeRef={globeRef} /> : null}
      </div>
    </section>
  );
}
