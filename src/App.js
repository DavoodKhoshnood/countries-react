import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import countriesAll from './countriesAll.json';
import './App.css';
import Header from './components/Header';
import Country from './components/Country';

function App() {
  const regions = [...new Set(countriesAll.map((country) => country.region))];
  const [countries, setCountries] = useState(countriesAll);
  const [regionsFilter, setRegionsFilter] = useState('All regions');
  const [countriesFilter, setCountriesFilter] = useState('');

  useEffect(() => {
    console.log(countriesFilter);
    setCountries(
      countriesAll.filter(
        (country) =>
          (regionsFilter === 'All regions' ||
            country.region
              .toLocaleLowerCase()
              .includes(regionsFilter.toLocaleLowerCase())) &&
          (countriesFilter === '' ||
            country.name
              .toLocaleLowerCase()
              .includes(countriesFilter.toLocaleLowerCase()))
      )
    );
  }, [regionsFilter, countriesFilter]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CountriesList
              countries={countries}
              regions={regions}
              setCountriesFilter={setCountriesFilter}
              setRegionsFilter={setRegionsFilter}
            />
          }
        />
        <Route
          path="/countries/:countryName"
          element={<Country countries={countries} />}
        />
      </Routes>
      {/* <CountriesList countries={countries} /> */}
    </Router>
  );
}

export default App;
