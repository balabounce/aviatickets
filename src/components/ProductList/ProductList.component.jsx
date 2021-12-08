import React from 'react';
import ProductItem from '../ProductItem/ProductItem.component';
import { createFlightObject } from '../../utils/utils';
import './ProductList.styles.scss';

const ProductList = ({flights}) => {
    return (
        <div className='productlist'>
            { 
                flights.map((flight, i) => {
                    const flightObj = createFlightObject(flight);
                 //       console.log(flightObj)
                        if(i < 3 && flightObj) {
                            console.log(flightObj);
                            return <ProductItem {...flightObj} key={i}/>
                        }
                    return null;
                })
            }
            <button className='productlist__btn'>Показать еще</button>
        </div>
    )
}

export default ProductList;
