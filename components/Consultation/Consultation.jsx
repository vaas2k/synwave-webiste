'use client'
import React,{useEffect} from 'react'
import { MessageSquareText } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Smooth animation for text
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } // Smooth animation
};

const Consultation = () => {

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
    <div className="px-[30px] sm:px-[30px]">
      <div
        className="relative flex flex-col gap-[50px] items-center justify-center my-[80px] h-[25rem] bg-cover rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530494362568-5f68c6b8febf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 rounded-lg"></div>

        {/* Content */}
        <motion.div ref={ref}
          initial="hidden" animate={controls} variants={textVariants}
          className="relative w-full sm:w-[800px] text-white">
          <h1 className="font-bold text-center text-2xl sm:text-5xl text-rose-500">
            Book a free consultation with our experts today
          </h1>
          <p className="text-center italic text-zinc-950 text-sm sm:text-md opacity-90 my-[20px] ">
            Unlock your business's potential with advanced technologies, expert advice, and dedicated support tailored to your success.
          </p>
        </motion.div>

        <Link href="/contact">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="relative flex">
            <Button className="flex gap-2 bg-rose-600 items-center w-[200px] h-[50px] text-md hover:text-white">
              Schedule a Meeting
              <MessageSquareText size={"18px"} />
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}


export default Consultation;