import React from 'react'
import {ContactForm} from '../../components/Contact/Contact-from';

const Page = () => {


  return (
    <div className='flex flex-col mt-[140px] gap-[30px]'>
      <div className='text-center'>
        <h1 className='font-extrabold text-zinc-900 text-5xl mb-[10px]'>Let's discuss your project</h1>
        <p className='text-zinc-900 opacity-80 text-md'>We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals.</p>
      </div>

      <div className='flex flex-col text-center justify-center'>
      <p className='text-zinc-900 opacity-80 text-md mb-[30px]'>Enter your details and someone from our team will reach out to find a time to connect with you.</p>
        <ContactForm />
      </div>

    </div>
  )
}

export default Page;