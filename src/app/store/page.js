import React from "react";
import { fetchBooks } from "../lib/bookApi/booksApi.js";
import BookShelf from "../ui/Books/BookShelf";


const BookListPage = async () => {
  const {book, pagination} = await fetchBooks(1, 10);
   console.log(book);


  return <div> 
    BookListPage
    <h1>List of Books</h1>
    <BookShelf book={book} pagination={pagination}/>
    </div>;
};

export default BookListPage;
