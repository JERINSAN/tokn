import '../Assets/css/MerchantStyle.css';
import Lottie from "lottie-react";
import MerchantAnimation from '../Assets/animation/Merchant.json';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const Merchant = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
return(<>
    <div className='merchant-wrap' data-aos="fade-up">
        <div  className='merchant-part-1'> 
            <Lottie animationData={MerchantAnimation} loop={true}  style={{height:"395px"}}/>
        </div>
        <div className='merchant-part-2'>
            <div className='merchant-titel'>
                <span className='merchant-titel'>
                    Merchant 
                </span><br/>
                <p className='merchant-content'>
                    Unlock the power of appreciation at your business.
With Tokn, enable your customers to tip staff digitally through QR codes—instantly, securely, and with zero operational hassle.
Track team-wise tips, boost morale, and turn every great service moment into a reward opportunity.
                </p>
                <button className='merchant-btn shadow'> Partner with us &#10140;</button>
                </div>
        </div>
    </div>

</>);
}

export default Merchant;