import './style.scss'
import Image8 from '../../assets/images/img-8.png'
import Image1 from '../../assets/images/img-1.png'
import Image6 from '../../assets/images/img-6.png'
import Image7 from '../../assets/images/img-7.png'
import Image3 from '../../assets/images/img-3.png'
import Marquee from 'react-fast-marquee';
import Excursion from '../Excursion'
import About from '../About'
import Types from '../Types'
import Gallery from '../Gallery'
import Feedback from '../Feedback'
import LeaveFeedback from '../LeaveFeedback'
function Main() {
    return (
        <>
        <div className="body-v">
            <div className='body-main'>
                <div className="main">
                    <div className="text">
                        <p className="title">ПУТЕШЕСТВУЙ</p>
                        <p className="litle-text">вместе с</p>
                        <p className="subtitle">PERO TRAVEL</p>
                    </div>
                    <button id='btn'>К экскурсиям</button>
                </div>
            </div>
            <Marquee className='marquee' direction='right'>
                <img src={Image1} alt="" />
                <img src={Image8} alt="" /> 
                <img src={Image6} alt="" /> 
                <img src={Image7} alt="" />  
                <img src={Image3} alt="" />  
                </Marquee>
        </div>
        <Excursion/>
        <About/>
        <Types/>
        <Gallery/>
        <Feedback/>
        <LeaveFeedback/>
        </>
    );
}

export default Main;