import React from 'react'
import Image from 'next/image'
import dots from '../../public/hero images/dots.png';
import StickyScroll from '../ui/tracing-beam.jsx'
import { Mouse, ChevronsDown  } from 'lucide-react';
import Discovery from '../../public/hero images/discovery.jpg'
import strategy from '../../public/hero images/strategy.jpg'

const content = [
    {
      title: "Discovery and Insights",
      description:
        "We dive deep to understand your vision, goals, and challenges, ensuring a clear and shared understanding.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/st.png'
                    alt="Discovery"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[300px] h-[300px] " // Puts the image behind the content
                />
            </div>
      ),
    },
    {
      title: "Strategic Design and Planning",
      description:
        "We craft a tailored strategy, designing solutions and creating prototypes to map out a path to success.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/planing.png'
                    alt="strategy"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[300px] h-[300px] " // Puts the image behind the content
                />
            </div>
      ),
    },
    {
      title: "Development",
      description:
        "Our team builds and meticulously tests the solution, making adjustments to ensure it aligns perfectly with your needs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/dev.png'
                    alt="strategy"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[400px] h-[400px] " // Puts the image behind the content
                />
            </div>
      ),
    },
    {
      title: "Launch and Enhancement",
      description:
        "We launch your solution and provide continuous support, gathering feedback to drive future improvements and ensure lasting impact.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src='/hero images/la.png'
                    alt="strategy"
                    layout="fill" // Covers the entire div as a background-like image
                    objectFit="cover" // Ensures the image covers the div properly
                    objectPosition="start" // Centers the image
                    className="z-[-1] w-[400px] h-[400px] " // Puts the image behind the content
                />
            </div>
      ),
    },
  ];


const Process = () => {
  return (
    <div className='p-[30px]'>
        <div className='flex flex-col items-center w-full mb-[30px]'>
            <h1 className='flex font-bold text-xl sm:text-4xl text-rose-500'>Synwave Solutions</h1>
            <p className='flex text-lg sm:text-2xl'>Development Workflow</p>
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