import './style.scss';
import React from 'react';
import Logo from '../../assets/icons/лого.png'
import { Outlet, NavLink } from "react-router-dom";
function Navigation() {
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
                
            </div>
            <div id="outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Navigation;