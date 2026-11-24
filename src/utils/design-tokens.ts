/** Read a CSS duration token as milliseconds for DOM and GSAP animations. */
export function durationToken(element: Element, name: string, fallback: number): number {
  const value = getComputedStyle(element).getPropertyValue(name).trim();
  if (!/^(?:\d*\.)?\d+(?:ms|s)$/.test(value)) return fallback;
  const milliseconds = Number.parseFloat(value) * (value.endsWith("ms") ? 1 : 1000);
  return Number.isFinite(milliseconds) ? milliseconds : fallback;
}
