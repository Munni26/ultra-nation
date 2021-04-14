import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
   const { name, population, region, flag } = props.country;
   // const history = useHistory();
   // const handleClick = (countryName) =>{
   //    const url = `/country/${countryName}`;
   //    history.push(url);
   // }
   const flagStyle={height: '200px'} 
   const countryStyle={
      border: '1px solid red',
      margin: '10px', 
      padding: '10px',
      borderRadius: '20px'
   }
   const handleAddCountry = props.handleAddCountry;
   return (
        <div style={countryStyle}>
           <h4>Name: {name}</h4>
           <img style={flagStyle} src={flag} alt=""/>
           <p>Population: {population}</p>
           <p><small>Region: {region}</small></p>
           <p>Code: <Link to={`/country/${name}`}>
               <button>Show Detail of {name}</button>
           </Link> </p>
           <button onClick={() => handleAddCountry(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;