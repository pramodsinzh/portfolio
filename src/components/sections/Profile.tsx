//components
import { Button } from "@/components/ui/button"

//constants
import { socialLinks } from "@/constants"



export const Profile = () => {
    return (<aside className="max-w-3xl m-6 p-6 border border-neutral-600 bg-neutral-900 text-white rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96">
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-x-10">
                <h1 className="text-3xl font-bold">Pramod</h1>
                <p className="text-sm">Full Stack Developer</p>
            </div>
            <img src="/avatar.jpg.jpeg" alt="Pramod" className="lg:w-96 rounded-2xl object-cover hover:scale-102 transition duration-200" />

            <div className="mt-6">
                <p className="text-neutral-300 text-sm">Specialization:</p>
                <p className="text-lg capitalize">Frontend and Backend in MERN Stack</p>
            </div>
            <div>
                <p className="text-neutral-300 text-sm">Availability</p>
                <p className="text-lg capitalize">Internship · Freelance · Remote</p>
            </div>

            <div className="flex gap-3 pt-2 text-neutral-500">
                {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                        <a key={i} href={social.link} className="hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200"><Icon className='size-6' /></a>
                    )
                })}
            </div>

            <Button className="mt-2" size='lg'>
                Let's Work
            </Button>
        </div>
    </aside>
    )
}