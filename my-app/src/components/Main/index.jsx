import './style.scss'
import Title from '../../assets/images/заголовок.png'
import Video from '../../assets/images/видео.png'
import Excursion from '../Excursion';
function Main() {
    return ( 
        <div className="body-v">
             <div className='body-main'>
            <div className="main">
                <img src={Title} alt="" />
                <button id='btn'>К экскурсиям</button>
            </div>
        </div>
            <img src={Video} alt="Video" id='video'/>
            <Excursion/>
        </div>
       
     );
}

export default Main;