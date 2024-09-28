'use client'
import React, {useState,useEffect} from 'react'
import Input from '../ui/input';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import axiso,{ AxiosError } from 'axios';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {


  const [show, setshow] = useState(false);
  useEffect(() => {
    setshow(true);
  }, [show])
  const [email , setEmail] = useState('');
  const [loading , setLoading] = useState(false);
  async function emailSubscriber (e) { 
    try{

      if(email) {
        setLoading(true);
        const req = await axios.post('/api/emailSub',{email : email});
        if(req.status == 200) {
          console.log('Success');
          toast('Subscribed', {
            duration: 3000,
            position: 'top-center',
          
            // Styling
            style: {},
            className: '',
          
            // Custom Icon
            icon: '❤️',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
          setEmail('');
          setLoading(false);
        }
        
      }

    }catch(error) {
      if(error instanceof AxiosError) {
        console.log("Server Side error");
        setLoading(false);
      }
    }
  }  

  if(!show) { 
    return null;
  }
  return (

    <>
    <Toaster />
      <div className='w-full px-4 sm:px-8 lg:px-[60px] py-12 sm:py-10 bg-cover bg-no-repeat'
      style={{
        backgroundPositionX:600,
        backgroundPositionY:-100,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500145588304-deb802b4af76?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>

        

        
        <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-[80px] flex-wrap'>

          {/* Address Section */}
          <div className='flex flex-col w-full sm:w-auto text-[14px]'>
            <img src='/logos/black.png' className='w-[100px] h-[100px] mb-4 mt-[-25px]' />
            <p className='mb-2 text-[12px]'>
              <h className="font-bold text-[14px]">England</h>
              <br />
              <br />
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
              <br />
              <br />
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
              <Link href={'/about'}><li className='cursor-pointer hover:text-red-500 duration-500'>About</li></Link>
              <Link href={'/services'}><li className='cursor-pointer hover:text-red-500 duration-500'>Services</li></Link>
              <Link href={'/work'}><li className='cursor-pointer hover:text-red-500 duration-500'>Our Work</li></Link>
              <Link href={'#'}><li className='cursor-pointer hover:text-red-500 duration-500'>Reviews</li></Link>
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
              <Link href={'/service/Custom Software Development'}><li className='cursor-pointer hover:text-red-500 duration-500'>Custom Software Development</li></Link>
              <Link href={'/service/Mobile App Development'}><li className='cursor-pointer hover:text-red-500 duration-500'>Mobile App Development</li></Link>
              <Link href={'/service/Web Development'}><li className='cursor-pointer hover:text-red-500 duration-500'>Web Development</li></Link>
              <Link href={'/service/Generative AI'}><li className='cursor-pointer hover:text-red-500 duration-500'>Generative AI</li></Link>
              <Link href={'/service/App Maintenanc'}><li className='cursor-pointer hover:text-red-500 duration-500'>App Maintenance</li></Link>
              <Link href={'/service/DevOps'}><li className='cursor-pointer hover:text-red-500 duration-500'>DevOps & CI/CD</li></Link>
              <Link href={'/service/Video Editing'}><li className='cursor-pointer hover:text-red-500 duration-500'>Video Editing</li></Link>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className='flex flex-col w-full sm:w-auto' >
          <h1 className="text-lg mb-4">Subscribe</h1>
          <h2 className="text-md mb-4">Stay updated with us!</h2>
          <Input value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className="mb-4 pr-2" />
          <Button onClick={() => {emailSubscriber()}} variant="outline" className={`flex gap-2 items-center hover:text-white ${loading && 'animate-pulse cursor-wait'}`}>
            {loading ? '...' : 'Subscribe'}
            <Send size={'18px'} />
          </Button>
        </div>

          <div className=' flex gap-[15px] text-[12px] flex items-center '>
            <h className="cursor-pointer  flex items-center gap-[10px]"> <p className='text-[20px] flex'>&copy;</p> SYNWAVE SOLUTIONS.</h>
            <Link href={'https://find-and-update.company-information.service.gov.uk/company/15861722'}></Link><h className="cursor-pointer ">All Rights Reserved.</h>
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
