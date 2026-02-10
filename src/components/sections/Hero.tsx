
//node modules
import { motion } from "motion/react"
import { useMemo } from "react"
import React from "react"

//custom modules
import { staggerContainer } from "@/lib/animations"

//components
import { Button } from "@/components/ui/button"

//Assets
import { SparkleIcon } from "lucide-react"

export const Hero = () => {
    const roles = useMemo(() => ['Full Stack Developer', 'Web Developer', 'MERN Stack Developer', 'Software Developer'], [])
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [deleting, setDeleting] = React.useState(false);

    React.useEffect(() => {
        const current = roles[index]
        const timeout = setTimeout(() => {
            if (!deleting && subIndex < current.length) setSubIndex(v => v + 1)
            else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200)
            else if (deleting && subIndex > 0) setSubIndex(v => v - 1)
            else if (deleting && subIndex === 0) { setDeleting(false); setIndex(p => (p + 1) % roles.length) }
        }, deleting ? 40 : 60)
        return () => clearTimeout(timeout)
    }, [subIndex, index, deleting, roles])

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
            className="pt-10"
            id="hero"
        >
            <motion.p
                // variants={fadeUp}
                className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
            ><SparkleIcon size={15} /><span>Introduction</span></motion.p>

            <motion.p className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">
                {roles[index].substring(0, subIndex)}
                <span
                    className="inline-block w-1 ml-1 bg-white animate-pulse align-middle"
                    style={{ height: "1em" }}
                />
            </motion.p>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl mt-2 font-semibold max-w-3xl md:leading-16">
                Hello, I'm <span>Pramod Singh.</span>
            </motion.h1>


            <motion.div className="mt-5 flex gap-2">
                <Button asChild><a href="https://pramod-blogify.vercel.app/" target="0">Read My Blogs</a></Button>
                <Button variant="outline" onClick={handleDownloadCV}>Download CV</Button>
            </motion.div>
        </motion.section>
    )
}