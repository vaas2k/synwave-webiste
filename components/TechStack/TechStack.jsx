
'use client';
import React from 'react'
import { motion } from 'framer-motion'
import InfiniteMovingCards from '../ui/infinite-moving-cards';


const TechStack = () => {

    const skills = ["js","ts","cpp","python","java","go","nextjs","react","swift","flutter","redis","postgres","mysql","sqlite","mongodb","firebase","supabase","aws","nginx","k8s","graphql","figma",]
  return (
    <div className='mt-[60px] sm:mt-[100px]'>
        <h1 className='text-2xl sm:text-5xl font-bold  text-center'> TechStack used at <br/> <b className='text-rose-500 font-bold'>Synwave Solutions</b></h1>
        
        <div className='flex justify-center p-[40px]'>
            <InfiniteMovingCards items={skills}/>
            </div>
    </div>
  )
}

export default TechStack