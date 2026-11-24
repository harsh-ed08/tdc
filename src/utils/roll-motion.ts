  import { durationToken } from "./design-tokens";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  for (const label of document.querySelectorAll<HTMLElement>(
    "[data-roll-motion]",
  )) {
    const trigger = label.closest<HTMLElement>("a, button");
    const track = label.querySelector<HTMLElement | SVGElement>("[data-roll-track]")!;
    if (!trigger || !track) continue;
    let animation: Animation | undefined;
    let hovered = false;
    let focused = false;
    const roll = () => {
      const from =
        animation
          ? getComputedStyle(track).transform
          : "translateY(0)";
      animation?.cancel();
      if (reducedMotion.matches) return;
      animation = track.animate(
        [{ transform: from }, { transform: hovered || focused ? `translateY(${label.dataset.rollDistance || "-50%"})` : "translateY(0)" }],
        {
          duration: durationToken(trigger, "--motion-roll-duration", 300),
          easing: getComputedStyle(trigger).getPropertyValue("--motion-roll-ease").trim() || "ease",
          fill: "forwards",
        },
      );
    };
    trigger.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") { hovered = true; roll(); }
    });
    trigger.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "touch") {
        hovered = false;
        focused = trigger.matches(":focus-visible");
        roll();
      }
    });
    trigger.addEventListener("focus", () => {
      focused = trigger.matches(":focus-visible");
      roll();
    });
    trigger.addEventListener("blur", () => { focused = false; roll(); });
    reducedMotion.addEventListener("change", () => animation?.cancel());
    document.addEventListener("astro:before-swap", () => animation?.cancel(), {
      once: true,
    });
  }
