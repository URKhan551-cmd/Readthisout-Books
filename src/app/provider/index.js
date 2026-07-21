'use client'

import {useState} from "react";
import {StoreContext} from "../context";


export default function StoreProvider({children}){

const [cartData, setCart] = useState([]);

    return (
     <StoreContext.Provider value={{cartData, setCart}}>
        {children}
     </StoreContext.Provider>
    )
}