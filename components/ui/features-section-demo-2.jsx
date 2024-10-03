'use client'
import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconTerminal2,
  IconDeviceMobile,
  IconVideoPlus,
  IconAi,
  IconWebhook,
  IconTestPipe
} from "@tabler/icons-react";
import {ArrowRight} from 'lucide-react';
import { Button } from "./button";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FeaturesSectionDemo() {

 

  const features = [
    {
      title: "Custom Software Development",
      description:
        "Creating bespoke software solutions tailored to your unique business needs.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Mobile App Development",
      description:
        "Designing intuitive mobile apps that enhance user experience and engagement.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Web Development",
      description:
        "Building dynamic websites with robust functionality and modern design.",
      icon: <IconWebhook />,
    },
    {
      title: "Generative AI",
      description: "Leveraging AI to generate innovative solutions and drive technological advancement.",
      icon: <IconAi />,
    },
    {
      title: "DevOps",
      description: "Implementing efficient DevOps practices and continuous integration/delivery pipelines.",
      icon: <IconCloud />,
    },
    {
      title: "Video Editing",
      description:
        "Providing professional video editing services to enhance visual storytelling.",
      icon: <IconVideoPlus />,
    },
    {
      title: "App Maintenance",
      description:
        "Ensuring your apps run smoothly with timely updates and reliable support.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Quality Assurance and Testing",
      description: "Ensuring your software performs flawlessly with comprehensive testing and quality assurance practices.",
      icon: <IconTestPipe />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
 
const Feature = ({
  title,
  description,
  icon,
  index,
}) => {

  const router = useRouter();
  return (
    
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      >
        <Link href={`/service/${title}`}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-rose-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-rose-600 font-bold dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
      </Link>
    </div>
  );
};