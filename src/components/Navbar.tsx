import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Trophy, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Hackathons", path: "/hackathons" },
  { label: "Profile", path: "/profile" },
  { label: "Community", path: "/community" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const points = 245; // Mock points
  const rank = "Starbound";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary glow-primary">
            <Rocket className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-gradient-primary">
            TechAstra
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
            <Trophy className="h-4 w-4 text-astra-gold" />
            <span className="text-sm font-semibold text-foreground">{points}</span>
            <span className="text-xs text-muted-foreground">• {rank}</span>
          </div>
          <Link to="/login">
            <Button size="sm" className="glow-primary">Sign In</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-card px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-astra-gold" />
                <span className="text-sm font-semibold">{points} pts • {rank}</span>
              </div>
              <Link to="/login">
                <Button size="sm">Sign In</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
