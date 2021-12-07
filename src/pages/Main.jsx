import React from 'react';
import { createFlightObject } from '../utils/utils.js';
import { SideBar } from '../components';
import { ProductList } from '../components';
const Main = () => {
    const [flights, setFlights] = React.useState([]);

    async function fetchData() {
        let response = await fetch("./flights.json");
        response = await (response.json());
        const arr = [];
        response.result.flights.forEach(item => {
            arr.push(item.flight);
        });
        setFlights(arr);
    }
    
    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(flights);

    return (
        <>
            <SideBar/>
            <ProductList flights={flights}/>
        </>
    );
}

export default Main;
