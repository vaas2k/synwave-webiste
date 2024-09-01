'use client';
import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { AlignJustify } from 'lucide-react';
import Contact_Button from '../ui/Contact_Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const M_Navbar = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);
    const [isOpen, setIsOpen] = useState(false); // State to control Sheet

    const services = [
        'Custom Software Development', 
        'Mobile App Development', 
        'Web Development', 
        'Generative AI', 
        'DevOps', 
        'Video Editing'
    ];

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsOpen(false); // Close the Sheet after clicking a link
        router.push(path); // Navigate to the clicked path
    };

    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <AlignJustify color='black' size={'20px'} className="text-gray-400" />
                    </button>
                </SheetTrigger>
                <SheetContent side={'top'} className="flex flex-col items-start justify-center gap-[30px] w-full sm:w-[240px] bg-white shadow-lg">
                    <SheetTitle>
                        <button
                            onClick={() => handleLinkClick('/')}
                            className={`text-gray-800 hover:text-rose-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/' ? 'text-rose-500' : ''}`}
                        >
                            <h1>Home</h1>
                        </button>
                    </SheetTitle>

                    <SheetTitle>
                        <DropdownMenu>
                            <button
                                onClick={() => handleLinkClick('/services')}
                                className='flex items-center justify-center gap-[6px] text-gray-800 hover:text-rose-500 text-sm cursor-pointer duration-500'
                            >
                                <h1>Services</h1>
                            </button>
                            <DropdownMenuContent className="p-[10px] px-[20px] bg-white shadow-md border border-gray-200">
                                {services.map((value, index) => (
                                    <DropdownMenuItem key={index} asChild>
                                        <button
                                            onClick={() => handleLinkClick(`/services/${value}`)}
                                            className="dropdown-item hover:pl-[40px] cursor-pointer py-[10px] text-sm duration-500 text-gray-800 hover:text-rose-500"
                                        >
                                            {value}
                                        </button>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SheetTitle>

                    <SheetTitle>
                        <button
                            onClick={() => handleLinkClick('/about')}
                            className={`text-gray-800 hover:text-rose-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/about' ? 'text-rose-500' : ''}`}
                        >
                            <h1>About Us</h1>
                        </button>
                    </SheetTitle>

                    <SheetTitle>
                        <button
                            onClick={() => handleLinkClick('/work')}
                            className={`text-gray-800 hover:text-rose-500 text-sm cursor-pointer duration-500 relative ${activeLink === '/work' ? 'text-rose-500' : ''}`}
                        >
                            <h1>Our Work</h1>
                        </button>
                    </SheetTitle>

                    <SheetTitle>
                        <Button
                            onClick={() => handleLinkClick('/contact')}
                            className="bg-rose-500 text-white hover:bg-rose-600 p-2 rounded"
                            >
                            GET IN TOUCH
                        </Button>
                    </SheetTitle>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default M_Navbar;
