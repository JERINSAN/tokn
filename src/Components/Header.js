import '../Assets/css/HeaderStyle.css';
import logo from '../Assets/img/logo.png';
import qr from '../Assets/img/qr.png';
import { useState ,useEffect } from 'react';

const Header = () =>{

     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return(<>

 <header className={`Header-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className={`logo-part ${scrolled ? "scrolled" : ""}`}>
        <img
          src={logo}
          className={`logo ${scrolled ? "scrolled" : ""}`}
          alt="Tokn Logo"
        />
        <br />
        <span className={`logo-text ${scrolled ? "scrolled" : ""}`}>
          Cashless tips. Endless benefits
        </span>
      </div>

      <div className="qr-part">
        <div className={`qr-inner ${scrolled ? "scrolled" : ""}`}>
          <img src={qr} className={`qr-image ${scrolled ? "scrolled" : ""}`} alt="QR-Image" />
          <button className={`tip-button ${scrolled ? "scrolled" : ""}`}>
            Tip Now
          </button>
        </div>
      </div>
    </header>

</>);   
}

export default Header;