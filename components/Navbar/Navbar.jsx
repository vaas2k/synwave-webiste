'use client'
import React, { useRef } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import Contact_Button from '../ui/Contact_Button'
import { ChevronDown, ChevronUp, CircleArrowRight, Dot } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

    const [arrow, setArrow] = useState(false);
    const arrowRef = useRef(false);

    return (
        <div className='flex items-center justify-between px-[50px] w-full bg-transparent fixed top-0 left-0 z-50' >

            <div className='flex'>
                <img
                    src='/logos/white.png'
                    className='w-[95px] h-[95px] '
                    alt='Synwave'
                />
            </div>

            <div className='flex gap-[30px]'>
                <div className='text-white hover:text-red-500 text-lg cursor-pointer duration-500'><h1>Home</h1></div>

                <DropdownMenu>
                    <DropdownMenuTrigger onClick={() => setArrow(!arrow)}>
                        <div className='flex items-center justify-center gap-[6px] text-white hover:text-red-500 text-lg cursor-pointer duration-500'>
                            <h1>Services</h1>
                            {!arrow ? <ChevronDown size={'18px'} /> : <ChevronUp size={'18px'} />}
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="p-[10px] px-[20px]">
                        <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-md duration-500">
                         Custom Software Development
                        </div>
                        <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-md duration-500">
                            Mobile App Development
                        </div>
                        <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-md duration-500">
                            Web Development
                        </div>
                        <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-md duration-500">
                            Generative AI
                        </div>
                        <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-md duration-500">
                            DevOps and CI/CD
                        </div>
                        <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-md duration-500">
                            Video Editing
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div ><h1 className='text-white hover:text-red-500 text-lg cursor-pointer duration-500'>About</h1></div>

                <div ><h1 className='text-white hover:text-red-500 text-lg cursor-pointer duration-500' >Our Work</h1></div>
            </div>

            <div className='flex'>
                <Contact_Button />
            </div>
        </div>
    )
}

export default Navbar
