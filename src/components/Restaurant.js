import React from 'react'

function Restaurant(props) {
  let price = ''
  for (let i = 0; i < props.restaurant.price; i++) {
    price += '$'
  }

  return (
    <div className='restContainer container-fluid'>
      <div className='restName d-flex align-items-center justify-content-center'>
        <h5>{props.restaurant.name}</h5>
      </div>
      <div>
        <p>
          <strong>Address:</strong> {props.restaurant.address}
        </p>
        <p>
          <strong>City:</strong> {props.restaurant.city}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
      </div>
    </div>
  )
}

export default Restaurant
