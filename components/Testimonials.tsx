"use client";
// CarouselComponent.tsx
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from 'react';
import Blob from '@/components/Blob'
import Image from 'next/image'

const Testimonials = () => {

    return (

        <Carousel className="w-full max-w-screen-lg mx-auto pt-10">          
          <div>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pt-40">
          Clients Feedback
          </h1>
          <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
          </div>
          </div>
          <CarouselContent>
            
            {/* Add more CarouselItems as needed */}
            <CarouselItem>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                <p className="leading-loose text-white">
                  Getting things done in the app is straightforward. The design prioritizes functionality, making it easy to accomplish  tasks without unnecessary steps. Efficient and practical.
                </p>
                <div className="flex items-center mt-8 -mx-2">
                  <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://img.freepik.com/premium-vector/geek-boy-vector-illustration_949611-2891.jpg?w=740" alt="" width={200} height={200}/>
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Deepak Kushwaha</h1>
                    <span className="text-sm text-blue-200">Creator</span>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                <p className="leading-loose text-white">
                 The design is consistent throughout, creating a cohesive and visually pleasing experience. It&apos;s easy to understand and doesn&apos;t leave me guessing. Everything feels well-organized.
                </p>
                <div className="flex items-center mt-8 -mx-2">
                    <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://img.freepik.com/premium-photo/woman-human-head-illustration_862994-10854.jpg?w=740" alt="" width={200} height={200}
                    />
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Ritika Semwal</h1>
                    <span className="text-sm text-blue-200">Tester</span>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                <p className="leading-loose text-white">
                  The app&apos;s simplicity is its charm. Navigating through features is a breeze, making it enjoyable and stress-free. It&apos;s intuitive and doesn&apos;t overwhelm, which I love.
                </p>
                <div className="flex items-center mt-8 -mx-2">
                  <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?w=740&t=st=1706934840~exp=1706935440~hmac=94defde650ab7dacf9df26a2dfbe81ffe89049c7b2c72c409030589894d7967d" alt="" width={200} height={200}/>
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Satvik</h1>
                    <span className="text-sm text-blue-200">Tester</span>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                <p className="leading-loose text-white">
                 The features are accessible, and each one serves a purpose. I never feel lost or overwhelmed. The app strikes a great balance between offering functionality and keeping it user-friendly.
                </p>
                <div className="flex items-center mt-8 -mx-2">
                  <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?w=740&t=st=1706866236~exp=1706866836~hmac=67495f41383964298a904405b573baf6cdae9c36d0448e8627b3c6c46045c5af" alt="" width={200} height={200}/>
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Aman Tiwari</h1>
                    <span className="text-sm text-blue-200">Manager</span>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                <p className="leading-loose text-white">
                  I&apos;ve never experienced any glitches or hiccups. The app is consistently reliable, and I can always count on it to perform smoothly. It just works!
                </p>
                <div className="flex items-center mt-8 -mx-2">
                  <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://img.freepik.com/premium-photo/woman-character-with-purple-clothes-showing-thumbs-up-using-right-hand-3d-render-illustration_537883-754.jpg?w=740" alt="" width={200} height={200}/>
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Anjali</h1>
                    <span className="text-sm text-blue-200">Tester</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full">
              Previous
            </button>
          </CarouselPrevious>
          <CarouselNext>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full">
              Next
            </button>
          </CarouselNext>
        </Carousel>
    )
};

export default Testimonials;
