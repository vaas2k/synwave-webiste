import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact-Comp';
import Industry from '../components/Industry/industry'
import Consultation from '../components/Consultation/Consultation';
import S2 from '../components/services/s2';
import Process from '../components/Process/Process';
import ChoseUs from '../components/ChoseUs/ChoseUs';
import Client from '../components/Clients/Client';
import TechStack from '../components/TechStack/TechStack';
import Head from 'next/head';

export default function Home() {
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
