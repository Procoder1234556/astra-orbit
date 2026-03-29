import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { Rocket, Code, Trophy, Users, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import ScrollingFeatureCard from "@/components/ScrollingFeatureCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const features = [
  {
    icon: Code,
    title: "Hackathon Tracker",
    desc: "Discover and register for the hottest hackathons. Never miss a deadline again.",
  },
  {
    icon: Zap,
    title: "AI Mentor",
    desc: "Get personalized guidance from Astra AI—powered by advanced reasoning models.",
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    desc: "Earn AstraPoints, climb ranks from Nebula to Supernova, and flex your skills.",
  },
  {
    icon: Users,
    title: "Community Hub",
    desc: "Connect with 1000+ tech enthusiasts. Share wins, get feedback, grow together.",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-4 bg-gradient-hero">
        {/* Decorative orbs */}
        <div className="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] h-64 w-64 rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-neon-cyan/5 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/20"
          >
            <Rocket className="h-10 w-10 text-primary-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 neon-border"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">The #1 Student Tech Community</span>
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            <span className="text-gradient-primary">Join the</span>
            <br />
            <span className="text-foreground">Astra-nomical</span>
            <br />
            <span className="text-gradient-neon">Community</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Track hackathons, master roadmaps, earn ranks, and connect with the
            next generation of tech builders.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/hackathons">
              <Button size="lg" className="gap-2 px-8 shadow-lg shadow-primary/20">
                Explore Hackathons <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 px-8 neon-border hover:glow-neon">
                Join WhatsApp Community
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative px-4 py-24 bg-gradient-space">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-display text-3xl font-bold sm:text-4xl"
          >
            Everything you need to <span className="text-gradient-primary">level up</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f, i) => (
              <ScrollingFeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA */}
      <section className="px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-neon-cyan/10 p-10 text-center neon-border glow-neon"
        >
          <h2 className="font-display text-3xl font-bold">
            Ready to become a <span className="text-gradient-gold">Supernova</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join 1,000+ students already earning AstraPoints and climbing the ranks.
          </p>
          <Link to="/login" className="mt-6 inline-block">
            <Button size="lg" className="gap-2 px-8 shadow-lg shadow-primary/20">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
