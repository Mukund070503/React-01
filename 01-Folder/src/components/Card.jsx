import React from 'react'
const Card = (country) => {
  return (
    <div className='Card'>
      <div className='top'>
        <img src={country.flag} alt='Flag of {country.name}' />
        <h5>{country.name}</h5>
      </div>
      <div className='middle'>
        <h2>Capital - {country.capital}</h2>
        <h2>Population - {country.population}</h2>
        <h2>GDP - {country.GDP}</h2>
        <h2>GDP Per Capita - {country.gdpPerCapita}</h2>
      </div>
    <div className='bottom'>
        <form method='Get'>
            <button><img src='https://www.stockvault.net/data/2017/02/15/222798/preview16.jpg' />Locate</button>
        </form>
    </div>
    </div>
  )
}

export default Card
