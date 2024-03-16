import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
interface IconProps {
    className?: string;
}
export default function Component() {
    return (
        <main className="dark:bg-black font-mono dark:text-[#d1d1f7] rounded-4xl">
          <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white">
            <Image
              alt="Background"
              className="absolute inset-0 object-cover w-full h-full rounded-6xl"
              height="1080"
              src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width="1920"
            />
            <div className="container px-4 md:px-6 relative rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center rounded-3xl">
                <div className="flex flex-col items-center space-y-4 text-center rounded-3xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text">
                      Our Mission & Vision
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg md:text-xl dark:text-gray-200">
                      To break down global language barriers and foster seamless communication for individuals worldwide   
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-indigo-500 px-3 py-1 text-sm text-white">
                      <GoalIcon className="h-6 w-6" />
                      Our Mission
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Breaking Barriers, <br/> Connecting Worlds</h2>
                    <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Connect effortlessly with people around the globe. Our app revolutionizes global communication by enabling real-time, two-way translation. Say goodbye to language barriers and embrace a world where conversations flow naturally, irrespective of linguistic differences.
                    </p>
                  </div>
                </div>
                <Image
                  alt="Mission"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="550"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-slate-900">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <Image
                  alt="Vision"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-indigo-500 px-3 py-1 text-sm text-white">
                      <ViewIcon className="h-6 w-6" />
                      Our Vision
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Easy Global Collaboration</h2>
                    <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Breaking Down Communication Barriers in Teams
                    Whether you&apos;re collaborating with international colleagues or managing a global team, our app makes communication seamless. Share ideas, discuss projects, and connect with team members worldwide without the hindrance of language differences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-indigo-500 px-3 py-1 text-sm text-white">
                      <GoalIcon className="h-6 w-6" />
                      Our Mission
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">A Better World</h2>
                    <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Striving for a better world where language is no longer a barrier. We envision a future where our chat app promotes understanding, unity, and collaboration across diverse cultures, contributing to a more harmonious and interconnected global community.
                    </p>
                  </div>
                </div>
                <Image
                  alt="Mission"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="https://images.unsplash.com/photo-1588406320565-9fa6d9901d1d?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="550"
                />
              </div>
            </div>
          </section>
          <Footer />
        </main>
      )
  }
  
  function GoalIcon(props : IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 13V2l8 4-8 4" />
        <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
        <path d="M8 10a5 5 0 1 0 8.9 2.02" />
      </svg>
    )
  }
  
  
  function ViewIcon(props : IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
      </svg>
    )
  }
  