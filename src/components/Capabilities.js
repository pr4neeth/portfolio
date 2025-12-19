import React, { useLayoutEffect, useRef } from "react";
import "./Capabilities.css";
import ThreeScene from "./ThreeScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useLayoutEffect(() => {
    let rafId = 0;
    let tl = null;

    const build = () => {
      const section = sectionRef.current;
      if (!section) return false;

      const intro = section.querySelector(".capabilities-intro");
      const cards = Array.from(section.querySelectorAll(".capability-card"));
      if (!intro || cards.length === 0) return false;

      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      if (desktop && !globeRef.current) return false;

      // cleanup previous timeline/trigger (important after route navigation)
      if (tl) {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        tl = null;
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });

      // initial states
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

      const steps = cards.length + 1; // intro + N cards
      const hasGlobe = !!globeRef.current;

      const totalTurns = 1;
      const turnPerCard = (Math.PI * 2 * totalTurns) / cards.length;

      // first segment (intro) in normalized progress
      const introSegment = 1 / (steps - 1);
      const introThreshold = introSegment * 0.9; // allow a tiny buffer

      const endDistance = () =>
        `+=${Math.round(window.innerHeight * 0.55 * steps)}`;

      tl = gsap.timeline({
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

          // ✅ HARD GUARANTEE: intro is ONLY allowed in segment 0
          onUpdate: (self) => {
            const showIntro = self.progress <= introThreshold;

            if (showIntro) {
              gsap.set(intro, { display: "block", autoAlpha: 1 });
            } else {
              // display:none prevents faint bleed through transparent cards
              gsap.set(intro, { autoAlpha: 0, display: "none" });
            }
          },

          onRefresh: () => gsap.set(section, { clearProps: "transform" }),
        },
      });

      // STEP 0: intro visible (timeline doesn’t animate it; onUpdate enforces it)
      tl.set(intro, { autoAlpha: 1, y: 0, display: "block" }, 0);

      // STEP 1..N: cards + rotation
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
      return true;
    };

    const tick = () => {
      const ok = build();
      if (!ok) rafId = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => build());
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      if (tl) {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="capabilities-section" id="capabilities">
      <div className="capabilities-left">
        <p className="capabilities-p">Capabilities</p>
        <h2 className="capabilities-title">How I Operate.</h2>

        <div className="capabilities-stage">
          <div className="capabilities-intro">
            <div className="capabilities-intro-top">Capabilities shaped by real-world systems and measurable outcomes.</div>
            {/* <div className="capabilities-intro-text">
              A guided walkthrough of how I build: systems-first thinking, clean implementation,
              and maintainable delivery.
            </div> */}
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
        <ThreeScene globeRef={globeRef} />
      </div>
    </section>
  );
}
