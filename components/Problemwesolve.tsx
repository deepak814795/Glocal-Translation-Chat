
"use client"
import * as React from 'react'
import Test from '@/components/Test'
import Image from "next/image"
import imagethree from "@/images/customchatimage/imagethree.png"

const Problemwesolve = () => {

  const words = [
    {
      text: "Glocal's",
    },
    {
      text: "Solution",
    },
    {
      text: "to",
    },
    {
      text: "Worldwide",
    },
    {
      text: "Connection",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return(
    <div className=''>

      <div className="flex flex-col items-center justify-center h-[2rem] pb-[-2rem] justify-center items-center">
            {/* <TypewriterEffectSmooth words={words} /> */}
      </div>
      <div className='hidden lg:block'>
        <Test/>
      </div>
      


      <section className="bg-white dark:bg-gray-900 block lg:hidden">
            
            <div className="container px-6 py-10 mx-auto">
                
               
                

            <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                <div>
                    <Image className="relative z-10 object-cover w-full rounded-md h-96" src={imagethree.src} alt="" width={1000} height={1000}/>
                    <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                       Language Barrier Elimination
                    </a>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    In a world where global communication is essential, our app tackles a significant challenge that is the language barrier. Moving to a new place or country can be daunting, especially when faced with unfamiliar local languages. Our app provides a transformative solution with its real-time translation feature and enabling seamless communication.The unique aspect of our app lies in its two-way translation – ensuring that whatever is said in one language is instantly translated back to the user&apos;s preferred language. 
                    </p>
                    {/* <p className="mt-3 text-sm text-blue-500">21 October 2019</p> */}
                    </div>
                </div>
                <div>
                    <Image className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={1000} height={1000}/>
                    <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                       Global Accessibility to Information
                    </a>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Currently, there is no other chatting application that effectively addresses this language accessibility challenge. With 
                    our app users can now engage in conversations, access content, and participate in discussions regardless of the language in which they are originally presented. The two-way translation ensures that information shared in any language is accessible to a broader audience, fostering inclusivity and enhancing global communication.
                    </p>
                    {/* <p className="mt-3 text-sm text-blue-500">20 October 2019</p> */}
                    </div>
                </div>

                
            </div>
          </div>
        </section>
       
    </div>

 )
}

export default Problemwesolve








// working

// return(
//   <div className='container px-6 py-10 mx-auto'>
//     <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Solutions Provided By Our App</h1>
//      <div className="mt-2">
//        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
//        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
//        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
//      </div>

//      <Carousel className="w-full max-w-screen-xl">
//      <CarouselContent className="w-full">
//    {carouselData.map((item, index) => (
//      <CarouselItem key={index}>
//        <div className="p-8 flex flex-col items-center space-y-8 sm:flex-row sm:items-center sm:space-x-8 sm:space-y-0">
//          {index === 0 ? (
//            <Image
//              src={phones.src}
//              alt={`Image ${index + 1}`}
//              width={400}
//              height={400}
//              className="rounded-md sm:w-1/2"
//            />
//          ) : (
//            <Image
//              src={item.image}
//              alt={`Image ${index + 1}`}
//              width={500}
//              height={500}
//              className="rounded-xl sm:w-1/2"
//            />
//          )}
//          <div className="flex flex-col items-start w-full">
//            <h1 className="text-2xl font-semibold capitalize lg:text-3xl mt-[-10px] dark:text-white">
//              <span className="dark:text-gray-350">{item.text.split(' ').slice(0, 2).join(' ')}</span>{' '}
//              <span className="text-blue-500">{item.text.split(' ').slice(2).join(' ')}</span>
//            </h1>
//            <br />
//            <p className={`text-base text-gray-600 dark:text-gray-300 text-md ${index === 0 ? 'text-blue-500' : ''}`}>
//              {index === 0 ? (
//                <span className='text-gray-500 dark:text-gray-300'>
//                  {/* Your content */}
//                  There are over 7,000 languages spoken today but despite the diversity of languages, communication barriers continue to limit our ability to connect and understand each other.This is especially true in a globalized world where people are constantly travelling and connecting with others from different parts of the world.In fact, language barriers are often cited as a major hindrance to international trade and diplomacy. <br/> <br/><span className='text-blue-500 font-bold'>Problems like this gave birth to GLOCAL - A translation and also a chat app.</span><br/> <br/>Glocal is a translation app that helps you translate your native language into any other language in the world with relative ease.It also helps to communicate with anyone, anywhere in the world with a different language. When you receive a message in any language, it automatically translates to your chosen language. Similarly, when you send a message in any language to another person, it is converted to their preferred language. This two-way translation not only ensures seamless conversation but also eliminates the need for a common medium language.
//                </span>
//              ) : (
//                item.para
//              )}
//            </p>
//          </div>
//        </div>
//      </CarouselItem>
//    ))}
//  </CarouselContent>
//  <CarouselPrevious className='text-blue-500 dark:text-gray-200'/>
//  <CarouselNext className='text-blue-500 dark:text-gray-200'/>
//      </Carousel>
//   </div>

// )
// }

// export default Problemwesolve