import React from 'react';
import ProductItem from '../ProductItem/ProductItem.component';
import { createFlightObject } from '../../utils/utils';
import './ProductList.styles.scss';

const ProductList = ({flights}) => {
    const [flightsDisplay, setFlightsDisplay] = React.useState(flights);
    const [ticketCount, setTicketCount] = React.useState(2);

    React.useEffect(() => {
        const flightArr = flights.slice();
        setFlightsDisplay(flightArr.filter(flight => (flight.displayFil && flight.displayCostFrom && flight.displayCostTo && flight.displayTrans && flight.displayNoTrans && flight.displayLot && flight.displayAero )));
    }, [flights]);

        console.log(flightsDisplay);
    return (
        <div className='productlist'>
            { 
                flightsDisplay.map((flight, i) => {
                    const flightObj = createFlightObject(flight);
                    console.log(flightObj);
                        if(i <= ticketCount-1 && flightObj) {
                            return <ProductItem {...flightObj} key={i}/>
                        }
                    return null;
                })
            }
            <button className='productlist__btn' onClick={() => setTicketCount(ticketCount+2)}>Показать еще</button>
        </div>
    )
}

export default ProductList;
