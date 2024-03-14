import { ExternalLink } from "lucide-react";
import Problemwesolve from "@/components/Problemwesolve";
import Link from  "next/link"


const NinthSection = () => {
  return (
    <div className="flex items-center justify-center pb-10 ">
      <div className="md:w-5/6 md:rounded-[80px] dark:bg-[#111019] bg-[#d1d1f7] items-center justify-center flex w-screen">
        <div className="md:py-40 py-20 flex flex-col">
          <div className="flex text-white flex-col justify-center items-center space-y-10">
            <div className="text-4xl md:text-7xl text-center text-black dark:text-blue-300 ">
            Solving the Language Puzzle
            </div>
            <div className="text-xl text-gray-500 md:text-3xl text-center px-10 md:w-1/2 font-light lg:w-3/4">
            Glocal is your go-to translation and chat app, effortlessly translating your messages into any language worldwide. Seamlessly communicate with anyone, anywhere, as messages are automatically converted to both sender and receiver&apos;s preferred languages. Say goodbye to language barriers and hello to seamless conversations.
            </div>

            <div>
              <div
                className="
                        flex
                        text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        px-8
                        py-4
                        bg-[#565add]
                        hover:scale-110
                        hover:shadow-indigo-500
                        transition-all
                        duration-300
                        shadow-md

                        "
              >
                <div className="flex gap-2">
                  <ExternalLink href="" className="text-sm text-white" />
                <Link href="https://github.com/deepak814795/Glocal-Translation-Chat">Learn more</Link>
                </div>
              </div>
            </div>
          </div>


          <Problemwesolve/>

          {/* <video className="
          w-2/3
          mt-20
          rounded-[40px]
          mx-auto
          shadow-indigo-400
            shadow-2xl
          
          "
          autoPlay
          muted
          loop
          >
          <source src = "/videos/hero-1.mp4" type="video/mp4"/>

          </video> */}
        </div>
      </div>
    </div>
  );
};

export default NinthSection;
