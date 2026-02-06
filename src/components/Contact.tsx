//Node modules
import { useForm } from 'react-hook-form'
import { motion } from 'motion/react'

//Custom module
import { fadeUp } from '@/lib/animations'

//components
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/SectionHeader'


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
    const onSubmit = (values: ContactFormValues) => {
        console.log(values)
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
                                        <Input placeholder='Your name' {...field} className='border-0' />
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
                                        <Input type='email' placeholder='youremail@example.com' {...field} className='border-0' />
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
                                        <Input type='tel' placeholder='+123467890' {...field} className='border-0' />
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
                                    <Textarea placeholder='Your message' {...field} className='border-0 h-36' rows={10} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' size='lg'>Send Message</Button>
                </form>
            </Form>
        </motion.section>
    )
}