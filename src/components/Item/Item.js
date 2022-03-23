import React from "react";
import ItemCount from "../ItemCount/ItemCount";
// import Data from '../../Data/Data'
import './Item.css';

const Item = ({id, name, image, price}) => {
    return (
        <div className="card">
            <h3 className="card-title">{name}</h3>
            <img src={image} className="card-img" alt="" />
            <span className="card-price">{price}</span>
            <ItemCount />
        </div>
    )
}

export default Item
