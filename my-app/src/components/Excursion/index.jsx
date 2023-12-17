import './style.scss'
import Values from "./Values.jsx"
import Main from '../Main/index.jsx';
function Excursion() {
    return ( 
        <div className="body-excursion">
            
                <div className="top"><p className="left">Популярные экскурсии</p> <p className="right">Смотреть все</p></div>
            <div className="bottom">
                <div className="cards">
                    <Values/>
                </div>
            </div>
        </div>
     );
}

export default Excursion;