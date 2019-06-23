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
        <p>Address: {props.restaurant.address}</p>
        <p>City: {props.restaurant.city}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  )
}

export default Restaurant
