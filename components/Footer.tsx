"use client";

import React from 'react'
import { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Link from 'next/link'

const Footer = () => {
    const svgStyles = {
        fill: '#FFFFFF',
    };

    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubscribe = () => {
      const emailInput = document.getElementById('email') as HTMLInputElement;
  
      if (!emailInput.value.trim()) {
        setError('Email is required');
        setTimeout(() => setError(''), 2000);
        return;
      }
  
      // Your subscribe logic here
  
      // If subscribe is successful, update state
      setTimeout(() =>  setSubscribed(true), 1000);
     
      // Reset error state
      setError('');
  
      // Reset input field
      emailInput.value = '';
    };
  
  

    return (

        <footer className="bg-white dark:bg-black font-mono">
       
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 ">
            <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get update.
            </h1>
            {subscribed ? (
              <p className="text-green-500 dark:text-green-400">Subscribed successfully!</p>
            ) : (
              <>
                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSubscribe}
                    className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                  >
                    Subscribe
                  </button>

                  


                </div>
                {error && <p className="text-red-500">{error}</p>}
              </>
            )}

           </div>

              <div className='block lg:hidden'>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500" onClick={() => window.location.href = '/'}>Home</a>
                  <a href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Docs</a>
                  <Link href="/about-creator" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Creator</Link>
                </div>
              </div>

              <div className='block lg:hidden'>
                <p className="font-semibold text-gray-800 dark:text-white">Resources</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link href="/blogs" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blogs</Link>
                  <a href="/tutorials" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Tutorials</a>
                  <Link href="/tnc" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Terms and Conditions</Link>
                </div>
              </div>

            </div>




            <div className='pt-20 hidden lg:block'>
     <section className="flex flex-col md:flex p-10  md:py-20  md:items-center md:justify-center bg-[#EFF0FF] h-[30rem] rounded-3xl">
                <div className="md:flex md:space-x-28 md:px-0 md:py-20">
                    <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                        <div className="pt-10">PRODUCT</div>
                        <div className="font-light space-y-4 text-sm">

                            <div>
                              <Link href="/">Home</Link>
                            </div>
                            <div>
                              <Link href="about-creator">Creator</Link>
                            </div>
                            <div>
                              <Link href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq">Docs</Link>
                            </div>
                            <div>
                              <Link href="/blogs">Blogs</Link>
                            </div>
                            <div>
                              <Link href="/tutorials">Tutorials</Link>
                            </div>
    
                </div>
                        </div>

                        <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                            <div className="pt-10">USE CASES</div>
                            <div className="font-light space-y-4 text-sm">

                            <div>Company</div>
                            <div>Leadership</div>
                            <div>Diversity</div>
                            <div>Customers</div>
                            <div>Diversity</div>

                            </div>

                        </div>


                        <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                            <div className="pt-10">FOR BUSINESS</div>
                            <div className="font-light space-y-4 text-sm">

                            <div>Project Management</div>
                            <div>Goal Management</div>
                     
                            <div>Increase Productivity</div>
                            <div>Work Management</div>
                            <div>Project Planning</div>

                            </div>

                        </div>

                        <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                            <div className="pt-10">DOWNLOADS</div>
                            <div className="font-light space-y-4 text-sm">

                            <div>Help</div>
                            <div>Forum</div>
                     
                            <div>Support</div>
                            <div>Work Management</div>
                            <div>Project Planning</div>

                            </div>

                        </div>

                        <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                            <div className="pt-10">RESOURCES</div>
                            <div className="font-light space-y-4 text-sm">

                            <div>Help</div>
                            <div>Forum</div>
                     
                            <div>Support</div>
                            <div>Work Management</div>
                            <div>Project Planning</div>

                            </div>

                        </div>

                        <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                            <div className="pt-10">Company</div>
                            <div className="font-light space-y-4 text-sm">

                            <div>Help</div>
                            <div>Forum</div>
                     
                            <div>Support</div>
                            <div>Work Management</div>
                            <div>Project Planning</div>

                            </div>

                        </div>



                

                </div>

        </section>
    </div>




            <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

            
            <div className="flex items-center justify-between">
             
              <div className="flex -mx-2">
                <a href="https://twitter.com/Deepak6473" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                </svg>
                </a>
                <a href="https://www.linkedin.com/in/deepakkushwaha-893464152/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                      <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                      <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                    </svg>
                </a>
                <a href="https://github.com/deepak814795" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                    </path>
                  </svg>
                </a>
              </div>

              <h1 className='pr-[1rem]'>© Copyright 2024 All Rights Reserved, Deepak Kushwaha</h1>
            </div>
           
          </div>

          <div>
            <ScrollToTop smooth color="#007bff" 
            style={{
              //backgroundColor: '#6f00ff',
              //color: '#fff',
              borderRadius: '50%',
              width: '30px', // Adjust the width for a smaller button
              height: '30px', // Adjust the height for a smaller button
              textAlign: 'center',
              lineHeight: '10px', // Adjust the line height to center the text vertically
              fontSize: '5px', // Adjust the font size for the text
              cursor: 'pointer',
              fontWeight: 'bolder',

              left: '20px',
            }}
            
            />
          </div>
        </footer>
      );
}

export default Footer
