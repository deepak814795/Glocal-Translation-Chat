"use client";
import React from "react";
import  StickyScroll  from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Two-Way Translation",
    description:
      "Ensure a two-way communication process by translating messages not only into the recipient's language but also back into the sender's language. This bidirectional translation feature enhances understanding and engagement between users speaking different languages.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Private Group Sessions",
    description:
      "Take global communication to new heights with the Group Chat Translation enhancement. This feature empowers users in private groups to break language barriers by seamlessly translating group conversations in real-time.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "End to End Encryption",
    description:
      "Communicate with other, without fear of having any data leaks. Your messages are end to end encrypted so no one can read it even if they got leaked. Google's database is highly secure so no one can ever break into your messages.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Easy Payments",
    description:
      "Exprience easy and effortless payments through our stripe payment gateway. Users can manage their free and pro membership from manage section of their profile. Users can cancel their PRO plan at anytime they want. Cancellation will take place only after end of current billing period.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://plus.unsplash.com/premium_photo-1682104376313-ad77c73ba131?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="">
       <p className='text-2xl mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'>Our Features</p>
      <StickyScroll content={content} />
    </div>
  );
}
