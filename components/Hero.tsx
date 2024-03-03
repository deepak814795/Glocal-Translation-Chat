"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            
          </>
        }
      />
    </div>
  );
}
export default HeroScrollDemo
export const users = [
  { 
    image: "https://picsum.photos/id/10/300/300",
  },
];
