
import React from 'react'
import {fetchBooks} from "../../lib/bookApi/booksApi.js";
import BookDetails from "../../ui/Books/BookDetails.js";


const BookDetailPage = async ({params}) => {
     const {id}  = await params;

  const {books} = await fetchBooks(1, 10);
  if(!books)return <p>bilkul ghayab ha</p>
  

   // console.log(books);
 const book = books.find(book => {
   console.log(book.id, id, book.id === id);
   return book.id === Number(id);
});

// books.forEach(book => {
//   console.log(
//     book.id,
//     typeof book.id,
//     id,
//     typeof id,
//     book.id === id
//   );
// });

console.log("Found:", book);
  if(!book)return <h2>Book nahi aarahe api se </h2>
    // console.log(book) // this will show us which page is presentlyy rendere


  return (
    <div>
    <div className="flex flex-col bg-gray-600 ml-3">BookDetailPage</div>
    <BookDetails book={book} />
    </div>
  )
}

export default BookDetailPage;