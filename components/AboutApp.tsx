import React from 'react'
import aboutimage from '../images/customchatimage/Screenshot (922).png'
import Image from 'next/image'
const AboutApp = () => {
    return (
    <div className="container mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">About Application</h1>
    <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"/>
        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
    </div>

    <div className="mt-8 flex items-center justify-center">
        <Image
            className="w-full max-w-[80%] h-auto rounded-full rounded-md object-cover"
            src={aboutimage.src}
            alt=""
            width={3000} // Set the width as needed
            height={800} // Set the height as needed
        />
    </div>
    </div> 
   );
}

export default AboutApp