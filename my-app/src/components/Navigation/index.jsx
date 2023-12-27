import './style.scss';
import React from 'react';
import Logo from '../../assets/icons/лого.png'
import { Outlet, NavLink } from "react-router-dom";
function Navigation() {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div id='body'>
            <nav id="navigation-wrapper">
                <div className="left">
                    <NavLink to={'/'}>
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className="right">
                    <ul>
                        <li><NavLink to={'/main'}>Главная</NavLink></li>
                        <li><NavLink to={'/excursion'}>Экскурсии</NavLink></li>
                        <li><NavLink to={'/about'}>О нас</NavLink></li>
                        <li><NavLink to={'/types'}>Виды</NavLink></li>
                        <li><NavLink to={'/gallery'}>Галерея</NavLink></li>
                        <li><NavLink to={'/feedback'}>Отзывы</NavLink></li>
                        <li><NavLink to={'/leave-feedback'}>Оставить вопрос</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div id="mobil-nav">
                <button onClick={toggleMenu} id='nav-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg></button>
                {isMenuOpen && (
                    <div className="burger-menu">
                        <div>

                        <ul>
                            <li><NavLink to={'/main'}>Главная</NavLink></li>
                            <li><NavLink to={'/excursion'}>Экскурсии</NavLink></li>
                            <li><NavLink to={'/about'}>О нас</NavLink></li>
                            <li><NavLink to={'/types'}>Виды</NavLink></li>
                            <li><NavLink to={'/gallery'}>Галерея</NavLink></li>
                            <li><NavLink to={'/feedback'}>Отзывы</NavLink></li>
                            <li><NavLink to={'/leave-feedback'}>Оставить вопрос</NavLink></li>
                        </ul>
                        </div>
                    </div>
                )}
            </div>
            <div id="outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Navigation;
