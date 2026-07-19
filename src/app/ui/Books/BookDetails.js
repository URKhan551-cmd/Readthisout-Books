
import BuyOrRent from "./BuyRent.js";

import BookCard from "./BookCard"

const BookDetails = ({book}) => {
   
    // console.log(id);
    // if(!book){
    //   return (<p>Loading ... book details...</p>)
    // }
console.log(book);
if(!book) return <h2>Loading...</h2>
let info = book.volumeInfo;


  return (
    <div className="grid bg-gray-600 text-white p-3 m-3 space-y-2 rounded-md w-[400px] overflow-hidden">
        <h1 className="text-fuchsia-600 text-xl">{info.title ? info.title : "Book data nahi ha tadaaaaaa errroe"}</h1>
        <p>book image should be ender here</p>
         <p className="text-fuchsia-600 text-lg border-dashed rounded-md">By {info.authors[0] ? info.authors[0] : "bilkul tabah dee"} </p>
         <div className="border-dashed border-fuchsia-600 rounded-md">description
           <p>{info.description}</p>
         </div>
         <p>genre - book - pages - book are in stock</p>
          <p>if there is books in stock ? show stock : not in stoch</p>
         <BuyOrRent book={info}/>
    </div>
  )
}

export default BookDetails;