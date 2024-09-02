import React from 'react'
import S1 from '../../components/services/s1'
import Services from '../../components/services/services'

export const metadata = { 
  title : "Services",
  description : "Explore Synwave's comprehensive range of services, from custom software development to cutting-edge mobile apps, web solutions, DevOps, and app maintenance. We deliver innovative, tailored digital solutions to meet your unique business needs."
}

const Page = () => {
  return (
    <div>
      <Services />
    </div>
  )
}

export default Page