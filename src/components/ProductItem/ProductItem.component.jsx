import React from 'react';
import './ProductItem.styles.scss';
import lotLogo from '../../assets/lot-logo.png';
import clock from '../../assets/clock.svg';
import { createDay, durationFormate } from '../../utils/utils';

const ProductItem = ({departureCityBack, departureAirportBack, departureAirportUidBack, departureCityTO, departureAirportTO, departureAirportUidTO, cost, departureTimeBack, departureTimeTO, arrivalCityBack, arrivalAirportBack, arrivalAirportUidBack, arrivalCityTO, arrivalAirportTO, arrivalAirportUidTO, arrivalTimeTO, arrivalTimeBack, arrivalDuration, departureDuration, segmentsLengthTo, segmentsLengthBack, airlineCaptionTo, airlineCaptionBack}) => {
    return (
        <div className='productitem'>
                <header className='productitem__header'>
                    <div className='productitem__header_img'>
                        <img src={lotLogo} alt='logo-company'/>
                    </div>
                    <div className='productitem__header_cost'>
                        <h2>{cost}₽</h2>
                        <span>Стоимость для одного взрослого пассажира</span>
                    </div>
                </header>
                <div className='productitem__body'>
                    <div className='productitem__way'>
                        <p>{departureCityTO}, {departureAirportTO} <span>({departureAirportUidTO}) &#8594; </span>
                            {departureCityBack}, {departureAirportBack} <span> ({departureAirportUidBack})</span>
                        </p>
                        <hr/>
                    </div> 
                    <div className='productitem__time'>
                        <p>{departureTimeTO.getHours() + ':' + departureTimeTO.getMinutes()} <span>{createDay(departureTimeTO)}</span></p> 
                        <p><img src={clock} alt='flytime'/> {durationFormate(departureDuration)}</p> 
                        <p><span>{createDay(departureTimeBack)}</span> {departureTimeBack.getHours() + ':' + departureTimeBack.getMinutes()}</p> 
                    </div>
                    <div className='productitem__transfer'>
                        <hr/>
                        {segmentsLengthTo === 2 ? <span>1 пересадка</span> : null}
                    </div>
                    <p className='company'>Рейс выполняет: {airlineCaptionTo}</p>
                </div>
                <hr className='path_separator'/>
                <div className='productitem__body'>
                    <div className='productitem__way'>
                        <p>{arrivalCityTO}, {arrivalAirportTO}<span> ({arrivalAirportUidTO}) &#8594; </span>
                        {arrivalCityBack}, {arrivalAirportBack} <span> ({arrivalAirportUidBack})</span>
                        </p>
                        <hr/>
                    </div> 
                    <div className='productitem__time'>
                        <p>{arrivalTimeTO.getHours()}:{arrivalTimeBack.getMinutes()} <span>{createDay(arrivalTimeTO)}</span></p> 
                        <p><img src={clock} alt='flytime'/> {durationFormate(arrivalDuration)}</p> 
                        <p><span>{createDay(arrivalTimeBack)}</span> {arrivalTimeBack.getHours()}:{arrivalTimeTO.getMinutes()}</p> 
                    </div>
                    <div className='productitem__transfer'>
                        <hr/>
                        {segmentsLengthBack === 2 ? <span>1 пересадка</span> : null}
                    </div>
                    <p className='company'>Рейс выполняет: {airlineCaptionBack}</p>
                </div>
                <button>ВЫБРАТЬ</button>
        </div>
    );
}

export default ProductItem;
