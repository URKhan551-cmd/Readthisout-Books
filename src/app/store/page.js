import React from "react";
import { fetchBooks } from "../lib/bookApi/booksApi.js";
import BookShelf from "../ui/Books/BookShelf";


const BookListPage = async () => {
  const {books, pagination} = await fetchBooks(1, 10);
   console.log(books);
    

  return (
  <div className="flex flex-cols-3 gap-1 bg-black-400 text-gray-500 ml-4"> 
    BookListPage
    <h1>List of Books</h1>
    <BookShelf books={books} pagination={pagination}/>
    </div>
  )
};

export default BookListPage;



  

