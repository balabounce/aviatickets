import React from 'react';
import { sortByWayTime, filterBySegment, filterByCost } from '../utils/utils';
import { SideBar } from '../components';
import { ProductList } from '../components';
const Main = () => {
    const [flights, setFlights] = React.useState([]);
    const [setFilter, filterObj] = React.useState({
        sort: 'default',
        filter: 'default',
        cost: {
            from: 0,
            to: 10000000
        },
        companies: 'default'
    });

    async function fetchData() {
        let response = await fetch("./flights.json");
        response = await (response.json());
        let arr = [];
        response.result.flights.forEach(item => {
            arr.push(item.flight);
        });
        arr = arr.filter(item => item.carrier.uid === 'SU1' || item.carrier.uid === 'LO');
        setFlights(arr);
    }
    
    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        let flightsArr = flights.slice();
        switch (filterObj.sort) {
            case 'desc':
                setFlights(flightsArr.sort((a, b) => b - a));
                break;
            case 'ascen':
                setFlights(flightsArr.sort((a, b) => a - b));
                break;
            case 'waytime':
                sortByWayTime(flightsArr);
                break;
            default: 
                break;
        }        
        switch (filterObj.filter) {
            case 'one' : 
                filterBySegment(flightsArr, 'one');
                break;
            case 'zero':
                filterBySegment(flightsArr, 'zero');
                break;
            default :
                break;
        }
        console.log(filterObj.cost);

    }, [filterObj]);

    return (
        <>
            <SideBar/>
            <ProductList flights={flights}/>
        </>
    );
}

export default Main;
