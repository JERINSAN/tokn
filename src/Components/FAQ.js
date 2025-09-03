import '../Assets/css/FAQStyle.css';
import { useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const FAQ = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether animation should happen only once
        });
      }, []);
    const [key,setKey] = useState(1);
    return(<>
        <div className='faq-wrap' data-aos="fade-up">
            <div className='faq-part-1'>
                Frequently asked questions
            </div>
            <div className='faq-part-2'>
                <div className='faq' style={{height:`${key==1?"200px":'82px'}`}}>
                    <div className='faq-title' >
                        <div className='faq-title-text'> WHO CAN PARTICIPATE? </div>
                        <div className='faq-button-wrap'> <button className='faq-button' onClick={() => setKey(1)}>{key==1?"-":'+'}</button> </div>
                    </div>

                    <div className='faq-content'>
                        <div className='faq-content-text'> Anyone above the age of 18 with a valid mobile number and bank account can
                        use Tokn—whether you're a tipper or a tip receiver. </div>
                    </div>
                </div>

                <div className='faq' style={{height:`${key==2?"200px":'82px'}`}}>
                    <div className='faq-title'>
                        <div className='faq-title-text'> WHY SHOULD PEOPLE SIGN UP FOR TOKN? </div>
                        <div className='faq-button-wrap'> <button className='faq-button' onClick={() => setKey(2)}>{key==2?"-":'+'}</button> </div>
                    </div>

                    <div className='faq-content'>
                        <div className='faq-content-text'> Tokn makes tipping digital, instant, and rewarding. You can tip without needing
cash, earn rewards, and support service professionals transparently. </div>
                    </div>
                </div>

                <div className='faq' style={{height:`${key==3?"200px":'82px'}`}}>
                    <div className='faq-title'>
                        <div className='faq-title-text'> IS TOKN SAFE TO USE? </div>
                        <div className='faq-button-wrap'> <button className='faq-button' onClick={() => setKey(3)}>{key==3?"-":'+'}</button> </div>
                    </div>

                    <div className='faq-content'>
                        <div className='faq-content-text'> Yes. Tokn uses secure payment gateways, encrypted data, and multi-factor
authentication to protect user information and transactions. </div>
                    </div>
                </div>

                <div className='faq' style={{height:`${key==4?"200px":'82px'}`}}>
                    <div className='faq-title'>
                        <div className='faq-title-text'> WHAT MAKES TORN DIFFERENT FROM OTHER QR-CODED
PAYMENT PLATFORMS? </div>
                        <div className='faq-button-wrap'> <button className='faq-button' onClick={() => setKey(4)}>{key==4?"-":'+'}</button> </div>
                    </div>

                    <div className='faq-content'>
                        <div className='faq-content-text'> Unlike generic QR apps, Tokn is built specifically for tipping with added features
like reward coins, transparent receiver profiles, and instant gratification. </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default FAQ;