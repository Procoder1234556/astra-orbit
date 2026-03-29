import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 neon-border">
          <Rocket className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mb-4 font-display text-6xl font-bold text-gradient-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Lost in space! Page not found.</p>
        <a href="/" className="text-primary font-semibold underline hover:text-primary/80 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
