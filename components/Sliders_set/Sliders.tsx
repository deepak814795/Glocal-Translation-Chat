import SliderOne from "./Slider-one";
import SliderTwo from "./Slider-two";
import SliderThree from "./Slider-three";
const Sliders = () => {
    return ( 
    <div className="py-32">
        <div className="
        text-[#2b1c50]
        px-6
        md:w-3/5
        mx-auto
        text-center
        flex
        justify-center
        items-center
        text-3xl
        md:text-5xl
        font-medium">
          <h1 className="text-blue-950 dark:text-[#d1d1f7] font-mono">Glocal is favored by a widespread Global community of companies </h1>

        </div>

        <div className="pt-20 pb-10">
        <SliderOne />
        <SliderTwo />
        <SliderThree /> 
  
        </div>

      
    </div> );
}
 
export default Sliders;