import React from 'react'
import Link from "next/link";
import Image from "next/image";
import DemoGif from "@/images/landingPage/demo.gif"
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Features from "@/components/Features";
import Ourcomponents from "@/components/Ourcomponents";
import Footer from "@/components/Footer";
import Blob from '@/components/Blob'
import ScrollToTop from "react-scroll-to-top";
import { Button } from "@/components/ui/button"
import Learn from '@/components/Learn'
import Sparkles from "@/components/ui/Sparkles";
import Hero from "@/components/Hero"
import SwipeUpPrompt from "@/components/ui/swipeUpPrompt";
import Faq from "@/components/Faq"
import Pricingtable from "@/components/Pricingtable";
import Sliders from "@/components/Sliders_set/Sliders";
import Feedback from "@/components/Feedback"
import Allfeatures from "@/components/Allfeatures";
import Newproblemsolve from "@/components/Newproblemsolve"
import whitebg from "@/images/landingPage/whitebg.jpg"
import Globeheader from "@/components/Globehero"

const Herosection = () => {
  return (
    <div className="py-12 sm:py-20 lg:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-4xl tracking-tight sm:text-6xl">
                 <span className=" font-bold font-mono">Introducing  Glocal  AI</span> <br/> <span className="dark:text-[#d1d1f7] text-3xl font-mono">Here Every Language Finds It&apos;s Voice</span>
                </span>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-serif">
                Lost in Translation? {" "} {" "} Find Your Voice with Us!{" "}
                  <span className="text-indigo-600 dark:text-indigo-500">
                    Let AI handle the Translation.
                  </span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">

                  <div className='w-screen h-screen absolute inset-0'>
                      <Sparkles
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={40}
                        className="w-full h-full"
                        particleColor="#EBEEF1"
                      />
                  </div>

                 


                  <Button className="relative inline-flex h-12 w-34 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-200 bg-slate-950 px-3 py-1 text-sm font-medium dark:text-black text-white backdrop-blur-3xl">
                    <Link
                    href="/contact"
                  >
                    Talk to Sales
                  </Link>
                    </span>
                  </Button>


                  <Button className="relative inline-flex h-12 w-34 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-200 bg-slate-950 px-3 py-1 text-sm font-medium dark:text-black text-white backdrop-blur-3xl">
                    <Link
                    href="/chat"
                  >
                    Get started
                  </Link>
                    </span>
                  </Button>

                  <Button className="relative inline-flex h-12 w-42 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-200 bg-slate-950 px-3 py-1 text-sm font-medium dark:text-black text-white backdrop-blur-3xl">
                    <Link
                    href="/pricing"
                  >
                    View Pricing
                    <span aria-hidden="true"></span>
                  </Link>
                    </span>
                  </Button>
                 
                </div>
              </div>

              <SwipeUpPrompt/>

            </div>
          </div>
  )
}

export default Herosection