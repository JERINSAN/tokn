import '../Assets/css/HowitsworkStyle_Creators.css';
import Howitswork from'../Assets/videos/how-its-work.mp4'

const Creators = () =>{
    return(<>
    <div className="how-its-work-cont row shadow py-5">
            <div className='col-xl-6 row justify-content-center align-items-center'>
                <div>
                <span className='how-its-work-titel my-5'>
                    Creators 
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

export default Creators;