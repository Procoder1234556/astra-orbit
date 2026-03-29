import type { User } from "@/types";

/**
 * Single source of truth for the mock user.
 * Both Profile.tsx and Navbar.tsx previously defined this separately —
 * they were already out of sync. Replace with real auth data in Phase 2.
 */
export const mockUser: User = {
  name: "Arjun Mehta",
  email: "arjun@techastra.dev",
  points: 245,
  rank: "Starbound",
  nextRank: "Supernova",
  nextRankAt: 501,
};
