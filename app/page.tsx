import Link from "next/link";
import Image from "next/image";
import DemoGif from "@/images/landingPage/demo.gif"
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import DocumentationPage from './contact/page'
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
import Globehero from "@/components/Globehero"
import Appfaqs from "@/app/faqs/page"






export default function Home() {
  
  //const session=await getServerSession(authOptions)
  //console.log(session);
  const particleColor = 'dark:bg-white dark:bg-opacity-75 bg-black bg-opacity-75'; 
  return (
    
    <main className="">

      

      {/* <Hero/> */}
      
      <div className="relative isolate pt-14 dark:bg-black">
          <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true">
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
                -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
                opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 180%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>


          {/* commenting it and moving it in a component herosection, this hero section has been imported in globe_hero section
          that i will render as my hero section */}

          {/* <div className="py-12 sm:py-20 lg:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-4xl tracking-tight sm:text-6xl">
                 <span className="font-bold">Introducing  Glocal  AI</span> <br/> <span className="text-3xl">Here Every Language Finds It&apos;s Voice</span>
                </span>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Lost in Translation? Find Your Voice with Us!{" "}
                  <span className="text-indigo-600 dark:text-indigo-500">
                    Let AI handle the Translation.
                  </span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                

                  <div className="h-[10rem]  flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <div className="w-full absolute inset-0 h-screen">
                      <Sparkles
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#EBEEF1"
                      />

                    </div>
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
          </div> */}

          {/* commenting it and moving it in a component herosection, this hero section has been imported in globe_hero section
              that i will render as my hero section */}



          {/* Rendering globehero that contain globe + hero section */}

          <Globehero/>

          <div className="
        hidden lg:block
        pt-60
        text-[#2b1c50]
        px-6
        md:w-50%
        mx-auto
        text-center
        flex
        justify-center
        items-center
        text-7xl
        md:text-7xl
        font-semibold">
          <h1 className="text-black dark:text-[#d1d1f7] font-mono">Explore the Possibilities of AI <span className="text-blue-700 dark:text-[#d1d1f7] font-mono">Chatting with Glocal</span> </h1>

        </div>

          <div className="hidden lg:block">
                <Hero />
          </div>

          <Newproblemsolve/>
          <Features />
          <Allfeatures/>
          <Sliders/>
          <Pricingtable/>
          <Learn />
          <Ourcomponents />
          

          <div className="block lg:hidden">
           <Faq/>
          </div>

          <div className="hidden lg:block">
           <Appfaqs/>
          </div>
          
          <Feedback/>
          {/* <Blob top="97%" left="60%" width="40" height="33rem" clipPath="..." gradientFrom="#ff80b5" gradientTo="#9089fc" opacity={30}/>  */}
          <Footer />


      
          
          
          
      </div>
    </main>
  );
}
