import RobotError from '../../assets/images/404.png'
import './style.scss'
function NoPage() {
    return ( 
    <div className='noPage'>
        <div>

        <img src={RobotError} alt="Error" />
        
        <h1>404 Not Found Page</h1>
        </div>
    </div> 
    );
}

export default NoPage;