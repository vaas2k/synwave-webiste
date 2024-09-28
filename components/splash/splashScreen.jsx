import Image from 'next/image';
import React from 'react';

const Splash = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center ">
         <Image src={'/logos/www.png'} alt={'splash'} width={200} height={200} className='animate-pulse' />
    </div>
  );
};

export default Splash;
