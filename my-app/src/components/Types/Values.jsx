import valuesData from '../db/values-types.json'
import Bus from "../../assets/images/1.png"
import Car from "../../assets/images/2.png"
import Boat from "../../assets/images/3.png"
import Canyon from "../../assets/images/4.png"
import ValueItem from "./ValueItem.jsx"

function Values(props) {
    const images = [Bus, Car, Boat, Canyon]

    return (
        <div className="values-wrapper">
            {
                valuesData && valuesData.map((item, index) => {
                    return (
                        <ValueItem 
                            key={index}
                            image={images[index]}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;