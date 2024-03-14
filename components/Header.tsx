
import React, { CSSProperties }  from 'react'
import Logo from "./Logo"
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'
import { authOptions } from '@/auth'
import { getServerSession } from 'next-auth'
import { MessageSquareIcon } from 'lucide-react'
import Link from "next/link"
import CreateChatButton from './CreateChatButton'
import UpgradeBanner from './UpgradeBanner'
import LanguageSelect from './LanguageSelect'
import { useState, useEffect } from 'react'
import { NavigationMenu } from './ui/navigation-menu'
import Navigation from '@/components/Navigation'
import Dropdownmenu from '@/components/Dropdownmenu'


const Header = async () => {


  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

 
  const session=await getServerSession(authOptions);
  //console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
        <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white
        dark:bg-black max-w-7xl mx-auto">


            {/* <Logo /> */}

            <div className="mr-auto">
              <Logo />
            </div>



            <div className='flex-1 flex items-center justify-end space-x-4'>
                {/* language select*/}
                <LanguageSelect />

              {/* <Link href="/">
                 <button className="font-semibold  hover:bg-gray-100 hover transition-all duration-300 ease-in-out  border-gray-200 p-2 rounded-md dark:hover:bg-gray-800 text-sm">
                   Home
                 </button> 
              </Link> */}

               {/* <Dropdownmenu /> */}

                <div className=''>
                  <Navigation />
                </div>
                



                {/* <Link href="/system-design">
                 <button className="font-semibold  hover:bg-gray-100 hover transition-all duration-300 ease-in-out  border-gray-200 p-2 rounded-md dark:hover:bg-gray-800 text-sm hidden lg:block">
                   System Design
                 </button> 
                </Link> */}

                 {session ? (

                  <>
                      <Link href={'/chat'} prefetch={false}>
                          <MessageSquareIcon className='text black dark:text-white'/>
                      </Link>
                      <CreateChatButton/>
                  </>

                 ) : (
                  <Link href="/pricing"><span className='font-semibold text-sm'>Pricing</span></Link>
                  
                 
                 )}

                 <DarkModeToggle />
                 <UserButton session={session}/>

                 {/* user button*/}
            </div>
        </nav>
         {/* upgrade banner*/}
         <UpgradeBanner/>
    </header>
  )
}

export default Header























// working code 


// import React, { CSSProperties }  from 'react'
// import Logo from "./Logo"
// import DarkModeToggle from './DarkModeToggle'
// import UserButton from './UserButton'
// import { authOptions } from '@/auth'
// import { getServerSession } from 'next-auth'
// import { MessageSquareIcon } from 'lucide-react'
// import Link from "next/link"
// import CreateChatButton from './CreateChatButton'
// import UpgradeBanner from './UpgradeBanner'
// import LanguageSelect from './LanguageSelect'
// import { useState } from 'react'
// import { NavigationMenu } from './ui/navigation-menu'
// import Navigation from '@/components/Navigation'
// import Dropdownmenu from '@/components/Dropdownmenu'


// const Header = async () => {
 
//   const session=await getServerSession(authOptions);
//   //console.log(session);

//   return (
//     <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
//         <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white
//         dark:bg-gray-900 max-w-7xl mx-auto">


//             {/* <Logo /> */}

//             <div className="mr-auto">
//               <Logo />
//             </div>



//             <div className='flex-1 flex items-center justify-end space-x-4'>
//                 {/* language select*/}
//                 <LanguageSelect />

//               <Link href="/">
//                  <button className="font-semibold  hover:bg-gray-100 hover transition-all duration-300 ease-in-out  border-gray-200 p-2 rounded-md dark:hover:bg-gray-800 text-sm">
//                    Home
//                  </button> 
//               </Link>

//                {/* <Dropdownmenu /> */}


//                 <Navigation />

//                 <Link href="/system-design">
//                  <button className="font-semibold  hover:bg-gray-100 hover transition-all duration-300 ease-in-out  border-gray-200 p-2 rounded-md dark:hover:bg-gray-800 text-sm">
//                    System Design
//                  </button> 
//               </Link>

//                  {session ? (

//                   <>
//                       <Link href={'/chat'} prefetch={false}>
//                           <MessageSquareIcon className='text black dark:text-white'/>
//                       </Link>
//                       <CreateChatButton/>
//                   </>

//                  ) : (
//                   <Link href="/pricing">Pricing</Link>
                  
                 
//                  )}

//                  <DarkModeToggle />
//                  <UserButton session={session}/>

//                  {/* user button*/}
//             </div>
//         </nav>
//          {/* upgrade banner*/}
//          <UpgradeBanner/>
//     </header>
//   )
// }

// export default Header