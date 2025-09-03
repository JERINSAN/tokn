import '../Assets/css/FeatureStyle.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const Feature = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
    return(<>

        <div className='feature-wrap shadow' data-aos="fade-up"> 

            <div className='feature-wrap-part-1'>
                <div style={{position:"relative"}} className='column-3 feature-wrap-inner'>
                <div className='feature-1 feature'>
                    <div className='feature-inner'><img src='Feature/seamless_secure.png' alt='Seamless Secure' className='feature-logo'/></div>
                    <span className='feature-title'>Seamless & Secure</span>
                    <p className='feature-content mt-3 px-5'>Digital tips made simple - zero cash, zero hassle, instant, safe, and transparent.</p>
                </div> </div>

                <div style={{position:"relative"}} className='column-3 feature-wrap-inner'>
                <div className='feature-2 feature'>
                    <div className='feature-inner'><img src='Feature/universal_inclusive.png' alt='Universal Inclusive' className='feature-logo'/></div>
                    <span className='feature-title mt-2'>Universal & Inclusive</span>
                    <p className='feature-content mt-3 px-5'>From servers to stylists, valets to creators - Tokn empowers every profession.</p>
                </div>
                </div>

                <div style={{position:"relative"}} className='column-3 feature-wrap-inner'>
                <div className='feature-3 feature'>
                     <div className='feature-inner'><img src='Feature/smart_rewards.png' alt='Smart Rewards' className='feature-logo'/></div>
                    <span className='feature-title mt-2'>Smart Rewards</span>
                    <p className='feature-content mt-3 px-5'>Every tip unlocks personalized benefits powered by AI.</p>
                </div>
                </div>

                <div style={{position:"relative"}} className='column-2 feature-wrap-inner'>
                <div className='feature-4 feature'>
                    <div className='feature-inner'><img src='Feature/community_impact.png' alt='Community Impact' className='feature-logo'/></div>
                    <span className='feature-title mt-2'>Community Impact</span>
                    <p className='feature-content mt-3 px-5'>Every Tokn goes beyond a tip - <br/>it builds recognition and <br/>stronger communities.</p>
                </div>
                </div>

                <div style={{position:"relative"}} className='column-2 feature-wrap-inner'> 
                <div className='feature-5 feature'>
                    
                    <div className='feature-inner'><img src='Feature/effortless_appreciation.png' alt='Effortless Appreciation' className='feature-logo'/></div>
                    <span className='feature-title mt-2'>Effortless Appreciation</span>
                    <p className='feature-content mt-3 px-5'>Gratitude made easy - just one simple</p>
                </div> 
                </div>

            </div>

        </div>

    </>);
}

export default Feature;