import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Trophy, Star, Zap, BookOpen } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useAuth } from "@/context/AuthContext";
import { mockUser } from "@/data/user";
import { getCssVar } from "@/lib/theme";
import { getRankProgress } from "@/lib/utils";
import { getCharacterById, getRandomCharacter, type TechCharacter } from "@/lib/characters";
import { useEffect, useState } from "react";

const skillData = [
  { skill: "DSA", value: 72 },
  { skill: "AI/ML", value: 58 },
  { skill: "Web Dev", value: 85 },
  { skill: "Web3", value: 35 },
  { skill: "UI/UX", value: 65 },
  { skill: "DevOps", value: 42 },
];

const enrolledHackathons = [
  { title: "HackIndia 2026", date: "April 12–14", status: "Registered" },
  { title: "ETHGlobal New Delhi", date: "May 3–5", status: "Registered" },
];

const savedResources = [
  { title: "React 19 Deep Dive", type: "Roadmap" },
  { title: "System Design Primer", type: "Resource" },
  { title: "LLM Fine-Tuning Guide", type: "Resource" },
];

const Profile = () => {
  const { user } = useAuth();
  const [character, setCharacter] = useState<TechCharacter | null>(null);

  useEffect(() => {
    // Check localStorage for persisted character, assign random if none
    const stored = localStorage.getItem("astra_character");
    if (stored) {
      const found = getCharacterById(stored);
      setCharacter(found || getRandomCharacter());
    } else {
      const newChar = getRandomCharacter();
      localStorage.setItem("astra_character", newChar.id);
      setCharacter(newChar);
    }
  }, []);

  const userData = {
    name: user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Astra Member",
    email: user?.email || "guest@techastra.com",
    points: mockUser.points,
    rank: mockUser.rank,
    nextRank: mockUser.nextRank,
    nextRankAt: mockUser.nextRankAt,
  };

  const rankProgress = [
    {
      name: "Progress",
      value: getRankProgress(userData.points, userData.nextRankAt),
      fill: getCssVar("--primary"),
    },
  ];

  return (
    <div className="min-h-screen px-4 pb-20 pt-24 bg-gradient-hero">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-3xl font-bold text-primary shadow-lg shadow-primary/10 neon-border">
            {userData.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold">{userData.name}</h1>
            <p className="text-muted-foreground">{userData.email}</p>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 neon-border">
                <Trophy className="h-4 w-4 text-astra-gold" />
                <span className="text-sm font-semibold">{userData.points} pts</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{userData.rank}</span>
              </div>
            </div>
          </div>

          {/* Character Badge */}
          {character && (
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="rounded-2xl bg-glass-card p-4 neon-border glow-neon text-center"
            >
              <div className={`mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${character.color} text-2xl shadow-lg`}>
                {character.emoji}
              </div>
              <p className="font-display text-sm font-bold">{character.name}</p>
              <p className="mt-1 text-[10px] leading-tight text-muted-foreground max-w-[140px]">{character.description}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Charts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <AnimatedCard className="bg-glass-card neon-border">
            <h2 className="font-display text-xl font-semibold">Rank Progress</h2>
            <p className="text-sm text-muted-foreground">
              {userData.points} / {userData.nextRankAt} pts to {userData.nextRank}
            </p>
            <div className="mt-4 flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  data={rankProgress}
                  startAngle={90}
                  endAngle={-270}
                >
                  <RadialBar
                    dataKey="value"
                    cornerRadius={12}
                    background={{ fill: getCssVar("--border") }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-gradient-primary">
                {rankProgress[0].value}%
              </span>
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-glass-card neon-border">
            <h2 className="font-display text-xl font-semibold">Skill Radar</h2>
            <p className="text-sm text-muted-foreground">Based on your accessed resources</p>
            <div className="mt-4">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={skillData}>
                  <PolarGrid stroke={getCssVar("--border")} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: getCssVar("--muted-foreground"), fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    dataKey="value"
                    stroke={getCssVar("--primary")}
                    fill={getCssVar("--primary")}
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedCard>
        </motion.div>

        {/* Vault */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <AnimatedCard className="bg-glass-card neon-border">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl font-semibold">Enrolled Hackathons</h2>
            </div>
            <div className="space-y-3">
              {enrolledHackathons.map((h) => (
                <div
                  key={h.title}
                  className="flex items-center justify-between rounded-lg bg-secondary p-4"
                >
                  <div>
                    <p className="font-medium">{h.title}</p>
                    <p className="text-sm text-muted-foreground">{h.date}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {h.status}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-glass-card neon-border">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="font-display text-xl font-semibold">Saved Resources</h2>
            </div>
            <div className="space-y-3">
              {savedResources.map((r) => (
                <div
                  key={r.title}
                  className="flex items-center justify-between rounded-lg bg-secondary p-4"
                >
                  <p className="font-medium">{r.title}</p>
                  <span className="text-xs text-muted-foreground">{r.type}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
