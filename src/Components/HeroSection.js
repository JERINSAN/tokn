import '../Assets/css/HeroStyle.css';
import Lottie from "lottie-react";
import Gradient from '../Assets/animation/Gradient.json';
import hero from '../Assets/animation/hero.json';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const HeroSection = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
return(<div className="hero-wrap" data-aos="fade-up">
    <div className='hero-part-1'>
        <div className='hero-part-1-inner'>
           <span className='hero-part-1-text-1'>Small Tips<br/> Big Impact</span><br/>
           <span className='hero-part-1-text-2'>Each Tokn builds gratitude,<br/> community, and rewards. </span>
        </div>
    </div>

    <div className='hero-part-2'>
        <div className='hero-part-2-inner'>
            {/* <img src={hero} alt='animation' className=''></img> */}
            <Lottie animationData={hero} loop={true}   className='hero-part-2-img'/>
        </div>
    </div>
    <div className='background-gradient'>
        <Lottie animationData={Gradient} loop={true}   className='gradient'/>
    </div>
</div>);
}


export default HeroSection;