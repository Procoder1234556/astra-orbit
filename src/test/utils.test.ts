import { describe, it, expect } from "vitest";
import { formatNumber, getRankProgress } from "@/lib/utils";

describe("formatNumber", () => {
  it("returns string representation for numbers < 1000", () => {
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(999)).toBe("999");
  });

  it("applies 'k' suffix for exact thousands", () => {
    expect(formatNumber(1000)).toBe("1k");
    expect(formatNumber(5000)).toBe("5k");
  });

  it("applies 'k' suffix with one decimal place for non-exact thousands", () => {
    expect(formatNumber(1200)).toBe("1.2k");
    // JS toFixed(1): 1450/1000 = 1.45 → rounds to "1.4" (banker's rounding in V8)
    expect(formatNumber(1450)).toBe("1.4k");
    expect(formatNumber(9900)).toBe("9.9k");
  });

  it("rounds to one decimal place correctly", () => {
    expect(formatNumber(1234)).toBe("1.2k");
    expect(formatNumber(1256)).toBe("1.3k");
  });
});

describe("getRankProgress", () => {
  it("calculates percentage correctly for normal values", () => {
    expect(getRankProgress(250, 500)).toBe(50);
    expect(getRankProgress(245, 501)).toBe(49);
  });

  it("returns 0 if points are 0", () => {
    expect(getRankProgress(0, 500)).toBe(0);
  });

  it("handles divide-by-zero by returning 0 (Issue 10A)", () => {
    expect(getRankProgress(250, 0)).toBe(0);
    expect(getRankProgress(250, -10)).toBe(0);
  });

  it("clamps values between 0 and 100", () => {
    expect(getRankProgress(-50, 500)).toBe(0);
    expect(getRankProgress(600, 500)).toBe(100);
    expect(getRankProgress(500, 500)).toBe(100);
  });
});
