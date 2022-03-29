import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id, name, image, price}) => {
    return (
        <div className='detail-container'>
            <h3 className='detail-title'>{name='Item detail'}</h3>
            <img src={image} alt='' />
            <span>{price}</span>
           {/*  <ItemCount /> */}
        </div>
    )
}

export default ItemDetail;