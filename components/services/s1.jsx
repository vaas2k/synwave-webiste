'use client';
import React from 'react';
import { motion } from 'framer-motion';
import FlipWords from '../ui/flip-words';

const imageVariants = {
  hidden: { opacity: 0, rotate: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    rotate: i % 2 === 0 ? 5 : -5,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const S1 = () => {
  const words = ["Innovative", "Progressive", "Advanced", "modern", "Cutting-edge"];

  return (

      <div className='flex flex-col h-screen sm:flex-row items-center bg-opacity-50 bg-cover overflow-hidden mt-[77px] sm:mt-10'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518767279257-af841be2732f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={'visible'}
          variants={textVariants} className='flex flex-col items-start sm:w-1/2 px-[40px] sm:px-[100px]'>
          <div className="text-5xl text-start mx-auto text-neutral-600 dark:text-white pb-[30px] relative z-10">
            Build
            <FlipWords words={words} className='pl-[20px]' />Products with us
          </div>
          <p className='text-sm text-start sm:text-base leading-relaxed opacity-80 mb-8'>
            You can trust that our experienced team will deliver high-quality solutions that
            meet your business goals, drive growth, and provide a competitive edge in the digital
            landscape.
          </p>
        </motion.div>
        <div className='relative sm:w-1/2 flex flex-col items-end gap-[40px] sm:gap-[10px] '>
          {[ // array of image sources
            '../../sect/s1.jpg',
            '../../sect/s2.png',
            '../../sect/s3.png',
          ].map((src, i) => (
            <motion.img
              alt='Image'
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              src={src}
              className={`h-[10rem] sm:h-[15rem] w-full sm:w-[28rem] object-cover rounded-lg shadow-lg transform 
              ${i % 2 === 0 ? 'ml-[2rem]' : 'ml-[2rem] mr-3 sm:mr-[10rem]'} 
                ${i === 1 ? 'mt-[-4rem]' : i === 2 ? 'mt-[-4rem]' : ''}`}
            />
          ))}
        </div>
      </div>

  );
}

export default S1;


/**  
<div className="absolute inset-0 bg-cover bg-center opacity-30 z-[-1]"
  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>

  <div className="text-4xl text-center mx-auto text-neutral-600 dark:text-white pb-[30px] relative z-10">
        Build
        <FlipWords words={words} className='pl-[20px]' />Products with us
      </div>
      <div className="relative z-10">
        <p className=' sm:w-[700px] w-[300px] text-sm flex text-center pb-[30px]'>
          You can trust that our experienced team will deliver high-quality solutions that 
          meet your business goals, drive growth, and provide a competitive edge in the digital 
          landscape.
        </p>
      </div> */
