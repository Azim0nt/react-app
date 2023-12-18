import './style.scss'
import feedbackImage from '../../assets/images/отзывы.png'
function Feedback() {
    return ( 
        <div className='feedback-body'>
            <div className="feedback">
                <div className="top">
                    <p id="left">
                        Отзывы
                    </p>
                    <p id="right">
                        Смотреть все
                    </p>
                </div>
                <div className="bottom">
                    <img src={feedbackImage} width={1530} height={500} />
                </div>
            </div>
        </div>
     );
}

export default Feedback;