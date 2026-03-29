/**
 * Starfield component tests (Task 11)
 * Tests:
 *  1. Renders a <canvas> element on mount.
 *  2. The canvas has the correct class names and styles.
 *  3. Unmounting does not throw (verifying cleanup of rAF/ResizeObserver/IntersectionObserver).
 */
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import React from "react";

// Track cancelAnimationFrame calls using a wrapper that records IDs scheduled
const scheduledIds: number[] = [];
const cancelledIds: number[] = [];

// Override the rAF/cAF mocks with ones that record IDs before setup.ts global ones run
Object.defineProperty(globalThis, "requestAnimationFrame", {
  writable: true,
  value: (cb: FrameRequestCallback) => {
    const id = setTimeout(() => cb(Date.now()), 16) as unknown as number;
    scheduledIds.push(id);
    return id;
  },
});

Object.defineProperty(globalThis, "cancelAnimationFrame", {
  writable: true,
  value: (id: number) => {
    cancelledIds.push(id);
    clearTimeout(id);
  },
});

describe("Starfield component", () => {
  afterEach(() => {
    scheduledIds.length = 0;
    cancelledIds.length = 0;
    vi.clearAllMocks();
  });

  it("renders a <canvas> element", async () => {
    const { default: Starfield } = await import("@/components/Starfield");
    const { container } = render(<Starfield />);
    const canvas = container.querySelector("canvas");
    expect(canvas).not.toBeNull();
  });

  it("canvas has pointer-events: none style", async () => {
    const { default: Starfield } = await import("@/components/Starfield");
    const { container } = render(<Starfield />);
    const canvas = container.querySelector("canvas") as HTMLCanvasElement;
    expect(canvas.style.pointerEvents).toBe("none");
  });

  it("canvas has absolute positioning classes", async () => {
    const { default: Starfield } = await import("@/components/Starfield");
    const { container } = render(<Starfield />);
    const canvas = container.querySelector("canvas") as HTMLCanvasElement;
    expect(canvas.className).toContain("absolute");
    expect(canvas.className).toContain("inset-0");
  });

  it("registers an animation frame on mount", async () => {
    const { default: Starfield } = await import("@/components/Starfield");
    await act(async () => {
      render(<Starfield />);
      // Give rAF a tick to fire
      await new Promise((r) => setTimeout(r, 50));
    });
    expect(scheduledIds.length).toBeGreaterThan(0);
  });

  it("cancels animation frame on unmount (cleanup)", async () => {
    const { default: Starfield } = await import("@/components/Starfield");
    const { unmount } = render(<Starfield />);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });
    unmount();
    // After unmount the Starfield cleanup calls cancelAnimationFrame with animId
    expect(cancelledIds.length).toBeGreaterThan(0);
  });

  it("does not throw when unmounted immediately after mounting", async () => {
    const { default: Starfield } = await import("@/components/Starfield");
    expect(() => {
      const { unmount } = render(<Starfield />);
      unmount();
    }).not.toThrow();
  });
});
