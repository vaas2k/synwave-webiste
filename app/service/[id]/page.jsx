import React from 'react'
import { Dot } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import Process from '../../../components/Process/Process';
import { WAD, CSD, MAD, GAI, DevOps, AM, QA, VE } from './info';
import HoverEffect from '../../../components/ui/card-hover-effect';


const Page = ({ params }) => {
  const id = decodeURIComponent(params.id);
  console.log(id);

  let showInfo, vid , pic;
  if (id == 'Custom Software Development') { showInfo = CSD; vid = '/videos/videoplayback.mp4';pic='https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  else if (id == 'Mobile App Development') { showInfo = MAD;vid = '/videos/videoplayback.mp4' }
  else if (id == 'Web Development') { showInfo = WAD;vid = '/videos/videoplayback.mp4' }
  else if (id == 'Generative AI') { showInfo = GAI;vid = '/videos/Ai.mp4' }
  else if (id == 'DevOps') { showInfo = DevOps;vid = '/videos/devops.mp4' }
  else if (id == 'Video Editing') { showInfo = VE;vid = '/videos/VE.mp4' }
  else if (id == 'App Maintance') { showInfo = AM;vid = '/videos/AM.mp4' }
  else if (id == 'Quality Assurance and Testing') { showInfo = QA;vid = '/videos/QA.mp4' }

  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];


  return (
    <div className='py-[50px] mt-[40px]'>

      {/**Header */}
      <div className="relative flex items-center justify-center h-[25rem] w-full">
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
        <div className='flex flex-col gap-[20px]  px-[30px] sm:px-[100px]'>
          <h1 className='relative  z-10 text-white text-2xl sm:text-4xl font-bold'>
            {id}
          </h1>
          <p className='z-10 text-gray-300'>{showInfo.info}</p>
          <div className='z-10'>
            <Button
              variant="outline"
              className="flex gap-2 items-center w-[200px] h-[50px] text-white text-md hover:text-white"
            >
              Scedule a Meeting
            </Button></div>
        </div>
      </div>

      {/**Description */}
      <div className='p-[30px] px-[30px] sm:px-[100px]'>
        <h1 className='font-bold text-2xl my-2'>DESCRIPTION</h1>
        <p className=''>
          {showInfo.description}
        </p>
      </div>

      {/**Features */}
      <div className='p-[30px] px-[30px] sm:px-[100px] w-full h-[30rem]'>
        <h1 className='font-bold text-3xl my-2'>{showInfo.feat_header}</h1>
        
        <div className='flex justify-between my-[70px]'>

          <img  className=' rounded-lg object-cover w-[700px] h-[400px]' src={showInfo.image}/>
          <div>

        <div className="hidden sm:block  max-w-5xl mx-auto px-8">
          <HoverEffect items={showInfo.features} />
        </div>

        </div>
        </div>
      </div>

      {/**Benefits */}
      <div className='my-[140px] mt-[200px] px-[30px] sm:px-[100px]'>
        <div className='flex flex-row items-center mb-[30px]'>
          <h1 className='font-bold text-3xl mr-2'>WHY</h1>
          <h1 className='font-bold text-3xl text-rose-500'>SYNWAVE</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px]'>
          {showInfo.benefits.map(({ title, description }, key) => {
            return (
              <div key={key} className='flex flex-col items-start'>
                <h2 className='text-md font-bold flex items-center'>
                  <Dot size={'40px'} color='red' /> {title}
                </h2>
                <p className='ml-[40px] text-[14px] '>{description}</p>
              </div>
            );
          })}
        </div>
      </div>




      <div>
        <Process />
      </div>

    </div>
  );
}

export default Page;
/**
 *   <div className='flex flex-col sm:flex-row items-center justify-between my-[10px] gap-[20px] px-[30px] sm:px-[100px]'>
  <div className='w-full sm:w-1/2'>
    {showInfo.features.map((val, ind) => {
      return (
        <div
          key={ind}
          className={`py-[30px] flex ${ind % 2 === 0 ? 'flex-row-reverse text-end' : 'text-start'}`}
        >
          <h1
            key={ind}
            className={`font-bold ${ind % 2 === 0 ? 'text-rose-500' : 'text-white-700'} w-full`}
          >
            {val}
          </h1>
        </div>
      );
    })}
  </div>

  <div className='w-full sm:w-1/2'>
    <img
      className='rounded-lg opacity-80'
      src={showInfo.image}
      alt='Feature Image'
    />
  </div>
</div>
 */