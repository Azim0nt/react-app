import './style.scss'
import Values from "./Values.jsx"
import Marquee from 'react-fast-marquee'
function Excursion() {
    return ( 
        <div className="body-excursion">
            
                <div className="top"><p className="left">Популярные экскурсии</p> <p className="right">Смотреть все</p></div>
            <div className="bottom">
                <div className="cards">
                    <Marquee direction='right' autoFill={true}>
                    <Values/>
                    </Marquee>
                </div>
            </div>
        </div>
     );
}

export default Excursion;