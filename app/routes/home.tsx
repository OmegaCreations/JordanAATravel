import { useEffect, useRef, useState } from "react";
import { Welcome } from "~/welcome/welcome";

const isScrollable = () => {
  return document.documentElement.scrollHeight > window.innerHeight;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value));
};

function useScrollIndicator({
  showThumb = true,
  showTooltip = true,
  showPercentages = true,
  isVertical = true,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "hero", label: "Welcome" },
    { id: "jordan", label: "Jordan" },
    { id: "advantages", label: "Advantages" },
    { id: "offerPlan", label: "Offer Plan" },
    { id: "benefits", label: "Benefits" },
    { id: "aboutUs", label: "AboutUs" },
    { id: "contact", label: "Contact" },
  ];

  const createScale = () => {
    const scale = scaleRef.current;
    const trackEl = containerRef.current?.querySelector<HTMLElement>(
      ".scroll-indicator__track"
    );
    if (!scale || !trackEl) return;
    scale.innerHTML = "";

    const trackHeight = trackEl.clientHeight;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // małe markery co 2%
    for (let pct = 0; pct <= 100; pct += 2) {
      const m = document.createElement("div");
      m.className = "scroll-indicator__marker";
      const y = (pct / 100) * trackHeight;
      if (isVertical) {
        m.style.top = `${y}px`;
        m.style.width = "6px";
      } else {
        m.style.left = `${y}px`;
        m.style.height = "6px";
      }
      scale.appendChild(m);
    }

    // duże markery + etykiety
    sections.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;

      // surowy px w tracku
      const rawPx = (el.offsetTop / maxScroll) * trackHeight;
      // zmierz wysokość etykiety
      const temp = document.createElement("div");
      temp.className = "scroll-indicator__percentage";
      temp.textContent = label;
      temp.style.visibility = "hidden";
      scale.appendChild(temp);
      const lblH = temp.offsetHeight;
      scale.removeChild(temp);

      const margin = lblH / 2;
      // clamp px do [margin, trackHeight - margin]
      const y = Math.max(margin, Math.min(trackHeight - margin, rawPx));

      // duży marker
      const big = document.createElement("div");
      big.className =
        "scroll-indicator__marker scroll-indicator__marker--major";
      if (isVertical) {
        big.style.top = `${y}px`;
        big.style.width = "20px";
      } else {
        big.style.left = `${y}px`;
        big.style.height = "20px";
      }
      scale.appendChild(big);
    });
  };

  const updateMarkers = (scrollPercentage: number) => {
    // — tutaj Twój istniejący kod fill markerów —

    // nowa część: pokazywanie etykiet wg offsetTop
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      const lbl = scaleRef.current?.querySelector<HTMLElement>(
        `.scroll-indicator__percentage[data-id="${id}"]`
      );
      if (!el || !lbl) return;

      if (window.scrollY + window.innerHeight >= el.offsetTop) {
        lbl.classList.add("scroll-indicator__percentage--visible");
      } else {
        lbl.classList.remove("scroll-indicator__percentage--visible");
      }
    });
  };

  const updateIndicator = () => {
    const scrollY = window.scrollY;
    const bottomY = scrollY + window.innerHeight;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const trackEl = containerRef.current?.querySelector<HTMLElement>(
      ".scroll-indicator__track"
    );
    if (!trackEl) return;
    const trackHeight = trackEl.clientHeight;

    // znajdź aktualną sekcję
    let current: (SectionDef & { offset: number }) | null = null;
    sections.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (bottomY >= el.offsetTop) {
        current = { id, label, offset: el.offsetTop };
      }
    });

    if (current) {
      const rawPx = (current.offset / maxScroll) * trackHeight;
      // clamp ten sam margin co wyżej
      const lbl = scaleRef.current?.querySelector<HTMLElement>(
        `.scroll-indicator__percentage[data-id="${current.id}"]`
      );
      const lblH = lbl ? lbl.offsetHeight : 0;
      const margin = lblH / 2;
      const y = Math.max(margin, Math.min(trackHeight - margin, rawPx));

      // thumb
      if (thumbRef.current) {
        thumbRef.current.style.top = `${y}px`;
        thumbRef.current.style.transform = "translateY(-50%)";
        thumbRef.current.style.display = showThumb ? "block" : "none";
      }
      // tooltip
      if (tooltipRef.current) {
        tooltipRef.current.style.top = `${y}px`;
        tooltipRef.current.style.transform = "translateY(-50%)";
        tooltipRef.current.textContent = current.label;
        tooltipRef.current.style.display = showTooltip ? "block" : "none";
      }

      // wypełnienie paska
      if (progressBarRef.current) {
        const fillPx = Math.max(0, Math.min(trackHeight, rawPx));
        progressBarRef.current.style.height = `${fillPx}px`;
      }
    } else {
      // schowaj
      if (thumbRef.current) thumbRef.current.style.display = "none";
      if (tooltipRef.current) tooltipRef.current.style.display = "none";
    }

    // show/hide etykiet sekcji
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      const lbl = scaleRef.current?.querySelector<HTMLElement>(
        `.scroll-indicator__percentage[data-id="${id}"]`
      );
      if (!el || !lbl) return;
      if (bottomY >= el.offsetTop) {
        lbl.classList.add("scroll-indicator__percentage--visible");
      } else {
        lbl.classList.remove("scroll-indicator__percentage--visible");
      }
    });
  };

  useEffect(() => {
    createScale();

    const handleScroll = () => {
      if (!isScrollable()) {
        (containerRef.current as HTMLElement).style.display = "none";
        return;
      } else {
        (containerRef.current as HTMLElement).style.display = "";
      }
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      updateIndicator(scrollPercentage);
    };

    const handleResize = () => {
      createScale();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { containerRef, thumbRef, tooltipRef, progressBarRef, scaleRef };
}

export default function Home() {
  const { containerRef, thumbRef, tooltipRef, progressBarRef, scaleRef } =
    useScrollIndicator({ isVertical: true });

  return (
    <>
      <div
        className="invisible lg:visible scroll-indicator scroll-indicator--vertical"
        id="verticalIndicator"
        ref={containerRef}
        style={{ opacity: 0.6 }}
      >
        <div className="scroll-indicator__track">
          <div
            className="scroll-indicator__progress"
            ref={progressBarRef}
          ></div>
          <div className="scroll-indicator__thumb" ref={thumbRef}></div>
          <div className="scroll-indicator__tooltip" ref={tooltipRef}>
            0%
          </div>
        </div>
        <div className="scroll-indicator__scale" ref={scaleRef}></div>
      </div>
      <Welcome />
    </>
  );
}
