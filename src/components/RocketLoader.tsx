import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

interface RocketLoaderProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const RocketLoader = ({ isVisible, onComplete }: RocketLoaderProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Particle trails */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${40 + Math.random() * 20}%`,
                  y: "60%",
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: ["60%", `${70 + Math.random() * 30}%`],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  delay: 0.3 + Math.random() * 0.5,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 0.5,
                }}
                className="absolute h-2 w-2 rounded-full"
                style={{
                  background: `hsl(${[235, 270, 190, 42][i % 4]}deg ${80}% ${60}%)`,
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>

          {/* Rocket */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100vh" }}
            transition={{ duration: 2, delay: 0.8, ease: [0.45, 0, 0.55, 1] }}
            className="relative z-10"
          >
            {/* Exhaust flame */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: [0, 1, 1.3, 1], opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 origin-top"
            >
              <div className="h-12 w-6 rounded-b-full bg-gradient-to-b from-astra-gold via-destructive to-transparent opacity-80 blur-[2px]" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, -2, 2, -1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent glow-neon-intense"
            >
              <Rocket className="h-8 w-8 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Status text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 font-display text-lg font-semibold text-gradient-primary"
          >
            Launching to your Dashboard...
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="mt-4 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-neon-cyan"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RocketLoader;
