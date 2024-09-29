"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const productVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroParallaxDemo() {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col h-screen sm:flex-row items-center justify-start bg-opacity-50 bg-cover overflow-hidden pt-[120px] sm:pt-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604238376153-c7dfd9522fa7?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          className="flex flex-col items-center justify-center sm:w-1/2 px-[20px] md:px-[40px] lg:px-[100px]"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-start mx-auto text-rose-500 dark:text-white pb-[20px] md:pb-[30px] relative z-10">
            Crafting Tomorrow One Innovation at a Time
          </h1>
          <p className="text-sm md:text-base leading-relaxed opacity-80 mb-6 md:mb-8">
            We build breathtaking products powered by the latest technologies and frameworks. Our team of passionate developers and visionary designers is obsessed with creating extraordinary experiences that leave a lasting impact.
          </p>
        </motion.div>
      </div>

      {products.map((product, index) => (
        <motion.div
          key={index}
          className="relative flex md:flex-row items-center justify-between mx-4 md:mx-[50px] lg:mx-[100px] h-[45rem] sm:h-[30rem] my-6 rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={productVariants}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url('${product.bgimage}')`,
              zIndex: 1,
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: `linear-gradient(180deg, ${product.bgcolor} 0%, rgba(0,0,0,0.7) 100%)`,
              zIndex: 2,
            }}
          />

          {/* Color Overlay */}
          <div
            className="absolute inset-0 bg-darkred opacity-80"
            style={{ backgroundBlendMode: "luminosity", zIndex: 3 }}
          />

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:justify-center p-6 md:p-10 h-full text-white">
            {/* Left Content */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 ml-[40px]">
              {product.logo && (
                <motion.img
                  src={product.logo}
                  alt="logo"
                  className="w-[100px] sm:w-[150px] h-auto my-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <motion.div
                className="w-[90%] sm:w-[500px] text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="sm:text-2xl text-xl font-semibold my-5 sm:my-7">
                  {product.title}
                </h1>
                <p>{product.description}</p>
              </motion.div>

              {/* Tech Icons */}
              <motion.div
                className="flex flex-row items-center gap-4 sm:gap-6 my-4 sm:my-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.tech.map((item, i) => (
                  <img
                    key={i}
                    className="w-[25px] sm:w-[30px] h-auto rounded-lg shadow-xl"
                    src={`https://skillicons.dev/icons?i=${item}`}
                  />
                ))}
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button className="px-6 sm:px-9 gap-2 hover:px-8 sm:hover:px-12 transition-all duration-500">
                  Learn More <ArrowRight size={20} />
                </Button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              className="flex-col items-start justify-center h-screen pt-0 sm:pt-[40px] pl-0 sm:pl-[80px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[400px] sm:w-[600px] h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export const products = [
  {
    title: "High-Stakes Realtime Competitive Coding Platform",
    link: "https://github.com/vaas2k/ArenaDuel",
    thumbnail: "./work/arena/tumb.png",
    description:
      "ArenaDuel is an advanced competitive coding platform meticulously engineered to facilitate real-time head-to-head battles between users of equivalent rank. This sophisticated application transcends conventional coding challenges by integrating a range of cutting-edge technologies, ensuring a seamless and immersive experience for its users.",
    images: [
      "/work/arena/1.png",
      "/work/arena/2.png",
      "/work/arena/3.png",
      "/work/arena/4.png",
    ],
    logo: "./work/arena/xd.png",
    tech: [
      "ts",
      "nextjs",
      "redis",
      "postgres",
      "docker",
      "kubernetes",
      "nodejs",
    ],
    bgimage:
      "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgcolor: 'blue',
  },
  {
    title: "PIXER AI (Generative AI)",
    link: "https://github.com/vaas2k/Image-manipulation-using-ai-",
    thumbnail: "./work/pixer/m1.png",
    description:
      "PixerAI is an innovative application designed to redefine image manipulation through the power of artificial intelligence. This sophisticated platform provides users with an array of cutting-edge tools to transform and enhance images with unparalleled precision and creativity.",
    images: [
      "/work/pixer/1.png",
      "/work/pixer/2.png",
      "/work/pixer/3.png",
      "/work/pixer/4.png",
      "/work/pixer/5.png",
      "/work/pixer/6.png",
    ],
    logo: "./work/pixer/xd.png",
    tech: ["ts", "nextjs", "mongodb", "tailwindcss", "html", "nodejs"],
    bgimage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgcolor: 'indigo',
  },
];
