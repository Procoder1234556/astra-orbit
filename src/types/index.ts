// ─── User ────────────────────────────────────────────────────────────────────

export interface User {
  name: string;
  email: string;
  points: number;
  rank: string;
  nextRank: string;
  nextRankAt: number;
}

// ─── Hackathon ────────────────────────────────────────────────────────────────

export type HackathonStatus = "Registering" | "Coming Soon" | "Closed";
export type HackathonMode = "Online" | "In-Person" | "Hybrid";

export interface Hackathon {
  id: number;
  title: string;
  date: string;
  location: string;
  mode: HackathonMode;
  participants: number;
  tags: string[];
  status: HackathonStatus;
  /** AstraPoints awarded for registering */
  points: number;
}

// ─── Social Post ──────────────────────────────────────────────────────────────

export type SocialPlatform = "instagram" | "linkedin";
export type SocialPostType = "image" | "reel" | "text" | "article";

export interface SocialPost {
  /** Stable unique identifier — use as React key, never use array index */
  id: string;
  platform: SocialPlatform;
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  time: string;
  type: SocialPostType;
}
