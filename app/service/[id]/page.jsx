'use client';
import React from 'react';
import { Dot, MessageSquareText, PhoneCall } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import Process from '../../../components/Process/Process';
import { WAD, CSD, MAD, GAI, DevOps, AM, QA, VE } from './info';
import HoverEffect from '../../../components/ui/card-hover-effect';
import Link from 'next/link';
import Consultation from '../../../components/Consultation/Consultation';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Smooth animation for text
};

const featureVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const benefitVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Page = ({ params }) => {
  const id = decodeURIComponent(params.id);
  console.log(id);

  let showInfo, vid, pic;
  if (id === 'Custom Software Development') { showInfo = CSD; vid = '/videos/videoplayback.mp4'; pic = 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }
  else if (id === 'Mobile App Development') { showInfo = MAD; vid = '/videos/videoplayback.mp4'; }
  else if (id === 'Web Development') { showInfo = WAD; vid = '/videos/videoplayback.mp4'; }
  else if (id === 'Generative AI') { showInfo = GAI; vid = '/videos/Ai.mp4'; }
  else if (id === 'DevOps') { showInfo = DevOps; vid = '/videos/devops.mp4'; }
  else if (id === 'Video Editing') { showInfo = VE; vid = '/videos/VE.mp4'; }
  else if (id === 'App Maintance') { showInfo = AM; vid = '/videos/AM.mp4'; }
  else if (id === 'Quality Assurance and Testing') { showInfo = QA; vid = '/videos/QA.mp4'; }

  const projects = [
    {
      title: "Stripe",
      description: "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description: "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description: "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description: "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className='flex flex-col'>

      {/**Header */}
      <div className="relative flex items-center justify-center h-[70vh] sm:h-screen w-full">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full z-0"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Background overlay with rgba for transparency */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text stays unaffected by the background opacity */}
        <motion.div 
          initial="hidden" 
          whileInView="visible"
          variants={textVariants}
          className='flex flex-col gap-5 px-6 sm:px-24 text-center sm:text-left'>
          <h1 className='relative z-10 text-white text-2xl sm:text-4xl font-bold'>
            {id}
          </h1>
          <p className='z-10 text-gray-300'>{showInfo.info}</p>
          <div className='z-10'>
            <Link href={'/contact'}>
              <Button
                variant="outline"
                className="flex justify-center items-center gap-2 w-full sm:w-52 h-12 text-white text-md hover:text-white"
              >
                let&apos;s Talk Now
              </Button>
            </Link> 
          </div>
        </motion.div>
      </div>

      {/**Description */}
      <div className='px-6 py-10 sm:px-24'>
        <h1 className='font-bold text-2xl my-2'>
          Service <span className="text-rose-500">Description</span>
        </h1>
        <p className=''>
          {showInfo.description}
        </p>
      </div>

      {/**Features */}
      <div className=' flex md:flex-col lg:flex-row justify-between my-16 gap-10 px-6 sm:px-24'>
        <motion.img
          initial="hidden"
          whileInView="visible"
          src={showInfo.image}
          alt="Feature Image"
          className="rounded-lg object-cover w-full h-60 sm:h-96"
          variants={featureVariants}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={featureVariants}
          className="w-full hidden sm:block"
        >
            <HoverEffect items={showInfo.features} />
        </motion.div>
      </div>

      {/**Benefits */}
      <div className='my-36 px-6 sm:px-24'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center mb-8 gap-2 sm:gap-4'>
          <h1 className='font-bold text-2xl sm:text-3xl'>WHY</h1>
          <h1 className='font-bold text-2xl sm:text-3xl text-rose-500'>SYNWAVE</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20'>
          {showInfo.benefits.map(({ title, description }, key) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              custom={key}
              variants={benefitVariants}
              className='flex flex-col items-start'
            >
              <h2 className='text-lg font-bold flex items-center gap-2'>
                <Dot size={'24px'} color='red' /> {title}
              </h2>
              <p className='ml-8 text-sm sm:text-base'>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/**Process Section */}
      <div className='px-6 sm:px-24'>
        <Process />
      </div>

      {/**Consultation Section */}
      <div className='mt-16 px-6 sm:px-24'>
        <Consultation />
      </div>

    </div>
  );
};

export default Page;
