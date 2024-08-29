import React from 'react'
import S1 from './s1';
import S2 from './s2';
import Process from '../Process/Process';
import ChoseUs from '../ChoseUs/ChoseUs';

const Services = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <S1 />
      <S2 />
      <ChoseUs />
      <Process />
    </div>
  )
}

export default Services;