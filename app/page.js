import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact-Comp';
import Client from '../components/Clients/Client'
import Industry from '../components/Industry/industry'
import Consultation from '../components/Consultation/Consultation';
import Footer from '../components/Footer/Footer'
import FeaturesSectionDemo from '../components/ui/features-section-demo-2'
import S2 from '../components/services/s2';
import Process from '../components/Process/Process';

export default function Home() {
  return (
   <div className="flex flex-col gap-[20px]">
     <Hero />
     <S2 />
     <Process />
     <Contact />
   </div>
  );
}
