import './style.scss'
import Image1 from '../../assets/images/img-1.png'
import Image2 from '../../assets/images/img-2.png'
import Image3 from '../../assets/images/img-3.png'
import Image4 from '../../assets/images/img-4.png'
import Image5 from '../../assets/images/img-5.png'
import Image6 from '../../assets/images/img-6.png'
import Image7 from '../../assets/images/img-7.png'
import Image8 from '../../assets/images/img-8.png'

function Gallery() {
    return (
        <div className='gallery-body'>
            <div className="gallery">
                <div className="top"><p className="left">Популярные экскурсии</p> <p className="right">Смотреть все</p></div>
                <div className="bottom">
                    <div className="left">
                        <div className="top"></div>
                        <div className="bottom-l">
                            <div className="left-b">

                            </div>
                            <div className="right-b">
                                <div className="top-b"></div>
                                <div className="bottom-b"></div>
                            </div>
                        </div>
                    </div>
                    <div className="middle">

                    </div>
                    <div className="right">
                        <div className="top-r">
                            <div className="left-r"></div>
                            <div className="right-r"></div>
                        </div>
                        <div className="bottom-r"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gallery;