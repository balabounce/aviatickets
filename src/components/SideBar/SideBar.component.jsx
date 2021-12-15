import React from 'react';
import './SideBar.styles.scss';

const SideBar = ({setFlights, flights}) => {
    const [lotChecked, setLotChecked] = React.useState(false);
    const [aeroChecked, setAeroChecked] = React.useState(false);
    let flightsArr = React.useRef([]);

    React.useEffect(() => {flightsArr.current = flights.slice()}, [flights]);

      React.useEffect(() => {
        if(lotChecked && aeroChecked) {
            flightsArr.current.forEach(flight => {
                flight.displayLot = true;
                flight.displayAero = true;
            });
        };
        setFlights(flightsArr.current);
    }, [lotChecked, aeroChecked, setFlights])

    return (
        <div className='sidebar'>
            <div className='sidebar__sort'>
                <span>Сортировать</span>
                <div className='sidebar__radio sidebar__radio_sort'>
                <input type='radio' name='sort' value='ascending' onChange={() => {
                    setFlights(flightsArr.current.sort((a, b) => a.price.total.amount - b.price.total.amount));
                }
                }/> - по возрастанию цены 
                <input type='radio' name='sort' value='descending' onChange={() => {
                    setFlights(flightsArr.current.sort((a, b) => b.price.total.amount - a.price.total.amount));
                }
                }/> - по убыванию цены 
                <input type='radio' name='sort' value='waytime' onChange={() => {
                    setFlights(flightsArr.current.sort((a, b) => {
                        const durationA = a.legs[0].duration + a.legs[1].duration; //длина всей поездки
                        const durationB = b.legs[0].duration + b.legs[1].duration;
                        return durationA - durationB;
                    }));   
                }
                }/> - по времени в пути 
                </div>
            </div>
             <div className='sidebar__filter'>
                <span>Фильтровать</span>
                <div className='sidebar__radio sidebar__radio_filter'>
                <input type='checkbox' name='filter' value='transfer' onChange={(e) => {
                    flightsArr.current.forEach(flight => {
                            if(!e.target.checked || (flight.legs[0].segments.length === 2 && flight.legs[1].segments.length === 2)) {
                                flight.displayTrans = true;
                            } else if(flight.legs[0].segments.length !== 2 || flight.legs[1].segments.length !== 2) {
                                flight.displayTrans = false;
                            }
                        }
                    );
                    setFlights(flightsArr.current);
                }
                }/> - 1 пересадка 
                <input type='checkbox' name='filter' value='notransfer' onChange={(e) => {
                    flightsArr.current.forEach(flight => {
                            if(!e.target.checked || (flight.legs[0].segments.length !== 2 && flight.legs[1].segments.length !== 2)) {
                                flight.displayNoTrans = true;
                            } else if(flight.legs[0].segments.length === 2 || flight.legs[1].segments.length === 2) {
                                flight.displayNoTrans = false;
                            }
                        }
                    );
                    setFlights(flightsArr.current);
                }
                }/> - без пересадок 
                </div>
            </div>
            <div className='sidebar__cost'>
                <span>Цена</span>
                <div className='sidebar__input'>
                    От <input type='number' name='cost' onChange={(e) => {
                        flightsArr.current.forEach((flight) => {
                            if(flight.price.total.amount >= +e.target.value) {
                                flight.displayCostFrom = true;        
                            } else {
                                flight.displayCostFrom = false;
                            }
                        });
                        setFlights(flightsArr.current);
                        }}/> 
                    До <input type='text' name='cost' onChange={(e) => {
                        flightsArr.current.forEach((flight) => {
                            if(flight.price.total.amount <= +e.target.value || !e.target.value) {
                                flight.displayCostTo = true;        
                            } else {
                                flight.displayCostTo = false;
                            } 
                        });
                        setFlights(flightsArr.current);
                        }
                    }/>  
                </div>
            </div>
            <div className='sidebar__avia'>
                <span>Авикомпании</span>
                <div className='sidebar__checkbox'>
                    <input type='checkbox' name='avia' value='from' onChange={(e) => {
                        setLotChecked(e.target.checked);
                        flightsArr.current.forEach(flight => {
                            if(!e.target.checked || flight.carrier.uid === 'LO') {
                                flight.displayLot = true;
                            } else if(flight.carrier.uid !== 'LO') flight.displayLot = false;
                        });
                        setFlights(flightsArr.current);
                        }}/> - LOT Polish Airlines 
                    <input type='checkbox' name='avia' value='to' onChange={(e) => {
                        setAeroChecked(e.target.checked);
                        flightsArr.current.forEach(flight => {
                            if(!e.target.checked || flight.carrier.uid === 'SU1') {
                                flight.displayAero = true;
                            } else if(flight.carrier.uid !== 'SU1') flight.displayAero = false;
                        });
                        setFlights(flightsArr.current);
                    }}/> - Аэрофлот
                </div>
            </div>
        </div>
    );
}

export default SideBar;
