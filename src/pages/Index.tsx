import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Rocket, Code, Trophy, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/Starfield";
import { WHATSAPP_URL } from "@/lib/constants";

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
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <Starfield />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

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
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 glow-primary"
          >
            <Rocket className="h-10 w-10 text-primary" />
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            <span className="text-gradient-primary">Join the</span>
            <br />
            <span className="text-foreground">Astra-nomical</span>
            <br />
            <span className="text-gradient-primary">Community</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Track hackathons, master roadmaps, earn ranks, and connect with the
            next generation of tech builders.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/hackathons">
              <Button size="lg" className="glow-primary gap-2 px-8">
                Explore Hackathons <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 px-8">
                Join WhatsApp Community
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative px-4 py-24">
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
            {features.map((f) => (
              <AnimatedCard
                key={f.title}
                className="group transition-all hover:border-primary/30 hover:glow-primary"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center glow-primary"
        >
          <h2 className="font-display text-3xl font-bold">
            Ready to become a <span className="text-gradient-gold">Supernova</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join 1,000+ students already earning AstraPoints and climbing the ranks.
          </p>
          <Link to="/login" className="mt-6 inline-block">
            <Button size="lg" className="glow-primary gap-2 px-8">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
