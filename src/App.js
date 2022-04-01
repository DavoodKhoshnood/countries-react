import React, { useState } from 'react'

import Card from './Card'
import countriesAll from './countriesAll.json'
import './App.css'

function App() {
  const [countries, setCountries] = useState(countriesAll)
  const filter = (inputValue) => {
    setCountries(
      countriesAll.filter((country) =>
        country.name
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase()),
      ),
    )
  }
  return (
    <>
      <div className="App">
        <header className="App-header">Where in the world?</header>
      </div>
      <div className="m-5">
        <input
          className="form-control"
          type="search"
          placeholder="Search..."
          onChange={(e) => filter(e.target.value)}
        />
        <div className="card-deck p-1">
          {countries.map((country, index) => (
            <Card data={country} index = {index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
