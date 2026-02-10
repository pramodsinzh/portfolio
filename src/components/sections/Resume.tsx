//node module
import { motion } from "motion/react";

//custom modules
import { fadeUp, staggerContainer } from "@/lib/animations";

//components
import { SectionHeader } from "@/components/customUI/SectionHeader";
import { ExpCard } from "@/components/cards/ExpCard";
import { ToolsCard } from "@/components/cards/ToolsCard";

//constants
import { education, experience, tools } from "@/constants";

export const Resume = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-20 scroll-mt-10"
            id="resume"
        >
            <SectionHeader subtitle="Resume" title="Education and Hands-On Experience" />
            <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
                With a background in Information Technology and hands-on experience across front-end and back-end development,
                I’ve worked on academic and personal projects ranging from simple landing pages to full-stack web applications.
                These experiences have strengthened my problem-solving skills, improved my understanding of system design,
                and reinforced my focus on building clean, functional, and user-friendly solutions.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-x-10 my-16">
                <motion.div variants={fadeUp} className="mb-16 md:mb-0">
                    <h2 className="text-3xl font-semibold mb-8">Education</h2>
                    <div className="space-y-8 border-l border-neutral-700 pl-6">
                        {education.map((item, i)=> (
                            <ExpCard key={i} item={item}/>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={fadeUp} >
                    <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
                    <div className="space-y-8 border-l border-border pl-6">
                        {experience.map((item, i)=> (
                            <ExpCard key={i} item={item}/>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="my-16">
                <motion.h2 variants={fadeUp} className="text-3xl font-semibold capitalize mb-8">Tools & Technologies</motion.h2>
                <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0.5)} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                    {tools.map((tool, i) => (
                        <ToolsCard key={i} tool={tool} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}