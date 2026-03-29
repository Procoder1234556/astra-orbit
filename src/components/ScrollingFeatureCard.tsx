import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}

const ScrollingFeatureCard = ({ icon: Icon, title, desc, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group relative rounded-2xl bg-glass-card p-7 neon-border cursor-pointer transition-shadow duration-300 hover:glow-neon-intense"
    >
      {/* Glow overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Floating 3D icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 shadow-lg shadow-primary/10"
        >
          <Icon className="h-7 w-7 text-primary" />
        </motion.div>

        <h3 className="font-display text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
};

export default ScrollingFeatureCard;
