import React from 'react'

function Restaurant(props) {
  return (
    <div className='restContainer container-fluid'>
      <h4>{props.restaurant.name}</h4>
      <p>Address: {props.restaurant.address}</p>
      <p>Price: {props.restaurant.price}</p>
    </div>
  )
}

export default Restaurant
