import React from 'react'
import { Zap, Link, PlayCircle } from "lucide-react";
import gif from "@/images/customchatimage/gif2.gif"

import Image from "next/image"

const Allfeatures = () => {
  return (
    <div className="items-center justify-center flex md:py-16">
    <div className="md:w-5/6 md:rounded-[80px] bg-black py-20 px-10 pt-80 lg:w-screen">
        <div className="flex flex-col text-center">
            <div>
                <div className="pt-16 pb-8 text-4xl md:text-7xl text-blue-300">
                    More connections with Glocal
                </div>
                <div className="text-xl font-light mt-4 leading-8 md:text-3xl text-[#d1d1f7] md:text-center mx-auto md:w-3/4">
                Glocal is ideal for communicating every important message. Teams use Glocal 
                to share ideas, create stronger relationships, and lead creative discussions.

                </div>
            </div>

           
            <video
            className="
            mt-20
            md:w-2/3
            rounded-[40px]
            mx-auto
            shadow-indigo-400
            shadow-2xl"
            autoPlay
            muted
            loop
          >
            <source src="/videos/pexels.mp4" type="video/mp4" />
          </video>
           

        </div>

        <div className="md:flex items-center justify-center text-white md:space-x-20 pt-20 space-y-6">
            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">
                    Two-Way Translation
                    </div>
                </div>
                <div className="text-[#d1d1f7] text-sm font-light leading-6">
                Ensure a two-way communication process by translating messages not only into the recipient&apos;s language but also back into the sender&apos;s language. This bidirectional translation feature enhances understanding  between users speaking different languages.
                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">
                    Private Groups
                    </div>
                </div>
                <div className="text-[#d1d1f7] text-sm font-light leading-6">
                Take global communication to new heights with the Group Chat Translation enhancement. This feature empowers users in private groups to break language barriers by seamlessly translating group conversations in real-time.
                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">
                    End to End Encryption
                    </div>
                </div>
                <div className="text-[#d1d1f7] text-sm font-light leading-6">
                Communicate with other, without fear of having any data leaks. Your messages are end to end encrypted so no one can read it even if they got leaked. Google&apos;s database is highly secure so no one can ever break into your messages.
                </div>
            </div>
        </div>

        <div className="md:flex items-center justify-center text-white md:space-x-20 pt-10 space-y-6">
            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">
                    Easy Payments
                    </div>
                </div>
                <div className="text-[#d1d1f7] text-sm font-light leading-6">
                Exprience easy and effortless payments through our stripe payment gateway. <br/> Users can manage their free and pro membership from manage section of their profile. Users can cancel their PRO plan at anytime they want. Cancellation will take place only after end of current billing period.
                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">
                    Free & PRO Plans
                    </div>
                </div>
                <div className="text-[#d1d1f7] text-sm font-light leading-6">
                To enhance user experience, we provide a fast, efficient, and secure method using the Stripe payment gateway. Users can purchase their Pro membership plans by completing the payment process through Stripe.
                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">
                    Clean Design
                    </div>
                </div>
                <div className="text-[#d1d1f7] text-sm font-light leading-6">
                The user-friendly and responsive design enhances the overall experience. The intuitive interface, responsive design, and effortless navigation cater to users across various devices.
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default Allfeatures