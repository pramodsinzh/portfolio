"use client";
import { useState, type ReactNode, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: ReactNode;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(navItems[0]?.link ?? "");

  /* ---------- Scroll show / hide ---------- */
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const prev = scrollYProgress.getPrevious() ?? 0;
    const direction = current - prev;

    if (current < 0.01) {
      setVisible(false); // only at very top
    } else {
      setVisible(direction < 0);
    }
  });

  /* ---------- Active section detection ---------- */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.link))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "fixed top-4 inset-x-2 mx-auto z-50",
          "flex items-center justify-between",
          "rounded-full border border-primary/20 bg-black/60 backdrop-blur-md",
          "px-1 py-3 sm:px-8 sm:py-4",
          "w-full max-w-[95%] sm:max-w-fit",
          className
        )}
      >
        {navItems.map((item) => {
          const isActive = active === item.link;

          return (
            <a
              key={item.link}
              href={item.link}
              className={cn(
                "relative flex items-center justify-center px-4 py-2 text-sm rounded-full transition-colors",
                isActive
                  ? "text-primary"
                  : "text-neutral-400 hover:text-neutral-200"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <span className="relative z-10 block sm:hidden">
                {item.icon}
              </span>
              <span className="relative z-10 hidden sm:block">
                {item.name}
              </span>
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
