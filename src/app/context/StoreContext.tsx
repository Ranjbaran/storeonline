"use client";
import React, { Children, useContext, useState } from "react";
import { createContext } from "react";
import CartItem from "./../components/CartItem";
import { count } from "console";

type TstorecontexProps = {
  children: React.ReactNode;
};

type TCartItem = {//نوع هر آیتم سبد خرید
  id: number;
  count: number;
};
type Tstorecontext = {
  CartItems: TCartItem[];//کانتکس باید کل آرایه های سبد خرید را دشاته باشد
  handelIncreaseProduct:(id:number)=>void//تابعی که بتونه یه محصول رو به سبد اضافه کنه یا تعدادش رو زیاد کنه
};
const storecontext = createContext({} as Tstorecontext);

export const useStorecontext = () => {
  //یک کاستوم هوک تعریف کردیم برای کانتکس
  return useContext(storecontext);
};

export function StoreContextProvider({ children }: TstorecontexProps) {
    
  const [CartItems, setCartItem] = useState<TCartItem[]>([]);


  const handelIncreaseProduct=(id:number)=> {
 
    setCartItem((previous) => {
            
      const isNotExist = previous.find((item) => item.id == id);
      if (!isNotExist) 
        return [...previous, { id: id, count: 1 }];
      
      
      return  previous.map(item => {
          if (item.id == id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } 
    
            return item;
          
        });
      

 
    });
  };

  return (
    <storecontext.Provider value={{ CartItems ,handelIncreaseProduct}}>
      {children}
    </storecontext.Provider>
  );
}
