import { motion } from "framer-motion";
import { Instagram, Linkedin, Heart, MessageCircle, Send, Bookmark, ExternalLink, ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/Starfield";
import { formatNumber } from "@/lib/utils";
import { posts } from "@/data/posts";
import { WHATSAPP_URL } from "@/lib/constants";
import type { SocialPost } from "@/types";

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
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.image}
          alt={post.imageAlt || ""}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
      <div className="mt-3 overflow-hidden aspect-video relative">
        <img
          src={post.image}
          alt={post.imageAlt || ""}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
                href={WHATSAPP_URL}
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
              <InstagramPost key={post.id} post={post} index={i} />
            ) : (
              <LinkedInPost key={post.id} post={post} index={i} />
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
