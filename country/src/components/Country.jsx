import React from "react";

export const Country = ({ country }) => {
  return (
    <div key={country.flag}>
      <h1>{country.name.common}</h1>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Population:</b> {country.population}
      </p>
      <img src={country.flags.png} alt="" />
      <ul>
        {Object.values(country.languages).map((language, langIndex) => (
          <li key={`langindex ${langIndex}`}>{language}</li>
        ))}
      </ul>
      <p>
        <b>Temperature:</b> {country.weather?.temperature} Celcius
      </p>
      <img
        src={country.weather?.weather_icons}
        alt={country.weather?.weather_descriptions}
      />
      <p>
        <b>Wind:</b> {country.weather?.wind_degree} mph{" "}
        {country.weather?.wind_dir}
      </p>
    </div>
  );
};
