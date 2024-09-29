"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown,ChevronRight, MousePointerClick, PointerIcon } from "lucide-react";
import Link from "next/link";
import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const productVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroParallaxDemo() {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [showList, setShowList] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleOpen = (images) => {
    setSelectedImages(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImages([]);
  };

  const toggleList = (title) => {
    setShowList(prevTitle => prevTitle === title ? '' : title);
};
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
            We build breathtaking products powered by the latest technologies
            and frameworks. Our team of passionate developers and visionary
            designers is obsessed with creating extraordinary experiences that
            leave a lasting impact.
          </p>
        </motion.div>
      </div>

      {products.map((item, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          variants={productVariants}
          className="flex flex-col py-[60px] md:py-[100px] px-[20px] md:px-[40px]"
        >
          <div
            className={`flex flex-col ${
              idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center justify-center gap-[30px] md:gap-[50px] lg:gap-[130px]`}
          >
            <div>

            <img
              onClick={() => handleOpen(item.images)}
              src={item.thumbnail}
              className="w-[350px] md:w-[450px] lg:w-[550px] h-auto rounded-lg shadow-lg cursor-pointer"
              alt={item.title}
              />
              <div className="flex item-center justify-center mt-[-30px] animate-pulse opacity-80"><MousePointerClick color="white" /></div>
            
              </div>
            <div className="flex items-center flex-col text-center sm:text-left">
              <h1 className="text-rose-500 font-bold text-2xl md:text-2xl lg:text-4xl">
                {item.title}
              </h1>
              <p className="w-full md:w-[400px] lg:w-[500px] text-center mt-5 md:mt-7 opacity-90 text-[12px] sm:text-sm">
                {item.description}
              </p>
              <br/>
            </div>
          </div>

          {/* Features Section */}
          <div className='flex flex-col  w-full p-6 px-0 sm:px-[80px] mt-10'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={'visible'}
                        variants={textVariants}
                    >
                        <h1 className='font-bold text-rose-600 text-xl sm:text-2xl mb-6'>Key Features</h1>

                        {item.features.map((item, idx) => (
                            <div key={idx}>
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
                                    <h1 className='font-bold text-rose-600 text-md sm:text-xl'>{item.title}</h1>
                                </div>

                                {showList === item.title && (
                                    <div className='flex flex-col sm:flex-row italic opacity-90 text-center sm:text-left items-center justify-between gap-6'>
                                        <motion.p
                                            className='ml-8 w-full sm:w-[400px]'
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
        </motion.div>
      ))}

      {open && (
        <EnlargedImages images={selectedImages} handleClose={handleClose} />
      )}
    </div>
  );
}

const EnlargedImages = ({ handleClose, images }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={productVariants}
      onClick={handleClose}
      className="fixed inset-0 flex flex-col z-50 bg-black bg-opacity-50 overflow-scroll px-[20px] md:px-[50px]"
    >
      <div className="flex flex-col items-center sm:flex-row flex-wrap justify-center gap-[30px] md:gap-[50px] my-[30px] md:my-[40px]">
        {images.map((item, idx) => (
          <img
            key={idx}
            src={item}
            className="w-[350px] md:w-[300px] lg:w-[500px] h-auto rounded-lg shadow-lg"
            alt="Enlarged View"
          />
        ))}
      </div>
    </motion.div>
  );
};


export const products = [
  {
    title: "A High-Stakes Competitive Coding Platform",
    link: "https://github.com/vaas2k/ArenaDuel",
    thumbnail: "/work/arena/1.png",
    description:
      "ArenaDuel is an advanced competitive coding platform meticulously engineered to facilitate real-time head-to-head battles between users of equivalent rank. This sophisticated application transcends conventional coding challenges by integrating a range of cutting-edge technologies, ensuring a seamless and immersive experience for its users.",
    images: [
      "/work/arena/1.png",
      "/work/arena/2.png",
      "/work/arena/3.png",
      "/work/arena/4.png",
    ],
    features: [
      {
        title: "Elo Rating System",
        description:
          "A robust ranking algorithm that accurately reflects user skill levels, ensuring fair and balanced matchmaking.",
      },
      {
        title: "NextAuth-Powered Authentication",
        description:
          "A secure, scalable authentication system leveraging NextAuth, providing seamless integration and user management.",
      },
      {
        title: "Real-Time Matchmaking",
        description:
          "A highly optimized matchmaking engine utilizing Redis, enabling instantaneous pairing of users for competitive coding duels.",
      },
      {
        title: "Live Test Case Updates",
        description:
          "Continuous, real-time feedback on test case performance for both competitors, fostering a dynamic and engaging competitive environment.",
      },
      {
        title: "Code Compilation & Problem Validation",
        description:
          "Utilizes Judge0, an industry-leading code execution judge, to deliver precise and efficient code compilation, execution, and problem acceptance processes.",
      },
      {
        title: "Marathon Mode",
        description:
          "A strategic challenge mode where users compete to solve the most problems within a set time frame, complete with a real-time leaderboard to track performance and foster competitive spirit.",
      },
      {
        title : "TechStack",
        description : "TypeScript & Next.js , NextAuth , Prisma , WebSockets , Redis , Postgres , Judge0 , Docker & Kubernetes"
      }
    ],
  },
  {
    title: "PIXER AI (Generative AI)",
    link: "https://github.com/vaas2k/Image-manipulation-using-ai-",
    thumbnail: "/work/pixer/1.png",
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
    features: [
      {
        title: "Clerk-Driven Authentication System",
        description:
          "A secure and streamlined user authentication system built on Clerk, ensuring robust user management and seamless access to PixerAI’s powerful features.",
      },
      {
        title: "Generative Fill",
        description: "Seamlessly fill in or expand images with AI-generated content.",
      },
      {
        title: "Object Removal",
        description:
          "Intelligently erase unwanted objects from images with flawless results.",
      },
      {
        title: "Object Recoloring",
        description:
          "Effortlessly change the colors of specific objects within an image.",
      },
      {
        title: "Background Removal",
        description:
          "Instantly isolate subjects from their backgrounds with precision.",
      },
      {
        title: "Quality Restoration",
        description:
          "Enhance and restore image quality, bringing new life to old or damaged photos.",
      },
      {
        title: "Credits Purchase with Stripe Integration",
        description:
          "A sophisticated payment system powered by Stripe, allowing users to purchase credits for AI feature usage, ensuring a smooth and secure transaction process.",
      },
      {
        title : "TectStack",
        description : "TypeScript & Next.js , Replicate AI & LangChain , Stripe , Clerk , Mongoose & MongoDB, TailwindCSS & HTML"
      }
    ],
  },
];