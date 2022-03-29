import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { dresses } from '../Data/Data'

const getProducts = new Promise ((res, rej) => {
    setTimeout(() => {
        res(dresses)
    }, 2000)
})


function ItemDetailContainer () {

    const [products, setProducts] = useState({});

    const getProductsFromData = async () => {
        try {
            const result = await getProducts;
            setProducts(result)
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProductsFromData()
    }, []);

    return (
        <>
            <ItemDetail name={products.id}/> 
        </>
    )
}

export default ItemDetailContainer;