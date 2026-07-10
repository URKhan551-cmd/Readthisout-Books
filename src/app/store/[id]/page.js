import React from 'react'

const BookDetailPage = ({params: {id}}) => {
    console.log(id) // this will show us which page is presentlyy rendered.
  return (
    <div>BookDetailPage</div>
  )
}

export default BookDetailPage