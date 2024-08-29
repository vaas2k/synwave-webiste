'use client'
import React , {useEffect} from 'react'
import FeaturesSectionDemo from '../ui/features-section-demo-2'
import { motion ,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Smooth animation for text
};

const S2 = () => {

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
        <div className=''>
            <div className='flex items-center justify-center pt-[100px] flex-col '>
                <motion.div 
                 ref={ref}
                 initial="hidden" animate={controls} variants={textVariants}
                 className='text-center pb-[30px] w-[300px] sm:w-[900px]'>
                    <h1 className='text-lg sm:text-2xl font-bold'> From Concept to Completeion,</h1>
                    <h1 className='text-xl sm:text-4xl text-rose-500 pl-[15px] font-bold'>We deliver Full-Stack Expertise.</h1>
                </motion.div>
                <motion.div
                initial="hidden" animate={controls} variants={textVariants}>
                    <p className='sm:w-[700px] w-[300px] text-[12px] sm:text-sm flex text-center pb-[30px]'>
                        We follow a structured approach for web and mobile development,
                        with planning, testing, and execution stages. We work with clients
                        to ensure software is reliable, secure, and user-friendly.
                    </p>
                </motion.div>
                <div>
                    <FeaturesSectionDemo className="mb-[200px]" />
                </div>

                <div className='flex flex-col'>
                  
                </div>
            </div>


        </div>
    )
}


export default S2