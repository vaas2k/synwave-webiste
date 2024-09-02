import React from 'react'
import About from '../../components/About/About';

export const metadata = { 
  title : "About",
  description : "Learn more about Synwave, a global leader in digital solutions. Discover our mission, values, and commitment to delivering innovative and tailored software services that drive business growth and success."
}

const Page = () => {
  return (
    <div className='px-[30] sm:[30] mt-[120px]'>
      <About />
    </div>
  )
}

export default Page;