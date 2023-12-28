import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Header } from '../components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

      <Head>
        <title>Ossama&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center' >
        <About />
      </section>

      <section id='experience' className='snap-center' >
        <Experience />
      </section>

      <section id='skills' className='snap-start' >
        <Skills />
      </section>

      <section id='projects' className='snap-start' >
        <Projects />
      </section>

      <section id='contact' className='snap-start' >
        <ContactMe />
      </section>

      <Link href='#hero' >
        <footer className='sticky bottom-5 w-full cursor-pointer ' >
          <div className='flex items-center justify-center' >
            <svg className="bg-[#F7AB0A]/80 rounded-full py-2 px-1 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>
            {/* <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="" alt="" /> */}
          </div>
        </footer>
      </Link>

    </div>
  )
}
