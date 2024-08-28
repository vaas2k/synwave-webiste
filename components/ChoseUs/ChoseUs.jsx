'use client';
import { Layers, Lightbulb, MailWarningIcon, ShieldCheck, UserCheck } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } // Smooth animation
};
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3 // Stagger delay between children
    }
  }
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Smooth animation for text
};

const ChoseUs = () => {

  const data = [
    {
      icon : <Lightbulb />,
      title : 'Expertise in Innovation',
      description : 'We harness cutting-edge technology and creative solutions to bring your ideas to life. Our team thrives on delivering innovative results that keep you ahead of the curve.'
    },
    {
      icon : <UserCheck />,
      title : 'Client-Centric Approach',
      description : 'Your vision is our priority. We work closely with you every step of the way, ensuring that our solutions are tailored to meet your specific needs and exceed expectations.'
    },
    {
      icon : <ShieldCheck />,
      title : 'Reliable & Transparent Service',
      description : 'Trust and transparency are at the heart of what we do. From project kickoff to final delivery, we keep you informed and ensure your project stays on track.'
    },
    {
      icon : <Layers />,
      title : 'End-to-End Solutions',
      description : 'We provide comprehensive services, from concept to completion. Whether it’s software development, mobile apps, or AI, our all-in-one approach simplifies your experience and guarantees quality at every stage.'
    },
  ]

  
  return (
    <div className='flex flex-col justify-center px-[30px] sm:px-[30px] my-[50px]'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        className='text-center mb-[80px]'
      >
        <h1 className="font-bold text-xl sm:text-3xl">Why Choose</h1>
        <h2 className="text-rose-500 text-2xl sm:text-5xl font-extrabold">Synwave Solutions</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className='flex flex-col sm:flex-row items-center justify-center gap-[40px] px-[40px]'
      >

        {data.map((item,ind) => {
          return (
            <motion.div key={ind}
          variants={itemVariants}
          className={`flex flex-col items-center gap-[20px] shadow-lg rounded-lg w-[300px] p-[30px]`}
        >
          {item.icon}
          <div className='text-center'>
            <h1 className='text-rose-500 text-sm sm:text-lg font-extrabold mb-4'>{item.title}</h1>
            <p className='text-sm'>{item.description}</p>
          </div>
        </motion.div>
          )
        })}


      </motion.div>
    </div>
  );
}

export default ChoseUs;
