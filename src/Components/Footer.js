import '../Assets/css/FooterStyle.css';
import logo from '../Assets/img/logo.png';
const Footer = () =>{
    return(<>
        <div className='footer-wrap '>

            <div className='footer-part-1 footer-part'>
                <img src={logo} className='footer-logo mb-1'alt="Tokn Logo"/>
                <span className='footer-logo-text'>
                    Cashless tips. Endless benefits
                </span>
                <div className='footer-social-link mt-5'>
                    <a href='#'> <img src='Social-Logo/X.png' className='footer-social-link-logo mx-2' style={{height:"24px"}}/></a>
                   <a href='#'> <img src='Social-Logo/Facebook.png' className='footer-social-link-logo mx-2' style={{height:"28px"}}/></a>
                    <a href='#'> <img src='Social-Logo/instagram.png' className='footer-social-link-logo mx-2' style={{height:"19px"}}/></a>
                    <a href='#'> <img src='Social-Logo/linkedin.png' className='footer-social-link-logo mx-2' style={{height:"20px"}}/></a>
                </div>
            </div>
            <div className='footer-part-2 footer-part'>
                <a href='#' className='footer-link-title'>About</a><br/>
                <a href='#' className='footer-link'>What is Tokn?</a><br/>
                <a href='#' className='footer-link'>Why Tokn exists</a>
            </div>

            <div className='footer-part-3 footer-part'>
                <a href='#' className='footer-link-title'>Tipper</a><br/>
                <a href='#' className='footer-link'>Our Portfolio</a><br/>
                <a href='#' className='footer-link'>Lastest Work</a><br/>
                <a href='#' className='footer-link'>Brands</a>
                
            </div>

            <div className='footer-part-4 footer-part'>
                <a href='#' className='footer-link-title'>Merchant</a><br/>
                <a href='#' className='footer-link'>Why partner with Tokn?</a><br/>
                <a href='#' className='footer-link'>Showcase visibility & branding benefits</a><br/>
                <a href='#' className='footer-link'>How to register</a>
            </div>
            <div className='footer-part-5 footer-part'>
                <a href='#' className='footer-link-title'>Features</a><br/>
                 <a href='#' className='footer-link'>About Us</a><br/>
                <a href='#' className='footer-link'>Blog</a><br/>
                <a href='#' className='footer-link'>Team</a><br/>
                 <a href='#' className='footer-link'>Career</a><br/>
                <a href='#' className='footer-link'>Contact</a>
               
            </div>
            <div className='footer-part-6 footer-part'>
                <a href='#' className='footer-link-title'>Legal</a><br/>

                <a href='#' className='footer-link'>Privacy Policy</a><br/>
                <a href='#' className='footer-link'>Terms & Conditions</a><br/>
                <a href='#' className='footer-link'>Community Guidelines</a><br/>
            </div>

        </div>
    </>);
}

export default Footer;