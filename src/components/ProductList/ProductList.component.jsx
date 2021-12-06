import React from 'react';
import ProductItem from '../ProductItem/ProductItem.component';
import './ProductList.styles.scss';

const ProductList = () => {
    return (
        <div className='productlist'>
            <ProductItem/>
            <ProductItem/>
            <button className='productlist__btn'>Показать еще</button>
        </div>
    )
}

export default ProductList;
