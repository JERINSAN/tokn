import '../Assets/css/TestimonialStyle.css';
import quotation from '../Assets/img/quotation.png';
import testimonialimg from '../Assets/img/testimonial-img.png'
import { useState } from 'react';
const Testimonial = () =>{
    const [testimonial , setTestimonial] = useState(1);
    const Next = () =>{
        if(testimonial==3){
            setTestimonial(1);
        }
        else{
            setTestimonial(testimonial+1);
        }
    }

    const Previous = () =>{
        if(testimonial==1){
            setTestimonial(3);
        }
        else{
            setTestimonial(testimonial-1);
        }
    }
    return(<>
    <div className='testimonial-warp'>
        
        <div className={testimonial==1?'testimonial-cont':(testimonial==2?'testimonial-cont left':'testimonial-cont right')} style={{
  transform: `${testimonial === 1 
    ? 'translate(0px, 0px)' 
    : testimonial === 2 
      ? 'translate(-600px, 20px)' 
      : 'translate(600px, 20px)'}`
}}>
            <div className='testimonial-part-1'>
                <img src={quotation} alt='Quotation' className='quotation-img'/>
            </div>
            <div className='testimonial-part-2'>
                1"I never thought a simple ‘thank you’ could feel this rewarding. One customer scanned the Tokn QR after I served them their coffee, and in seconds, I received a tip directly in my account. It wasn’t just about the money—it was about feeling valued for my work. Tokn has made every smile and every bit of effort I put in truly appreciated."
                That did a great job!!
            </div>
            <div className='testimonial-part-3'>
                <img src={testimonialimg} className='testimonial-img' alt='Testimonial Image' />
                <div className='testimonial-text'> <span className='testimonial-text-1'> Priya Sharma </span> <br/> <span className='testimonial-text-2'> Waitress at Café </span> </div>
            </div>
        
        </div>

       
        <div className={testimonial==2?'testimonial-cont':(testimonial==3?'testimonial-cont left':'testimonial-cont right')} style={{
  transform: `${testimonial === 2 
    ? 'translate(0px, 0px)' 
    : testimonial === 3 
      ? 'translate(-600px, 20px)' 
      : 'translate(600px, 20px)'}`
}}>
            <div className='testimonial-part-1'>
                <img src={quotation} alt='Quotation' className='quotation-img'/>
            </div>
            <div className='testimonial-part-2'>
                2"I never thought a simple ‘thank you’ could feel this rewarding. One customer scanned the Tokn QR after I served them their coffee, and in seconds, I received a tip directly in my account. It wasn’t just about the money—it was about feeling valued for my work. Tokn has made every smile and every bit of effort I put in truly appreciated."
                That did a great job!!
            </div>
            <div className='testimonial-part-3'>
                <img src={testimonialimg} className='testimonial-img' alt='Testimonial Image' />
                <div className='testimonial-text'> <span className='testimonial-text-1'> Priya Sharma </span> <br/> <span className='testimonial-text-2'> Waitress at Café </span> </div>
            </div>
        </div>
       

        
        <div className={testimonial==3?'testimonial-cont':(testimonial==1?'testimonial-cont left':'testimonial-cont right')} style={{
  transform: `${testimonial === 3 
    ? 'translate(0px, 0px)' 
    : testimonial === 1 
      ? 'translate(-600px, 20px)' 
      : 'translate(600px, 20px)'}`
}}>
            <div className='testimonial-part-1'>
                <img src={quotation} alt='Quotation' className='quotation-img'/>
            </div>
            <div className='testimonial-part-2'>
                3"I never thought a simple ‘thank you’ could feel this rewarding. One customer scanned the Tokn QR after I served them their coffee, and in seconds, I received a tip directly in my account. It wasn’t just about the money—it was about feeling valued for my work. Tokn has made every smile and every bit of effort I put in truly appreciated."
                That did a great job!!
            </div>
            <div className='testimonial-part-3 '>
                <img src={testimonialimg} className='testimonial-img' alt='Testimonial Image' />
                <div className='testimonial-text'> <span className='testimonial-text-1'> Priya Sharma </span> <br/> <span className='testimonial-text-2'> Waitress at Café </span> </div>
            </div>
        </div>

        <button className='testimonial-previous' onClick={Previous}>&#10096; </button>
        <button className='testimonial-next' onClick={Next}>&#10097; </button>
        

    </div>
    
    </>);

}

export default Testimonial;