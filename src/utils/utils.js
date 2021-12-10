export function createFlightObject (flight) {
    const flightObj = {};
    try {
        flightObj.cost = flight.price.passengerPrices[0].singlePassengerTotal.amount.replace(/\.[0-9]+/g, ''); // Стоимость на одного взрослого пассажира
        flightObj.segmentsLengthTo =  flight.legs[0].segments.length; // Полет туда. Если 2 сегмента, то есть пересадка
        flightObj.segmentsLengthBack = flight.legs[1].segments.length; // Полет обратно. Если 2 сегмента, то есть пересадка

        flightObj.arrivalDuration = flight.legs[0].duration;
        flightObj.departureDuration = flight.legs[1].duration;

        flightObj.departureCityTO = flight.legs[0].segments[0].departureCity.caption; // Город из которого вылетели
        flightObj.departureAirportTO = flight.legs[0].segments[0].departureAirport.caption; // Город из которого вылетели
        flightObj.departureAirportUidTO = flight.legs[0].segments[0].departureAirport.uid; // Идентификатор аэропорта, из которого вылетели

        flightObj.arrivalCityTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalCity.caption : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalCity.caption; // Если пересадок нет, то берем место приземления из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalAirport.caption : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalAirport.caption; // Если пересадок нет, то берем аэропорт из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportUidTO = flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalAirport.uid : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalAirport.uid; // Если пересадок нет, то берем идентификатор аэропорта из того же сегмента/ Если же нет, то из последнего сегмента
        
        flightObj.departureTimeTO = new Date(flight.legs[0].segments[0].departureDate); // Город из которого вылетели 
        flightObj.arrivalTimeTO = new Date(flightObj.segmentsLengthTo === 1 ? flight.legs[0].segments[0].arrivalDate : flight.legs[0].segments[flightObj.segmentsLengthTo - 1].arrivalDate);
        
        flightObj.departureTimeBack = new Date(flight.legs[1].segments[0].departureDate); // Город из которого вылетели
        flightObj.arrivalTimeBack = new Date(flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalDate : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalDate);
        
        flightObj.departureCityBack = flight.legs[1].segments[0].departureCity.caption; // Город из которого вылетели
        flightObj.departureAirportBack = flight.legs[1].segments[0].departureAirport.caption; // Город из которого вылетели
        flightObj.departureAirportUidBack = flight.legs[1].segments[0].departureAirport.uid; // Идентификатор аэропорта, из которого вылетели

        flightObj.arrivalCityBack = flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalCity.caption : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalCity.caption; // Если пересадок нет, то берем место приземления из того же сегмента/ Если же нет, то из последнего сегмента 
        flightObj.arrivalAirportBack = flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalAirport.caption : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalAirport.caption; // Если пересадок нет, то берем аэропорт из того же сегмента/ Если же нет, то из последнего сегмента
        flightObj.arrivalAirportUidBack = flightObj.segmentsLengthBack === 1 ? flight.legs[1].segments[0].arrivalAirport.uid : flight.legs[1].segments[flightObj.segmentsLengthBack - 1].arrivalAirport.uid; // Если пересадок нет, то берем идентификатор аэропорта из того же сегмента/ Если же нет, то из последнего сегмента

        flightObj.airlineCaptionTo = flight.legs[0].segments[0].airline.caption;
        flightObj.airlineCaptionBack = flight.legs[1].segments[0].airline.caption;
    } catch(e) {
        return null; 
    }
 

    return flightObj;
};

export function createDay (date) {  
    const days = ['вc', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const monthNames = ["янв.", "фев.", "мар.", "апр.", "мая", "июн.",
  "июл.", "авг.", "сен.", "окт.", "нов.", "дек."
    ];

    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const dayStr = days[dayOfWeek];
    const monthStr = monthNames[date.getMonth()];
    
    return `${day} ${monthStr} ${dayStr}`;
};

export function durationFormate (duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration - 60 * hours;
    return `${hours} ч ${minutes} мин`;
};

export function sortByWayTime (arr) {
    return arr;
};

export function filterBySegment(arr, mode) {
    return arr;
};

export function filterByCost (arr, from, to) {
    return arr;
};

export function filterByAviaComp (arr) {
    return arr;
};
