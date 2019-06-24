import React from 'react'

function PageButtons(props) {
  return (
    <div className='pageButtons d-flex justify-content-between'>
      <div>
        {/* if current page is one, the previous button will not be displayed */}
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
        {/* if current page is the same as the last page, next button will not be displayed */}
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
