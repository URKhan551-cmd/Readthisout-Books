import BookCard from "./BookCard.js";


const BookShelf = ({book, pagination}) => {
   return (
    <>
    <div>
        <h1>Books</h1>

<p>Page {pagination.page} of {pagination.totalPages}</p>
    {
        book.map(book => {
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