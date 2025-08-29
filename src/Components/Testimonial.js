import '../Assets/css/TestimonialStyle.css';
import quotation from '../Assets/img/quotation.png';
import testimonialimg from '../Assets/img/testimonial-img.png';
import { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState(1);
  const intervalRef = useRef(null);
  const startXRef = useRef(null); // store drag start position

  const Next = () => {
    setTestimonial((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const Previous = () => {
    setTestimonial((prev) => (prev === 1 ? 3 : prev - 1));
  };

  // ✅ Function to start auto-slide
  const startAutoSlide = () => {
    if (intervalRef.current) return; // already running
    intervalRef.current = setInterval(() => {
      Next();
    }, 4000);
  };

  // ✅ Function to stop auto-slide
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // cleanup
  }, []);

  // ✅ Handle drag start
  const handleDragStart = (e) => {
    stopAutoSlide(); // pause auto-slide while dragging
    if (e.type === "touchstart") {
      startXRef.current = e.touches[0].clientX;
    } else {
      startXRef.current = e.clientX;
    }
  };

  // ✅ Handle drag end
  const handleDragEnd = (e) => {
    if (startXRef.current === null) return;

    let endX;
    if (e.type === "touchend") {
      endX = e.changedTouches[0].clientX;
    } else {
      endX = e.clientX;
    }

    const deltaX = endX - startXRef.current;

    if (Math.abs(deltaX) > 100) { // threshold to avoid accidental drags
      if (deltaX > 0) {
        Previous(); // dragged right → show previous
      } else {
        Next(); // dragged left → show next
      }
    }

    startXRef.current = null;
    startAutoSlide(); // resume auto-slide after drag
  };

  return (
    <>
      <div
        className="testimonial-warp"
        onMouseEnter={stopAutoSlide} 
        onMouseLeave={startAutoSlide} 
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {/* Testimonial 1 */}
        <div
          className={
            testimonial === 1
              ? 'testimonial-cont'
              : testimonial === 2
              ? 'testimonial-cont left'
              : 'testimonial-cont right'
          }
          style={{
            transform: `${
              testimonial === 1
                ? 'translate(0px, 0px)'
                : testimonial === 2
                ? 'translate(-600px, 20px)'
                : 'translate(600px, 20px)'
            }`,
          }}
        >
          <div className="testimonial-part-1">
            <img src={quotation} alt="Quotation" className="quotation-img" />
          </div>
          <div className="testimonial-part-2">
            "I never thought a simple ‘thank you’ could feel this rewarding.
            One customer scanned the Tokn QR after I served them their coffee,
            and in seconds, I received a tip directly in my account. It wasn’t
            just about the money—it was about feeling valued for my work. Tokn
            has made every smile and every bit of effort I put in truly
            appreciated." That did a great job!!
          </div>
          <div className="testimonial-part-3">
            <img
              src={testimonialimg}
              className="testimonial-img"
              alt="Testimonial Image"
            />
            <div className="testimonial-text">
              <span className="testimonial-text-1"> Priya Sharma </span> <br />
              <span className="testimonial-text-2"> Waitress at Café </span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div
          className={
            testimonial === 2
              ? 'testimonial-cont'
              : testimonial === 3
              ? 'testimonial-cont left'
              : 'testimonial-cont right'
          }
          style={{
            transform: `${
              testimonial === 2
                ? 'translate(0px, 0px)'
                : testimonial === 3
                ? 'translate(-600px, 20px)'
                : 'translate(600px, 20px)'
            }`,
          }}
        >
          <div className="testimonial-part-1">
            <img src={quotation} alt="Quotation" className="quotation-img" />
          </div>
          <div className="testimonial-part-2">
            "I never thought a simple ‘thank you’ could feel this rewarding.
            One customer scanned the Tokn QR after I served them their coffee,
            and in seconds, I received a tip directly in my account. It wasn’t
            just about the money—it was about feeling valued for my work. Tokn
            has made every smile and every bit of effort I put in truly
            appreciated." That did a great job!!
          </div>
          <div className="testimonial-part-3">
            <img
              src={testimonialimg}
              className="testimonial-img"
              alt="Testimonial Image"
            />
            <div className="testimonial-text">
              <span className="testimonial-text-1"> Priya Sharma </span> <br />
              <span className="testimonial-text-2"> Waitress at Café </span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div
          className={
            testimonial === 3
              ? 'testimonial-cont'
              : testimonial === 1
              ? 'testimonial-cont left'
              : 'testimonial-cont right'
          }
          style={{
            transform: `${
              testimonial === 3
                ? 'translate(0px, 0px)'
                : testimonial === 1
                ? 'translate(-600px, 20px)'
                : 'translate(600px, 20px)'
            }`,
          }}
        >
          <div className="testimonial-part-1">
            <img src={quotation} alt="Quotation" className="quotation-img" />
          </div>
          <div className="testimonial-part-2">
            "I never thought a simple ‘thank you’ could feel this rewarding.
            One customer scanned the Tokn QR after I served them their coffee,
            and in seconds, I received a tip directly in my account. It wasn’t
            just about the money—it was about feeling valued for my work. Tokn
            has made every smile and every bit of effort I put in truly
            appreciated." That did a great job!!
          </div>
          <div className="testimonial-part-3 ">
            <img
              src={testimonialimg}
              className="testimonial-img"
              alt="Testimonial Image"
            />
            <div className="testimonial-text">
              <span className="testimonial-text-1"> Priya Sharma </span> <br />
              <span className="testimonial-text-2"> Waitress at Café </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="testimonial-previous" onClick={Previous}>
          &#10096;
        </button>
        <button className="testimonial-next" onClick={Next}>
          &#10097;
        </button>
      </div>
    </>
  );
};

export default Testimonial;
