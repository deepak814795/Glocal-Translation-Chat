"use client"
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Allfeatures from "@/components/Allfeatures"

const Features = () => {
    return (
    <section className=" dark:bg-black md:h-[25rem] sm:h-[50rem] hidden lg:block font-mono">

    <LampContainer className=''>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 bg-gradient-to-br font-mono from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       Boost Your Productivity <br /> Start Using Our App Today  <br/> <br/>
      
      </motion.h1>
    </LampContainer>
    </section>
      );
}

export default Features








// <Blob top="50%" left="0%" width="40" height="23rem" clipPath="..." gradientFrom="#ff80b5" gradientTo="#9089fc" opacity={50}/> 
// <Blob top="50%" left="25%" width="40" height="23rem" clipPath="..." gradientFrom="#ff80b5" gradientTo="#9089fc" opacity={30}/> 
// <Blob top="50%" left="55%" width="40" height="23rem" clipPath="..." gradientFrom="#ff80b5" gradientTo="#9089fc" opacity={30}/> 
