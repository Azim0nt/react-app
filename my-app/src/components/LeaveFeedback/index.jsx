import './style.scss'
import Footer from '../Footer';
function LeaveFeedback() {
    return (
        <> 
         <div className='lf-body'>
            <div className="lf">
                <div className="form">
                    <p id="title">Остались вопросы?</p>
                    <p id="subtitle">Оставь заявку и мы ответим</p>
                    <input type="text" id='name' placeholder='Имя' />
                    <input type="text" id='number' placeholder='Телефон' />
                    <input type="email" id='email' placeholder='Почта' />
                    <button id='btn'>
                        Оставить заявку
                    </button>
                </div>
            </div>
            
        </div><Footer/>
        </>
      
    );
}

export default LeaveFeedback;