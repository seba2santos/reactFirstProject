import React from "react";
import { useState } from 'react';
import './ItemCount.css';
import { dresses } from '../../Data/Data.js';


function ItemCount () {
    let start = 1
    const stock = dresses.stock;
    const [count, setCount] = useState(start);
    
    const addOne = (num) => {
        setCount(count + num)
    }
    const addToCart = () => {
        alert('Añadido al carrito de compras')
    }

    return(
        <div className="counter-container">
           
            <div className="add-subs-container">
            <button
                className="btn-add less" 
                onClick={() => addOne(-1)}
                disabled={count < 2 ? true : null}>&#45;
                </button>
            <span className="counter">{count}</span>
            <button 
            className="btn-add" 
            onClick={() => addOne(1)}
            disabled={count > stock ? true : null}>&#43;</button>
            </div>
            <button className="add-to-cart" onClick={addToCart}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;