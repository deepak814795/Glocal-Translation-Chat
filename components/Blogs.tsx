import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
const Blogs = () => {
    return (
      <>
  {/* component */}
  <div className="flex justify-center items-center dark:text-[#d1d1f7] font-mono dark:bg-black">
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
    <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div role="main" className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
          Our Recent <span className='text-blue-500'> NEWS</span>
        </h1>
        <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
        Trending Topics
        </p>
      </div>
      <div className="lg:flex items-stretch md:mt-12 mt-8">
        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div className="sm:w-1/2 relative">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 Jan 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  The Impact of Language in Global Communication
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Breaking Down Barriers
                  </p>
                  <Link
                    href="/blogs/blog1"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="chair"
                width={500}
                height={500}  
              />
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 Feb 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                     Navigating a Multilingual World
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  Tips for Expats and Travel Enthusiasts
                  </p>
                  <Link
                    href="/blogs/blog2"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                src="https://i.ibb.co/3C5HvxC/img-2.png"
                className="w-full rounded-3xl"
                alt="wall design"
                width={500}
                height={500}  
                
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                18 March 2024
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                The Tech Behind the Magic
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                A Deep Dive into Real-Time Translation with Google Cloud AI
                </p>
                <Link
                  href="/blogs/blog3"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1503875154399-95d2b151e3b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
              alt="sitting place"
              className="w-full mt-8 md:mt-6 hidden sm:block rounded-3xl"
              width={500}
              height={500}  
            />
            <Image
              className="w-full mt-4 sm:hidden rounded-3xl"
              src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
              alt="sitting place"
              width={500}
              height={500}  
            />
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div className="relative">
            <div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 March 2024
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                User Spotlight
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                How Glocal Helped Overcome Language Barriers in Real-Life Situations
                </p>
                <Link
                  href="/blogs/blog4"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1515534077531-7c163bfee8e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sitting place"
              className="w-full sm:block hidden rounded-3xl"
              width={500}
              height={500}  
            />
            <Image
              className="w-full sm:hidden rounded-3xl"
              src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
              alt="sitting place"
              width={500}
              height={500}  
            />
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div className="relative w-full">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  24 Feb 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  The Evolution of Communication
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  How Technology Is Shaping Global Connections
                  </p>
                  <Link
                    href="/blogs/blog5"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1587910234573-d6fc84743bc8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="chair"
                width={500}
                height={500}  
              />
            </div>
            <div className="relative w-full sm:mt-0 mt-4">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  Inclusivity Matters
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  Making Your App Accessible to All Users
                  </p>
                  <Link
                    href="/blogs/blog6"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1509515837298-2c67a3933321?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="wall design"
                width={500}
                height={500}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
  <div className="flex justify-center items-center mt-[-130px] dark:text-[#d1d1f7] font-mono dark:bg-black">
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
    <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto dark:bg-black font-mono">
      <div className="lg:flex items-stretch md:mt-12 mt-8 dark:bg-black">
        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div className="sm:w-1/2 relative">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 Jan 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  Database Management
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    How Firebase works!
                  </p>
                  <a
                    href="https://medium.com/firebase-developers/what-is-firebase-the-complete-story-abridged-bcc730c5f2c0"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target="_blank"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1607707972895-7f994d8c2f3b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="chair"
                width={500}
                height={500}  
              />
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 Feb 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                     Language Translation NLP
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                   How language translation works!
                  </p>
                  <a
                    href="https://212digital.medium.com/machine-translation-in-natural-language-processing-a-comprehensive-guide-d29b93a7692e"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target='_blank'

                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://plus.unsplash.com/premium_photo-1682002135678-87b8a2fdde50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                className="w-full rounded-3xl"
                alt="wall design"
                width={500}
                height={500}  
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                18 March 2024
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                Payment Integration
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                Learn about Stripe Payment gateway
                </p>
                <a
                  href="https://medium.com/illumination/how-to-set-up-stripe-eb1132338597"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  target='_blank'
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sitting place"
              className="w-full mt-8 md:mt-6 hidden sm:block rounded-3xl"
              width={500}
              height={500}  
            />
            <Image
              className="w-full mt-4 sm:hidden rounded-3xl"
              src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
              alt="sitting place"
              width={500}
              height={500}  
            />
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div className="relative">
            <div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 March 2024
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                Ensuring Data Security
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                A Closer Look at Glocal&apos; Approach to Privacy
                </p>
                <a
                  href="/blogs/blog4"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  target='_blank'
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1511302300126-d7ffcf23e26a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sitting place"
              className="w-full sm:block hidden rounded-3xl"
              width={500}
              height={500}  
            />
            <Image
              className="w-full sm:hidden rounded-3xl"
              src="https://images.unsplash.com/photo-1503875154399-95d2b151e3b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
              alt="sitting place"
              width={500}
              height={500}  
            />
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div className="relative w-full">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  24 Feb 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  The Evolution of Communication
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  How Technology Is Shaping Global Connections
                  </p>
                  <a
                    href="https://medium.com/@GemmaRubio/the-last-25-years-of-communications-evolution-e6bc487eb4d0"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target='_blank'
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                className="w-full rounded-3xl"
                alt="chair"
                width={500}
                height={500}  
              />
            </div>
            <div className="relative w-full sm:mt-0 mt-4">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  The Future of Multilingual Conversations:
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  Trends and Innovations in Language Technology
                  </p>
                  <a
                    href="https://medium.com/@surushatechnology53/emerging-natural-language-processing-technologies-of-2023-8816718a3cfb"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target='_blank'
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1630450324579-6f30b0b628d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="wall design"
                width={500}
                height={500}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  <div className="flex justify-center items-center mt-[-130px] dark:bg-black dark:text-[#d1d1f7] font-mono">
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
    <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div className="lg:flex items-stretch md:mt-12 mt-8">
        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div className="sm:w-1/2 relative">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  Scrum vs. SAFe: Which Agile framework is right for your team?
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                   
                  </p>
                  <a
                    href="https://www.pluralsight.com/blog/technology"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target="_blank"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1526267888532-69091f908bf0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="chair"
                width={500}
                height={500}  
              />
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 Feb 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                     Language Translation NLP
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                   How language translation works!
                  </p>
                  <a
                    href="https://212digital.medium.com/machine-translation-in-natural-language-processing-a-comprehensive-guide-d29b93a7692e"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target='_blank'

                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://plus.unsplash.com/premium_photo-1682002135678-87b8a2fdde50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                className="w-full rounded-3xl"
                alt="wall design"
                width={500}
                height={500}  
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                18 March 2024
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                What is Apache Kafka 
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                An Introduction
                </p>
                <a
                  href="https://www.pluralsight.com/resources/blog/data/what-is-apache-kafka"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  target='_blank'
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1511294952778-165d813e9eeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sitting place"
              className="w-full mt-8 md:mt-6 hidden sm:block rounded-3xl"
              width={500}
              height={500}  
            />
            <Image
              className="w-full mt-4 sm:hidden"
              src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
              alt="sitting place"
              width={500}
              height={500}  
            />
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div className="relative">
            <div>
              <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 March 2024
              </p>
              <div className="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                What is Apache Kafka? 
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                An introductory guide
                </p>
                <a
                  href="/blogs/blog4"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  target='_blank'
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1549778003-d6c640bf6141?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sitting place"
              className="w-full sm:block hidden rounded-3xl"
              width={500}
              height={500}  
            />
            <Image
              className="w-full sm:hidden rounded-3xl"
              src="https://images.unsplash.com/photo-1503875154399-95d2b151e3b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
              alt="sitting place"
              width={500}
              height={500}  
            />
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div className="relative w-full">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  24 Feb 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  The Evolution of Communication
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  How Technology Is Shaping Global Connections
                  </p>
                  <a
                    href="https://medium.com/@GemmaRubio/the-last-25-years-of-communications-evolution-e6bc487eb4d0"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target='_blank'
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                className="w-full rounded-3xl"
                alt="chair"
                width={500}
                height={500}  
              />
            </div>
            <div className="relative w-full sm:mt-0 mt-4">
              <div>
                <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2024
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                  The Future of Multilingual Conversations:
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                  Trends and Innovations in Language Technology
                  </p>
                  <a
                    href="https://medium.com/@surushatechnology53/emerging-natural-language-processing-technologies-of-2023-8816718a3cfb"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    target='_blank'
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1519580930435-fbfc9e7ecf26?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-3xl"
                alt="wall design"
                width={500}
                height={500}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <Footer />
</>

       
    );
}

export default Blogs