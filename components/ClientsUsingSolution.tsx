"use client";

import React, { useEffect, useState } from "react";
import  InfiniteMovingCards  from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="hidden lg:block">

        <div className="mt-40 mx-[31rem]">
        <h3 className="max-w-2xl mx-auto text-5xl font-semibold tracking-tight text-gray-800 xl:text-5xl dark:text-white">
        Our Clients{" "}
          <span className="text-blue-500">& Solutions</span>
          </h3>
        </div>


        <div className="h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-gray-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden  pt-[10rem]">
        <InfiniteMovingCards
            
            items={testimonials}
            direction="right"
            speed="normal"
        />
        </div>

        <div className="h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-gray-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pb-[-30rem] ">
        <InfiniteMovingCards
            
            items={testimonials}
            direction="left"
            speed="normal"
        />
        </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ZUSTA",
    name: "",
    title: "",
  },
  {
    quote:
      "REGEX",
    name: "",
    title: "",
  },
  {
    quote:
      "QUACK",
    name: "",
    title: "",
  },
  {
    quote:
      "DRIBBLE",
    name: "",
    title: "",
  },
  {
    quote:
      "GLOCAL",
    name: "",
    title: "",
  },
  {
    quote:
      "HYPER-V",
    name: "",
    title: "",
  },
  {
    quote:
      "XOLO",
    name: "",
    title: "",
  },
  {
    quote:
      "FOSSIA",
    name: "",
    title: "",
  },
  {
    quote:
      "DRUPLE",
    name: "",
    title: "",
  },
  {
    quote:
      "TRILLO",
    name: "",
    title: "",
  },
  {
    quote:
      "RASPY",
    name: "",
    title: "",
  },
  {
    quote:
      "GITLAB",
    name: "",
    title: "",
  },
  {
    quote:
      "SHINE",
    name: "",
    title: "",
  },
  {
    quote:
      "FIGMA",
    name: "",
    title: "",
  },
  {
    quote:
      "CRED",
    name: "",
    title: "",
  },
  {
    quote:
      "VISION",
    name: "",
    title: "",
  },
  {
    quote:
      "POLIFY",
    name: "",
    title: "",
  },
  {
    quote:
      "BETA-N",
    name: "",
    title: "",
  },
];


export default InfiniteMovingCardsDemo