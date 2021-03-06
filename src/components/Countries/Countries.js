import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div >

            <div className='heading'>
                <h1>All Countries List</h1>
                <h2>Total Countries: {countries.length}</h2>
            </div>

            <div className='countries'>
                {countries.map(country =>

                    <Country country={country} ></Country>

                    // Option: 1
                    // <Country name={country.name.common} area={country.area} population={country.population} ></Country>
                )}
            </div>

        </div>
    );
};

export default Countries;