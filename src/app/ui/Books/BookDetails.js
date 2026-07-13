
import BuyOrRent from "./BuyRent.js";



const BookDetails = ({book}) => {
  return (
    <div>
        <h1>Book Title will be here</h1>
        <p>book image should be ender here</p>
         <p>Book author </p>
         <p>dscription</p>
         <p>genre - book - pages - book are in stock</p>
          <p>if there is books in stock ? show stock : not in stoch</p>
         <BuyOrRent book={book}/>
    </div>
  )
}

export default BookDetails;