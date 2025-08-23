import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        formData.append("access_key", "537edf6e-f874-416d-8483-caa35c35a933");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            toast.success('Thank you for your submission!')
            event.target.reset();
            } else {
            toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    className='flex flex-col items-center
    gp-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From strategy to 
        execution, we craft digital solutions that move your business forward'/>
        
        <motion.form
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}
        onSubmit={onSubmit}  action="" className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300
                dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" placeholder='Enter your name' className='w-full 
                    p-3 text-sm outline-none' name="name" required />
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300
                dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email" placeholder='Enter your email' className='w-full 
                    p-3 text-sm outline-none' name="email" required />
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea name="message" rows={8} placeholder='Enter your message' className='w-full
                p-3 text-sm outline-none rounded-lg border border-gray-300
                dark:border-gray-600' required/>
            </div>

            <button type="submit" className='w-max flex gap-2 bg-primary text-white
            text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103
            transition-all'>
                Submit <img src={assets.arrow_icon} alt="" />
            </button>

        </motion.form>
    </motion.div>
  )
}

export default ContactUs;
