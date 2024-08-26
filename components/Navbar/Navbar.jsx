'use client';
import { useEffect, useState } from 'react';
import {  usePathname } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import M_Navbar from './M-Navbar';
import MobileNavbar from './Mobile-Navbar';

const Navbar = ({ params }) => {

    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [landing, setLanding] = useState(true);

    useEffect(() => {
        setLanding(pathname == '/' ? true : false);
    }, [pathname]);

    const services = [
        'Custom Software Development',
        'Mobile App Development',
        'Web Development',
        'Generative AI',
        'DevOps',
        'Video Editing',
    ];

    // Handle scroll event to toggle navbar text color
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 100;   

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden sm:block">
                <div
                    className={`flex items-center justify-between px-[50px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled || !landing ? 'bg-zinc-900 text-white' : 'bg-transparent text-white'
                        }`}
                >
                    <Link href="/">
                        <div className="flex">
                                <img
                                    src="/logos/white.png"
                                    className="w-[95px] h-[95px]"
                                    alt="Synwave"
                                />                               
                        </div>
                    </Link>

                    <div className="flex gap-[30px]">
                        <Link href="/">
                            <div
                                className={`hover:text-red-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/' ? 'text-red-500' : ''
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
                                    className={`hover:text-red-500 mr-[-20px] text-sm cursor-pointer duration-500 relative ${activeLink === '/services' ? 'text-red-500' : ''
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

                            <DropdownMenuTrigger>
                                <div className="flex items-center justify-center text-sm cursor-pointer duration-500">
                                    <ChevronDown size={'18px'} />
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="p-[10px] px-[20px]">
                                {services.map((value, index) => (
                                    <Link href={`/service/${value}`} key={index}>
                                        <DropdownMenuItem>
                                            <div className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-sm duration-500">
                                                {value}
                                            </div>
                                        </DropdownMenuItem>
                                    </Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/about">
                            <div
                                className={`hover:text-red-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/about' ? 'text-red-500' : ''
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
                                className={`hover:text-red-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/work' ? 'text-red-500' : ''
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

                    <Link href="/contact">
                        <div className="flex">
                            <Button
                                variant="outline"
                                className="flex gap-2 items-center w-[200px] h-[50px] text-md hover:text-white"
                            >
                                Contact Now
                                <PhoneCall size={'18px'} />
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="block sm:hidden">
                <div
                    className={`flex items-center justify-between px-[20px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-transparent text-white' : 'bg-transparent text-white'
                        }`}
                >
                    <Link href="/">
                        <div className="flex">
                             <img
                            src="/logos/white.png"
                            className="w-[80px] h-[80px]"
                            alt="Synwave"
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
    );
};

export default Navbar;
