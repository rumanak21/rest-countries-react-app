import React from 'react';

const Country = (props) => {
    const {name, area, population } = props.country
    return (
        <div>
            <h3>Country Name: {name.common}</h3>
            <p>Area: {area} </p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;