import '../Assets/css/HowitsworkStyle_Creators.css';
import Howitswork from'../Assets/videos/tokn.mp4';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';


const HowItsWork = () =>{
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
    return(<>
    <div className="how-its-work-cont row shadow py-5" data-aos="fade-up">
            <div className='col-xl-6 row justify-content-center align-items-center'>
                <div>
                <span className='how-its-work-titel my-5'>
                    How it Works 
                </span><br/>
                <p className='how-its-work-content my-4'>
                    Seamless digital tipping made simple.
                    Tokn enables instant, secure, and transparent tips to service professionals—powered by UPI and QR technology.
                </p>
                </div>
            </div>
            <div className='col-xl-6 row justify-content-center align-items-center'>
                <video  className=' how-its-work-video'
                controls={true}>
                    <source src={Howitswork} type="video/mp4" />
                </video>
            </div>
    </div>
    </>);
}

export default HowItsWork;