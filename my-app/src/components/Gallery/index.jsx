import './style.scss'


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
                <div className="bottom-1">
                    <div className="left"></div>
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