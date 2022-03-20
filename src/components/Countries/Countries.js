import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
           
            <h1>All Countries List</h1>
            <h2>Total Countries: {countries.length}</h2>
            {countries.map(country => 
            
            <Country country={country} ></Country>
            
            // Option: 1
            // <Country name={country.name.common} area={country.area} population={country.population} ></Country>
            )
            }
        </div>
    );
};

export default Countries;