import React, { useState } from 'react'

import Card from './Card'
import countriesAll from './countriesAll.json'
import './App.css'

function App() {
  const regions = [...new Set(countriesAll.map((country) => country.region))]
  const [countries, setCountries] = useState(countriesAll)
  // const [selected, setSelected] = useState(null)
  
  
  const filter = (inputValue) => {
    document.getElementById('select').value = 'All countries' 
    setCountries(
      countriesAll.filter((country) =>
        country.name
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase()),
      ),
    )
  }

  const changeSelect = (selected) => {
    document.getElementById('input').value = ''
    setCountries(
      selected === 'All countries'?countriesAll:countriesAll.filter((country) =>
        country.region
          .toLocaleLowerCase()
          .includes(selected.toLocaleLowerCase()),
      ),
    )
  }
  return (
    <>
      <div className="App">
        <header className="App-header">Where in the world?</header>
      </div>
      <div className="form-row m-5">
        <input
          id='input'
          className="form-control col-md-9 m-2"
          type="search"
          placeholder="Search..."
          onChange={(e) => filter(e.target.value)}
        />

        <select
        id='select'
          onChange={(e) => changeSelect(e.target.value)}
          className="form-control col-md-2 m-2"
        >
          <option>All countries</option>
          {regions.map((region) => (
            <option>{region}</option>
          ))}
        </select>
      </div>
      <div className="card-deck p-1">
        {countries.map((country, index) => (
          <Card data={country} index={index} />
        ))}
      </div>
    </>
  )
}

export default App
