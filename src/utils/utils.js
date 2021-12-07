export function createFlightObject (flight) {
    const flightObj = {};
    try {
        flightObj.cost = flight.price.passengerPrices[0].singlePassengerTotal.amount; // Стоимость на одного взрослого пассажира
        flightObj.segmentsLengthTo =  flight.legs[0].segments.length; // Полет туда. Если 2 сегмента, то есть пересадка
        flightObj.segmentsLengthBack = flight.legs[1].segments.length; // Полет обратно. Если 2 сегмента, то есть пересадка

        flightObj.departureCityTO = flight.legs[0].segments[0].departureCity.caption; // Город из которого вылетели
        flightObj.departureAirportTO = flight.legs[0].segments[0].departureAirport.caption; // Город из которого вылетели
        flightObj.departureAirportUidTO = flight.legs[0].segments[0].departureAirport.uid; // Идентификатор аэропорта, из которого вылетели

        flightObj.arrivalCityTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalCity.caption : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalCity.caption; // Если пересадок нет, то берем место приземления из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalAirport.caption : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalAirport.caption; // Если пересадок нет, то берем аэропорт из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportUidTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalAirport.uid : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalAirport.uid; // Если пересадок нет, то берем идентификатор аэропорта из того же сегмента/ Если же нет, то из последнего сегмента
        
        flightObj.departureTimeTO = flight.legs[0].segments[0].departureDate; // Город из которого вылетели 
        flightObj.arrivalTimeTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalDate : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalDate;
        
        flightObj.departureTimeBack = flight.legs[1].segments[0].departureDate; // Город из которого вылетели
        flightObj.arrivalTimeBack = flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalDate : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalDate;
        
        flightObj.departureCityBack = flight.legs[1].segments[0].departureCity.caption; // Город из которого вылетели
        flightObj.departureAirportBack = flight.legs[1].segments[0].departureAirport.caption; // Город из которого вылетели
        flightObj.departureAirportUidBack = flight.legs[1].segments[0].departureAirport.uid; // Идентификатор аэропорта, из которого вылетели

        flightObj.arrivalCityBack = flightObj.segmentsLengthBack  === 1 ? flight.legs[1].segments[0].arrivalCity.caption : flight.legs[1].segments[flight.segmentsLengthBack - 1].arrivalCity.caption; // Если пересадок нет, то берем место приземления из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportBack = flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalAirport.caption : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalAirport.caption; // Если пересадок нет, то берем аэропорт из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportUidBack = flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalAirport.uid : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalAirport.uid; // Если пересадок нет, то берем идентификатор аэропорта из того же сегмента/ Если же нет, то из последнего сегмента

        flightObj.airlineCaptionTo = flight.legs[0].segments[0].airline.caption;
        flightObj.airlineCaptionBack = flight.legs[1].segments[0].airline.caption;
    } catch(e) {
        return null; 
    }
 

    return flightObj;
};
