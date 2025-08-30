import '../Assets/css/OnePlatformStyle.css';
import { useState } from 'react';
const  OnePlatform = () =>{
    const [key, setKey] = useState(1);
    return(<>
    <div className='oneplatform-heading'>One Platform. Endless Impact.</div>
    <div className='oneplatform-description'>Appreciate efforts .  Grow community and unlock rewards that count - With a simple tap</div>
    <div className='oneplatform-wrap'>
        <div className='oneplatform-part-1'>
            <ul className='oneplatform-list'>
                <li onClick={() => setKey(1)}>Tip {`${key==1?'→':''}`}</li>
                <li onClick={() => setKey(2)}>Rewards & Offers {`${key==2?'→':''}`}</li>
                <li onClick={() => setKey(3)}>Merchant {`${key==3?'→':''}`}</li>
                <li onClick={() => setKey(4)}>Tokn Points {`${key==4?'→':''}`}</li>
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