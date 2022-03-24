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
        <div className='lista-productos' style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                products.length ? (
                    <>
                      { products.map((product) => {
                            return (
                                <div key={product.id} className='products-container' style={{display: 'flex', flexWrap: 'nowrap'}}>
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