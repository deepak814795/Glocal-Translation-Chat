"use client"

import React from 'react'
import Featurecard from "@/components/Featurecard"

const Allfeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 rounded-4xl bg-slate-950 px-5 lg:px-10">
      <div className="w-full md:w-5/6 lg:w-full">
        <div className="flex flex-col items-center text-center pt-60">
          <div className="pt-16 pb-8 text-4xl md:text-7xl text-blue-300 font-mono">
            More connections with Glocal
          </div>
          <div className="text-xl font-light mt-4 leading-8 md:text-3xl text-[#d1d1f7]">
            Glocal is ideal for communicating every important message. Teams use Glocal 
            to share ideas, create stronger relationships, and lead creative discussions.
          </div>
        </div>

        <video
          className="mt-20 w-full md:w-2/3 rounded-3xl mx-auto shadow-indigo-400 shadow-2xl"
          autoPlay
          muted
          loop
        >
          <source src="/videos/pexels.mp4" type="video/mp4" />
        </video>

        <div className="text-xl md:text-5xl font-mono pt-24 px-5 text-center text-[#d1d1f7]">
          Chat Smarter, Not Harder with Glocal
        </div>

        <div className='pt-12'>
          <Featurecard/>
        </div>
      </div>
    </div>
  )
}

export default Allfeatures
