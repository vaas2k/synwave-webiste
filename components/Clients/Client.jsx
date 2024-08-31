'use client'
import { Users } from 'lucide-react'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Client = () => {
  // Controls for animations
  const controls = useAnimation()
  
  // Observer for when elements are in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.3,    // Percentage of the component visible to trigger the animation
  })

  // Trigger the animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <div className='flex flex-col h-full sm:h-[30rem] m-10 sm:mb-[80px] px-[40px]'>
      <div ref={ref}>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={textVariant}
          className='flex items-center justify-center my-[10px] p-[20px]'
        >
          <Users size={'30px'} color={'red'} />
        </motion.div> 
        <motion.h1
          initial="hidden"
          whileInView={"visible"}
          variants={textVariant}
          className='text-center font-bold text-2xl sm:text-5xl text-rose-500'
        >
          What Clients Say
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView={"visible"}
          variants={textVariant}
          className='text-center text-sm sm:text-md my-[20px] italic'
        >
          We&apos;re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play.
        </motion.p>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-[100px] mt-[50px]'>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={textVariant}
          className='flex flex-col items-center w-[300px] sm:w-[400px] text-[12px]'
        >
          <img src='https://ph-files.imgix.net/457aa868-77af-4e79-863c-b3e1548a9171.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1' className='w-[35px] h-[35px] mb-3' />
          <p className='text-center italic'>
            <b>&quot;Synwave brought our vision to life with creativity and technical skill. 
            Their commitment to quality has significantly improved our digital presence. 
            We&apos;re thrilled with the results!&quot;</b> — Maria Sanchez, Head of Marketing, ElevateCo
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={textVariant}
          className='flex flex-col items-center w-[300px] sm:w-[400px] text-[12px]'
        >
          <img src='https://ph-files.imgix.net/56237128-1310-45a4-85ad-65c1a2cad63f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1' className='w-[35px] h-[35px] mb-3' />
          <p className='text-center italic'>
            <b>&quot;Synwave exceeded our expectations by delivering a custom solution that boosted our productivity. 
            Their understanding of our needs and seamless integration were outstanding. 
            We&apos;re excited to continue working with them!&quot;</b> — Jessica Turner, CTO, InnovateTech Solutions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={textVariant}
          className='flex flex-col items-center w-[300px] sm:w-[400px] text-[12px]'
        >
          <img src='https://ph-files.imgix.net/97154790-b3d5-4458-9125-0c49d891e65b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1' className='w-[50px] h-[50px]' />
          <p className='text-center italic'>
            <b>&quot;Partnering with Synwave was a game-changer. Their software development expertise 
            and attention to detail resulted in a flawless product that enhanced our operations. Highly recommend!&quot;</b>
            — David Reynolds, CEO, NextGen Enterprises
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Client
