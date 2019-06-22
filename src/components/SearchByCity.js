import React from 'react'

function SearchByCity(props) {
  return (
    <form>
      <div className='text-center form-group'>
        <label forhtml='cityName'>Enter the City's name:</label>

        <input
          className='form-control'
          type='text'
          name='cityName'
          value={props.cityName}
          placeholder="Enter city's name..."
          onChange={props.handleChange}
          // @todo press enter and search
        />
      </div>
      <button
        type='button'
        name='searchRestaurants'
        onClick={props.handleClick}
      >
        Search Restaurants
      </button>
    </form>
  )
}

export default SearchByCity
