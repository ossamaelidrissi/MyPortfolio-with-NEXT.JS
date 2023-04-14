import { socialIcons } from '@/lib/vars'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 justify-between flex items-start max-w-7xl mx-auto z-20 xl:items-center ' >
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center' >

            {/* Social Icons */}

            {
                socialIcons.map(icon => (
                    <SocialIcon key={icon.id} url={icon.link} fgColor='gray' bgColor='transparent' />
                    ))
                }

                <SocialIcon url='https://www.linkedin.com/in/ossama-el-idrissi-a19111215/' fgColor='gray' bgColor='transparent' />
                {/* <SocialIcon key={icon.id} url={icon.link} fgColor='gray' bgColor='transparent' /> */}
        </motion.div>

        <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex left-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >Get In Touch</p>
        </motion.div>

    </header>
  )
}