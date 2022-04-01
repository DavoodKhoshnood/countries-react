import React from 'react';

const Card = (props) => {
return (           
            <div key={props.index} className="card card-body">
              <img
                alt={props.data.name}
                src={props.data.flag}
                className="thumbnail"
              />
              <div className="content">
                <h6>{props.data.name}</h6>
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
            </div>
)
}

export default Card