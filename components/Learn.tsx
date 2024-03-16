import React from 'react'
import Link from 'next/link'

const Learn = () => {
  return (
    <>
    <iframe src="https://65c77d3cbb96ae6dfb82ff73--unrivaled-malasada-f16542.netlify.app/" width="100%" height="650px"></iframe>
    <div className='flex justify-center items-center'>
    <Link href="/tutorials" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Explore Tutorials
        </span>
    </Link>
      </div>
    </>
  
  )
}

export default Learn