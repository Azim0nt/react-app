import './style.scss'
import feedbackImage from '../../assets/images/отзывы.png';
import Marquee from 'react-fast-marquee';
import Photo1 from '../../assets/images/photo1.png';
import Photo2 from '../../assets/images/photo2.png';
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
                    <Marquee direction='right' className='marquee' autoFill={true}>

                        <div className="f-1">
                            <div className='left'> <img src={Photo1} alt="" /></div>
                            <div className='right'><p className="title">Иван Иванов, 25 лет</p><p className="about-they">
                                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit, sed do eiusmod tempor incididunt ut labore et  <br />
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  <br />
                                exercitation ullamco laboris nisi ut aliquip ex ea  <br />
                                commodo consequat. Duis aute irure dolor in reprehenderit in <br />
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa <br />
                                qui officia deserunt mollit anim id est laborum.
                            </p></div>
                        </div>
                        <div className="f-2">
                            <div className='left'> <img src={Photo2} alt="" /></div>
                            <div className='right'><p className="title">Иван Иванов, 25 лет</p><p className="about-they">
                                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                elit, sed do eiusmod tempor incididunt ut labore et  <br />
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  <br />
                                exercitation ullamco laboris nisi ut aliquip ex ea  <br />
                                commodo consequat. Duis aute irure dolor in reprehenderit in <br />
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa <br />
                                qui officia deserunt mollit anim id est laborum. <br />
                            </p></div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Feedback;