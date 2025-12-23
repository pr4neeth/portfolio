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

    const killForSection = (section) => {
      // kill timeline
      if (tl) {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        tl = null;
      }
      // kill only triggers tied to this section
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };

    const setMobileStaticState = (section) => {
      const intro = section.querySelector(".capabilities-intro");
      const cards = Array.from(section.querySelectorAll(".capability-card"));

      if (intro) {
        gsap.set(intro, {
          clearProps: "all",
          autoAlpha: 1,
          display: "block",
          pointerEvents: "auto",
        });
      }

      if (cards.length) {
        // show them as normal stacked elements on mobile/tablet
        gsap.set(cards, {
          clearProps: "all",
          autoAlpha: 1,
          display: "block",
          pointerEvents: "auto",
        });

        // Remove absolute positioning effect on mobile so they don't overlap
        // (Only if you want them stacked. If you want overlap, remove this.)
        cards.forEach((card) => {
          card.style.position = "relative";
          card.style.left = "auto";
          card.style.top = "auto";
          card.style.transform = "none";
          card.style.margin = "14px auto 0";
          card.style.visibility = "visible";
          card.style.opacity = "1";
        });
      }

      if (intro) {
        intro.style.position = "relative";
        intro.style.left = "auto";
        intro.style.top = "auto";
        intro.style.transform = "none";
        intro.style.margin = "0 auto";
        intro.style.visibility = "visible";
        intro.style.opacity = "1";
      }
    };

    const restoreDesktopCardPositioning = (section) => {
      // restore the original absolute-style behavior for desktop
      const intro = section.querySelector(".capabilities-intro");
      const cards = Array.from(section.querySelectorAll(".capability-card"));

      const resetBox = (el) => {
        if (!el) return;
        el.style.position = "";
        el.style.left = "";
        el.style.top = "";
        el.style.transform = "";
        el.style.margin = "";
        el.style.visibility = "";
        el.style.opacity = "";
      };

      resetBox(intro);
      cards.forEach(resetBox);
    };

    const build = () => {
      const section = sectionRef.current;
      if (!section) return false;

      const intro = section.querySelector(".capabilities-intro");
      const cards = Array.from(section.querySelectorAll(".capability-card"));
      if (!intro || cards.length === 0) return false;

      const desktop = window.matchMedia("(min-width: 1024px)").matches;

      // ✅ Mobile/Tablet: no pin/snap to prevent scroll jumping
      if (!desktop) {
        killForSection(section);
        setMobileStaticState(section);
        return true;
      }

      // Desktop: restore your original layout behavior
      restoreDesktopCardPositioning(section);

      // Wait for globe on desktop
      if (!globeRef.current) return false;

      // Kill any previous timeline/triggers for this section
      killForSection(section);

      // Reset initial state for desktop animation
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
      const totalTurns = 1;
      const turnPerCard = (Math.PI * 2 * totalTurns) / cards.length;

      const introSegment = 1 / (steps - 1);
      const introThreshold = introSegment * 0.9;

      const endDistance = () => `+=${Math.round(window.innerHeight * 0.55 * steps)}`;

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

          onUpdate: (self) => {
            const showIntro = self.progress <= introThreshold;
            if (showIntro) {
              gsap.set(intro, { display: "block", autoAlpha: 1 });
            } else {
              gsap.set(intro, { autoAlpha: 0, display: "none" });
            }
          },

          onRefresh: () => gsap.set(section, { clearProps: "transform" }),
        },
      });

      // Intro visible at start
      tl.set(intro, { autoAlpha: 1, y: 0, display: "block" }, 0);

      // Cards + globe rotation per step
      for (let i = 0; i < cards.length; i++) {
        const stepTime = i + 1;

        tl.to(
          globeRef.current.rotation,
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

      return true;
    };

    const tick = () => {
      const ok = build();
      if (!ok) rafId = requestAnimationFrame(tick);
      else ScrollTrigger.refresh();
    };
    tick();
    
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const ok = build();
        if (ok) ScrollTrigger.refresh();
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      const section = sectionRef.current;
      if (section) killForSection(section);
    };
  }, []);

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
        <ThreeScene globeRef={globeRef} />
      </div>
    </section>
  );
}
