"use client"
import {ShoppingBasket} from "lucide-react";
import {toast} from "react-toastify";
import {useContext} from "react";
import {StoreContext} from "@/app/context";


const BuyOrRent = ({info}) => {
    const {cartData, setCart} = useContext(StoreContext);


const handleClick = (e, reason) =>{
  e.preventDefault();
  console.log(info);
  const newData = {...info, type: reason};

  setCart([...cartData, newData]);

   toast.success(`Added ${newData.title} to the cart`, {
    autoClose: 2000,
    position: "top-right",
   }
   );
};
    return (
        <div className="flex flex-row justify-between items-center gap-3 rounded-lg p-2 m-2">
            <button className="flex items-align gap-2 bg-black w-[120px] hover:bg-white hover:text-black rounded-2xl text-fuchsia-700 text-2xl m-2 p-2 border-fuchsia-600 border-dashed"
            onClick={(e) => handleClick(e, "Buy")}>
                <ShoppingBasket className="w-8 pt-2 text-fuchsia-600"/>
                Buy</button>
             <button className="flex items-align gap-2 bg-black w-[120px] hover:bg-white hover:text-black rounded-2xl text-fuchsia-700 text-2xl m-2 p-2 border-fuchsia-600 border-dashed"
             onClick={(e) => handleClick(e, "Rent")}>
                <ShoppingBasket className="w-8 pt-2 text-fuchsia-600"/>
                Rent</button>
        
        </div>
    )
}

export default BuyOrRent;
