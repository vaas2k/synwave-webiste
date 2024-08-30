'use client'
import React from 'react'
import Image from 'next/image'
import StickyScroll from '../ui/tracing-beam.jsx'
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Smooth animation for text
};

const content = [
    {
      title: "Discovery and Insights",
      description:
        "We dive deep to understand your vision, goals, and challenges, ensuring a clear and shared understanding.",
        content: (
            <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/st.png'
                    alt="Discovery"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[300px] h-[300px] " // Puts the image behind the content
                />
            </motion.div>
      ),
    },
    {
      title: "Strategic Design and Planning",
      description:
        "We craft a tailored strategy, designing solutions and creating prototypes to map out a path to success.",
      content: (
        <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/planing.png'
                    alt="planning"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[300px] h-[300px] " // Puts the image behind the content
                />
            </motion.div>
      ),
    },
    {
      title: "Development and Refinement",
      description:
        "Our team builds and meticulously tests the solution, making adjustments to ensure it aligns perfectly with your needs.",
      content: (
        <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/dev.png'
                    alt="dev"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[300px] h-[300px] " // Puts the image behind the content
                />
            </motion.div>
      ),
    },
    {
      title: "Launch and Enhancement",
      description:
        "We launch your solution and provide continuous support, gathering feedback to drive future improvements and ensure lasting impact.",
      content: (
        <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/la.png'
                    alt="Launch"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[300px] h-[300px] " // Puts the image behind the content
                />
            </motion.div>
      ),
    },
  ];


const Process = () => {
  return (
    <div className='p-[30px] mt-[60px]'>
        <div className='flex flex-col items-center w-full mb-[30px]'>
            <p className='flex text-lg sm:text-4xl'>Our</p>
            <h1 className='flex font-bold text-xl sm:text-5xl text-rose-500'>Development WorkFlow</h1>
        </div>

          <div className='h-[30rem]'>
              <StickyScroll content={content} />
              <div className=" flex items-center flex-col  mt-[-30px] animate-pulse" > 
                <a href="#portfolio-section" class="mouse-wrap smoothscroll mt-[-30px]">
                  <span class="mouse">
                      <span class="scroll"></span>
                  </span>
              </a>  </div>
          </div>


    </div>
  )
}



export default Process