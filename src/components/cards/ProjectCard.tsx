// node modules
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

// custom modules
import { fadeUp } from "@/lib/animations";

// types
import type { ProjectTypes } from "@/types";

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  github,
}: ProjectTypes) => {
  return (
    <motion.div
      variants={fadeUp}
      className="group glass rounded-2xl overflow-hidden border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-70" />

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground  hover:text-primary transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
