import countriesAll from './countriesAll.json'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">Countries React Challenge</header>
      </div>

      <div className="m-5">
        <div className="card-deck p-1">
          {countriesAll.map((country, index) => (
            <div className="card card-body">
              <img
                alt={country.name}
                src={country.flag}
                className="thumbnail"
              />
              <div className="content">
                <h6>{country.name}</h6>
                <strong>Population: </strong>
                {country.population.toLocaleString()}
                <br />
                <strong>Region: </strong>
                {country.region}
                <br />
                <strong>Capital: </strong>
                {country.capital}
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
