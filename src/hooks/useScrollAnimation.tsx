import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -80px 0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "blur-in";
  duration?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  duration = 700,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "-translate-x-10 opacity-0",
    "slide-right": "translate-x-10 opacity-0",
    "scale": "scale-95 opacity-0",
    "blur-in": "opacity-0 blur-sm",
  };

  const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100 blur-0";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
}

export const AnimatedItem = ({
  children,
  className = "",
  delay = 0,
}: AnimatedItemProps) => {
  return (
    <div
      className={`transition-all duration-500 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered children animation wrapper
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredContainer = ({
  children,
  className = "",
  staggerDelay = 100,
}: StaggeredContainerProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};
