import valuesData from '../db/values.json'
import ValueItem from "./ValueItem.jsx"

function Values(props) {


    return (
        <div className="values-wrapper">
            {
                valuesData && valuesData.map((item, index) => {
                    return (
                        <ValueItem 
                            key={index}
                            
                            type={item.type}
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