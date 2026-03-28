import { motion } from "framer-motion";
import { MessageCircle, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialPosts = [
  {
    platform: "Instagram",
    handle: "@techastra",
    content: "🚀 HackIndia 2026 registrations are OPEN! Tag your team. #TechAstra #Hackathon",
    likes: 234,
    time: "2h ago",
  },
  {
    platform: "LinkedIn",
    handle: "TechAstra Community",
    content: "Proud to announce our community hit 1,000+ members! The future of tech is being built right here.",
    likes: 892,
    time: "5h ago",
  },
  {
    platform: "Instagram",
    handle: "@techastra",
    content: "New roadmap dropped: AI/ML in 30 days 🧠 Check it out on our platform! Link in bio.",
    likes: 178,
    time: "1d ago",
  },
  {
    platform: "LinkedIn",
    handle: "TechAstra Community",
    content: "Congratulations to our top 10 Supernova-ranked members this quarter! 🌟 Your dedication inspires us all.",
    likes: 456,
    time: "2d ago",
  },
  {
    platform: "Instagram",
    handle: "@techastra",
    content: "Workshop alert! Join us this Saturday for a live System Design session 🏗️ Free for all members.",
    likes: 312,
    time: "3d ago",
  },
  {
    platform: "LinkedIn",
    handle: "TechAstra Community",
    content: "From Nebula to Supernova—here's how one member earned 500+ points in just 2 months. Read their story.",
    likes: 678,
    time: "4d ago",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen px-4 pb-20 pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold">
            <span className="text-gradient-primary">Community</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Stay connected with the TechAstra universe
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center glow-primary"
        >
          <MessageCircle className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-2xl font-bold">Join the WhatsApp Community</h2>
          <p className="mt-2 text-muted-foreground">
            1,000+ students sharing opportunities, debugging together, and growing.
          </p>
          <a
            href="https://chat.whatsapp.com/G36r2nPndpQ9wiVSodQWH8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
          >
            <Button size="lg" className="gap-2 glow-primary">
              Join Now <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        {/* Social Wall */}
        <h2 className="mt-16 font-display text-2xl font-bold">The Wall</h2>
        <p className="mt-1 text-sm text-muted-foreground">Latest from our socials</p>

        <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {socialPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="mb-6 break-inside-avoid rounded-xl border border-border bg-gradient-card p-5"
            >
              <div className="flex items-center gap-2">
                {post.platform === "Instagram" ? (
                  <Instagram className="h-4 w-4 text-destructive" />
                ) : (
                  <Linkedin className="h-4 w-4 text-primary" />
                )}
                <span className="text-sm font-medium">{post.handle}</span>
                <span className="ml-auto text-xs text-muted-foreground">{post.time}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{post.content}</p>
              <div className="mt-3 text-xs text-muted-foreground">❤️ {post.likes}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
