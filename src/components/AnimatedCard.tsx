import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const AnimatedCard = ({ children, className, ...props }: AnimatedCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className={cn("rounded-xl border border-border bg-gradient-card p-6", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
