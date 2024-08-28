import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact-Comp';
import Industry from '../components/Industry/industry'
import Consultation from '../components/Consultation/Consultation';
import S2 from '../components/services/s2';
import Process from '../components/Process/Process';
import ChoseUs from '../components/ChoseUs/ChoseUs';

export default function Home() {
  return (
   <div className="flex flex-col gap-[20px]">
     <Hero />
     <S2 />
     <Industry />
     <ChoseUs />
     <Process />
     <Contact />
     <Consultation />
   </div>
  );
}
