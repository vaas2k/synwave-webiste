'use client';
import { Layers, Lightbulb, ShieldCheck, UserCheck } from 'lucide-react';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ChoseUs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const data = [
    {
      icon: <Lightbulb size={40} />,
      title: 'Expertise in Innovation',
      description:
        'We harness cutting-edge technology and creative solutions to bring your ideas to life. Our team thrives on delivering innovative results that keep you ahead of the curve.',
    },
    {
      icon: <UserCheck size={40} />,
      title: 'Client-Centric Approach',
      description:
        'Your vision is our priority. We work closely with you every step of the way, ensuring that our solutions are tailored to meet your specific needs and exceed expectations.',
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Reliable & Transparent Service',
      description:
        'Trust and transparency are at the heart of what we do. From project kickoff to final delivery, we keep you informed and ensure your project stays on track.',
    },
    {
      icon: <Layers size={40} />,
      title: 'End-to-End Solutions',
      description:
        'We provide comprehensive services, from concept to completion. Whether it’s software development, mobile apps, or AI, our all-in-one approach simplifies your experience and guarantees quality at every stage.',
    },
  ];

  return (
    <div className='flex flex-col justify-center px-6 sm:px-16 lg:px-32 my-16'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        ref={ref}
        className='text-center mb-16'
      >
        <h1 className="font-bold text-2xl sm:text-4xl mb-2">Why Choose</h1>
        <h2 className="text-rose-500 text-3xl sm:text-5xl font-extrabold">Synwave Solutions</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className='flex flex-wrap justify-center gap-8'
      >
        {data.map((item, ind) => (
          <motion.div
            key={ind}
            variants={itemVariants}
            className='flex flex-col items-center gap-4 shadow-lg rounded-xl w-full sm:w-[280px] p-6 sm:p-8 bg-white hover:bg-rose-50 transition-all duration-300'
          >
            <div className="bg-gradient-to-r from-rose-400 to-pink-400 text-white p-4 rounded-full mb-4">
              {item.icon}
            </div>
            <div className='text-center'>
              <h1 className='text-rose-600 text-lg sm:text-xl font-bold mb-2'>{item.title}</h1>
              <p className='text-sm sm:text-base text-gray-600'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ChoseUs;
