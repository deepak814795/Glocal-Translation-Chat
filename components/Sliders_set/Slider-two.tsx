'use client'

import Slider from 'react-infinite-logo-slider';

import Image from 'next/image';
import logoipsum from "../../images/logos/logoipsum-222.svg"
import logoipsum2 from "../../images/logos/logoipsum-243.svg"
import logoipsum3 from "../../images/logos/logoipsum-258.svg"
import logoipsum4 from "../../images/logos/logoipsum-262.svg"
import logoipsum5 from "../../images/logos/logoipsum-264.svg"
import logoipsum6 from "../../images/logos/logoipsum-285.svg"
import logoipsum7 from "../../images/logos/logoipsum-289.svg"
import logoipsum8 from "../../images/logos/logoipsum-222.svg"
import logoipsum9 from "../../images/logos/logoipsum-243.svg"
import logoipsum10 from "../../images/logos/logoipsum-258.svg"
import logoipsum11 from "../../images/logos/logoipsum-262.svg"
import logoipsum12 from "../../images/logos/logoipsum-264.svg"
import logoipsum13 from "../../images/logos/logoipsum-285.svg"
import logoipsum14 from "../../images/logos/logoipsum-289.svg"
import logoipsum15 from "../../images/logos/logoipsum-317.svg"

const SliderTwo = () => {
    return (
        
        <div>
  <Slider
  width='300px'
  duration={60}
    >
          <Slider.Slide>
        <Image src={logoipsum.src} alt="logo" width={100} height={100}  className="w-56 h-56 text-gray-500"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum2.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
      
        <Slider.Slide>
        <Image src={logoipsum3.src} alt="logo" width={100} height={100}  className="w-36 h-36"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum4.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum5.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum6.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum7.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum8.src} alt="logo" width={100} height={100}  className="w-56 h-56 text-gray-500"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum9.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
      
        <Slider.Slide>
        <Image src={logoipsum10.src} alt="logo" width={100} height={100}  className="w-36 h-36"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum11.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum12.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum13.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src={logoipsum14.src} alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
    </Slider>
    </div> );
}
 
export default SliderTwo;