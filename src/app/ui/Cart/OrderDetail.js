'use client'
import {useContext} from "react";
import {StoreContext} from "@/app/context"


const OrderDetail = () => {
    const {cartData} = useContext(StoreContext);
    console.log(cartData);

    const bookToBuy = cartData.filter(book => {
        return book.type === "Buy";
});

const bookToRent = cartData.filter(book => {
    return book.type === "Rent";
})

const priceToBuy = bookToBuy.reduce((accumulator, book) => accumulator + book.price, 0);
const priceToRent = bookToRent.reduce((accumulator, book) => accumulator + book.price/10, 0);


  return (
    <div className="w-full rounded border border-dashed border-fuchsia justify-center items-center p-4 m-2 bg-gray-200">
        <h2 className="text-2xl pb-4 m-3 text-fuchsia-500">Order Detail:</h2>
        {
        <ul>
            <li>Buying: {bookToBuy.length} book at {priceToBuy} INR</li>
            <li>Renting: {bookToRent.length} book at {priceToRent} INR</li>
        </ul>
}
   <p className="text-xl ml-4 ">Included per delivery charges:<span>10 AED</span></p>
    </div>
  )
}

export default OrderDetail