
//node modules
import { motion } from "motion/react";

//custom modules
import { fadeUp } from "@/lib/animations";

//types
import type { ToolsType } from "@/types";

 
export const ToolsCard = ({tool}: {tool: ToolsType}) => {
  return (
    <motion.div variants={fadeUp} className="border border-neutral-700 rounded-md flex items-center justify-center flex-col py-4 hover:scale-105 duration-150">
        <img src={tool.imgSrc} alt={tool.label} />
        <p className="font-bold mt-2">{tool.label}</p>
    </motion.div>
  )
}