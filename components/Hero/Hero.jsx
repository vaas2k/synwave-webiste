"use client";
import { motion } from "framer-motion";
import React from "react";
import ImagesSlider from "../ui/image-slider";
import TypewriterEffect from "../ui/typewriter-effect";
import Link from "next/link";

export default function Hero() {
  const images = [
    
    "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const words = [
    {
      text: "Transforming  ",
    },
    {
      text: "Ideas ",
    },
    {
      text: "into  ",
    },
    {
      text: "Digital  ",
      className :'text-rose-500 font-bold'
    },
    {
      text : "Realities",
      className :'text-rose-500 font-bold'

    }
  ];

  return (
    <div>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-rose-800 py-4">
            <div className="flex flex-col items-center justify-center h-[10rem] w-[300px] sm:w-[900px]">
              <TypewriterEffect words={words} />
              <p className="text-white dark:text-neutral-200 text-base text-sm sm:text-[19px] italic  mt-10 mb-10">
              Synwave turns visionary concepts into tangible innovations that shape the future.
              </p>
            </div>
          </motion.p>

          <div className="flex items-center justify-center gap-[20px]">
            
            <Link href={'/services'}>
            <button className="px-4 py-2 hover:p-[12px] duration-500 backdrop-blur-sm border bg-gray-300/10 hover:bg-rose-300/20 border-gray-100/20 text-white mx-auto text-center rounded-lg relative mt-4">
              <span>Services</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
            </button>
            </Link>
            <Link href={'/contact'}>
            <button className="px-4 py-2 hover:p-[12px] duration-500 backdrop-blur-sm border bg-gray-300/10 hover:bg-rose-300/20 border-gray-100/20 text-white mx-auto text-center rounded-lg relative mt-4">
              <span>Let&apos;s Talk</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
            </button>
            </Link>
          </div>

        </motion.div>
      </ImagesSlider>
    </div>
  );
}
