import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    college: "JIMS, New Delhi",
    review: "TechAstra helped me discover 3 hackathons I wouldn't have found otherwise. Won my first prize at HackIndia!",
    avatar: "PS",
  },
  {
    name: "Arjun Reddy",
    college: "BITS Pilani",
    review: "The gamified ranking system keeps me motivated. Went from Nebula to Starbound in just 2 months.",
    avatar: "AR",
  },
  {
    name: "Sneha Iyer",
    college: "VIT Vellore",
    review: "Best tech community I've been part of. The roadmaps are incredibly well-structured.",
    avatar: "SI",
  },
  {
    name: "Rohan Gupta",
    college: "DTU, Delhi",
    review: "Landed my first internship thanks to the connections I made through TechAstra's WhatsApp community.",
    avatar: "RG",
  },
  {
    name: "Ananya Das",
    college: "IIIT Hyderabad",
    review: "The AI mentor feature is a game-changer. It's like having a senior developer available 24/7.",
    avatar: "AD",
  },
  {
    name: "Karthik Nair",
    college: "NIT Trichy",
    review: "From zero hackathon experience to winning ETHGlobal—TechAstra's community made it possible.",
    avatar: "KN",
  },
  {
    name: "Meera Joshi",
    college: "COEP, Pune",
    review: "The AstraPoints system is addictive! I've completed every roadmap just to hit Supernova rank.",
    avatar: "MJ",
  },
  {
    name: "Vikram Singh",
    college: "IIT Bombay",
    review: "Clean UI, great community, and actually useful resources. This is what student platforms should be.",
    avatar: "VS",
  },
];

const TestimonialCarousel = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4 pb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold sm:text-4xl"
        >
          Loved by <span className="text-gradient-primary">1,000+ builders</span>
        </motion.h2>
        <p className="mt-3 text-muted-foreground">
          Real students, real results, real community.
        </p>
      </div>

      {/* Marquee container */}
      <div className="group relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="mx-3 w-[320px] flex-shrink-0 rounded-2xl bg-glass-card p-6 neon-border transition-shadow hover:glow-neon"
            >
              <Quote className="mb-3 h-5 w-5 text-primary/40" />
              <p className="text-sm leading-relaxed text-foreground/80">
                "{t.review}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
