// Select component extends from shadcnui - https://ui.shadcn.com/docs/components/Select
"use client";;
import * as React from "react";
import { cn } from "../../lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Select = React.forwardRef(({ className,reg,serType, type, ...props }, ref) => {
  const radius = 100; // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = React.useState(false);

  
  const regions = [ "MENA - (Middle East & North Africa)","USA","Canada","Asia","Europe","Oceana (Australia & New Zealand)","Rest of the World"]
  const services = [ 'Custom Software Development','Mobile App Development','Web App Development','Generative AI','DevOps','Video Editing',]
  const toShow = reg ? regions : services;

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    (<motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        var(--rose-500),
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/Select">
      <select
        type={type}
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-Select rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
         disabled:cursor-not-allowed disabled:opacity-50
         dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
         group-hover/Select:shadow-none transition duration-400
         `,
          className
        )}
        ref={ref}
        {...props} >
          <option value="" disabled >Select {reg ? 'Region' : "Service"}</option>
          {toShow.map((item ,idx)=> {
            return <option key={idx} >{item}</option>
          })}
        </select>
    </motion.div>)
  );
});
Select.displayName = "Select";

export default Select;
