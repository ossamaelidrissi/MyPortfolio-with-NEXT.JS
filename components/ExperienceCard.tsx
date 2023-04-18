import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
    image : string,
    title : string,
    company : string,
    technologies : string[],
    date : string,
    description : string[],
    link : string
}

export default function ExperienceCard({ image , title , date , technologies , company , description , link}: Props) {
  return (
    <a href={link} target='_blank' >
    
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity overflow-hidden duration-200' >
            <motion.img 
                initial={{
                    y:-100,
                    opacity:0
                }}
                transition={{ duration:1.2 }}
                whileInView={{ opacity: 1 , y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
                src={ image } alt="" />

            <div className='px-0 md:px-10' >
                <h4 className='text-4xl font-light' >{ title}</h4>
                <p className='text-2xl font-bold mt-1' >{ company }</p>
                <div className='flex space-x-2 my-2' >
                    {
                        technologies.map((tech,i) => (
                            <img 
                                key={i}
                                className='h-10 w-10 rounded-full'    
                                src={ tech } alt="" />
                        ))

                    }

                </div>
                <p className='uppercase py-5 text-gray-300' > { date } </p>

                <ul className='list-disc space-y-4 ml-5 text-lg' >
                    {
                        description.map((desc, i) => (
                            <li key={i} className='text-gray-300' >{ desc }</li>
                        ))

                    }
                
                </ul>
            </div>
        </article>
    </a>
  )
}