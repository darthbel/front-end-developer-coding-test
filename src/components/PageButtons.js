import React from 'react'

function PageButtons(props) {
  return (
    <div className='pageButtons d-flex justify-content-between'>
      <div>
        {props.currentPage !== 1 && (
          <button type='button' name='previousPage' onClick={props.handleClick}>
            Previous
          </button>
        )}
      </div>
      <div className='text-center'>
        <p>
          Page {props.currentPage}/{props.totalPages}
        </p>
      </div>
      <div>
        {props.currentPage !== props.totalPages && (
          <button type='button' name='nextPage' onClick={props.handleClick}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default PageButtons
