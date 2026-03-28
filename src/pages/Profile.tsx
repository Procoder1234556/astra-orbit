import { motion } from "framer-motion";
import { Trophy, Star, Zap, BookOpen, Code, Palette, Brain } from "lucide-react";
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

const user = {
  name: "Arjun Mehta",
  email: "arjun@techastra.dev",
  points: 245,
  rank: "Starbound",
  nextRank: "Supernova",
  nextRankAt: 501,
};

const rankProgress = [
  { name: "Progress", value: Math.round((user.points / user.nextRankAt) * 100), fill: "hsl(250, 85%, 65%)" },
];

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
  return (
    <div className="min-h-screen px-4 pb-20 pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 text-3xl font-bold text-primary glow-primary">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
                <Trophy className="h-4 w-4 text-astra-gold" />
                <span className="text-sm font-semibold">{user.points} pts</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{user.rank}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Rank Radial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-gradient-card p-6"
          >
            <h2 className="font-display text-xl font-semibold">Rank Progress</h2>
            <p className="text-sm text-muted-foreground">
              {user.points} / {user.nextRankAt} pts to {user.nextRank}
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
                    background={{ fill: "hsl(230, 18%, 18%)" }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-gradient-primary">
                {rankProgress[0].value}%
              </span>
            </div>
          </motion.div>

          {/* Skill Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-gradient-card p-6"
          >
            <h2 className="font-display text-xl font-semibold">Skill Radar</h2>
            <p className="text-sm text-muted-foreground">Based on your accessed resources</p>
            <div className="mt-4">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={skillData}>
                  <PolarGrid stroke="hsl(230, 18%, 22%)" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "hsl(220, 12%, 55%)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    dataKey="value"
                    stroke="hsl(250, 85%, 65%)"
                    fill="hsl(250, 85%, 65%)"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Vault */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Enrolled Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border bg-gradient-card p-6"
          >
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
          </motion.div>

          {/* Saved Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-border bg-gradient-card p-6"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
