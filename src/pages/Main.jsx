import React from 'react';
import { SideBar } from '../components';
import { ProductList } from '../components';
const Main = () => {
    const [flights, setFlights] = React.useState([]);
 async function fetchData() {
        let response = await fetch("./flights.json");
        response = await (response.json());
        let arr = [];
        response.result.flights.forEach(item => {
            item.flight.displayFil = true;
            item.flight.displayCostFrom = true;
            item.flight.displayCostTo = true;
            item.flight.displayTrans = true;
            item.flight.displayNoTrans = true;
            item.flight.displayLot = true;
            item.flight.displayAero = true;
            arr.push(item.flight);
        });
        arr = arr.filter(item => item.carrier.uid === 'SU1' || item.carrier.uid === 'LO');
        setFlights(arr);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

 return (
        <>
            <SideBar setFlights={setFlights} flights={flights}/>
            <ProductList flights={flights}/>
        </>
    );
}

export default Main;
