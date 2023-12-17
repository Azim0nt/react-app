import './style.scss'
function Excursion() {
    return ( 
        <div className="body-excursion">
            <div className="top"><p className="left">Популярные экскурсии</p> <p className="right">Смотреть все</p></div>
            <div className="bottom">
                <div className="cards"></div>
            </div>
        </div>
     );
}

export default Excursion;