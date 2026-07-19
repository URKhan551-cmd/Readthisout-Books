import BookCard from "./BookCard.js";


const BookShelf = ({books, pagination}) => {
   return (
    <>
    <div className="flex flex-rows-4 md:flex-cols-2 p-3 m-4 gap-2">
        <h1>Books</h1>

<p>Page {pagination.page} of {pagination.totalPages}</p>
    {
        books.map(book => {
            return (
                   <BookCard key={book.id} book={book} />
            )
        })
    }
    </div>
    </>
   )
}

export default BookShelf;