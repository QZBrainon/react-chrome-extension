import "./App.css";
import { useState, useEffect } from "react";
import { data } from "./data/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    setCountries(data);
  }, []);

  return (
    <>
      <h1>Live Chat Translator</h1>
      <p>Talk to your favorite streamer in their own language!</p>
      <div className="card">
        <span>From: </span>
        <select
          name="from-countries"
          id="from-countries"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {countries.map((country) => (
            <option value={country.language}>{country.emoji}</option>
          ))}
        </select>
        <span>To: </span>
        <select
          name="to-countries"
          id="to-countries"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {countries.map((country) => (
            <option value={country.language}>{country.emoji}</option>
          ))}
        </select>
        <button>Start Translating</button>
      </div>
    </>
  );
}

export default App;
