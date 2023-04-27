import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Country = ({ countries }) => {
  const { countryName } = useParams();
  const country = countries.find((c) => c.name === countryName);
  return (      
    <div className='mt-3'>
    <Link to='/' className='col-md-1'>
         <Button >Back
</Button>
         </Link>
    <div className="d-flex blockquote mt-3">
  
      <img alt={country.name} src={country.flag} className="col-md-6" />
      <div className="col-md-6">
        <h1>{country.name}</h1>
        <table className="table">
          <tr>
            <td>
              <h3>Population: </h3>
            </td>
            <td>{country.population.toLocaleString()}</td>
          </tr>
          <tr>
            <td>
              <h3>Region: </h3>
            </td>
            <td>{country.region}</td>
          </tr>
          <tr>
            <td>
              <h3>Capital: </h3>
            </td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>
              <h3>Neighbors: </h3>
            </td>
            <td>{country.borders.map(c=> (
                <div>
                    {countries.find(co=>co.alpha3Code === c).name }
                </div>
            ))}</td>
          </tr>
        </table>
      </div>
    </div>
            </div>
  );
};

export default Country;
