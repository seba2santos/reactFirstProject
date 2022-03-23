import React from "react";
import { useState } from 'react';
import './ItemCount.css';
import { dresses } from '../../Data/Data.js';


function ItemCount () {
    
    const stock = dresses.stock;
    const [count, setCount] = useState(1);
    
    const addOne = (num) => {
        setCount(count + num)
    }

    return(
        <div className="counter-container">
           
            <button
                className="btn-add" 
                onClick={() => addOne(-1)}
                disabled={count < 1 ? true : null}>&#45;
                </button>
            <span className="counter">{count}</span>
            <button 
            className="btn-add" 
            onClick={() => addOne(1)}
            disabled={count > stock ? true : null}>&#43;</button>
            <button className="add-to-cart">Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;