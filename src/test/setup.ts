import "@testing-library/jest-dom";

// --- matchMedia mock ---
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// --- ResizeObserver mock ---
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// --- IntersectionObserver mock (needed by Starfield) ---
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
};

// --- requestAnimationFrame / cancelAnimationFrame mock ---
global.requestAnimationFrame = (cb: FrameRequestCallback) =>
  setTimeout(() => cb(Date.now()), 0) as unknown as number;
global.cancelAnimationFrame = (id: number) => clearTimeout(id);

// --- Canvas getContext mock (jsdom does not implement canvas rendering) ---
// Cast needed because jsdom's faked canvas requires the overloaded signature
( HTMLCanvasElement.prototype as unknown as { getContext: () => object } ).getContext = function () {
  return {
    clearRect: () => {},
    beginPath: () => {},
    arc: () => {},
    fill: () => {},
    fillStyle: "",
  };
};

