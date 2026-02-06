//node module
import { motion } from "motion/react";

//custom modules
import { fadeUp, staggerContainer } from "@/lib/animations";

//components
import { SectionHeader } from "@/components/customUI/SectionHeader";
import { Button } from "@/components/ui/button";



export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id="about"
        >
            <SectionHeader subtitle="About" title="Learning, building, and growing through real projects" />

            <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
                I’m a full stack developer with a strong interest in building practical, user-focused web applications.
                I enjoy working across both front-end and back-end, turning ideas into clean, functional solutions.
                My focus is on writing maintainable code, creating responsive interfaces, and understanding how systems work end to end.
                I’m constantly learning and improving my skills by building real-world projects and staying up to date with modern web technologies.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-2 text-neutral-300">
                Outside of coding, I enjoy exploring new technologies, learning from open-source projects, and collaborating with other developers to solve real-world problems and grow as a developer.
            </motion.p>


            <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
                <Button asChild className="mt-5">
                    <a href="#contact">Contact Me</a>
                </Button>
            </motion.div>

        </motion.section>
    )
}