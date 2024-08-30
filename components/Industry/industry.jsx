'use client';
import React, { useEffect } from 'react';
import { BriefcaseBusiness, Landmark, Hospital, Plane, ActivitySquare, Newspaper, UserCircleIcon, HousePlus, ShoppingBag, TvMinimalPlay, Gamepad, Map } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }, // Smooth animation
};

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.3, // Stagger delay between children
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Smooth animation for text
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

    const controls = useAnimation();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className='relative flex justify-center h-auto  my-16 sm:my-24 lg:my-32 w-full px-4 sm:px-8 lg:px-16 justify-center flex-col bg-cover bg-center bg-no-repeat'>
            {/* Content */}
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={textVariants}
                className='relative z-10 text-center mb-10 sm:mb-16'>
                <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl">Industries Targeted By</h1>
                <h2 className="text-rose-500 text-xl sm:text-4xl lg:text-5xl font-extrabold">Synwave Solutions</h2>
            </motion.div>

            {/* Icons Grid */}
            <motion.div
                animate={controls}
                initial="hidden"
                variants={containerVariants}
                className='relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-x-8 lg:gap-x-12 justify-center items-start text-left ml-3 sm:ml-[90px]'>
                {icons.map((val, ind) => (
                    <motion.div
                        animate={controls}
                        initial="hidden"
                        variants={itemVariants}
                        key={ind} className='flex items-center'>
                        <div className='bg-white hover:bg-rose-600 duration-500 hover:text-white p-3 sm:p-4 rounded-full shadow-lg'>
                            {val.icon}
                        </div>
                        <p className='ml-3 sm:ml-4 text-xs sm:text-sm lg:text-md font-medium'>{val.title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
