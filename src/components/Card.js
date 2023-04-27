import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link to={`/countries/${encodeURIComponent(props.data.name)}`} className='card card-body'>
      <img alt={props.data.name} src={props.data.flag} className="thumbnail" />
      <div className="content">
        <h3>{props.data.name}</h3>
        <strong>Population: </strong>
        {props.data.population.toLocaleString()}
        <br />
        <strong>Region: </strong>
        {props.data.region}
        <br />
        <strong>Capital: </strong>
        {props.data.capital}
        <br />
      </div>
    </Link>
  )
}

export default Card
