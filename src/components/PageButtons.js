import React from 'react'

function PageButtons(props) {
  return (
    <div>
      {props.currentPage !== 1 && (
        <button type='button' name='previousPage' onClick={props.handleClick}>
          Previous Page
        </button>
      )}
      {props.currentPage !== props.totalPages && (
        <button type='button' name='nextPage' onClick={props.handleClick}>
          Next Page
        </button>
      )}
    </div>
  )
}

export default PageButtons
