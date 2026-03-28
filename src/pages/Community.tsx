import { motion } from "framer-motion";
import { Instagram, Linkedin, Heart, MessageCircle, Send, Bookmark, ExternalLink, ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/Starfield";

import hackEvent from "@/assets/social/hack-event.jpg";
import devSetup from "@/assets/social/dev-setup.jpg";
import aiRoadmap from "@/assets/social/ai-roadmap.jpg";
import teamWin from "@/assets/social/team-win.jpg";
import systemDesign from "@/assets/social/system-design.jpg";
import supernova from "@/assets/social/supernova.jpg";

type SocialPost = {
  platform: "instagram" | "linkedin";
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  time: string;
  type: "image" | "reel" | "text" | "article";
};

const posts: SocialPost[] = [
  {
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content: "🚀 HackIndia 2026 registrations are LIVE! 5,000+ builders. 48 hours. Unlimited energy. Tag your dream team 👇 #TechAstra #HackIndia",
    image: hackEvent,
    imageAlt: "Hackathon event with purple lights and coders",
    likes: 1243,
    comments: 87,
    time: "2h",
    type: "image",
  },
  {
    platform: "linkedin",
    handle: "TechAstra",
    avatar: "TA",
    content: "We're thrilled to share that TechAstra just crossed 1,000 active members! 🎉\n\nWhat started as a small Discord server is now a full ecosystem — hackathon tracking, AI mentors, gamified learning paths, and a community that genuinely supports each other.\n\nTo every Nebula, Starbound, and Supernova out there — you make this possible.",
    likes: 892,
    comments: 134,
    time: "5h",
    type: "article",
  },
  {
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content: "POV: Your setup when the AI/ML roadmap drops at midnight 🖥️✨ #devlife #codeaesthetic",
    image: devSetup,
    imageAlt: "Developer desk setup with triple monitors and moody lighting",
    likes: 2156,
    comments: 142,
    time: "8h",
    type: "reel",
  },
  {
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content: "New Roadmap Alert 🧠 AI/ML in 30 days — from zero to deploying your first model. Curated by Supernova-ranked mentors. Link in bio!",
    image: aiRoadmap,
    imageAlt: "Neural network brain visualization with glowing connections",
    likes: 1878,
    comments: 96,
    time: "1d",
    type: "image",
  },
  {
    platform: "linkedin",
    handle: "TechAstra Community",
    avatar: "TA",
    content: "🏆 Congratulations to our Q1 Supernova Top 10!\n\nThese members earned 500+ AstraPoints through hackathon registrations, roadmap completions, and community contributions.\n\nYour dedication to growth is truly inspiring. Keep reaching for the stars.",
    image: teamWin,
    imageAlt: "Team celebrating hackathon win with confetti",
    likes: 456,
    comments: 67,
    time: "2d",
    type: "article",
  },
  {
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content: "Workshop this Saturday 🏗️ System Design from scratch — load balancers, caching, microservices. Free for all community members! Save this post 🔖",
    image: systemDesign,
    imageAlt: "System design architecture diagram with glowing nodes",
    likes: 934,
    comments: 73,
    time: "3d",
    type: "image",
  },
  {
    platform: "linkedin",
    handle: "TechAstra Community",
    avatar: "TA",
    content: "From Nebula to Supernova in 60 days — meet Priya, who went from \"I don't know where to start\" to placing 3rd at ETHGlobal by following our Web3 roadmap and participating in every community hackathon.\n\nHer secret? Consistency and the power of community support. Read the full story on our blog.",
    likes: 678,
    comments: 89,
    time: "4d",
    type: "text",
  },
  {
    platform: "instagram",
    handle: "techastra",
    avatar: "TA",
    content: "The journey from Nebula → Supernova ✨🚀 Which rank are you? Drop your AstraPoints below 👇 #TechAstra #gamification",
    image: supernova,
    imageAlt: "Cosmic nebula with rocket ship silhouette",
    likes: 3420,
    comments: 256,
    time: "5d",
    type: "reel",
  },
];

const formatNumber = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));

const InstagramPost = ({ post, index }: { post: SocialPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    className="mb-5 break-inside-avoid rounded-2xl border border-border bg-card overflow-hidden group"
  >
    {/* Header */}
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[10px] font-bold text-primary-foreground">
        {post.avatar}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{post.handle}</p>
      </div>
      {post.type === "reel" && (
        <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          Reel
        </span>
      )}
      <Instagram className="h-4 w-4 shrink-0 text-muted-foreground" />
    </div>

    {/* Image */}
    {post.image && (
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt || ""}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    )}

    {/* Actions */}
    <div className="flex items-center gap-4 px-4 pt-3">
      <Heart className="h-5 w-5 cursor-pointer text-foreground transition-colors hover:text-destructive" />
      <MessageCircle className="h-5 w-5 cursor-pointer text-foreground" />
      <Send className="h-5 w-5 cursor-pointer text-foreground" />
      <Bookmark className="ml-auto h-5 w-5 cursor-pointer text-foreground" />
    </div>

    {/* Likes */}
    <p className="px-4 pt-2 text-sm font-semibold">{formatNumber(post.likes)} likes</p>

    {/* Caption */}
    <div className="px-4 pb-3 pt-1">
      <p className="text-sm leading-relaxed">
        <span className="font-semibold">{post.handle}</span>{" "}
        <span className="text-foreground/85">{post.content}</span>
      </p>
      <p className="mt-1.5 text-xs text-muted-foreground">
        View all {post.comments} comments • {post.time} ago
      </p>
    </div>
  </motion.div>
);

const LinkedInPost = ({ post, index }: { post: SocialPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    className="mb-5 break-inside-avoid rounded-2xl border border-border bg-card overflow-hidden"
  >
    {/* Header */}
    <div className="flex items-center gap-3 px-5 pt-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-xs font-bold text-primary">
        {post.avatar}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{post.handle}</p>
        <p className="text-xs text-muted-foreground">
          {post.time} ago • <Linkedin className="mb-px inline h-3 w-3" />
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="px-5 pt-3 pb-1">
      <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
        {post.content}
      </p>
    </div>

    {/* Image if present */}
    {post.image && (
      <div className="mt-3 overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt || ""}
          loading="lazy"
          className="w-full object-cover"
        />
      </div>
    )}

    {/* Engagement bar */}
    <div className="border-t border-border mx-5 mt-3" />
    <div className="flex items-center justify-between px-5 py-2.5 text-xs text-muted-foreground">
      <span>👍 {formatNumber(post.likes)}</span>
      <span>{post.comments} comments</span>
    </div>
  </motion.div>
);

const Community = () => {
  return (
    <div className="relative min-h-screen pb-20 pt-24">
      {/* Hero CTA Banner */}
      <section className="relative overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/20"
        >
          {/* Background layers */}
          <div className="absolute inset-0">
            <Starfield />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-accent/10" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 glow-primary"
            >
              <Users className="h-10 w-10 text-primary" />
            </motion.div>

            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Join the{" "}
              <span className="text-gradient-primary">Astra Tribe</span>
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              1,000+ builders sharing opportunities, debugging together, and climbing the ranks. Your people are waiting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/G36r2nPndpQ9wiVSodQWH8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 px-8 glow-primary">
                  <MessageCircle className="h-5 w-5" />
                  Join WhatsApp Community
                </Button>
              </a>
              <Button size="lg" variant="outline" className="gap-2 px-8">
                <Sparkles className="h-4 w-4" />
                Earn +10 pts for sharing
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex items-center gap-8 text-center">
              {[
                { label: "Members", value: "1,200+" },
                { label: "Hackathons", value: "24" },
                { label: "Countries", value: "18" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-gradient-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Wall */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="font-display text-3xl font-bold">The Wall</h2>
            <p className="mt-1 text-muted-foreground">
              Live from our Instagram & LinkedIn
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <a href="#" className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              <Instagram className="h-3.5 w-3.5" /> @techastra
            </a>
            <a href="#" className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              <Linkedin className="h-3.5 w-3.5" /> TechAstra
            </a>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {posts.map((post, i) =>
            post.platform === "instagram" ? (
              <InstagramPost key={i} post={post} index={i} />
            ) : (
              <LinkedInPost key={i} post={post} index={i} />
            )
          )}
        </div>

        {/* Load more hint */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Follow us for more
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Community;
