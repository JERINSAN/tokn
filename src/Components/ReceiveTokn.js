import '../Assets/css/SendToknStyle.css';
import ReceiveToknImg from '../Assets/img/ReceiveTokn.png';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const ReceiveTokn = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
return(<>
    <div className='send-tokn-wrap py-4' data-aos="fade-up" style={{backgroundColor:"#D9D9D938"}}>
        
        <div className='send-tokn-part-2'>
            <div className='send-tokn-titel'>
                <span className='send-tokn-titel'>
                    Receive<span style={{color:"#3B2B98"}}>Tokn </span>
                </span><br/>
                <p className='send-tokn-content'>
                    <span className='send-tokn-titel-sub'>Be recognized. Be rewarded</span><br/>
                    Every Tokn is more than a tip -  It is instant cashless appreciation and recognition for your effort
                </p>
                <button className='send-tokn-btn shadow'> Receive Tokn Now  &#10140;</button>
                </div>
        </div>
        <div  className='send-tokn-part-1'> 
            <img src={ReceiveToknImg} alt='ReceiveToknImg' className='ReceiveToknImg'/>
        </div>
    </div>

</>);
}

export default ReceiveTokn;