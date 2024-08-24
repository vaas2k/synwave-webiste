'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import Contact_Button from '../ui/Contact_Button'
import { ChevronDown, ChevronUp,Send,PhoneCall } from 'lucide-react'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import MobileNavbar from './Mobile-Navbar'
import M_Navbar from './M-Navbar';
import { Button } from "../ui/button"

const Navbar = () => {


    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);
    const services = ['Custom Software Development', 'Mobile App Development', 'Web Development', 'Generative AI', 'DevOps', 'Video Editing']

    return (
        <>
            <div className="hidden sm:block">
                <div className='flex items-center justify-between px-[50px] w-full bg-transparent-900 fixed top-0 left-0 z-50' >

                    <Link href={'/'}>

                        <div className='flex'>
                            <img
                                src='/logos/white.png'
                                className='w-[95px] h-[95px] '
                                alt='Synwave'
                            />
                        </div>
                    </Link>

                    <div className='flex gap-[30px]'>
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

                        <DropdownMenu>
                        <Link href="/services">
                            <div
                                className={`text-white hover:text-red-500 mr-[-20px] text-sm cursor-pointer duration-500 relative ${activeLink === '/services' ? 'text-red-500' : ''
                                    }`}
                                onClick={() => setActiveLink('/services')}
                            >
                                <h1>Services</h1>
                                <span
                                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-red-500 transition-all duration-500 ${activeLink === '/services' ? 'w-full' : 'w-0'
                                        } group-hover:w-full`}
                                ></span>
                            </div>
                        </Link>

                            <DropdownMenuTrigger >
                                <div className='flex items-center justify-center text-white hover:text-red-500 text-sm cursor-pointer duration-500'>
                                    <ChevronDown size={'18px'} />
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="p-[10px] px-[20px]">

                                {services.map((value, index) => {
                                    return (
                                        <Link href={`/service/${value}`} key={index}>
                                            <DropdownMenuItem >
                                                <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-sm duration-500 bg-gray-900">{value}</div>
                                            </DropdownMenuItem>
                                        </Link>
                                    )
                                })}

                            </DropdownMenuContent>
                        </DropdownMenu>

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
                    </div>

                    <Link href={'/contact'}>
                        <div className='flex '>
                            <Button variant="outline" className="flex gap-2 items-center w-[200px] h-[50px] text-md ">
                                Contact Now
                                <PhoneCall size={'18px'} />
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="block sm:hidden">

                <div className='flex items-center justify-between px-[20px] w-full bg-transparent-900 fixed top-0 left-0 z-50'>

                    <Link href={'/'}>

                        <div className='flex'>
                            <img
                                src='/logos/white.png'
                                className='w-[80px] h-[80px] '
                                alt='Synwave'
                            />
                        </div>
                    </Link>

                    <div>
                        <M_Navbar />
                    </div>

                </div>


            </div>

            <div className="">
                <MobileNavbar />
            </div>

        </>
    )
}

export default Navbar
