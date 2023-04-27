import React from 'react'
import Card from './Card'
import Search from './Search'

const CountriesList = ({countries, regions, setRegionsFilter, setCountriesFilter}) => {
  return (
    <>
      <Search regions={regions} setRegionsFilter={setRegionsFilter} setCountriesFilter={setCountriesFilter}/>
    <div className="card-deck col-md-12 m-0 p-0">
    {countries.map((country, index) => (
      <Card data={country} key={index}/>
      ))}
  </div>
      </>
  )
}

export default CountriesList