import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Calendar, MapPin, Users, ExternalLink, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hackathons } from "@/data/hackathons";
import { WHATSAPP_URL } from "@/lib/constants";



const Hackathons = () => {
  const handleShare = (title: string) => {
    const text = `🚀 Check out "${title}" on TechAstra! Join the community:`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${text} ${WHATSAPP_URL}`)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen px-4 pb-20 pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-display text-4xl font-bold">
            <span className="text-gradient-primary">Hackathons</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Register for hackathons, earn <strong>+20 AstraPoints</strong> each, and level up.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hackathons.map((h) => (
            <AnimatedCard
              key={h.id}
              className="group flex flex-col transition-all hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <Badge
                  variant={h.status === "Registering" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {h.status}
                </Badge>
                <span className="text-xs font-semibold text-astra-gold">+{h.points} pts</span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold">{h.title}</h3>

              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {h.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {h.location} • {h.mode}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {h.participants.toLocaleString()} participants
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {h.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-2 pt-6">
                <Button size="sm" className="flex-1 gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Register
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleShare(h.title)}
                >
                  <Share2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hackathons;
