// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CountryDisplay({ content, handleDisplay }) {
//   return (
//     <div>
//       {content.length === 1 ? (
//         content.map(
//           (
//             {
//               name: { common },
//               flags: { png },
//               capital,
//               population,
//               languages,
//             },
//             index
//           ) => {
//             useEffect(() => {
//               axios
//                 .get("http://api.weatherstack.com/current", {
//                   params: {
//                     query: common,
//                     access_key: "d3136eae7bc7d08f16bf98c18a2ad77c",
//                   },
//                 })
//                 .then(({ data: { current, location } }) =>
//                   console.log(location)
//                 )
//                 .catch((err) => console.log(err));
//             }, []);
//             return (
//               <div key={`countryIndex = ${index}`}>
//                 <h1>{common}</h1>
//                 <p> Capital: {capital} </p>
//                 <p> Population: {population}</p>

//                 <h2>languages</h2>
//                 <ul>
//                   {Object.values(languages).map((language, languageIndex) => (
//                     <li key={`languageIndex: ${languageIndex}`}>{language}</li>
//                   ))}
//                 </ul>
//                 <img src={png} alt="" />
//               </div>
//             );
//           }
//         )
//       ) : content.length < 10 ? (
//         content.map((country, index) => {
//           return (
//             <div key={`countryIndex = ${index}`}>
//               {" "}
//               <span>{country.name.common}</span> {""}
//               <button onClick={() => handleDisplay(country)}>show</button>
//             </div>
//           );
//         })
//       ) : (
//         <p> Too many matches, specify another filter</p>
//       )}
//     </div>
//   );
// }

// export default CountryDisplay;
