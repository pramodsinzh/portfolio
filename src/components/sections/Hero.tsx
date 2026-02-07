
//node modules
import { motion } from "motion/react"

//custom modules
import { staggerContainer } from "@/lib/animations"

//components
import { Button } from "@/components/ui/button"

//Assets
import { SparkleIcon } from "lucide-react"

export const Hero = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/pramod_cv.pdf';
        link.download = 'Pramod_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="pt-20"
            id="hero"
        >
            <motion.p
                // variants={fadeUp}
                className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
            ><SparkleIcon size={15} /><span>Introduction</span></motion.p>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16">
                I'm <span className="text-primary"> Pramod</span> Full stack developer.
            </motion.h1>

            <motion.div className="mt-5 flex gap-2">
                {/* <Button asChild><a href="#projects">Read My Blogs</a></Button> */}
                <Button variant="outline" onClick={handleDownloadCV}>Download CV</Button>
            </motion.div>
        </motion.section>
    )
}