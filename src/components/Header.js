import React from 'react'

function Header() {
  return (
    <div className='text-center header d-flex align-items-center justify-content-center'>
      <span
        className='background-image'
        role='img'
        aria-label='Header background is a a restaurant with a man reading newspaper on one of the many tables'
      />
      <div className='headerTitles'>
        <h1>Restaurants In Your City</h1>
        <h4>Developer Coding Test (FE)</h4>
      </div>
    </div>
  )
}

export default Header
