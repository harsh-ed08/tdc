  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  for (const label of document.querySelectorAll<HTMLElement>(
    "[data-roll-motion]",
  )) {
    const trigger = label.closest<HTMLElement>("a, button");
    const track = label.querySelector<HTMLElement | SVGElement>("[data-roll-track]")!;
    if (!trigger) continue;
    let animation: Animation | undefined;
    const roll = () => {
      const from =
        animation?.playState === "running"
          ? getComputedStyle(track).transform
          : "translateY(0)";
      animation?.cancel();
      if (reducedMotion.matches) return;
      animation = track.animate(
        [{ transform: from }, { transform: `translateY(${label.dataset.rollDistance || "-50%"})` }],
        { duration: 300, easing: "cubic-bezier(.22, 1, .36, 1)" },
      );
    };
    trigger.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") roll();
    });
    trigger.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "touch") roll();
    });
    trigger.addEventListener("focus", roll);
    trigger.addEventListener("blur", roll);
    reducedMotion.addEventListener("change", () => animation?.cancel());
    document.addEventListener("astro:before-swap", () => animation?.cancel(), {
      once: true,
    });
  }
