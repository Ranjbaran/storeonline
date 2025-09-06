"use client"
import { useStorecontext } from "../context/StoreContext";
import CartItem from "./CartItem";

type TItemCart={
    id:string;
}

function AddToCart({id}:TItemCart) {
    const{CartItems,handelIncreaseProduct}=useStorecontext();
   
   
    return ( 
        <>
            <div className="mt-3">
              <button 
              onClick={()=>handelIncreaseProduct(parseInt(id))}
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                +
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                -
              </button>
            </div>
        </>
     );
}

export default AddToCart;