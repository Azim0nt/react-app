function ValueItem(props) {
    return (
        <div className="value-item">
            <span></span>
            <div className='value-info'>
                <div>

                <p id="p-1">{props.type}</p>
                <p id="p-2">{props.title}</p>
                <p id="p-3">{props.subtitle}</p>
                <button id="btn">Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default ValueItem;