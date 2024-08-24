'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { ChevronDown} from 'lucide-react'
import { AlignJustify } from 'lucide-react';
import Contact_Button from '../ui/Contact_Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const M_Navbar = () => {

    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);
    const services = ['Custom Software Development', 'Mobile App Development', 'Web Development', 'Generative AI', 'DevOps', 'Video Editing']
    return (
        <div>
            <Sheet>
                <SheetTrigger><AlignJustify size={'20px'} /></SheetTrigger>
                <SheetContent className="flex items-start justify-center gap-[30px ] flex-col w-[200px] sm:w-[240px] bg-transparent">
                    <SheetTitle >
                        <Link href="/">
                            <div
                                className={`text-white hover:text-red-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/' ? 'text-red-500' : ''
                                    }`}
                                onClick={() => setActiveLink('/')}
                            >
                                <h1>Home</h1>
                                <span
                                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-red-500 transition-all duration-500 ${activeLink === '/' ? 'w-full' : 'w-0'
                                        } group-hover:w-full`}
                                ></span>
                            </div>
                        </Link>
                    </SheetTitle>

                    <SheetTitle>
                    <DropdownMenu>
                        <Link href={'/services'}>
                            <DropdownMenuTrigger >
                                <div className='flex items-center justify-center gap-[6px] text-white hover:text-red-500 text-sm cursor-pointer duration-500'>
                                    <h1>Services</h1>
                                    <ChevronDown size={'18px'} />
                                </div>
                            </DropdownMenuTrigger>
                        </Link>

                            <DropdownMenuContent className="p-[10px] px-[20px]">

                                {services.map((value, index) => {
                                    return (
                                        <Link href={`/services/${value}`} key={index}>
                                            <DropdownMenuItem >
                                                <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-sm duration-500 bg-gray-900">{value}</div>
                                            </DropdownMenuItem>
                                        </Link>
                                    )
                                })}

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SheetTitle>

                    <SheetTitle>
                        <Link href="/about">
                            <div
                                className={`text-white hover:text-red-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/about' ? 'text-red-500' : ''
                                    }`}
                                onClick={() => setActiveLink('/about')}
                            >
                                <h1>About Us</h1>
                                <span
                                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-red-500 transition-all duration-500 ${activeLink === '/about' ? 'w-full' : 'w-0'
                                        } group-hover:w-full`}
                                ></span>
                            </div>
                        </Link>
                    </SheetTitle>

                    <SheetTitle>
                        <Link href="/work">
                            <div
                                className={`text-white hover:text-red-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/work' ? 'text-red-500' : ''
                                    }`}
                                onClick={() => setActiveLink('/work')}
                            >
                                <h1>Our Work</h1>
                                <span
                                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-red-500 transition-all duration-500 ${activeLink === '/work' ? 'w-full' : 'w-0'
                                        } group-hover:w-full`}
                                ></span>
                            </div>
                        </Link>
                    </SheetTitle>

                    <div className='absolute bottom-2 text-[14px]'>
                        <Link href={'contact'}>
                            <Contact_Button />
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default M_Navbar;