import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const {id} = useParams()

    const currentShoe = adidasArr.find(shoe => shoe.id === id)
    if (!currentShoe) {
        return <span>Model not found</span>
    }
    return (
        <div>
            <h2>{currentShoe.model}</h2>
            <img src={currentShoe.picture} alt={currentShoe.model} width={400}/>
            <p>{currentShoe.collection}</p>
            <p>{currentShoe.price}</p>
        </div>
    );
};
