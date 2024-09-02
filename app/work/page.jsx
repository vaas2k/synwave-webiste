import React from 'react'
import HeroParallaxDemo from '../../components/ourwork/Work';
import Consultation from '../../components/Consultation/Consultation';

export const metadata = { 
  title : "Work",
  description : "Explore our portfolio of successful projects and case studies. See how Synwave has helped businesses across various industries achieve their digital transformation goals with our expert solutions."
}

const Page = () => {
  return (
    <div>
      <HeroParallaxDemo />
      <Consultation />
    </div>
  )
}

export default Page