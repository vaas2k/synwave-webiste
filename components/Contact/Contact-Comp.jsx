import React from 'react';
import Contact_Button from '../ui/Contact_Button';
import { ShieldHalf, CircleArrowOutUpRight, HandCoins } from 'lucide-react';
import whiteLogo from '/public/logos/white logo.png'; // Importing the image statically
import Image from 'next/image';

const Contact = () => {
    return (
        <div className='relative flex flex-col lg:flex-row items-center justify-center h-auto lg:h-[30rem] w-full p-[20px] lg:p-[40px] mb-[40px] gap-[40px] lg:gap-[200px]'>
        
            {/* Content Section */}
            <div className='relative flex items-center justify-center flex-col text-start lg:text-left'>
                <h1 className="text-xl sm:text-3xl dark:text-white animate-fadeIn">Discuss with our experts!</h1>
                <h1 className="text-xl sm:text-3xl text-center dark:text-white animate-fadeIn delay-150">Let us help you build the solution</h1>
                <p className='sm:w-[500px] w-[300px] lg:w-[500px] text-sm lg:text-base text-center pb-[30px] mt-[10px] animate-fadeIn delay-300'>
                    With advanced tools like ChatGPT and CoPilot, software development is evolving faster than ever. <br />
                    We ensure a positive impact on your project or we’ll continue working at no additional cost until we achieve it.
                </p>
            </div>

            {/* Pricing Section */}
            <div className='relative flex flex-col justify-center lg:mt-[-60px]'>
                <div className='flex item-start'>
                    <h1 className='text-[12px] lg:text-[14px] text-start animate-fadeIn delay-500'>Starting From</h1>
                </div>

                <div className='flex items-center justify-center gap-[60px] lg:gap-[150px] animate-pulse'>
                    <h1 className='font-bold text-[30px] lg:text-[40px] text-rose-500'>$20 / hr</h1>
                    <Contact_Button color={'white'} word={'Contact Now!'} bg={'rose-500'} />
                </div>

                <div className='flex items-start gap-[40px] mt-[20px] flex-col'>
                    <div className='flex gap-[10px] items-center justify-center animate-fadeIn'>
                        <ShieldHalf size={'28px'} />

                        <div className='flex flex-col'>
                            <h className="text-[13px] font-bold">Software Outsourcing</h>
                            <p className='text-[12px]'>Let us handle your entire software development process.</p>
                        </div> 
                    </div>
                    <div className='flex gap-[10px] items-center justify-center animate-fadeIn delay-100'>
                        <CircleArrowOutUpRight size={'28px'} />
                        <div className='flex flex-col'>
                            <h className="text-[13px] font-bold">Team Augmentation</h>
                            <p className='text-[12px]'>Enhance your team with top talent from Synwave Solutions</p>
                        </div> 
                    </div>
                    <div className='flex gap-[10px] items-center justify-center animate-fadeIn delay-200'>
                        <HandCoins size={'28px'} />
                        <div className='flex flex-col'>
                            <h className="text-[13px] font-bold">Dedicated Teams</h>
                            <p className='text-[12px]'>Speed up development with a focused team integrated into your workflow.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
