import React from 'react'
import HeroParallaxDemo from '../../components/ourwork/Work';
import Consultation from '../../components/Consultation/Consultation';

export const metadata = { 
  title : "Work"
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