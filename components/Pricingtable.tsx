import React from 'react'

const Pricingtable = () => {
  return (
    <div className='hidden lg:block pb-40'>
         <>
        {/* component */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <div className="min-h-screen flex justify-center items-center font-mono">
            <div className="">
            <div className="text-center font-semibold">
                <h1 className="text-5xl">
                <span className="text-blue-700 tracking-wide">Flexible </span>
                <span>Plans</span>
                </h1>
                <p className="dark:text-[#d1d1f7] pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                Choose a plan that works best for you and
                <br /> your team.
                </p>
            </div>
            <div className="pt-24 flex flex-row">
                {/* Basic Card */}
                <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Free</h1>
                {/* <p className="pt-2 tracking-wide">
                    <span className="text-gray-400 align-top">₹ </span>
                    <span className="text-3xl font-semibold">0.00</span>
                    <span className="text-gray-400 font-medium">/ monthly</span>
                </p> */}
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                       20 text messages limit per user
                    </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                        2 Participant per group chat
                    </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                        Only Supports 2 languages
                    </span>
                    </p>

                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                        Only 3 groups supported
                    </span>
                    </p>

                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                        48-hr support response time
                    </span>
                    </p>
                    <a href="/pricing" className="">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span className="font-medium">Choose Plan</span>
                        <span className="pl-2 material-icons align-middle text-sm">
                        east
                        </span>
                    </p>
                    </a>
                </div>
                </div>
                {/* StartUp Card */}
                <div className="w-90 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                <h1 className="text-white font-semibold text-2xl">PRO</h1>
                <p className="pt-2 tracking-wide">
                    <span className="text-gray-400 align-top">₹ </span>
                    <span className="text-3xl font-semibold">599.99</span>
                    <span className="text-gray-400 font-medium">/ monthly</span>
                </p>
                <hr className="mt-4 border-1 border-gray-600" />
                <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle text-green-500">done</span>
                    <span className="pl-2 text-white">
                        Unlimited Messages in Chats
                    </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle text-green-500">done</span>
                    <span className="pl-2 text-white">
                       Unlimited Members in Groups
                    </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle text-green-500">done</span>
                    <span className="pl-2 text-white">
                       20+ languages support
                    </span>
                    </p>

                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle text-green-500">done</span>
                    <span className="pl-2 text-white">
                       Unlimited groups supported
                    </span>
                    </p>

                    <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle text-green-500">done</span>
                    <span className="pl-2 text-white">
                       Instant support response
                    </span>
                    </p>
                    <a href="/pricing" className="">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span className="font-medium">Choose Plan</span>
                        <span className="pl-2 material-icons align-middle text-sm">
                        east
                        </span>
                    </p>
                    </a>
                </div>
                <div className="absolute top-4 right-4">
                    <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                    Popular
                    </p>
                </div>
                </div>
                {/* Enterprise Card */}
            
            </div>
            </div>
        </div>
        </>

    </div>
  )
}

export default Pricingtable