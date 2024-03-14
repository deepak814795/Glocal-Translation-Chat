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
        font-medium
        
        ">
          <h1 className="text-blue-700 dark:text-white">Glocal is favored by a widespread global community of companies </h1>

        </div>

        <div className="pt-20 pb-10">
        <SliderOne />
        <SliderTwo />
        <SliderThree /> 
  
        </div>

      
    </div> );
}
 
export default Sliders;