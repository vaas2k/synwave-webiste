import React from 'react'
import Input from '../ui/input';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
  return (

    <>
    <div className='w-full px-4 sm:px-8 lg:px-[60px] py-12 sm:py-10 '>
      <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 flex-wrap'>
        
        {/* Address Section */}
        <div className='flex flex-col w-full sm:w-auto text-[14px]'>
          <img src='/logos/black.png' className='w-[100px] h-[100px] mb-4 mt-[-25px]' />
          <p className='mb-2 text-[12px]'>
            <h className="font-bold text-[14px]">England</h>
            <br/>
            <br/>
            17 Albert Road
            <br />
            Stechford
            <br />
            Birmingham
            <br />
            United Kingdom
          </p>
          <p className='mb-2 mt-2 text-[12px]' >
          <h className="font-bold text-[14px]">Islamabad</h>
            <br/>
            <br/>
            731, Street 10
            <br />
            i-10
            <br />
            Islamabad
            <br />
            Pakistan
          </p>
          <p className='underline decoration-solid cursor-pointer hover:text-red-500 duration-500'>
            sales@synwavesolutions.com
          </p>
        </div>

        {/* Company Section */}
        <div className='flex flex-col w-full sm:w-auto'>
          <h1 className="text-lg mb-4">Company</h1>
          <ul className='text-sm space-y-2'>
            <li className='cursor-pointer hover:text-red-500 duration-500'>About</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Services</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Our Work</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Reviews</li>
          </ul>
        </div>

        {/* Industries Section */}
        <div className='flex flex-col w-full sm:w-auto'>
          <h1 className="text-lg mb-4">Targeted Industries</h1>
          <ul className='text-sm space-y-2'>
            <li className='cursor-pointer hover:text-red-500 duration-500'>SaaS</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Gaming</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Banking</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>FinTech</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>E-Commerce</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Social Networks</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Health & Public Sector</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>& More</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className='flex flex-col w-full sm:w-auto'>
          <h1 className="text-lg mb-4">Services and Solutions</h1>
          <ul className='text-sm space-y-2'>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Custom Software Development</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Mobile App Development</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Web App Development</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Generative AI</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>DevOps & CI/CD</li>
            <li className='cursor-pointer hover:text-red-500 duration-500'>Video Editing</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className='flex flex-col w-full sm:w-auto'>
          <h1 className="text-lg mb-4">Subscribe</h1>
          <h2 className="text-md mb-4">Stay updated with us!</h2>
          <Input type="email" placeholder="Email" className="mb-4 pr-2" />
          <Button variant="outline" className="flex gap-2 items-center hover:text-white">
            Subscribe
            <Send size={'18px'} />
          </Button>
        </div>
        <div className=' flex gap-[15px] text-[12px] flex items-center '> 
        <h className="cursor-pointer  flex items-center gap-[10px]"> <p className='text-[20px] flex'>&copy;</p> SYNWAVE SOLUTIONS.</h>
        <h className="cursor-pointer ">All Rights Reserved.</h> 
          <h className="cursor-pointer ">Terms & Conditions</h> 
          <h className="cursor-pointer ">Policy</h> </div>
      </div>

      {/* Optional Logo */}
        <div className='flex justify-center'>

        <img src='/logos/white logo.png' className='w-[150px] h-[150px]' />
      </div>
       
    </div>

    </>
  )
}

export default Footer;
