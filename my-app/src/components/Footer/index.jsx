import './style.scss';
import Logo from '../../assets/images/logo_color 1.png'
import Icons from '../../assets/images/соц сети.png'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer-body">
            <div className="footer">
                <NavLink to={"/"}>
                    <img src={Logo} width={80} height={114} />
                </NavLink>
                <div className="text-1">
                    <NavLink to={'/'}>
                        <p>Главная</p>
                    </NavLink>
                    <NavLink to={'/excursion'}>
                        <p>Экскурсии</p>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <p>О нас</p>
                    </NavLink>
                </div>
                <div className="text-2">
                    <p>+7 964 944 18 74</p>
                    <p>+7 918 919 98 28</p>
                    <p>Телеграм-бот PeroTravel</p>
                </div>
                <div className="text-3">
                    <p>office@perotravel.ru</p>
                    <img src={Icons} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;