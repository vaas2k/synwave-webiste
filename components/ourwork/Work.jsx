"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { products } from './products';
import Link from "next/link";

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
        className="flex flex-col h-screen sm:flex-row items-center justify-start bg-opacity-50 bg-cover overflow-hidden pt-[120px] sm:pt-5 "
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
          className="relative flex md:flex-row items-center justify-between mx-4 md:mx-[50px] lg:mx-[100px]   my-6 rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={productVariants}
          >
          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center opacity-90 bg-${product.bgcolor}-500`}
            style={{
              backgroundBlendMode:'luminosity',
              backgroundImage: `url('${product.bgimage}')`,
              zIndex: 1,
            }}
            />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: `linear-gradient(-90deg, ${product.bgcolor} 0%, rgba(0,0,0,0.7) 100%)`,
              zIndex: 2,
            }}
            />

          {/* Color Overlay */}
          <div
            className="absolute inset-0 bg-darkred opacity-80"
            style={{ backgroundBlendMode: "luminosity", zIndex: 3 }}
            />

          {/* Content Layer */}
          <div className="z-10 flex flex-col md:flex-col lg:flex-row justify-between md:justify-center p-6 md:p-10 h-full text-white">
            {/* Left Content */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 ml-0 sm:ml-[40px] md:w-[90%] lg:w-[50%] sm:w-full py-[50px]">
              {product.logo && (
                <motion.img
                src={product.logo}
                alt="logo"
                className="w-auto h-[30px] my-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                />
              )}
              <motion.div
                className="text-center md:text-left"
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
              <Link key={index} href={`/work/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                >
                <Button className="px-6 sm:px-9 gap-2 hover:px-8 sm:hover:px-12 transition-all duration-500">
                  Learn More <ArrowRight size={20} />
                </Button>
              </motion.div>
              </Link>
            </div>

            {/* Right Image */}
            <motion.div
              className=" flex items-start justify-center py-[25px] sm:py-[50px] md:w-[90%] lg:w-[50%] sm:w-full"
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


