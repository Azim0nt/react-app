import './style.scss'
import Svg1 from '../../assets/svg/svg1.svg'
import Svg2 from '../../assets/svg/svg2.png'
import Svg3 from '../../assets/svg/svg3.svg'
import Round from '../../assets/svg/round.svg'
function OurExcursions() {
    return (
        <>
            <div className="excursions-wrapper">
                <div className="header">
                    <p id='header-text'>НАШИ ЭКСКУРСИИ</p>
                </div>
                <div className="excursions">
                    <div className="filter-top">
                        <div className="top">
                            <div>

                                <p id='blue'>АВТОБУСНЫЙ ТУР</p><p>ДЖИППИНГ</p><p>ЯХТИНГ</p><p>КАНЬОНИНГ</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="card">
                                <p>Абхазия</p><img src={Svg1} width={20} height={20} />
                            </div>
                            <div className="card">
                                <p>10 ноября 2021</p><img src={Svg2} width={20} height={20} />
                            </div>
                            <div className="card">
                                <p>5 человек</p><img src={Svg3} width={20} height={20} />
                            </div>
                            <button className='card' id='btn'>Показать</button>
                        </div>
                    </div>
                    <div className="body">
                        <div className="left">
                            <div className="filter-right">
                                <p id="title">
                                    Фильтры
                                </p>
                                <div className="price">
                                    <div className="top">
                                        <p>Стоимость</p> <div id='line'></div>
                                    </div>
                                    <div className="middle">
                                        <div>1 600</div> <div>4 000</div>
                                    </div>
                                    <div className="bottom">
                                        <img src={Round} alt="" />
                                    </div>
                                </div>
                                <hr id='line-hr' />
                                <div className="quantity">
                                    <div className="top">
                                        <p>Количество человек</p> <div id='line'></div>
                                    </div>
                                    <div className="middle">
                                        <div className="num">1 чел.</div>
                                        <div className="num">2 чел.</div>
                                        <div className="num">3 чел.</div>
                                        <div className="num">4 чел.</div>
                                        <div className="num" id='blue'>5 чел.</div>
                                        <div className="num">6 чел.</div>
                                        <div className="num">7 чел.</div>
                                        <div className="num">8 чел.</div>
                                        <div className="num">9 чел.</div>
                                    </div>
                                    <div className="bottom">
                                        <div className="left">10 чел.</div><div className="right">Больше 10 чел.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurExcursions;