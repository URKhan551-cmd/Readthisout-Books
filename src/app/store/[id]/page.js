
import React from 'react'
import { getBookById } from "../page.js";
import BookDetails from ""


const BookDetailPage = ({params: {id}}) => {
    console.log(id) // this will show us which page is presentlyy rendere
     


  const book = function getBookById(id) {
     book.find(book => book.id === id);
  };


  return (
    <div>
    <div>BookDetailPage</div>
    <BookDetails book={book} />
    </div>
  )
}

export default BookDetailPage;