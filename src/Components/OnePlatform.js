import '../Assets/css/OnePlatformStyle.css';
import { useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const  OnePlatform = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
    const [key, setKey] = useState(1);
    return(<>
    <div className='oneplatform-heading' data-aos="fade-up">One Platform. Endless Impact.</div>
    <div className='oneplatform-description' data-aos="fade-up">Appreciate efforts .  Grow community and unlock rewards that count - With a simple tap</div>
    <div className='oneplatform-wrap' data-aos="fade-up">
        <div className='oneplatform-part-1'>
            <ul className='oneplatform-list'>
                <li onClick={() => setKey(1)} className={`${key==1?'active':''}`}>Tip {`${key==1?'→':''}`}</li>
                <li onClick={() => setKey(2)} className={`${key==2?'active':''}`}>Rewards & Offers {`${key==2?'→':''}`}</li>
                <li onClick={() => setKey(3)} className={`${key==3?'active':''}`}>Merchant {`${key==3?'→':''}`}</li>
                <li onClick={() => setKey(4)} className={`${key==4?'active':''}`}>Tokn Points {`${key==4?'→':''}`}</li>
            </ul>
        </div>
        <div className='oneplatform-part-2'>
            <div className='oneplatform-preview'>
                <div className='oneplatform-preview-outer'>
                    <div className={`oneplatform-preview-inner-${key}`} >
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    </>);
}

export default OnePlatform;