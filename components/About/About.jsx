'use client'
import { CheckCircle, ChevronDown, ChevronRight, Handshake, Lightbulb, MapIcon, Users, Voicemail } from 'lucide-react'
import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'


const imageVariants = {
    hidden: { opacity: 0, rotate: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        rotate: i % 2 === 0 ? 5 : -5,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.2,
        },
    }),
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
    const [showList, setShowList] = useState('');
    const ref = useRef();

    const list = [
        {
            icon: <Voicemail size={'40px'} />,
            title: "Innovate with Integrity",
            description: "We push boundaries with a strong moral compass, ensuring that our innovations align with our values and benefit all stakeholders.",
        },
        {
            icon: <Handshake size={'40px'} />,
            title: "Commit to the Customer",
            description: "The customer matters. It’s why we are passionate about showing up, with intention, to deliver value every day.",
        },
        {
            icon: <Users size={'40px'} />,
            title: "Every Voice",
            description: "We seek diverse ideas, perspectives, and experiences because no one person has all the answers. It’s how we create meaningful outcomes.",
        },
        {
            icon: <Lightbulb size={'40px'} />,
            title: "United for Success",
            description: "Our community succeeds with mutual respect and collaboration. We all have a key part to play in building the Deputy legacy.",
        },
        {
            icon: <CheckCircle size={'40px'} />,
            title: "Own the Outcome",
            description: "We take responsibility for our work, striving for excellence and accountability in everything we do. Our success is a shared achievement.",
        },
    ];

    const toggleList = (title) => {
        setShowList(prevTitle => prevTitle === title ? '' : title);
    };

    return (
        <div ref={ref} className='flex flex-col items-center  '>
            
            <div className='flex flex-col h-screen sm:flex-row items-center bg-opacity-50 bg-cover overflow-hidden  sm:mt-[-60px]'
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1518767279257-af841be2732f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={'visible'}
                    variants={textVariants} className='flex flex-col items-start sm:w-1/2 px-[40px] sm:px-[150px]'>
                    <h1 className='font-bold text-rose-600 text-5xl mb-6 w-full sm:w-[700px]'>Synwave at a Glance</h1>
                    <p className='text-sm sm:text-base leading-relaxed opacity-80 mb-8'>
                        At Synwave, we merge creativity with technology to deliver custom software solutions that drive growth. Whether you&apos;re a startup or an established business, we&apos;re here to turn your vision into reality with excellence and a forward-thinking approach.
                    </p>
                </motion.div>
                <div className='relative sm:w-1/2 flex flex-col items-end gap-[40px] sm:gap-[10px] mt-0 sm:mt-[-50px]'>
                    {[ // array of image sources
                        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    ].map((src, i) => (
                        <motion.img
                            alt='Image'
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            src={src}
                            className={`h-[10rem] sm:h-[15rem] w-full sm:w-[28rem] object-cover rounded-lg shadow-lg transform 
                ${i % 2 === 0 ? 'ml-[2rem]' : 'ml-[2rem] mr-3 sm:mr-[10rem]'} 
                ${i === 1 ? 'mt-[-4rem]' : i === 2 ? 'mt-[-4rem]' : ''}`}
                        />
                    ))}
                </div>
            </div>


            <div className='flex flex-col items-center justify-center gap-12 sm:px-[125px] w-full my-24 '>
                <div className='flex flex-col gap-10 text-start p-6 w-full rounded-lg'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={'visible'}
                        variants={textVariants}
                    >
                        <h1 className='font-bold text-rose-600 text-4xl mb-4'>Mission</h1>
                        <p className='text-md italic font-bold mb-6'>
                            Empower companies and organizations to drive growth through innovative technology solutions, connecting them with passionate and experienced engineers and solution providers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={'visible'}
                        variants={textVariants}
                    >
                        <h1 className='font-bold text-rose-600 text-4xl mb-4'>Vision</h1>
                        <p className='text-md italic font-bold mb-6'>
                            Creating Waves of Innovation in Every Community™
                        </p>
                        <p className='text-md italic mb-6'>
                            At Synwave, we’re dedicated to transforming businesses by crafting technology solutions that resonate with real people. Our mission is to empower every workplace, fostering growth, connection, and trust across communities worldwide. We believe in making a meaningful impact, one innovative solution at a time.
                        </p>
                    </motion.div>
                </div>

                <div className='flex flex-col w-full p-6'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={'visible'}
                        variants={textVariants}
                    >
                        <h1 className='font-bold text-rose-600 text-4xl mb-6'>Values</h1>

                        {list.map((item, idx) => (
                            <div key={idx} >
                                <div
                                    className='flex my-8 items-center gap-4 cursor-pointer'
                                    onClick={() => toggleList(item.title)}
                                >
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: showList === item.title ? 360 : 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {showList === item.title ? <ChevronDown size={'24px'} /> : <ChevronRight size={'24px'} />}
                                    </motion.div>
                                    <h1 className='font-bold text-rose-600 text-2xl'>{item.title}</h1>
                                </div>

                                {showList === item.title && (
                                    <div className='flex flex-col sm:flex-row italic opacity-90 text-center items-center justify-between gap-6'>
                                        <motion.p
                                            className='ml-8 w-full sm:w-[400px] text-left'
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {item.description}
                                        </motion.p>
                                        <div>{item.icon}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className='text-center w-full h-[20rem] p-[30px] bg-cover bg-center rounded-lg shadow-sm'
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1596368257013-42f910ce12af?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}>
            <h1 className='font-bold text-rose-600 text-4xl mb-6 '>Meet our leadership</h1>
            <p className='text-sm sm:text-base leading-relaxed opacity-80 mb-8 px-[120px]'>
            Meet the driving force, the dreamers, the minds behind crafting a 
            cutting-edge software development company, aka, SynSols.
            </p>
            <Button className="bg-rose-600">See Our Team</Button>
            </div>

            <div className='text-center my-12 sm:my-32 px-6 sm:px-12'>
                <h1 className='font-black text-rose-600 text-4xl mb-16'>Our Offices</h1>

                <div className='flex flex-col sm:flex-row gap-12 sm:gap-32 justify-center'>
                    <div className='flex text-center w-72 flex-col items-center p-6'>
                        <img src='/hero images/isb.png' className='object-cover w-24 h-24' />
                        <h1 className='my-4 text-zinc-700 font-bold text-xl'>Islamabad</h1>
                        <h1 className='mb-4 text-zinc-700 font-bold text-md opacity-90'>Synwave Solutions Limited</h1>
                        <p className='text-sm'>
                            731, Street 10,
                            i-10<br />
                            Islamabad,
                            Pakistan
                        </p>
                    </div>

                    <div className='flex text-center w-72 flex-col items-center p-6'>
                        <img src='/hero images/uk.png' className='object-cover w-24 h-24' />
                        <h1 className='my-4 text-zinc-700 font-bold text-xl'>England</h1>
                        <h1 className='mb-4 text-zinc-700 font-bold text-md opacity-90'>Synwave Solutions Limited</h1>
                        <p className='text-sm'>
                            17 Albert Road,
                            Stechford<br />
                            Birmingham,
                            United Kingdom
                        </p>
                    </div>
                </div>
            </div>



           
        </div>
    )
}

export default About;
