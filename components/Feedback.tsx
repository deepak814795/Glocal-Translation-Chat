"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import undraw3 from "@/images/logos/undraw-3.svg"
import logoipsum from "@/images/logos/logoipsum-226.svg"

const TenthSection = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    className: "w-full",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="md:pb-20 flex flex-col items-center justify-center pb-32 pt-40 overflow-hidden font-mono">
      <Slider {...settings} className="w-full">

        <>
        <div className=" bg-[#e3f3ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-5  mb-10 h-[31rem]">
            <div>
              <Image
                src={logoipsum.src}
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
            The design is consistent throughout, creating a cohesive and visually pleasing experience. It&apos;s easy to understand and doesn&apos;t leave me guessing.
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="https://img.freepik.com/premium-photo/woman-human-head-illustration_862994-10854.jpg?w=740"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Ritika Semwal</div>
                <div className="text-sm">Tester</div>
              </div>
            </div>
          </div>
        </>

        <>
        <div className=" bg-[#e7e0ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6 h-[31rem]">
            <div>
              <Image
                src={logoipsum.src}
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              Getting things done in the app is straightforward. The design prioritizes functionality, making it easy to use. 
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="https://img.freepik.com/premium-vector/geek-boy-vector-illustration_949611-2891.jpg?w=740"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
              <div className="font-medium">Deepak Kushwaha</div>
              <div className="text-sm">Developer : Glocal</div>
              </div>
            </div>
          </div>
        </>

        <>
        <div className=" bg-[#e3ffef] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6 h-[31rem]">
            <div>
              <Image
                src={logoipsum.src}
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
            The app&apos;s simplicity is its charm. Navigating through features is a breeze, making it enjoyable and stress-free. 
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?w=740&t=st=1706934840~exp=1706935440~hmac=94defde650ab7dacf9df26a2dfbe81ffe89049c7b2c72c409030589894d7967d"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Satvik</div>
                <div className="text-sm">Tester</div>
              </div>
            </div>
          </div>
        </>


        <>
        <div className=" bg-[#ffede3] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6 h-[31rem]">
            <div>
              <Image
                 src={logoipsum.src}
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
            The features are accessible, and each one serves a purpose. I never feel lost or overwhelmed.
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?w=740&t=st=1706866236~exp=1706866836~hmac=67495f41383964298a904405b573baf6cdae9c36d0448e8627b3c6c46045c5af"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Aman Tiwari</div>
                <div className="text-sm">Chief Executive Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
        <div className=" bg-[#fffce3] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6 h-[31rem]">
            <div>
              <Image
                 src={logoipsum.src}
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
            I&apos;ve never experienced any glitches or hiccups. The app is consistently reliable, and I can always count on it to perform smoothly.
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="https://img.freepik.com/premium-photo/woman-character-with-purple-clothes-showing-thumbs-up-using-right-hand-3d-render-illustration_537883-754.jpg?w=740"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Anjali</div>
                <div className="text-sm">Tester</div>
              </div>
            </div>
          </div>
        </>


      </Slider>
    </div>
  );
};

export default TenthSection;
