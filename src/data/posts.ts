import type { SocialPost } from "@/types";

import hackEvent from "@/assets/social/hack-event.jpg";
import devSetup from "@/assets/social/dev-setup.jpg";
import aiRoadmap from "@/assets/social/ai-roadmap.jpg";
import teamWin from "@/assets/social/team-win.jpg";
import systemDesign from "@/assets/social/system-design.jpg";
import supernova from "@/assets/social/supernova.jpg";

export const posts: SocialPost[] = [
  {
    id: "post-1",
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content:
      "🚀 HackIndia 2026 registrations are LIVE! 5,000+ builders. 48 hours. Unlimited energy. Tag your dream team 👇 #TechAstra #HackIndia",
    image: hackEvent,
    imageAlt: "Hackathon event with purple lights and coders",
    likes: 1243,
    comments: 87,
    time: "2h",
    type: "image",
  },
  {
    id: "post-2",
    platform: "linkedin",
    handle: "TechAstra",
    avatar: "TA",
    content:
      "We're thrilled to share that TechAstra just crossed 1,000 active members! 🎉\n\nWhat started as a small Discord server is now a full ecosystem — hackathon tracking, AI mentors, gamified learning paths, and a community that genuinely supports each other.\n\nTo every Nebula, Starbound, and Supernova out there — you make this possible.",
    likes: 892,
    comments: 134,
    time: "5h",
    type: "article",
  },
  {
    id: "post-3",
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content:
      "POV: Your setup when the AI/ML roadmap drops at midnight 🖥️✨ #devlife #codeaesthetic",
    image: devSetup,
    imageAlt: "Developer desk setup with triple monitors and moody lighting",
    likes: 2156,
    comments: 142,
    time: "8h",
    type: "reel",
  },
  {
    id: "post-4",
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content:
      "New Roadmap Alert 🧠 AI/ML in 30 days — from zero to deploying your first model. Curated by Supernova-ranked mentors. Link in bio!",
    image: aiRoadmap,
    imageAlt: "Neural network brain visualization with glowing connections",
    likes: 1878,
    comments: 96,
    time: "1d",
    type: "image",
  },
  {
    id: "post-5",
    platform: "linkedin",
    handle: "TechAstra",
    avatar: "TA",
    content:
      "🏆 Congratulations to our Q1 Supernova Top 10!\n\nThese members earned 500+ AstraPoints through hackathon registrations, roadmap completions, and community contributions.\n\nYour dedication to growth is truly inspiring. Keep reaching for the stars.",
    image: teamWin,
    imageAlt: "Team celebrating hackathon win with confetti",
    likes: 456,
    comments: 67,
    time: "2d",
    type: "article",
  },
  {
    id: "post-6",
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content:
      "Workshop this Saturday 🏗️ System Design from scratch — load balancers, caching, microservices. Free for all community members! Save this post 🔖",
    image: systemDesign,
    imageAlt: "System design architecture diagram with glowing nodes",
    likes: 934,
    comments: 73,
    time: "3d",
    type: "image",
  },
  {
    id: "post-7",
    platform: "linkedin",
    handle: "TechAstra",
    avatar: "TA",
    content:
      'From Nebula to Supernova in 60 days — meet Priya, who went from "I don\'t know where to start" to placing 3rd at ETHGlobal by following our Web3 roadmap and participating in every community hackathon.\n\nHer secret? Consistency and the power of community support. Read the full story on our blog.',
    likes: 678,
    comments: 89,
    time: "4d",
    type: "text",
  },
  {
    id: "post-8",
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content:
      "The journey from Nebula → Supernova ✨🚀 Which rank are you? Drop your AstraPoints below 👇 #TechAstra #gamification",
    image: supernova,
    imageAlt: "Cosmic nebula with rocket ship silhouette",
    likes: 3420,
    comments: 256,
    time: "5d",
    type: "reel",
  },
];
