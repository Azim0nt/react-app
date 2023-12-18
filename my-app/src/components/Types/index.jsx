import './style.scss';
import Values from './Values';

function Types() {
    return (
        <div className="types-about">
            <div className="types">
                <div className="top">
                    <p id="title">Виды экскурсий</p>
                </div>
                <div className="bottom">
                    <div className="cards">
                        <Values />
                    </div>
                </div>
                <div className="footer">
                    <p>Выбирайте на нашем сайте экскурсию, которая подходит именно вам и <br /> записывайтесь онлайн без очередей, просто и быстро!</p>
                    <button id='btn'> К экскурсиям</button>
                </div>
            </div>
        </div>
    );
}

export default Types;