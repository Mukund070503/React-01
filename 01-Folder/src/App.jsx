import { useState } from 'react'
import Card from './components/Card.jsx'
function App() {
  const countries = [
  {
    name: "India",
    capital: "New Delhi",
    population: "1.4 Billion",
    GDP: "3.7 Trillion USD",
    gdpPerCapita: "2,600 USD",
    flag: "https://flagcdn.com/in.svg"
  },
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: "331 Million",
    GDP: "27 Trillion USD",
    gdpPerCapita: "80,000 USD",
    flag: "https://flagcdn.com/us.svg"
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: "125 Million",
    GDP: "4.2 Trillion USD",
    gdpPerCapita: "34,000 USD",
    flag: "https://flagcdn.com/jp.svg"
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: "83 Million",
    GDP: "4.5 Trillion USD",
    gdpPerCapita: "55,000 USD",
    flag: "https://flagcdn.com/de.svg"
  },
  {
    name: "Brazil",
    capital: "Brasília",
    population: "214 Million",
    GDP: "2.1 Trillion USD",
    gdpPerCapita: "10,000 USD",
    flag: "https://flagcdn.com/br.svg"
  }
];

return (
  <div className='parent'>
    {countries.map((country, index) => (
      <div key={index}>
        {console.log(index)}
        
      <Card
        name={country.name}
        capital={country.capital}
        population={country.population}
        GDP={country.GDP}
        gdpPerCapita={country.gdpPerCapita}
        flag={country.flag}
      />
      </div>
    ))}
  </div>
)
}

export default App
