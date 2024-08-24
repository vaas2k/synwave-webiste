import Hero from '../components/Hero/Hero'
import S2 from '../components/services/s2';
import Contact from '../components/Contact/Contact-Comp';
import Client from '../components/Clients/Client'
import Industry from '../components/Industry/industry'
import Schedule from '../components/schedule/Schedule';
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
   <div className="flex flex-col gap-[20px]">
     <Hero />
     <Contact />
   </div>
  );
}
