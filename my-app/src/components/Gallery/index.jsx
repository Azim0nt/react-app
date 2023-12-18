import './style.scss'
import imageGallery from '../../assets/images/галерея.png'

function Gallery() {
    return (
        <div className='gallery-body'>
            <div className="gallery">
                <div className="top"><p className="left">Популярные экскурсии</p> <p className="right">Смотреть все</p></div>
                <div className="bottom">
                    <img src={imageGallery} width={'100%'} />
                </div>
            </div>

        </div>
    );
}

export default Gallery;