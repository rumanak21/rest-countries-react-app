import React, { useEffect, useState } from 'react';

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
            {countries.map(country =>console.log(country.length))}
        </div>
    );
};

export default Countries;