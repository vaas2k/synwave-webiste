'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
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
import MobileNavbar from './Dock';
import {Modal,ModalTrigger} from "../ui/Contact";
import { Mail } from 'lucide-react';

const Navbar = () => {

    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);
    const [scrollPosition, setScrollPosition] = useState(0);

    const paths = [
        '/service/Custom%20Software%20Development',
        '/service/Mobile%20App%20Development',
        '/service/Web%20Development',
        '/service/Generative%20AI',
        '/service/DevOps',
        '/service/Video%20Editing',
        '/service/App%20Maintenance',
        "/service/Quality%20Assurance%20and%20Testing"]


    const [landing, setLanding] = useState(true);

    useEffect(() => {
        const newPath = paths.find((item) => { return item == pathname ? item : null })
        setLanding(pathname == '/' || pathname == newPath ? true : false);
    }, [pathname]);

    const services = [
        'Custom Software Development',
        'Mobile App Development',
        'Web Development',
        'Generative AI',
        'App Maintenance',
        'DevOps',
        'Video Editing'
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
            <div className="hidden sm:block ">
                <div
                    className={`flex  items-center justify-between py-[10px] px-[50px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled || !landing ? 'bg-white text-black' : 'bg-transparent text-white'
                        }`}
                >
                    <Link href="/">
                        <div className="flex">
                            <img
                                src={isScrolled || !landing ? "/logos/new black.png" : "/logos/new white.png"}
                                className={isScrolled || !landing ? "h-[30px]" : "h-[33px] my-[10px]"}
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

                    <Link href='/contact'>
                    <Modal>
            <ModalTrigger className={` ${isScrolled && !landing ? 'text-white' : 'text-black'}text-rose-500 flex justify-center group/modal-btn border-[1px] border-opacity-20 rounded-md px-[40px]`}>
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    GET IN TOUCH
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <Mail color={'red'} size={'18px'}/>
                </div>
            </ModalTrigger>
        </Modal>

                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="block sm:hidden">
                <div
                    className={`flex items-center justify-between px-[20px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled || !landing ? 'bg-white text-black' : 'bg-transparent text-white'
                        }`}
                >
                    <Link href="/">
                        <div className="flex">
                            <img
                                src={isScrolled || !landing ? "/logos/black.png" : "/logos/white.png"}
                                className={'w-[70px] h-[70px]'}
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
