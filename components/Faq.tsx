"use client"

import React from 'react'
import Link from "next/link"

const Faq = () => {
  return (
    <div>
        <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 dark:bg-black font-mono dark:text-[#d1d1f7]">
  <div className="mx-auto px-5 dark:text-[#d1d1f7]">
    <div className="flex flex-col items-center dark:text-[#d1d1f7]">
      <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl ">
        FAQs
      </h2>
      <p className="mt-3 text-lg text-neutral-500 md:text-xl dark:text-blue-500">
        Frequenty asked questions
      </p>
    </div>
    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-white  dark:text-[#d1d1f7]">
            <span> How does the billing work?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-300">
            Glocal offers a variety of billing options, including monthly
            and annual subscription plans, as well as pay-as-you-go pricing for
            certain services. Payment is typically made through a debit card or
            other secure online payment method.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-white  dark:text-[#d1d1f7]">
            <span> Is this app secure for personal use ?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-300">
          Yes, the chat app prioritizes user privacy and employs robust security measures to ensure a secure environment for personal communication.
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-white  dark:text-[#d1d1f7]">
            <span> How do I cancel my subscription?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-300">
            To cancel your subscription, you can log in to your account and
            navigate to the subscription management from top right corner. From there, you will be redirected to your billing page and from there you should be able to cancel your subscription and stop future billing.
          </p>
        </details>
      </div>
     

      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-white  dark:text-[#d1d1f7]">
            <span> How many languages are supported?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-300">
            Supported languages are different for both free and pro members. For more information
            go to <Link href="/pricing"><span className='text-blue-500'>pricing page</span></Link>
          </p>
        </details>
      </div>

      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium dark:text-white  dark:text-[#d1d1f7]">
            <span> Did not find what you are looking for ?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-300">

          <Link href="/contact"><span className='text-blue-500'>Contact-Us</span></Link> {"    "}
          <Link href="/faqs">Or <span className='text-blue-500'>Read More Faqs</span></Link>
           
          </p>
        </details>
      </div>



    </div>
  </div>
</div>

    </div>
  )
}

export default Faq