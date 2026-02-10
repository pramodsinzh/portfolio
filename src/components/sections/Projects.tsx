// node modules
import { motion } from "motion/react";

// custom modules
import { fadeUp, staggerContainer } from "@/lib/animations";

// data
import { projectData } from "@/constants";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/customUI/SectionHeader";

export const Projects = () => {
  return (
    <motion.section
      // initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10 "
      id="projects"
    >
      <SectionHeader subtitle="Projects" title="My featured projects" />
      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        A selection of my recent work, from complex web applications to
        innovative tools that solve real-world problems.
      </motion.p>
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};
