import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Trophy, Menu, X, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Hackathons", path: "/hackathons" },
  { label: "Profile", path: "/profile" },
  { label: "Community", path: "/community" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();

  // For now, points/rank are still mock or fallback as we don't have a users table yet in Supabase
  // but we read the real user's metadata if available.
  const points = 245; 
  const rank = "Starbound";

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

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
          <div className="flex items-center gap-2 rounded-full bg-secondary border border-border px-3 py-1.5">
            <Trophy className="h-4 w-4 text-astra-gold drop-shadow-[0_0_8px_rgba(255,191,0,0.4)]" />
            <span className="text-sm font-bold text-foreground tracking-tight">{points}</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest opacity-70">• {rank}</span>
          </div>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-offset-background transition-all hover:ring-2 hover:ring-primary/20">
                  <Avatar className="h-9 w-9 border border-border shadow-sm">
                    <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ""} />
                    <AvatarFallback className="bg-primary/10 text-[10px] font-bold text-primary">
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold leading-none truncate">
                      {user.user_metadata?.full_name || "Astra Member"}
                    </p>
                    <p className="text-[10px] leading-none text-muted-foreground truncate opacity-70">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
                  <UserIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4 opacity-70" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button size="sm" className="glow-primary h-9 px-5 font-semibold tracking-tight">Sign In</Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            <div className="mt-4 flex flex-col gap-3 rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-astra-gold drop-shadow-[0_0_8px_rgba(255,191,0,0.4)]" />
                  <span className="text-sm font-bold">{points} pts</span>
                  <span className="text-xs text-muted-foreground">• {rank}</span>
                </div>
                {user && (
                   <span className="text-[10px] font-medium text-muted-foreground uppercase opacity-70">Member</span>
                )}
              </div>
              
              {user ? (
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="w-full gap-2 font-semibold"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-3.5 w-3.5" /> Log out
                </Button>
              ) : (
                <Link to="/login" className="w-full" onClick={() => setMobileOpen(false)}>
                  <Button size="sm" className="w-full glow-primary font-semibold">Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
