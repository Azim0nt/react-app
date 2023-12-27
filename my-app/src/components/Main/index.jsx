import './style.scss'
import Title from '../../assets/images/заголовок.png'
import Video from '../../assets/images/видео.png'
import Excursion from '../Excursion';
function Main() {
    return (
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
            <img src={Video} alt="Video" id='video' />
        </div>

    );
}

export default Main;