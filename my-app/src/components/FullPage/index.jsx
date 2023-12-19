import './style.scss';
import Main from '../Main';
import Excursion from '../Excursion';
import About from '../About';
import Types from '../Types';
import Gallery from '../Gallery';
import Feedback from '../Feedback';
import LeaveFeedback from '../LeaveFeedback';
function FullPage() {
    return (  
        <div>
            <Main />
            <Excursion />
            <About />
            <Types />
            <Gallery/>
            <Feedback/>
            <LeaveFeedback/>
        </div>
    );
}

export default FullPage;