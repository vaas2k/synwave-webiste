'use client';
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact-Comp';
import Industry from '../components/Industry/industry'
import Consultation from '../components/Consultation/Consultation';
import S2 from '../components/services/s2';
import Process from '../components/Process/Process';
import ChoseUs from '../components/ChoseUs/ChoseUs';
import Client from '../components/Clients/Client';
import TechStack from '../components/TechStack/TechStack';
import NextTopLoader from 'nextjs-toploader';
import { useEffect } from 'react';
import Splash from '../components/splash/splashScreen';
import React from 'react';

export default function Home() {

  const [show, setshow] = React.useState(false);
  useEffect(() => {
    setshow(true);
  }, [show])

  if (!show) {
    return <div className='flex items-center justify-center'>
      <Splash />
    </div>
  }

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <Hero />
        <S2 />
        <Industry />
        <ChoseUs />
        <Process />
        <Client />
        <Contact />
        <TechStack />
        <Consultation />
      </div>
    </>
  );
}
