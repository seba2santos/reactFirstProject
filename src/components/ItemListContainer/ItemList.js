// import React from 'react';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { dresses } from '../../Data/Data.js';

const getProducts = new Promise ((res, rej) => {
    setTimeout(() => {
        res(dresses)
    }, 2000)
})

function ItemList () {
    const [products, setProducts] = useState([]);

    const getProductsFromData = async () => {
        try {
            const result = getProducts;
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
        <div className='lista-productos'>
            {
                products.length ? (
                    <>
                      { products.map((product) => {
                            return (
                                <div key={product.id}>
                                    <Item 
                                        name={product.dressName}
                                        image={product.image}
                                        price={product.price}
                                    />

                                </div>
                            );
                        })
                    }
                    </>
                ) : (
                    <span>Cargando productos...</span>
                )
            }
        </div>
    );
};

export default ItemList;