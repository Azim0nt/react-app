import './style.scss';
import Logo from '../../assets/icons/лого.png'
import { Outlet, Link } from "react-router-dom"

function Navigation() {
    return ( 
        <div id='body'>
            <nav id="navigation-wrapper">
                <div className="left">
                    <Link to={'/'}>
                    <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="right">
                        <ul>
                            <li><Link to={'/main'}>Главная</Link></li>
                            <li><Link to={'/excursion'}>Экскурсии</Link></li>
                            <li><Link to={'/about'}>О нас</Link></li>
                            <li><Link to={'/types'}>Виды</Link></li>
                            <li><Link to={'/galery'}>Галерея</Link></li>
                            <li><Link to={'/feedback'}>Отзывы</Link></li>
                            <li><Link to={'/leave-feedback'}>Оставить вопрос</Link></li>
                        </ul>
                </div>
            </nav>
            <div id="outlet">
                <Outlet />
            </div>
        </div>
     );
}

export default Navigation;