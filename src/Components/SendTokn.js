import '../Assets/css/SendToknStyle.css';
import Lottie from "lottie-react";
import SendToknImg from '../Assets/img/SendTokn.png';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const SendTokn = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
return(<>
    <div className='send-tokn-wrap' data-aos="fade-up">
        
        <div className='send-tokn-part-2'>
            <div className='send-tokn-titel'>
                <span className='send-tokn-titel'>
                    Send <span style={{color:"#3B2B98"}}>Tokn </span>
                </span><br/>
                <p className='send-tokn-content'>
                    <span className='send-tokn-titel-sub'>No change? No problem.</span><br/>
                    Cashless tipping made 
                    simple, instant, safe, and rewarding.
                </p>
                <button className='send-tokn-btn shadow'> Send Tokn Now &#10140;</button>
                </div>
        </div>
        <div  className='send-tokn-part-1'> 
            <img src={SendToknImg} alt='SendToknImg'/>
        </div>
    </div>

</>);
}

export default SendTokn;