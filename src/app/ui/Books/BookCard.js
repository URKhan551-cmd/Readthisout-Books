import Image from "next/image";
import Link from "next/link";


const BookCard = ({book}) => {
    const info = book.volumeInfo;
    const price = book.saleInfo?.listPrice; 
    const rupeesCode = book.saleInfo?.currencyCode; 

    return (
        <Link href={`/store/${book.id}`}>
        <div className="bg-black text-wihte gap-2 justify-center items-center">
            <article>
                    {/* <Image src={info.imageLinks?.thumbnail}
                alt={info.title} 
                    width={150}
                    height={220}
                loading="lazy"
                priority={false}
                size="(max-w-640px) 50vw, (max-w-1024px) 25vw, 200px"
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
               /> */}
               <h1>Here Will be an IMAGE</h1>
                <h2>{info.title}</h2>
                <p>{info.authors?.join(", ")}</p>
                <p>{info.publisher}</p>
                <p>{info.publishedDate}</p>
                {/* <p>{info.description}</p> */}
            </article>
            <span>{info.pageCount}</span>
            <span>{info.averageRating}</span>
            <span>
                      
            </span>
            {/* <p>{saleInf.saleability}</p> */}

            <span>Price: {price}</span>
            <span>Currency: {rupeesCode}</span>
            
        </div>
        </Link>
    )
} 

export default BookCard;