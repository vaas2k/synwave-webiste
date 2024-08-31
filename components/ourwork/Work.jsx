"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col h-screen sm:flex-row items-center justify-start bg-opacity-50 bg-cover overflow-hidden pt-[120px] sm:pt-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527567018838-584d3468eb85?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          className="flex flex-col items-center justify-center sm:w-1/2 px-[40px] sm:px-[100px]"
        >
          <h1 className="text-5xl font-bold text-start mx-auto text-rose-500 dark:text-white pb-[30px] relative z-10">
            Crafting Tomorrow One Innovation at a Time
          </h1>
          <p className="text-sm text-start sm:text-base leading-relaxed opacity-80 mb-8">
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
          className="flex flex-col py-[100px] px-[20px]"
        >
          <div
            className={`flex flex-col ${
              idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center justify-center gap-[130px]`}
          >
            <img
              onClick={() => handleOpen(item.images)}
              src={item.thumbnail}
              className="w-[300px] sm:w-[500px] h-auto rounded-lg shadow-lg cursor-pointer"
            />
            <div className="flex items-center flex-col text-center sm:text-left">
              <h1 className="text-rose-500 font-bold text-2xl sm:text-4xl">
                {item.title}
              </h1>
              <p className="sm:w-[400px] mt-7 opacity-90 text-[12px] sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {open && <EnlargedImages images={selectedImages} handleClose={handleClose} />}
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
      className="fixed inset-0 flex flex-col z-50 bg-black bg-opacity-50 overflow-hidden px-[50px]"
    >
      <div className="flex flex-col sm:flex-row justify-center gap-[50px] my-[40px]">
        <img
          src={images[0]}
          className="w-[300px] sm:w-[500px] h-auto rounded-lg shadow-lg"
        />
        <img
          src={images[1]}
          className="w-[300px] sm:w-[500px] h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-[50px] my-[40px]">
        <img
          src={images[2]}
          className="w-[300px] sm:w-[500px] h-auto rounded-lg shadow-lg"
        />
        <img
          src={images[3]}
          className="w-[300px] sm:w-[500px] h-auto rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export const products = [
  {
    title: "Arena Duel (Realtime Matchmaking)",
    link: "https://www.angelfire.com",
    thumbnail: "/work/arena/1.png",
    description:
      "Amidst the bustling city streets, where the hum of daily life intertwined with the distant echoes of laughter, a small coffee shop stood as a quiet refuge. The aroma of freshly brewed coffee drifted through the air, mingling with the scent of warm pastries that beckoned passersby. Inside, the soft glow of vintage lamps cast a cozy light on the wooden tables, where customers sat lost in thought or deep in conversation. The barista, with a smile as warm as the coffee she served, moved gracefully.",
    images : ["/work/arena/1.png","/work/arena/2.png","/work/arena/3.png","/work/arena/4.png"]  
  },
  {
    title: "PIXER AI (Generative AI)",
    link: "https://www.yola.com",
    thumbnail: "/work/pixer/1.png",
    description:
      "Amidst the bustling city streets, where the hum of daily life intertwined with the distant echoes of laughter, a small coffee shop stood as a quiet refuge. The aroma of freshly brewed coffee drifted through the air, mingling with the scent of warm pastries that beckoned passersby. Inside, the soft glow of vintage lamps cast a cozy light on the wooden tables, where customers sat lost in thought or deep in conversation. The barista, with a smile as warm as the coffee she served, moved gracefully.",
    images : ["/work/pixer/1.png","/work/pixer/2.png","/work/pixer/3.png","/work/pixer/4.png"]
    },
];
