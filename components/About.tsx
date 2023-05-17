import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity:0
            }}
            
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity:1,
                x: 0
            }}
            viewport={{ once : true }}
            src='/ossama2.png'
            className ="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]" />
        
        <div className='space-y-10 px-0 md:px-10' >
            <h4 className='text-4xl font-semibold' >Here is a <span className='underline decoration-[#F7AB0A]/50' >little</span>  background</h4>
            <p className='text-base' >
            Innovative Full Stack Developer With 2+ years of experience in Full Stack Development.
I help companies to :
 - Develope web applications and websites by writing clean and efficient code that meets project
 requirements.
 - Troubleshooting and debugging issues in existing code.
 - Participating in code reviews to ensure code quality and consistency.
 - Staying up-to-date with emerging trends and technologies in web development.
👁️ If you are looking for a dedicated, hard-working Full-Stack developer who is passionate about creating quality websites, 𝙥𝙡𝙚𝙖𝙨𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙢𝙚 𝙖𝙩 elidrissiossama31@𝙜𝙢𝙖𝙞𝙡.𝙘𝙤𝙢 📧.
        
            </p>
        </div>
            
    </motion.div>
  )
}

export default About