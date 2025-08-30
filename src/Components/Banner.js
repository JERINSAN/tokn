import { useState, useEffect } from "react";
import "../Assets/css/BannerStyle.css";

const banners = [
  { id: 1, img: "Banners/banner-1.jpg" },
  { id: 2, img: "Banners/banner-2.jpg" },
  { id: 3, img: "Banners/banner-4.jpg" }
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (<><div className="Banner-wrap">
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner) => (
          <div className="slide" key={banner.id}>
            <img src={banner.img} alt={`Slide ${banner.id}`} />
          </div>
        ))}
      </div>

      
    </div> {/* dot navigation */}
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div> </div></>
  );
}
