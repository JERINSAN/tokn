import "../Assets/css/ScrollingLogoStyle.css";

const ScrollingLogo = () => {
  return (
    <div className="scrolling-logo-wrap">
      <div className="scrolling-track">
        {/* first set */}
        <img src="/ScrollingLogos/MrChef.png" alt="logo" />
        <img src="/ScrollingLogos/FoodOrder.png" alt="logo" />
        <img src="/ScrollingLogos/FoodLogo.png" alt="logo" />
        <img src="/ScrollingLogos/LoveFood.png" alt="logo" />
        <img src="/ScrollingLogos/Noodle.png" alt="logo" />
        <img src="/ScrollingLogos/FastFood.png" alt="logo" />
        {/* duplicate set for seamless loop */}
         <img src="/ScrollingLogos/MrChef.png" alt="logo" />
        <img src="/ScrollingLogos/FoodOrder.png" alt="logo" />
        <img src="/ScrollingLogos/FoodLogo.png" alt="logo" />
        <img src="/ScrollingLogos/LoveFood.png" alt="logo" />
        <img src="/ScrollingLogos/Noodle.png" alt="logo" />
        <img src="/ScrollingLogos/FastFood.png" alt="logo" />
      </div>
    </div>
  );
};

export default ScrollingLogo;