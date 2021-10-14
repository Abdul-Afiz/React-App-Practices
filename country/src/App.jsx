import { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "./components/Country";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountriesData(data))
      .catch((err) => console.log(err));
  }, []);

  const getWeather = (countryName) => {
    console.log(countryName);

    axios(
      `http://api.weatherstack.com/current?query=${countryName}&access_key=9ff407366ffaf22ba051c177ec28b087`
    )
      .then(({ data }) => {
        console.log(data.current),
          setCountriesData(
            countriesData.map((country) => {
              if (country.name.common === countryName) {
                country = { ...country, weather: data.current };
              }
              return country;
            })
          );
      })
      .catch((err) => console.log(err));
  };

  const filteredCountry = query
    ? countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      )
    : countriesData;

  useEffect(() => {
    if (filteredCountry.length === 1) {
      const country = filteredCountry[0];
      if (country.weather) return;
      getWeather(country.name.common);
    }
  }, [filteredCountry]);

  const output = !query ? (
    ""
  ) : filteredCountry.length > 10 ? (
    <p>filter too many, be specific</p>
  ) : filteredCountry.length === 1 ? (
    <div key={filteredCountry[0].flag}>
      <h1>{filteredCountry[0].name.common}</h1>
      <p>
        <b>Capital:</b> {filteredCountry[0].capital}
      </p>
      <p>
        <b>Population:</b> {filteredCountry[0].population}
      </p>
      <img src={filteredCountry[0].flags.png} alt="" />
      <ul>
        {Object.values(filteredCountry[0].languages).map(
          (language, langIndex) => (
            <li key={`langindex ${langIndex}`}>{language}</li>
          )
        )}
      </ul>
      <p>
        <b>Temperature:</b> {filteredCountry[0].weather?.temperature} Celcius
      </p>
      <img
        src={filteredCountry[0].weather?.weather_icons}
        alt={filteredCountry[0].weather?.weather_descriptions}
      />
      <p>
        <b>Wind:</b> {filteredCountry[0].weather?.wind_degree} mph{" "}
        {filteredCountry[0].weather?.wind_dir}
      </p>
    </div>
  ) : (
    filteredCountry.map((country) =>
      country.weather ? (
        <Country key={country.flag} country={country} />
      ) : (
        <div key={country.flag}>
          <span>{country.name.common}</span> {"  "}{" "}
          <button
            onClick={() => {
              getWeather(country.name.common);
            }}
          >
            show
          </button>
        </div>
      )
    )
  );

  return (
    <div>
      <span>Find Country</span>{" "}
      <input
        type="search"
        onChange={(e) => {
          setquery(e.target.value.toLowerCase().trim());
        }}
      />
      <div>{output}</div>
    </div>
  );
}

export default App;
