'use client'
import React from 'react';
import { BriefcaseBusiness, Landmark, Hospital, Plane, ActivitySquare, Newspaper, UserCircleIcon, HousePlus, ShoppingBag, TvMinimalPlay, Gamepad, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } } // Smooth animation
};

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.3 // Stagger delay between children
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Smooth animation for text
};


export default function Industry() {


    const icons = [
        { icon: <Landmark size={20} />, title: "Banking & Finance" },
        { icon: <Hospital size={20} />, title: "Health & Medicine" },
        { icon: <Plane size={20} />, title: "Aviation" },
        { icon: <BriefcaseBusiness size={20} />, title: "Business" },
        { icon: <ActivitySquare size={20} />, title: "Fitness" },
        { icon: <Newspaper size={20} />, title: "News" },
        { icon: <UserCircleIcon size={20} />, title: "Social Networks" },
        { icon: <HousePlus size={20} />, title: "Real Estate" },
        { icon: <ShoppingBag size={20} />, title: "e-Commerce" },
        { icon: <TvMinimalPlay size={20} />, title: "Media & Entertainment" },
        { icon: <Gamepad size={20} />, title: "Gaming" },
        { icon: <Map size={20} />, title: "Travel" },
    ];

    return (
        <div className='relative flex h-auto my-[100px] w-full p-[30px] justify-center flex-col bg-cover bg-center bg-no-repeat'>
            {/* Overlay */}

            {/* Content */}
            <motion.div
                initial="hidden"
                whileInView={'visible'}
                variants={textVariants}
                className='relative z-10 text-center mb-[80px]'>
                <h1 className="font-bold text-xl sm:text-3xl">Industries Targeted <br /> By </h1>
                <h2 className="text-rose-500 text-2xl sm:text-5xl font-extrabold">Synwave Solutions</h2>
            </motion.div>

            {/* Icons Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-12 justify-center items-start text-left'>
                {icons.map((val, ind) => (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={itemVariants}
                        key={ind} className='flex items-center ml-[80px]'>
                        <div className='bg-white hover:bg-rose-600 duration-500 hover:text-white p-4 rounded-full shadow-lg'>
                            {val.icon}
                        </div>
                        <p className='ml-4 text-sm sm:text-md font-medium'>{val.title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
