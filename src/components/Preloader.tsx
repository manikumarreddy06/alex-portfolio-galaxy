
import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 border-t-2 border-b-2 border-primary rounded-full animate-spin-slow"></div>
        <div className="absolute inset-2 border-r-2 border-l-2 border-accent rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }}></div>
        <div className="text-center p-8">
          <h1 className="text-xl font-display font-semibold">
            Alex <span className="text-primary">Carter</span>
          </h1>
          <div className="mt-2 text-sm text-muted-foreground animate-pulse">Loading experience...</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
