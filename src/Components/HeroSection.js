import '../Assets/css/HeroStyle.css';
import hero from '../Assets/animation/hero.gif'
import Lottie from "lottie-react";
import Gradient from '../Assets/animation/Gradient.json';
const HeroSection = () =>{
return(<div className="hero-wrap">
    <div className='hero-part-1'>
        <div className='hero-part-1-inner'>
           <span className='hero-part-1-text-1'>Small Tips<br/> Big Impact</span><br/>
           <span className='hero-part-1-text-2'>Each Tokn builds gratitude,<br/> community, and rewards. </span>
        </div>
    </div>

    <div className='hero-part-2'>
        <div className='hero-part-2-inner'>
            <img src={hero} alt='animation' className='hero-part-2-img'></img>
        </div>
    </div>
    <div className='background-gradient'>
        <Lottie animationData={Gradient} loop={true}   className='gradient'/>
    </div>
</div>);
}


export default HeroSection;