import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ExternalLink, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hackathons = [
  {
    id: 1,
    title: "HackIndia 2026",
    date: "April 12–14, 2026",
    location: "Bangalore, India",
    mode: "Hybrid",
    participants: 5000,
    tags: ["AI/ML", "Web3", "Open Innovation"],
    status: "Registering",
    points: 20,
  },
  {
    id: 2,
    title: "ETHGlobal New Delhi",
    date: "May 3–5, 2026",
    location: "New Delhi, India",
    mode: "In-Person",
    participants: 1200,
    tags: ["Blockchain", "DeFi", "Smart Contracts"],
    status: "Registering",
    points: 20,
  },
  {
    id: 3,
    title: "Google Summer of Code",
    date: "June 1 – Aug 31, 2026",
    location: "Remote",
    mode: "Online",
    participants: 12000,
    tags: ["Open Source", "All Tracks"],
    status: "Coming Soon",
    points: 20,
  },
  {
    id: 4,
    title: "MLH Fellowship Hack",
    date: "July 18–20, 2026",
    location: "Virtual",
    mode: "Online",
    participants: 3000,
    tags: ["Full Stack", "DevOps", "AI"],
    status: "Registering",
    points: 20,
  },
  {
    id: 5,
    title: "TechAstra Internal Jam",
    date: "Aug 9–10, 2026",
    location: "Community Discord",
    mode: "Online",
    participants: 500,
    tags: ["UI/UX", "Web Dev", "Rapid Prototyping"],
    status: "Coming Soon",
    points: 20,
  },
  {
    id: 6,
    title: "Smart India Hackathon",
    date: "Sept 20–22, 2026",
    location: "Multi-City, India",
    mode: "In-Person",
    participants: 25000,
    tags: ["GovTech", "EdTech", "HealthTech"],
    status: "Registering",
    points: 20,
  },
];

const Hackathons = () => {
  const handleShare = (title: string) => {
    const text = `🚀 Check out "${title}" on TechAstra! Join the community:`;
    const url = "https://chat.whatsapp.com/G36r2nPndpQ9wiVSodQWH8";
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank");
  };

  return (
    <div className="min-h-screen px-4 pb-20 pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold">
            <span className="text-gradient-primary">Hackathons</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Register for hackathons, earn <strong>+20 AstraPoints</strong> each, and level up.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/30"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
