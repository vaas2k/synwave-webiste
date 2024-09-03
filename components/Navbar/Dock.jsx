import React from "react";
import  FloatingDock  from "../ui/floating-dock";
import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Cog , UserSearch  } from 'lucide-react';

export default function Dock() {
  const links = [
    
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/synwaveofficial",
    },
    {
        title: "Instagram",
        icon: (
          <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/synwave.official/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center px-[20px] w-full bg-transparent-900 fixed bottom-3 right-2 z-50">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
