import React from "react";
import "./Country.css";

const Country = (props) => {
    const { area, name, population, region, flags } = props.country;
    console.log(props.country);
    return (
        <div className="country">
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <h5>Population: {population}</h5>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;
