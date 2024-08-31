'use client'
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleCheck  } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HoverEffect ({
  items,
  className
}) {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-x-[20px] gap-y-[80px]", className)}>
      {items.map((item, idx) => (
        <Link
          href={'/'}
          key={item?.link}
          className="relative group  block p-2 h-[10rem] w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-300/50 dark:bg-rose-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card className={'flex items-center justify-center bg-transparent duration-500 hover:text-white'}>
            <CardTitle className={'flex item-center text-zinc-900  font-bold text-[14px]'}>  <CircleCheck color="red" size={'30px'} className="mr-4"/> {item}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};
