import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const CountryDetail = () => {
    
    const { countryName } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
              const info = data[0]
                setCountry(info);
                console.log(info)
            })
    }, [])
    return (
        <div>
            <p>Country Detail: {countryName}</p>
            <h5>Name: {country.name}</h5>
            <h5>Population: {country.population}</h5>
            <h5>Region: {country.region}</h5>
            <h5>SubRegion: {country.subregion}</h5>
            <h5>Area: {country.area}</h5>
            <h5>Capital: {country.capital}</h5>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
        
    );
    
};

export default CountryDetail;