import './style.scss';
import Main from '../Main';
import Excursion from '../Excursion';
import About from '../About';
import Types from '../Types';
function FullPage() {
    return (  
        <div>
            <Main />
            <Excursion />
            <About />
            <Types />
        </div>
    );
}

export default FullPage;