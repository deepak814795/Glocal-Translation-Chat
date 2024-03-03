import React from 'react'
import Link from 'next/link'

const Learn = () => {
  return (
    <>
    <iframe src="https://65c77d3cbb96ae6dfb82ff73--unrivaled-malasada-f16542.netlify.app/" width="100%" height="650px"></iframe>
    <div className="inline-flex w-full mt-6 sm:w-auto pl-[43rem]">
          <Link
            href="/tutorials"
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Learn More
          </Link>
    </div>
    </>
  
  )
}

export default Learn