import React from 'react'

function SearchByCity(props) {
  return (
    <form
      className='searchByCity'
      onSubmit={e => e.preventDefault()}
      onKeyPress={e =>
        e.key === 'Enter' &&
        props.handleClick({ target: { name: 'searchRestaurants' } })
      }
    >
      <div className='text-center form-group row'>
        <div className='col-sm-3'>
          <label className='my-auto' forhtml='cityName'>
            Enter City's name:
          </label>
        </div>
        <div className='col-sm-6'>
          <input
            className='cityNameInput form-control w-100'
            type='text'
            name='cityName'
            value={props.cityName}
            placeholder="Enter city's name here..."
            onChange={props.handleChange}
          />
        </div>
        <div className='col-sm-3'>
          <button
            id='searchRestaurants'
            className='searchRestButton'
            type='button'
            name='searchRestaurants'
            onClick={props.handleClick}
          >
            Search Restaurants
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchByCity
