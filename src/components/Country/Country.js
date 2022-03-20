import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, area, flags, population} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" srcset="" />
            <h3>Country Name: {name.common}</h3>
            <p>Area: {area} </p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;