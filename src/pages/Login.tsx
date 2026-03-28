import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Starfield from "@/components/Starfield";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen pt-16">
      {/* Left: Visual */}
      <div className="relative hidden flex-1 items-center justify-center overflow-hidden lg:flex">
        <Starfield />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-astra-nebula/10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center px-12 text-center"
        >
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/20 glow-primary animate-float">
            <Rocket className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-display text-5xl font-bold text-gradient-primary">
            TechAstra
          </h1>
          <p className="mt-4 max-w-sm text-lg text-muted-foreground">
            Join the Astra-nomical Community. Track hackathons, earn ranks, and
            build the future.
          </p>
          <div className="mt-8 flex gap-3">
            {["Nebula", "Starbound", "Supernova"].map((rank) => (
              <span
                key={rank}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {rank}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Form */}
      <div className="flex flex-1 items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-8 lg:hidden flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary glow-primary">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-gradient-primary">
              TechAstra
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to continue your journey
          </p>

          {/* Google OAuth */}
          <Button
            variant="outline"
            className="mt-8 w-full gap-3 py-6 text-base"
            onClick={() => {}}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Email Magic Link */}
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-5"
              />
            </div>
            <Button className="w-full gap-2 py-5 glow-primary">
              <Mail className="h-4 w-4" />
              Send Magic Link
            </Button>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
