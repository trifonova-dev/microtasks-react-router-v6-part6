import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import type {ShoeItemType} from "./types";
import {pumaArr} from "./Puma";

const brandArrays: Record<string, ShoeItemType[]> = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {brand, id} = useParams()

    const currentArr = brandArrays[brand ?? '']
    const currentShoe = currentArr.find(shoe => shoe.id === id)

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
