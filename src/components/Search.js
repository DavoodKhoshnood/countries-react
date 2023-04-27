import React from 'react'

const Search = ({ regions, setRegionsFilter, setCountriesFilter }) => {
  return (
    <div className="form-row m-3">
    <input
      id="input"
      className="form-control col-md-9 "
      type="search"
      placeholder="Search..."
      onChange={(e) => setCountriesFilter(e.target.value)}
    />

    <select
      id="select"
      onChange={(e) => setRegionsFilter(e.target.value)}
      className="form-control col-md ml-4"
    >
      <option>All regions</option>
      {regions.map((region) => (
        <option>{region}</option>
      ))}
    </select>
  </div>  )
}

export default Search