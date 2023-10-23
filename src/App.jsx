import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    const res = await fetch('https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json')
    const result = await res.json()
    setCountries(result)
  }

  useEffect(()=>{
    fetchCountries()
  },[])

  return (
    <>
      <h1>Live Chat Translator</h1>
      <p>Talk to your favorite streamer in their own language!</p>
      <div className="card">
        <span>From: </span>
        <select name="countries" id="countries">
          {countries.map(country=>(
            <option key={country.Name} value={country.Name}>{country.Code}</option>
          ))}
        </select>
        <span>To:</span>
        <select name="countries" id="countries">
          {countries.map(country=>(
            <option key={country.Name} value={country.Name}>{country.Code}</option>
          ))}
        </select>
        <button>Start Translating</button>
      </div>
    </>
  )
}

export default App
