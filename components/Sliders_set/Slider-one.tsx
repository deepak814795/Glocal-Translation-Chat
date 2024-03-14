
'use client'

import Slider from 'react-infinite-logo-slider';
import logoipsum from "../../images/logos/logoipsum-211.svg"
import logoipsum2 from "../../images/logos/logoipsum-223.svg"
import logoipsum3 from "../../images/logos/logoipsum-224.svg"
import logoipsum4 from "../../images/logos/logoipsum-225.svg"
import logoipsum5 from "../../images/logos/logoipsum-226.svg"
import logoipsum6 from "../../images/logos/logoipsum-273.svg"
import logoipsum7 from "../../images/logos/logoipsum-274.svg"
import logoipsum8 from "../../images/logos/logoipsum-292.svg"
import logoipsum9 from "../../images/logos/logoipsum-293.svg"
import logoipsum10 from "../../images/logos/logoipsum-294.svg"
import logoipsum11 from "../../images/logos/logoipsum-329.svg"
import logoipsum12 from "../../images/logos/logoipsum-327.svg"
import logoipsum13 from "../../images/logos/logoipsum-325.svg"
import logoipsum14 from "../../images/logos/logoipsum-323.svg"
import logoipsum15 from "../../images/logos/logoipsum-317.svg"

import Image from 'next/image';

const SliderOne = () => {
    return ( <div>
        <Slider
        width='200px'
        duration={60}
        >
      <Slider.Slide>
        <Image src={logoipsum.src} alt="logo" width={100} height={100}  className=" md:w-20 h-20 text-gray-500"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum2.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum3.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum4.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum5.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum6.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum7.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum8.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum9.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum10.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum11.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum12.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum13.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum14.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum15.src} alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
       
        </Slider>
    </div> );
}
 
export default SliderOne;