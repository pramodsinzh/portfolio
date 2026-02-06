//Node modules
import { useForm } from 'react-hook-form'
import { motion } from 'motion/react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle, AlertCircle } from 'lucide-react'

//Custom module
import { fadeUp } from '@/lib/animations'

//components
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/SectionHeader'


//types
type ContactFormValues = {
    name: string
    email: string
    phone: string
    company: string
    message: string
}

export const Contact = () => {
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        }
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" })

    const onSubmit = async (values: ContactFormValues, e?: React.BaseSyntheticEvent) => {
        e?.preventDefault()
        setIsLoading(true)
        setSubmitStatus({ type: null, message: "" })
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("Email service is not configured properly.")
            }

            await emailjs.send(serviceId, templateId, values, publicKey)
            setSubmitStatus({ type: "success", message: "Your message has been sent successfully! I'll get back to you soon." })
            form.reset()
        } catch (error) {
            setSubmitStatus({ type: "error", message: "Something went wrong. Please try again later." })
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeUp}
            className="mt-30 scroll-mt-10"
            id="contact"
        >
            <SectionHeader subtitle="Contact" title="Let’s build something awesome together!" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mx-auto space-y-4 mt-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input required placeholder='Your name' {...field} className='border-0' />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input required type='email' placeholder='your@email.com' {...field} className='border-0' />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input required type='tel' placeholder='Your phone number' {...field} className='border-0' />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='company'
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input placeholder='Company name' {...field} className='border-0' />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Textarea required placeholder='Your message...' {...field} className='border-0 h-36 resize-none' rows={10} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' size='lg' disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                    {submitStatus.type === "success" && (
                        <div className={`flex items-center gap-3 p-4 rounded-xl ${
                            submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-800" : "bg-red-500/10 border border-red-500/20 text-red-800"
                        }`}>
                        {submitStatus.type === "success" ? <CheckCircle className='w-5 h-5 shrink-0' /> : <AlertCircle className='w-5 h-5 shrink-0' />}
                        <p className="text-sm">{submitStatus.message}</p>
                        </div>
                    )  }
                </form>
            </Form>
        </motion.section>
    )
}