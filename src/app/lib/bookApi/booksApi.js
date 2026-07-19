
const url = "https://api.freeapi.app/api/v1/public";
  
   
export const fetchBooks = async (page = 1, limit = 10) => {
        try {
            const urlParam = `${url}/books?page=${page}&limit=${limit}&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`;
            const response = await fetch(urlParam, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                next: {revalidate: 3600} // this will cache data for an hour 
            });
              if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`);
               } 
        
            
            const jsonData = await response.json();
            return {
               books: jsonData.data.data,
               pagination:{ 
                page: jsonData.data.page,
               limit: jsonData.data.limit,
               totalPages: jsonData.data.totalPages,
               totalItems: jsonData.data.totalItems,
               hasNext: jsonData.data.nextPage,
               hasPrevious: jsonData.data.previousPage,
               },  
            };
            } catch (error) {
            console.error(`[Books Service ERROR]: Failed to fetch books: ${error}`)
            throw error;
        }
    }

  // usability  
  // app/books/page.js
// import { fetchBooks } from '@/services/books';

// export default async function BooksPage() {
//   const books = await fetchBooks(1, 10);

//   return (
//     <div>
//       {books.map(book => <p key={book.id}>{book.volumeInfo?.title}</p>)}
//     </div>
//   );
// }
