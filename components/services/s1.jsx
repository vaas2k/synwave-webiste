import React from 'react';
import FlipWords from '../ui/flip-words';

const S1 = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="relative h-[30rem] sm:h-[25rem] flex justify-center items-center px-4 flex-col">
      {/* Background image as a pseudo-element */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 z-[-1]" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>

      {/* Text content */}
      <div className="text-4xl mx-auto text-neutral-600 dark:text-neutral-400 pb-[30px] relative z-10">
        Build
        <FlipWords words={words} className='pl-[10px]' />
        Products with us
      </div>
      <div className="relative z-10">
        <p className=' sm:w-[700px] w-[300px] text-sm flex text-center pb-[30px]'>
          You can trust that our experienced team will deliver high-quality solutions that 
          meet your business goals, drive growth, and provide a competitive edge in the digital 
          landscape.
        </p>
      </div>
    </div>
  );
}

export default S1;
